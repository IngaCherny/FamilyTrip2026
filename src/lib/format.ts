import type { FamilyCost, Party, Price, Season, Weekday } from "./types";

export function formatDate(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", opts ?? { day: "numeric", month: "long" });
}

export function formatShort(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

/**
 * Resolve a pinned photo. Accepts either a full URL or a Wikimedia Commons file
 * name ("Foo bar.jpg"), which is turned into a stable Special:FilePath link so
 * you never have to dig out the hashed upload path. Commons redirects to
 * upload.wikimedia.org, which the service worker already caches for offline.
 */
export function imageUrl(image?: string, width = 1200): string | undefined {
  if (!image) return undefined;
  if (/^https?:\/\//i.test(image)) return image;
  const file = image.replace(/^File:/i, "");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

const EUR = (n: number) => `€${Number.isInteger(n) ? n : n.toFixed(2)}`;

/** Render a Price as the one-line string shown on a card. */
export function formatPrice(p?: Price): string | null {
  if (!p) return null;
  const parts: string[] = [];
  const perPerson = [
    p.adult != null ? `~${EUR(p.adult)} adult` : null,
    p.child != null ? `${EUR(p.child)} child` : null,
  ].filter(Boolean);

  if (perPerson.length) parts.push(perPerson.join(" / "));
  if (p.perCar != null) parts.push(`~${EUR(p.perCar)} per car`);
  if (!parts.length && p.free) parts.push("Free");

  let out = parts.join(" · ");
  if (p.covers) out += ` (${p.covers})`;
  if (p.free && parts.length && !parts.includes("Free")) out = `Free entry · ${out}`;
  if (p.note) out = out ? `${out}. ${p.note}` : p.note;
  return out || null;
}

/**
 * What the whole party pays, or null when the price has no figures to add up.
 * Children below the price's own free-entry age are excluded, and per-car costs
 * are counted once because we travel in one car.
 */
export function familyCost(p: Price | undefined, party: Party): FamilyCost | null {
  if (!p) return null;
  if (p.adult == null && p.child == null && p.perCar == null) {
    return p.free ? { total: 0, payingChildren: 0, freeAges: [...party.childAges] } : null;
  }
  const freeUnder = p.freeUnder ?? party.defaultFreeUnder;
  // Only per-child fares can exempt a child. A per-car toll or an adult-only
  // figure gets nobody in "free", so do not claim it does.
  const freeAges = p.child == null ? [] : party.childAges.filter((age) => age < freeUnder);
  const payingChildren = party.childAges.length - freeAges.length;
  return {
    total: (p.adult ?? 0) * party.adults + (p.child ?? 0) * payingChildren + (p.perCar ?? 0),
    payingChildren,
    freeAges,
  };
}

/** Format a family total for display. */
export function formatFamilyCost(cost: FamilyCost | null): string | null {
  if (!cost) return null;
  return cost.total === 0 ? "Free for all of us" : `~${EUR(Math.round(cost.total))} for the family`;
}

/** Say which children get in free, e.g. "ages 2 & 6 free". */
export function freeChildrenNote(cost: FamilyCost | null): string | null {
  if (!cost?.freeAges.length || cost.total === 0) return null;
  const ages = cost.freeAges;
  const list =
    ages.length === 1
      ? `age ${ages[0]}`
      : `ages ${ages.slice(0, -1).join(", ")} & ${ages[ages.length - 1]}`;
  return `${list} free`;
}

const WEEKDAY_NAMES = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];

/** Name the closed days, e.g. "Closed Wednesdays". */
export function closedLabel(days?: Weekday[]): string | null {
  if (!days?.length) return null;
  return `Closed ${days.map((d) => WEEKDAY_NAMES[d]).join(" & ")}`;
}

/** True when the given ISO date falls on one of the closed weekdays. */
export function isClosedOnDate(days: Weekday[] | undefined, iso: string): boolean {
  if (!days?.length) return false;
  return days.includes(new Date(iso + "T00:00:00").getDay() as Weekday);
}

/** True when the ISO date sits outside the operating season. */
export function isOutOfSeason(season: Season | undefined, iso: string): boolean {
  if (!season) return false;
  const md = iso.slice(5); // "MM-DD"
  // A season that does not wrap the new year is a simple range check.
  return season.from <= season.to
    ? md < season.from || md > season.to
    : md < season.from && md > season.to;
}

/** Straight-line distance in km between two lat/lng points (haversine). */
export function distanceKm(a: [number, number], b: [number, number]): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Human distance: "800 m" or "4.2 km". */
export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

/** Build a Google Maps driving-directions deep link between two places. */
export function directionsUrl(origin: string, destination: string): string {
  return (
    "https://www.google.com/maps/dir/?api=1" +
    `&origin=${encodeURIComponent(origin)}` +
    `&destination=${encodeURIComponent(destination)}` +
    "&travelmode=driving"
  );
}

/** Build Google Maps + Waze deep links for a coordinate. */
export function mapLinks([lat, lng]: [number, number], label?: string) {
  const q = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return {
    google: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}${
      label ? `&query_place_id=${q}` : ""
    }`,
    waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
  };
}

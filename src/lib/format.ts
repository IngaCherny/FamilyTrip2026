import type { Price, Season, Weekday } from "./types";

export function formatDate(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", opts ?? { day: "numeric", month: "long" });
}

export function formatShort(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
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
 * Per-car costs are counted once; we travel in one car.
 */
export function familyCost(p: Price | undefined, party: { adults: number; children: number }): number | null {
  if (!p) return null;
  if (p.adult == null && p.child == null && p.perCar == null) return p.free ? 0 : null;
  return (
    (p.adult ?? 0) * party.adults + (p.child ?? 0) * party.children + (p.perCar ?? 0)
  );
}

/** Format a family total for display. */
export function formatFamilyCost(total: number | null): string | null {
  if (total == null) return null;
  return total === 0 ? "Free for all of us" : `~${EUR(Math.round(total))} for the family`;
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

export function formatDate(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", opts ?? { day: "numeric", month: "long" });
}

export function formatShort(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
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

import { directionsUrl, mapLinks } from "../lib/format";
import type { Mappable } from "../lib/types";

/** Build the query string Google Maps understands for a place. */
export function placeQuery(p: Mappable): string {
  if (p.mapQuery) return p.mapQuery;
  if (p.coords) return `${p.coords[0]},${p.coords[1]}`;
  return "";
}

/**
 * Keyless Google Maps embed. Uses the public `output=embed` endpoint so no API
 * key is needed. Mount it only when a card is open to keep the page light.
 */
export function GoogleMapEmbed({ query, height = 200 }: { query: string; height?: number }) {
  if (!query) return null;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&hl=en&output=embed`;
  return (
    <iframe
      title={`Map of ${query}`}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full rounded-xl border border-stone-200"
      style={{ height }}
      allowFullScreen
    />
  );
}

/**
 * Map + driving buttons for a destination, optionally with a driving origin.
 * Shows the embedded map plus a one-tap "Drive here" (Google) and Waze link.
 */
export function MapWithDirections({
  destination,
  origin,
  coords,
  height = 200,
}: {
  destination: string;
  origin?: string;
  coords?: [number, number];
  height?: number;
}) {
  const gDir = origin
    ? directionsUrl(origin, destination)
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  const waze = coords
    ? mapLinks(coords).waze
    : `https://waze.com/ul?q=${encodeURIComponent(destination)}&navigate=yes`;

  return (
    <div className="space-y-2">
      <GoogleMapEmbed query={destination} height={height} />
      <div className="flex flex-wrap gap-2">
        <a
          href={gDir}
          target="_blank"
          rel="noreferrer"
          className="tap flex-1 rounded-xl bg-glacier-600 px-3 text-sm font-semibold text-white hover:bg-glacier-700"
        >
          {origin ? "Drive here" : "Open in Maps"}
        </a>
        <a
          href={waze}
          target="_blank"
          rel="noreferrer"
          className="tap rounded-xl bg-white px-3 text-sm font-medium text-glacier-700 ring-1 ring-stone-200 hover:bg-stone-50"
        >
          Waze
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`}
          target="_blank"
          rel="noreferrer"
          className="tap rounded-xl bg-white px-3 text-sm font-medium text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"
        >
          Place
        </a>
      </div>
    </div>
  );
}

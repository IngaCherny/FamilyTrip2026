import { useState } from "react";
import { Map as MapIcon, Navigation } from "lucide-react";
import { directionsUrl, mapLinks } from "../lib/format";
import { useLang } from "../lib/i18n";
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
  onDark = false,
}: {
  destination: string;
  origin?: string;
  coords?: [number, number];
  height?: number;
  /** Style controls for the dark detail panel. */
  onDark?: boolean;
}) {
  const { tc } = useLang();
  // The embed is a Google Maps iframe that scrolls itself into view as it
  // loads, which yanks the page when a card opens with it already mounted.
  // So load it only when the user taps for it.
  const [showMap, setShowMap] = useState(false);

  const gDir = origin
    ? directionsUrl(origin, destination)
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  const waze = coords
    ? mapLinks(coords).waze
    : `https://waze.com/ul?q=${encodeURIComponent(destination)}&navigate=yes`;

  return (
    <div className="space-y-2">
      {showMap ? (
        <GoogleMapEmbed query={destination} height={height} />
      ) : (
        <button
          onClick={() => setShowMap(true)}
          className={`tap flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-3 text-sm font-medium ${
            onDark
              ? "border-white/20 bg-white/[0.05] text-[#EDE8DC]/85 hover:bg-white/10"
              : "border-stone-300 bg-stone-50 text-stone-600 hover:bg-stone-100"
          }`}
          style={{ minHeight: 44 }}
        >
          <MapIcon size={15} strokeWidth={1.8} /> {tc("Show map")}
        </button>
      )}
      <div className="flex flex-wrap gap-2">
        <a
          href={gDir}
          target="_blank"
          rel="noreferrer"
          className={`tap flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-semibold ${
            onDark ? "bg-[#D9A441] text-[#231F16] hover:bg-[#e3b45a]" : "bg-glacier-600 text-white hover:bg-glacier-700"
          }`}
        >
          <Navigation size={14} strokeWidth={2} />
          {origin ? tc("Drive here") : tc("Open in Maps")}
        </a>
        <a
          href={waze}
          target="_blank"
          rel="noreferrer"
          className={`tap rounded-xl px-3 text-sm font-medium ${
            onDark
              ? "bg-white/[0.06] text-[#EDE8DC] ring-1 ring-white/15 hover:bg-white/10"
              : "bg-white text-glacier-700 ring-1 ring-stone-200 hover:bg-stone-50"
          }`}
        >
          {tc("Waze")}
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`}
          target="_blank"
          rel="noreferrer"
          className={`tap rounded-xl px-3 text-sm font-medium ${
            onDark
              ? "bg-white/[0.06] text-[#EDE8DC]/80 ring-1 ring-white/15 hover:bg-white/10"
              : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"
          }`}
        >
          {tc("Place")}
        </a>
      </div>
    </div>
  );
}

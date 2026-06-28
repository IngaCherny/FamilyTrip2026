import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { ExternalLink, Navigation } from "lucide-react";
import Section from "./Section";
import { ATTRACTIONS } from "../data/attractions";
import { STAYS } from "../data/stays";
import { POI_META } from "../lib/tags";
import { mapLinks } from "../lib/format";
import type { PoiCategory } from "../lib/types";

function pinIcon(color: string, isStay = false) {
  const size = isStay ? 30 : 24;
  const inner = isStay
    ? `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">★</div>`
    : "";
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:${size}px;height:${size}px;">
      <div style="width:${size}px;height:${size}px;background:${color};border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
      <div style="position:absolute;inset:0;transform:rotate(0);">${inner}</div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

const CATEGORIES: { id: PoiCategory; label: string }[] = [
  { id: "sight", label: "Sights" },
  { id: "hike", label: "Hikes" },
  { id: "lake", label: "Lakes" },
  { id: "spa", label: "Spa" },
  { id: "kids", label: "Kids" },
  { id: "town", label: "Towns" },
];

export default function TripMap() {
  const [active, setActive] = useState<Set<PoiCategory>>(new Set());

  const toggle = (c: PoiCategory) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });

  const pois = useMemo(
    () => (active.size === 0 ? ATTRACTIONS : ATTRACTIONS.filter((a) => active.has(a.category))),
    [active]
  );

  const route = STAYS.map((s) => s.coords);

  return (
    <Section
      id="map"
      kicker="Where We Roam"
      title="The Map"
      intro="Our four bases (★) and the places worth the detour. Filter by what you fancy, then open Google Maps or Waze to navigate."
    >
      <div className="no-scrollbar -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {CATEGORIES.map((c) => {
          const on = active.has(c.id);
          const Icon = POI_META[c.id].icon;
          return (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className={`tap whitespace-nowrap gap-1.5 rounded-full px-3.5 text-sm font-medium ${
                on ? "text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
              }`}
              style={on ? { background: POI_META[c.id].color } : undefined}
            >
              <Icon size={14} /> {c.label}
            </button>
          );
        })}
      </div>

      <div className="card-paper overflow-hidden">
        <MapContainer
          center={[47.2, 11.5]}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: "70vh", minHeight: 420, width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          <Polyline positions={route} pathOptions={{ color: "#1f7f8d", weight: 3, dashArray: "6 8", opacity: 0.7 }} />

          {STAYS.map((s) => (
            <Marker key={s.id} position={s.coords} icon={pinIcon("#1f7f8d", true)}>
              <Popup>
                <strong>{s.name}</strong>
                <br />
                {s.town}, {s.country}
                <br />
                <span style={{ color: "#6b6253" }}>{s.nights} nights</span>
                <br />
                <PopupLinks coords={s.coords} label={s.name} />
              </Popup>
            </Marker>
          ))}

          {pois.map((a) => (
            <Marker key={a.id} position={a.coords} icon={pinIcon(POI_META[a.category].color)}>
              <Popup>
                <strong>{a.name}</strong>
                <br />
                <span style={{ color: "#6b6253" }}>{POI_META[a.category].label}</span>
                <br />
                {a.description}
                <br />
                <PopupLinks coords={a.coords} label={a.name} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Section>
  );
}

function PopupLinks({ coords, label }: { coords: [number, number]; label: string }) {
  const links = mapLinks(coords, label);
  return (
    <span style={{ display: "inline-flex", gap: 12, marginTop: 6 }}>
      <a href={links.google} target="_blank" rel="noreferrer" style={{ color: "#1f7f8d", fontWeight: 600 }}>
        <ExternalLink size={12} style={{ display: "inline", marginRight: 2 }} /> Maps
      </a>
      <a href={links.waze} target="_blank" rel="noreferrer" style={{ color: "#1f7f8d", fontWeight: 600 }}>
        <Navigation size={12} style={{ display: "inline", marginRight: 2 }} /> Waze
      </a>
    </span>
  );
}

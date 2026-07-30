import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "./Section";
import SmartImage from "./SmartImage";
import Gallery from "./Gallery";
import SegmentedControl from "./SegmentedControl";
import { ATTRACTIONS } from "../data/attractions";
import { DESTINATIONS, PARTY, PRICES_CHECKED } from "../data/trip";
import { POI_META } from "../lib/tags";
import {
  closedLabel,
  distanceKm,
  familyCost,
  formatDistance,
  formatFamilyCost,
  formatPrice,
  freeChildrenNote,
  imageUrl,
  mapLinks,
} from "../lib/format";
import type { Attraction } from "../lib/types";

/** The constraints that actually decide a day out with a 2 year old. */
const FLAGS = [
  { id: "buggy", label: "Buggy-friendly", test: (a: Attraction) => a.buggy === true },
  { id: "indoor", label: "Works in rain", test: (a: Attraction) => a.indoor === true },
  { id: "free", label: "Free", test: (a: Attraction) => familyCost(a.price, PARTY)?.total === 0 },
] as const;

type FlagId = (typeof FLAGS)[number]["id"];

export default function Places() {
  const [region, setRegion] = useState<string>("all");
  const [active, setActive] = useState<FlagId[]>([]);
  const [here, setHere] = useState<[number, number] | null>(null);
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: FlagId) =>
    setActive((cur) => (cur.includes(id) ? cur.filter((f) => f !== id) : [...cur, id]));

  const toggleCard = (id: string) =>
    setOpenIds((cur) => {
      const next = new Set(cur);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const findMe = () => {
    if (!("geolocation" in navigator)) {
      setGeoError("Location isn't available on this device.");
      return;
    }
    setLocating(true);
    setGeoError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setHere([pos.coords.latitude, pos.coords.longitude]);
        setRegion("all"); // distance beats region once we know where you are
        setLocating(false);
      },
      () => {
        setGeoError("Couldn't get your location. Check location permission.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const places = useMemo(() => {
    const byRegion = here || region === "all" ? ATTRACTIONS : ATTRACTIONS.filter((a) => a.region === region);
    const filtered = active.length
      ? byRegion.filter((a) => active.every((id) => FLAGS.find((f) => f.id === id)!.test(a)))
      : byRegion.slice();
    if (here) {
      return filtered
        .map((a) => ({ a, d: distanceKm(here, a.coords) }))
        .sort((x, y) => x.d - y.d)
        .map((x) => x.a);
    }
    return filtered;
  }, [region, active, here]);

  return (
    <Section
      id="places"
      kicker="Worth the Detour"
      title="Places to See"
      intro="Lakes, hikes, towns and rainy-day backups across the whole route. Filter by what the day allows."
    >
      <SegmentedControl
        segments={[{ id: "all", label: "All regions" }, ...DESTINATIONS.map((r) => ({ id: r.id, label: r.name }))]}
        value={region}
        onChange={setRegion}
        layoutId="placesRegion"
        className="mb-3"
      />

      <div className="no-scrollbar -mx-4 mb-4 overflow-x-auto px-4 pb-1">
        <div className="glass inline-flex items-center gap-1 rounded-full p-1">
          <button
            onClick={here ? () => setHere(null) : findMe}
            aria-pressed={!!here}
            className={`tap whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              here ? "bg-glacier-600 text-white shadow-sm" : "text-glacier-700 hover:text-glacier-800"
            }`}
          >
            {locating ? "Locating…" : here ? "✓ Nearest first" : "📍 Near me"}
          </button>
          {FLAGS.map((f) => (
            <button
              key={f.id}
              onClick={() => toggle(f.id)}
              aria-pressed={active.includes(f.id)}
              className={`tap whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active.includes(f.id)
                  ? "bg-meadow-600 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {f.label}
            </button>
          ))}
          {active.length > 0 && (
            <button
              onClick={() => setActive([])}
              className="tap whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-stone-500 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {geoError && <p className="mb-4 text-sm text-sunset-700">{geoError}</p>}
      {here && (
        <p className="mb-4 text-sm text-stone-500">
          Sorted by distance from you, across all regions. Tap “Nearest first” again to switch back.
        </p>
      )}

      {places.length === 0 ? (
        <p className="rounded-xl bg-stone-50 p-6 text-center text-sm text-stone-500">
          Nothing matches those filters here. Try clearing one, or switch region.
        </p>
      ) : (
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((a, i) => {
            const meta = POI_META[a.category];
            const links = mapLinks(a.coords, a.name);
            const priceText = formatPrice(a.price);
            const cost = familyCost(a.price, PARTY);
            const total = formatFamilyCost(cost);
            const freeNote = freeChildrenNote(cost);
            const closed = closedLabel(a.closedOn);
            const open = openIds.has(a.id);
            const overlay = (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
                <span
                  className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm"
                  style={{ background: meta.color }}
                >
                  {meta.label}
                </span>
                {here && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {formatDistance(distanceKm(here, a.coords))} away
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
                  <div className="glass-cap max-w-[80%] rounded-xl px-3 py-2">
                    <h3 className="font-serif text-base font-bold leading-snug text-white sm:text-lg">{a.name}</h3>
                    {total && (
                      <span className="mt-0.5 block text-[11px] font-semibold text-white/90">{total}</span>
                    )}
                  </div>
                  <span className="glass-cap flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </span>
                </div>
              </>
            );
            return (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200/70"
              >
                {a.images && a.images.length > 1 ? (
                  <Gallery
                    images={a.images}
                    alt={a.name}
                    heightClass="h-52"
                    onTap={() => toggleCard(a.id)}
                    overlay={overlay}
                  />
                ) : (
                  <button onClick={() => toggleCard(a.id)} className="block w-full text-left">
                    <SmartImage src={imageUrl(a.image, 800)} wiki={a.wiki} alt={a.name} big className="h-52 w-full">
                      {overlay}
                    </SmartImage>
                  </button>
                )}

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-stone-100 p-4">
                        <p className="text-sm text-stone-600">{a.description}</p>

                        <div className="flex flex-wrap gap-1.5">
                          {a.buggy && (
                            <span className="rounded-full bg-meadow-100 px-2.5 py-0.5 text-xs font-medium text-meadow-700">
                              Buggy-friendly
                            </span>
                          )}
                          {a.indoor && (
                            <span className="rounded-full bg-glacier-50 px-2.5 py-0.5 text-xs font-medium text-glacier-700">
                              Works in rain
                            </span>
                          )}
                          {a.good_for.map((g) => (
                            <span key={g} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600">
                              {g}
                            </span>
                          ))}
                        </div>

                        {(closed || a.season) && (
                          <p className="rounded-lg bg-sunset-200/40 px-2.5 py-1.5 text-xs font-medium text-stone-700 ring-1 ring-sunset-200">
                            {[closed, a.season && `${a.season.label ?? "Open"} ${a.season.from} to ${a.season.to}`]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}

                        {priceText && (
                          <p className="text-sm text-stone-700">
                            <span className="font-semibold text-meadow-700">Price: </span>
                            {priceText}
                            {total && (
                              <span className="block text-xs text-stone-500">
                                {total}
                                {freeNote && ` — ${freeNote}`} ({PRICES_CHECKED})
                              </span>
                            )}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-4 border-t border-stone-100 pt-3 text-sm font-medium text-glacier-600">
                          {a.link && (
                            <a href={a.link} target="_blank" rel="noreferrer" className="font-semibold">
                              Official site
                            </a>
                          )}
                          <a href={links.google} target="_blank" rel="noreferrer">
                            Maps
                          </a>
                          <a href={links.waze} target="_blank" rel="noreferrer">
                            Waze
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      )}
    </Section>
  );
}

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ATTRACTIONS } from "../data/attractions";
import { DESTINATIONS, PARTY, PRICES_CHECKED } from "../data/trip";
import { POI_META } from "../lib/tags";
import {
  closedLabel,
  familyCost,
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

  const toggle = (id: FlagId) =>
    setActive((cur) => (cur.includes(id) ? cur.filter((f) => f !== id) : [...cur, id]));

  const places = useMemo(() => {
    const byRegion = region === "all" ? ATTRACTIONS : ATTRACTIONS.filter((a) => a.region === region);
    if (!active.length) return byRegion;
    return byRegion.filter((a) =>
      active.every((id) => FLAGS.find((f) => f.id === id)!.test(a))
    );
  }, [region, active]);

  return (
    <Section
      id="places"
      kicker="Worth the Detour"
      title="Places to See"
      intro="Lakes, hikes, towns and rainy-day backups across the whole route. Filter by what the day allows."
    >
      <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1">
        <button
          onClick={() => setRegion("all")}
          className={`tap whitespace-nowrap rounded-full px-4 text-sm font-medium ${
            region === "all" ? "bg-glacier-600 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
          }`}
        >
          All regions
        </button>
        {DESTINATIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegion(r.id)}
            className={`tap whitespace-nowrap rounded-full px-4 text-sm font-medium ${
              region === r.id ? "bg-glacier-600 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div className="no-scrollbar -mx-4 mb-6 flex items-center gap-2 overflow-x-auto px-4 pb-1">
        {FLAGS.map((f) => (
          <button
            key={f.id}
            onClick={() => toggle(f.id)}
            aria-pressed={active.includes(f.id)}
            className={`tap whitespace-nowrap rounded-full px-3.5 text-sm font-medium ${
              active.includes(f.id)
                ? "bg-meadow-600 text-white"
                : "bg-white text-stone-600 ring-1 ring-stone-200"
            }`}
          >
            {f.label}
          </button>
        ))}
        {active.length > 0 && (
          <button onClick={() => setActive([])} className="tap whitespace-nowrap px-2 text-sm text-stone-500 underline">
            Clear
          </button>
        )}
      </div>

      {places.length === 0 ? (
        <p className="rounded-xl bg-stone-50 p-6 text-center text-sm text-stone-500">
          Nothing matches those filters here. Try clearing one, or switch region.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((a, i) => {
            const meta = POI_META[a.category];
            const links = mapLinks(a.coords, a.name);
            const priceText = formatPrice(a.price);
            const cost = familyCost(a.price, PARTY);
            const total = formatFamilyCost(cost);
            const freeNote = freeChildrenNote(cost);
            const closed = closedLabel(a.closedOn);
            return (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                className="card-paper flex flex-col overflow-hidden"
              >
                <SmartImage src={imageUrl(a.image, 800)} wiki={a.wiki} alt={a.name} overlay className="h-40 w-full">
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                    style={{ background: meta.color }}
                  >
                    {meta.label}
                  </span>
                </SmartImage>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">{a.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-stone-600">{a.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
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
                    <p className="mt-3 rounded-lg bg-sunset-200/40 px-2.5 py-1.5 text-xs font-medium text-stone-700 ring-1 ring-sunset-200">
                      {[closed, a.season && `${a.season.label ?? "Open"} ${a.season.from} to ${a.season.to}`]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}

                  {priceText && (
                    <p className="mt-3 text-sm text-stone-700">
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

                  <div className="mt-3 flex gap-4 border-t border-stone-100 pt-3 text-sm font-medium text-glacier-600">
                    <a href={links.google} target="_blank" rel="noreferrer">
                      Maps
                    </a>
                    <a href={links.waze} target="_blank" rel="noreferrer">
                      Waze
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </Section>
  );
}

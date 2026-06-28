import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ATTRACTIONS } from "../data/attractions";
import { DESTINATIONS } from "../data/trip";
import { POI_META } from "../lib/tags";
import { mapLinks } from "../lib/format";

export default function Places() {
  const [region, setRegion] = useState<string>("all");

  const places = useMemo(
    () => (region === "all" ? ATTRACTIONS : ATTRACTIONS.filter((a) => a.region === region)),
    [region]
  );

  return (
    <Section
      id="places"
      kicker="Worth the Detour"
      title="Places to See"
      intro="Lakes, hikes, towns and rainy-day backups across the whole route."
    >
      <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1">
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
            {r.flag} {r.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((a, i) => {
          const meta = POI_META[a.category];
          const links = mapLinks(a.coords, a.name);
          return (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
              className="card-paper flex flex-col overflow-hidden"
            >
              <SmartImage wiki={a.wiki} alt={a.name} overlay className="h-40 w-full">
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
                {a.good_for.map((g) => (
                  <span key={g} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600">
                    {g}
                  </span>
                ))}
              </div>
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
    </Section>
  );
}

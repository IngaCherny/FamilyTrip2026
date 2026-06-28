import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Route, Lightbulb, MapPin } from "lucide-react";
import Section from "./Section";
import { ITINERARY } from "../data/itinerary";
import { REGIONS, regionById } from "../data/trip";
import { attractionById } from "../data/attractions";
import { TAG_META } from "../lib/tags";
import { formatShort } from "../lib/format";
import type { Day } from "../lib/types";

function DayCard({ day, index, open, onToggle }: { day: Day; index: number; open: boolean; onToggle: () => void }) {
  const region = regionById(day.region);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className="card-paper overflow-hidden"
    >
      <button onClick={onToggle} className="flex w-full items-center gap-4 p-4 text-left">
        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-glacier-50 text-glacier-700">
          <span className="text-[10px] font-semibold uppercase tracking-wide">Day</span>
          <span className="font-serif text-2xl font-bold leading-none">{index + 1}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span>{day.weekday}, {formatShort(day.date)}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">{region.flag} {region.name}</span>
          </div>
          <h3 className="truncate font-serif text-lg font-bold text-stone-900">{day.title}</h3>
          {day.subtitle && <p className="truncate text-sm text-stone-500">{day.subtitle}</p>}
        </div>
        <ChevronDown size={20} className={`shrink-0 text-stone-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-stone-100 p-4">
              {day.drive && (
                <div className="flex gap-3 rounded-xl bg-stone-100 p-3 text-sm">
                  <Route size={18} className="mt-0.5 shrink-0 text-stone-500" />
                  <div>
                    <p className="font-semibold text-stone-800">
                      {day.drive.from} → {day.drive.to}
                    </p>
                    <p className="text-stone-600">
                      {day.drive.duration} · {day.drive.distance}
                    </p>
                    {day.drive.note && <p className="mt-1 text-stone-500">{day.drive.note}</p>}
                  </div>
                </div>
              )}

              <ol className="space-y-3">
                {day.activities.map((a, i) => {
                  const tag = a.tag ? TAG_META[a.tag] : null;
                  const poi = a.attractionId ? attractionById(a.attractionId) : undefined;
                  const TagIcon = tag?.icon;
                  return (
                    <li key={i} className="flex gap-3">
                      <div className="flex w-16 shrink-0 flex-col items-end pt-0.5 text-right">
                        {a.time && <span className="text-xs font-semibold text-glacier-600">{a.time}</span>}
                      </div>
                      <div className="relative flex-1 border-l border-stone-200 pb-1 pl-4">
                        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-glacier-400" />
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-stone-900">{a.title}</h4>
                          {tag && TagIcon && (
                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${tag.className}`}>
                              <TagIcon size={11} /> {tag.label}
                            </span>
                          )}
                          {a.optional && (
                            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-500">
                              optional
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-stone-600">{a.description}</p>
                        {poi && (
                          <a
                            href="#map"
                            className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-glacier-600"
                          >
                            <MapPin size={12} /> {poi.name} on the map
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>

              {day.tips && day.tips.length > 0 && (
                <div className="rounded-xl bg-meadow-50 p-3">
                  {day.tips.map((t, i) => (
                    <p key={i} className="flex gap-2 text-sm text-meadow-700">
                      <Lightbulb size={16} className="mt-0.5 shrink-0" /> {t}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Itinerary() {
  const [filter, setFilter] = useState<string>("all");
  const [openDate, setOpenDate] = useState<string | null>(ITINERARY[0]?.date ?? null);

  const days = useMemo(
    () => (filter === "all" ? ITINERARY : ITINERARY.filter((d) => d.region === filter)),
    [filter]
  );

  return (
    <Section
      id="itinerary"
      kicker="The Plan"
      title="Day by Day"
      intro="Sixteen days across the Tyrolean and Dolomite Alps. Tap any day to open its detail."
    >
      <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1">
        <button
          onClick={() => setFilter("all")}
          className={`tap whitespace-nowrap rounded-full px-4 text-sm font-medium ${
            filter === "all" ? "bg-glacier-600 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
          }`}
        >
          Whole trip
        </button>
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setFilter(r.id)}
            className={`tap whitespace-nowrap rounded-full px-4 text-sm font-medium ${
              filter === r.id ? "bg-glacier-600 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
            }`}
          >
            {r.flag} {r.name}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {days.map((day) => {
          const globalIndex = ITINERARY.indexOf(day);
          return (
            <DayCard
              key={day.date}
              day={day}
              index={globalIndex}
              open={openDate === day.date}
              onToggle={() => setOpenDate(openDate === day.date ? null : day.date)}
            />
          );
        })}
      </div>
    </Section>
  );
}

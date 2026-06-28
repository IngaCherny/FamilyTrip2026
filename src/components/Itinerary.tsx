import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Route, Lightbulb, Baby, UtensilsCrossed, Blocks } from "lucide-react";
import Section from "./Section";
import { ITINERARY } from "../data/itinerary";
import { REGIONS, regionById } from "../data/trip";
import { TAG_META } from "../lib/tags";
import { formatShort } from "../lib/format";
import { MapWithDirections, placeQuery } from "./MapEmbed";
import type { Day, DayOption, RouteStop } from "../lib/types";

/** An expandable card for a day option or a drive stop; reveals a map on open. */
function PlaceCard({
  title,
  description,
  tag,
  kidNote,
  destination,
  origin,
  coords,
  accent,
}: {
  title: string;
  description: string;
  tag?: DayOption["tag"];
  kidNote?: string;
  destination: string;
  origin?: string;
  coords?: [number, number];
  accent: "option" | "stop";
}) {
  const [open, setOpen] = useState(false);
  const meta = tag ? TAG_META[tag] : null;
  const Icon = meta?.icon;
  return (
    <div
      className={`overflow-hidden rounded-xl ring-1 ${
        accent === "option" ? "bg-meadow-50/60 ring-meadow-100" : "bg-stone-50 ring-stone-200"
      }`}
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-2.5 p-3 text-left">
        {meta && Icon && (
          <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${meta.className}`}>
            <Icon size={16} />
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-snug text-stone-900">{title}</span>
          {meta && <span className="text-xs text-stone-500">{meta.label}</span>}
        </span>
        <ChevronDown size={18} className={`shrink-0 text-stone-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-3 pb-3">
              <p className="text-sm text-stone-600">{description}</p>
              {kidNote && (
                <p className="flex gap-2 rounded-lg bg-white/70 p-2 text-sm text-meadow-700 ring-1 ring-meadow-100">
                  <Baby size={16} className="mt-0.5 shrink-0" /> {kidNote}
                </p>
              )}
              <MapWithDirections destination={destination} origin={origin} coords={coords} height={180} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            <span>
              {day.weekday}, {formatShort(day.date)}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              {region.flag} {region.name}
            </span>
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
            <div className="space-y-5 border-t border-stone-100 p-4">
              {/* Travel leg, with route map and stops along the way */}
              {day.drive && (
                <div className="rounded-xl bg-stone-100 p-3">
                  <div className="flex gap-3 text-sm">
                    <Route size={18} className="mt-0.5 shrink-0 text-stone-500" />
                    <div className="flex-1">
                      <p className="font-semibold text-stone-800">
                        {day.drive.from} to {day.drive.to}
                      </p>
                      <p className="text-stone-600">
                        {day.drive.duration} · {day.drive.distance}
                      </p>
                      {day.drive.note && <p className="mt-1 text-stone-500">{day.drive.note}</p>}
                    </div>
                  </div>
                  {day.drive.toQuery && (
                    <div className="mt-3">
                      <MapWithDirections
                        destination={day.drive.toQuery}
                        origin={day.drive.fromQuery}
                        height={180}
                      />
                    </div>
                  )}
                  {day.drive.stops && day.drive.stops.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="kicker">Stops along the way</p>
                      {day.drive.stops.map((s: RouteStop) => (
                        <PlaceCard
                          key={s.name}
                          title={s.name}
                          description={s.description}
                          tag={s.tag}
                          destination={placeQuery(s)}
                          coords={s.coords}
                          accent="stop"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* The day's choices */}
              <div className="space-y-2">
                <p className="kicker">Choose your day ({day.options.length} options)</p>
                {day.options.map((o) => (
                  <PlaceCard
                    key={o.title}
                    title={o.title}
                    description={o.description}
                    tag={o.tag}
                    kidNote={o.kidNote}
                    destination={placeQuery(o)}
                    origin={day.baseQuery}
                    coords={o.coords}
                    accent="option"
                  />
                ))}
              </div>

              {/* Family food stops */}
              {day.food && day.food.length > 0 && (
                <div className="space-y-2">
                  <p className="kicker">Family food stops</p>
                  {day.food.map((f) => (
                    <a
                      key={f.name}
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery(f))}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-2.5 rounded-xl bg-sunset-200/40 p-3 ring-1 ring-sunset-200 transition-colors hover:bg-sunset-200/60"
                    >
                      <UtensilsCrossed size={16} className="mt-0.5 shrink-0 text-sunset-600" />
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-stone-900">{f.name}</span>
                          {f.playground && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-meadow-100 px-2 py-0.5 text-[10px] font-semibold text-meadow-700">
                              <Blocks size={11} /> Playground
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-sm text-stone-600">{f.description}</span>
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {/* Tips */}
              {day.tips && day.tips.length > 0 && (
                <div className="rounded-xl bg-meadow-50 p-3">
                  {day.tips.map((t) => (
                    <p key={t} className="flex gap-2 text-sm text-meadow-700">
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
      intro="Sixteen days across the Tyrolean and Dolomite Alps. Each day offers a few kid-friendly choices. Tap a day to open it, then tap an option to see a map and one-tap driving directions."
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

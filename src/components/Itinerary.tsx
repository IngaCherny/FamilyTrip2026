import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ITINERARY } from "../data/itinerary";
import { DESTINATIONS, regionById } from "../data/trip";
import { attractionById } from "../data/attractions";
import { TAG_META } from "../lib/tags";
import { formatShort } from "../lib/format";
import { MapWithDirections, placeQuery } from "./MapEmbed";
import type { Day, DayOption, RouteStop } from "../lib/types";

/** A small CSS caret used as the open/close affordance (no icon library). */
function Caret({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="shrink-0 transition-transform duration-200"
      style={{
        width: 0,
        height: 0,
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "6px solid #a8a29e",
        transform: open ? "rotate(180deg)" : "none",
      }}
    />
  );
}

function TagChip({ tag }: { tag?: DayOption["tag"] }) {
  if (!tag) return null;
  const meta = TAG_META[tag];
  return (
    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${meta.className}`}>{meta.label}</span>
  );
}

/** An expandable card for a day option or a drive stop; reveals a map on open. */
function PlaceCard({
  title,
  description,
  tag,
  kidNote,
  destination,
  origin,
  coords,
  link,
  linkLabel,
  imageWiki,
  accent,
}: {
  title: string;
  description: string;
  tag?: DayOption["tag"];
  kidNote?: string;
  destination: string;
  origin?: string;
  coords?: [number, number];
  link?: string;
  linkLabel?: string;
  imageWiki?: string;
  accent: "option" | "stop";
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-xl ring-1 ${
        accent === "option" ? "bg-meadow-50/60 ring-meadow-100" : "bg-stone-50 ring-stone-200"
      }`}
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-3 p-2.5 text-left">
        <SmartImage wiki={imageWiki} alt={title} className="h-14 w-14 shrink-0 rounded-lg" />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-snug text-stone-900">{title}</span>
          {tag && <span className="mt-0.5 inline-block text-xs text-stone-500">{TAG_META[tag].label}</span>}
        </span>
        <Caret open={open} />
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
              <div className="flex flex-wrap items-center gap-1.5">
                <TagChip tag={tag} />
              </div>
              <p className="text-sm text-stone-600">{description}</p>
              {kidNote && (
                <p className="rounded-lg bg-white/70 p-2 text-sm text-meadow-700 ring-1 ring-meadow-100">
                  <span className="font-semibold">For the kids: </span>
                  {kidNote}
                </p>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold text-glacier-600 underline underline-offset-2"
                >
                  {linkLabel ?? "Official route"}
                </a>
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
  const regionWiki = region.wiki ?? "Munich";
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
            <span>{region.name}</span>
          </div>
          <h3 className="truncate font-serif text-lg font-bold text-stone-900">{day.title}</h3>
          {day.subtitle && <p className="truncate text-sm text-stone-500">{day.subtitle}</p>}
        </div>
        <Caret open={open} />
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
                  <div className="text-sm">
                    <p className="font-semibold text-stone-800">
                      {day.drive.from} to {day.drive.to}
                    </p>
                    <p className="text-stone-600">
                      {day.drive.duration} · {day.drive.distance}
                    </p>
                    {day.drive.note && <p className="mt-1 text-stone-500">{day.drive.note}</p>}
                  </div>
                  {day.drive.toQuery && (
                    <div className="mt-3">
                      <MapWithDirections destination={day.drive.toQuery} origin={day.drive.fromQuery} height={180} />
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
                          imageWiki={s.wiki ?? regionWiki}
                          accent="stop"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* The day's choices */}
              <div className="space-y-2">
                <p className="kicker">
                  {day.options.length > 1 ? `Choose your day (${day.options.length} options)` : "Today's plan"}
                </p>
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
                    link={o.link}
                    linkLabel={o.linkLabel}
                    imageWiki={o.wiki ?? (o.attractionId ? attractionById(o.attractionId)?.wiki : undefined) ?? regionWiki}
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
                      className="block rounded-xl bg-sunset-200/40 p-3 ring-1 ring-sunset-200 transition-colors hover:bg-sunset-200/60"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-stone-900">{f.name}</span>
                        {f.playground && (
                          <span className="rounded-full bg-meadow-100 px-2 py-0.5 text-[10px] font-semibold text-meadow-700">
                            Playground
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm text-stone-600">{f.description}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Tips */}
              {day.tips && day.tips.length > 0 && (
                <div className="rounded-xl border-l-4 border-meadow-400 bg-meadow-50 p-3">
                  {day.tips.map((t) => (
                    <p key={t} className="text-sm text-meadow-700">
                      <span className="font-semibold">Tip: </span>
                      {t}
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
        {DESTINATIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setFilter(r.id)}
            className={`tap whitespace-nowrap rounded-full px-4 text-sm font-medium ${
              filter === r.id ? "bg-glacier-600 text-white" : "bg-white text-stone-600 ring-1 ring-stone-200"
            }`}
          >
            {r.name}
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

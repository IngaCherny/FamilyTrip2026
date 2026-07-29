import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ITINERARY } from "../data/itinerary";
import { DESTINATIONS, PARTY, regionById } from "../data/trip";
import { attractionById } from "../data/attractions";
import { TAG_META } from "../lib/tags";
import {
  closedLabel,
  familyCost,
  formatFamilyCost,
  formatPrice,
  formatShort,
  freeChildrenNote,
  imageUrl,
  isClosedOnDate,
  isOutOfSeason,
} from "../lib/format";
import { MapWithDirections, placeQuery } from "./MapEmbed";
import { loadPicks, savePick } from "../lib/picks";
import type { Attraction, Day, DayOption, RouteStop } from "../lib/types";

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
  attraction,
  date,
  defaultOpen,
  hero,
  bare,
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
  /** Linked attraction, if any: supplies price, closures, flags and photo. */
  attraction?: Attraction;
  /** The day this option sits on, used to warn about closures. */
  date?: string;
  /** Start expanded (used for the day's chosen plan). */
  defaultOpen?: boolean;
  /** Show a large banner photo and stay open (used for the day's chosen plan). */
  hero?: boolean;
  /** Render only the details, no image or toggle (the day tile carries the photo). */
  bare?: boolean;
}) {
  const [open, setOpen] = useState(hero || (defaultOpen ?? false));
  const priceText = formatPrice(attraction?.price);
  const cost = familyCost(attraction?.price, PARTY);
  const total = formatFamilyCost(cost);
  const freeNote = freeChildrenNote(cost);
  const shutToday = date ? isClosedOnDate(attraction?.closedOn, date) : false;
  const offSeason = date ? isOutOfSeason(attraction?.season, date) : false;
  // An option's own link wins; otherwise fall back to the attraction's official page.
  const officialLink = link ?? attraction?.link;

  const body = (
    <div className="space-y-3 px-3 pb-3">
      {!hero && (
        <div className="flex flex-wrap items-center gap-1.5">
          <TagChip tag={tag} />
        </div>
      )}
      <p className="text-sm text-stone-600">{description}</p>
      {(shutToday || offSeason) && (
        <p className="rounded-lg bg-sunset-200/50 p-2 text-sm font-medium text-stone-800 ring-1 ring-sunset-200">
          {shutToday
            ? `${closedLabel(attraction?.closedOn)} — and this day is one of them. Check before you drive.`
            : `Runs ${attraction?.season?.from} to ${attraction?.season?.to}, so it may be shut on this date.`}
        </p>
      )}
      {priceText && (
        <p className="text-sm text-stone-700">
          <span className="font-semibold text-meadow-700">Price: </span>
          {priceText}
          {total && (
            <span className="block text-xs text-stone-500">
              {total}
              {freeNote && ` — ${freeNote}`}
            </span>
          )}
        </p>
      )}
      {kidNote && (
        <p className="rounded-lg bg-white/70 p-2 text-sm text-meadow-700 ring-1 ring-meadow-100">
          <span className="font-semibold">For the kids: </span>
          {kidNote}
        </p>
      )}
      {officialLink && (
        <a
          href={officialLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-semibold text-glacier-600 underline underline-offset-2"
        >
          {link ? linkLabel ?? "Official route" : "Official site"}
        </a>
      )}
      <MapWithDirections destination={destination} origin={origin} coords={coords} height={180} />
    </div>
  );

  // Bare layout: just the details, for when a big day tile already carries
  // the photo and title above.
  if (bare) return <div className="-mx-3">{body}</div>;

  // Hero layout: a big banner photo with the title and key facts on it,
  // visible without tapping, then the details straight below.
  if (hero) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-meadow-100">
        <SmartImage
          src={imageUrl(attraction?.image, 1000)}
          wiki={imageWiki}
          alt={title}
          big
          overlay
          className="h-52 w-full sm:h-60"
        >
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="mb-1 flex flex-wrap items-center gap-1.5">
              {tag && (
                <span className="rounded-full bg-white/25 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {TAG_META[tag].label}
                </span>
              )}
              {total && (
                <span className="rounded-full bg-meadow-500/90 px-2 py-0.5 text-[11px] font-semibold text-white">
                  {total}
                </span>
              )}
              {attraction?.buggy && (
                <span className="rounded-full bg-white/25 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                  Buggy OK
                </span>
              )}
              {(shutToday || offSeason) && (
                <span className="rounded-full bg-sunset-300 px-2 py-0.5 text-[11px] font-semibold text-stone-900">
                  {shutToday ? "Closed today" : "Out of season"}
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow">{title}</h3>
          </div>
        </SmartImage>
        <div className="pt-3">{body}</div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-xl ring-1 ${
        accent === "option" ? "bg-meadow-50/60 ring-meadow-100" : "bg-stone-50 ring-stone-200"
      }`}
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-3 p-2.5 text-left">
        <SmartImage
          src={imageUrl(attraction?.image, 200)}
          wiki={imageWiki}
          alt={title}
          className="h-14 w-14 shrink-0 rounded-lg"
        />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-snug text-stone-900">{title}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs">
            {tag && <span className="text-stone-500">{TAG_META[tag].label}</span>}
            {total && <span className="font-medium text-meadow-700">{total}</span>}
            {attraction?.buggy && <span className="text-meadow-600">Buggy OK</span>}
            {(shutToday || offSeason) && (
              <span className="rounded bg-sunset-200 px-1.5 font-semibold text-stone-800">
                {shutToday ? "Closed today" : "Out of season"}
              </span>
            )}
          </span>
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
            {body}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DayCard({
  day,
  index,
  isToday,
  open,
  onToggle,
  pick,
  onPick,
}: {
  day: Day;
  index: number;
  isToday: boolean;
  open: boolean;
  onToggle: () => void;
  /** The chosen option title for this day, if the user picked one. */
  pick?: string;
  onPick: (title: string) => void;
}) {
  const region = regionById(day.region);
  const regionWiki = region.wiki ?? "Munich";
  const [showChange, setShowChange] = useState(false);
  const [showStops, setShowStops] = useState(false);
  // The plan is the picked option, or the first as a sensible default.
  const chosen = day.options.find((o) => o.title === pick) ?? day.options[0];
  const others = day.options.filter((o) => o.title !== chosen?.title);
  const chosenAttr = chosen?.attractionId ? attractionById(chosen.attractionId) : undefined;
  const headerImg = imageUrl(chosenAttr?.image, 1200);
  const headerWiki = chosen?.wiki ?? chosenAttr?.wiki ?? regionWiki;
  const cost = familyCost(chosenAttr?.price, PARTY);
  const total = formatFamilyCost(cost);
  const shutToday = isClosedOnDate(chosenAttr?.closedOn, day.date);
  return (
    <motion.div
      id={`day-${day.date}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className={`overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ${
        isToday ? "ring-2 ring-glacier-500" : "ring-stone-200/70"
      }`}
    >
      {/* Big photo tile — the day at a glance. Tap to reveal everything. */}
      <button onClick={onToggle} className="block w-full text-left">
        <SmartImage
          src={headerImg}
          wiki={headerWiki}
          alt={chosen?.title ?? day.title}
          big
          overlay
          className="h-60 w-full sm:h-72"
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
              Day {index + 1} · {day.weekday}, {formatShort(day.date)}
            </span>
            {isToday && (
              <span className="rounded-full bg-glacier-600 px-2.5 py-1 text-[11px] font-bold text-white">Today</span>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow sm:text-3xl">
              {day.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/90 drop-shadow">
              <span>{chosen?.title ?? day.subtitle}</span>
              {total && (
                <span className="rounded-full bg-meadow-500/90 px-2 py-0.5 text-[11px] font-semibold text-white">
                  {total}
                </span>
              )}
              {shutToday && (
                <span className="rounded-full bg-sunset-300 px-2 py-0.5 text-[11px] font-semibold text-stone-900">
                  Closed today
                </span>
              )}
            </div>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/80">
              {open ? "Hide details" : "Tap for the full day"} <Caret open={open} />
            </span>
          </div>
        </SmartImage>
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
                      {/* The first stop is the planned one, so keep it in view. */}
                      <PlaceCard
                        key={day.drive.stops[0].name}
                        title={day.drive.stops[0].name}
                        description={day.drive.stops[0].description}
                        tag={day.drive.stops[0].tag}
                        destination={placeQuery(day.drive.stops[0])}
                        coords={day.drive.stops[0].coords}
                        imageWiki={day.drive.stops[0].wiki ?? regionWiki}
                        accent="stop"
                        attraction={
                          day.drive.stops[0].attractionId
                            ? attractionById(day.drive.stops[0].attractionId)
                            : undefined
                        }
                        date={day.date}
                      />
                      {day.drive.stops.length > 1 && (
                        <>
                          <button
                            onClick={() => setShowStops((v) => !v)}
                            className="tap flex w-full items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-left ring-1 ring-stone-200"
                          >
                            <span className="text-sm font-medium text-stone-600">
                              {showStops ? "Hide extra stops" : `${day.drive.stops.length - 1} more stop${day.drive.stops.length - 1 > 1 ? "s" : ""}`}
                            </span>
                            <Caret open={showStops} />
                          </button>
                          <AnimatePresence initial={false}>
                            {showStops && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-2 pt-1">
                                  {day.drive.stops.slice(1).map((s: RouteStop) => (
                                    <PlaceCard
                                      key={s.name}
                                      title={s.name}
                                      description={s.description}
                                      tag={s.tag}
                                      destination={placeQuery(s)}
                                      coords={s.coords}
                                      imageWiki={s.wiki ?? regionWiki}
                                      accent="stop"
                                      attraction={s.attractionId ? attractionById(s.attractionId) : undefined}
                                      date={day.date}
                                    />
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* The day's plan details — the photo and title are on the tile above. */}
              {chosen && (
                <div className="space-y-2">
                  <p className="kicker">Your plan · {chosen.title}</p>
                  <PlaceCard
                    key={chosen.title}
                    title={chosen.title}
                    description={chosen.description}
                    tag={chosen.tag}
                    kidNote={chosen.kidNote}
                    destination={placeQuery(chosen)}
                    origin={day.baseQuery}
                    coords={chosen.coords}
                    link={chosen.link}
                    linkLabel={chosen.linkLabel}
                    imageWiki={
                      chosen.wiki ??
                      (chosen.attractionId ? attractionById(chosen.attractionId)?.wiki : undefined) ??
                      regionWiki
                    }
                    accent="option"
                    attraction={chosen.attractionId ? attractionById(chosen.attractionId) : undefined}
                    date={day.date}
                    bare
                  />

                  {others.length > 0 && (
                    <div className="pt-1">
                      <button
                        onClick={() => setShowChange((v) => !v)}
                        className="tap text-sm font-medium text-glacier-600"
                      >
                        {showChange ? "Hide alternatives" : `Change plan (${others.length} other${others.length > 1 ? "s" : ""})`}
                      </button>
                      {showChange && (
                        <div className="mt-2 space-y-1.5">
                          {others.map((o) => (
                            <button
                              key={o.title}
                              onClick={() => {
                                onPick(o.title);
                                setShowChange(false);
                              }}
                              className="tap block w-full rounded-lg bg-stone-50 px-3 py-2 text-left text-sm text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100"
                            >
                              {o.title}
                            </button>
                          ))}
                          <p className="pt-1 text-xs text-stone-400">
                            Every option also lives under Places, with its own map and “near me”.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

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

/** Today as a local "YYYY-MM-DD", so it compares with the itinerary dates. */
function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * The day to open on: today while the trip is running, otherwise day one. Means
 * that on the morning of the 22nd you see the 22nd, not the arrival day.
 */
function initialOpenDate(): string | null {
  const today = todayIso();
  return ITINERARY.some((d) => d.date === today) ? today : ITINERARY[0]?.date ?? null;
}

export default function Itinerary() {
  const [filter, setFilter] = useState<string>("all");
  const [openDate, setOpenDate] = useState<string | null>(initialOpenDate);
  const [picks, setPicks] = useState<Record<string, string>>(loadPicks);
  const today = todayIso();

  const pickOption = (date: string, title: string) => setPicks(savePick(date, title));

  const days = useMemo(
    () => (filter === "all" ? ITINERARY : ITINERARY.filter((d) => d.region === filter)),
    [filter]
  );

  // Bring today's card into view on first load, once the cards have mounted.
  useEffect(() => {
    if (!ITINERARY.some((d) => d.date === today)) return;
    const el = document.getElementById(`day-${today}`);
    if (el) el.scrollIntoView({ block: "center" });
  }, [today]);

  return (
    <Section
      id="itinerary"
      kicker="The Plan"
      title="Day by Day"
      intro="Sixteen days across the Tyrolean and Dolomite Alps. Tap a day for the full plan; swap it for an alternative any time. Every other idea lives under Places, where 'Near me' shows what is closest right now."
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

      <div className="space-y-5">
        {days.map((day) => {
          const globalIndex = ITINERARY.indexOf(day);
          return (
            <DayCard
              key={day.date}
              day={day}
              index={globalIndex}
              isToday={day.date === today}
              open={openDate === day.date}
              onToggle={() => setOpenDate(openDate === day.date ? null : day.date)}
              pick={picks[day.date]}
              onPick={(title) => pickOption(day.date, title)}
            />
          );
        })}
      </div>
    </Section>
  );
}

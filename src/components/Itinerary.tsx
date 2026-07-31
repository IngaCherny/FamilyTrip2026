import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, Utensils, Mountain } from "lucide-react";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ITINERARY } from "../data/itinerary";
import { DESTINATIONS, PARTY, regionById } from "../data/trip";
import { attractionById, ATTRACTIONS } from "../data/attractions";
import { TAG_META } from "../lib/tags";
import {
  closedLabel,
  distanceKm,
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
import Gallery from "./Gallery";
import SegmentedControl from "./SegmentedControl";
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

/** Approximate drive minutes for a straight-line distance on alpine roads. */
function approxMin(km: number): number {
  return Math.max(4, Math.round(km * 1.6));
}

/** The nearest couple of other hikes/lakes to a trail, for "add a stop". */
function nearbyHikes(coords: [number, number] | undefined, excludeId?: string) {
  if (!coords) return [] as { a: Attraction; km: number }[];
  return ATTRACTIONS.filter((a) => a.id !== excludeId && (a.category === "hike" || a.category === "lake"))
    .map((a) => ({ a, km: distanceKm(coords, a.coords) }))
    .filter((x) => x.km <= 30)
    .sort((x, y) => x.km - y.km)
    .slice(0, 2);
}

function mapsSearch(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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
  imageSrc,
  accent,
  attraction,
  date,
  defaultOpen,
  hero,
  bare,
  onDark,
  driveFromBase,
  trailShape,
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
  /** A pinned thumbnail photo, overriding the attraction/wiki lookup. */
  imageSrc?: string;
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
  /** Style the details for a dark (ink) panel — cream text, gold accents. */
  onDark?: boolean;
  /** Approximate drive from base, shown as a pill, e.g. "~20 min". */
  driveFromBase?: string;
  /** Trail shape shown as a chip, e.g. "Loop", "There & back". */
  trailShape?: string;
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

  const priceChip = cost
    ? cost.total === 0
      ? "Free"
      : `~€${Math.round(cost.total)} · family`
    : attraction?.price?.free
    ? "Free"
    : undefined;

  const body = (
    <div className="space-y-3 px-3 pb-3">
      {!hero && (driveFromBase || priceChip || tag) && (
        <div className="flex flex-wrap items-center gap-2">
          {driveFromBase && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                onDark ? "bg-white/10 text-[#E4DDCB]" : "bg-stone-100 text-stone-600"
              }`}
            >
              <Car size={13} strokeWidth={1.8} /> {driveFromBase} drive
            </span>
          )}
          {priceChip && (
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                onDark ? "bg-[#D9A441]/15 text-[#F0C86B]" : "bg-meadow-100 text-meadow-700"
              }`}
            >
              {priceChip}
            </span>
          )}
          <TagChip tag={tag} />
        </div>
      )}
      <p className={`text-sm ${onDark ? "text-[#EDE8DC]/85" : "text-stone-600"}`}>{description}</p>
      {trailShape && (
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
            onDark ? "bg-white/10 text-[#E4DDCB]" : "bg-stone-100 text-stone-600"
          }`}
        >
          {trailShape}
        </span>
      )}
      {(shutToday || offSeason) && (
        <p
          className={`rounded-lg p-2 text-sm font-medium ring-1 ${
            onDark ? "bg-white/[0.07] text-[#EDE8DC] ring-white/10" : "bg-sunset-200/50 text-stone-800 ring-sunset-200"
          }`}
        >
          {shutToday
            ? `${closedLabel(attraction?.closedOn)} — and this day is one of them. Check before you drive.`
            : `Runs ${attraction?.season?.from} to ${attraction?.season?.to}, so it may be shut on this date.`}
        </p>
      )}
      {priceText && (
        <p className={`text-xs ${onDark ? "text-[#EDE8DC]/55" : "text-stone-500"}`}>
          {priceText}
          {freeNote && ` — ${freeNote}`}
        </p>
      )}
      {kidNote && (
        <p
          className={`rounded-lg p-2 text-sm ring-1 ${
            onDark ? "bg-white/[0.07] text-[#EDE8DC]/90 ring-white/10" : "bg-white/70 text-meadow-700 ring-meadow-100"
          }`}
        >
          <span className="font-semibold">For the kids: </span>
          {kidNote}
        </p>
      )}
      {officialLink && (
        <a
          href={officialLink}
          target="_blank"
          rel="noreferrer"
          className={`inline-block text-sm font-semibold underline underline-offset-2 ${
            onDark ? "text-[#D9A441]" : "text-glacier-600"
          }`}
        >
          {link ? linkLabel ?? "Official route" : "Official site"}
        </a>
      )}
      <MapWithDirections destination={destination} origin={origin} coords={coords} height={180} onDark={onDark} />
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
        onDark
          ? "bg-white/[0.05] ring-white/10"
          : accent === "option"
          ? "bg-meadow-50/60 ring-meadow-100"
          : "bg-stone-50 ring-stone-200"
      }`}
    >
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-3 p-2.5 text-left">
        <SmartImage
          src={imageSrc ?? imageUrl(attraction?.image, 200)}
          wiki={imageWiki}
          alt={title}
          className="h-14 w-14 shrink-0 rounded-lg"
        />
        <span className="min-w-0 flex-1">
          <span className={`block font-semibold leading-snug ${onDark ? "text-[#F6F1E6]" : "text-stone-900"}`}>{title}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs">
            {tag && <span className={onDark ? "text-[#EDE8DC]/60" : "text-stone-500"}>{TAG_META[tag].label}</span>}
            {total && <span className={`font-medium ${onDark ? "text-[#D9A441]" : "text-meadow-700"}`}>{total}</span>}
            {attraction?.buggy && <span className={onDark ? "text-[#EDE8DC]/60" : "text-meadow-600"}>Buggy OK</span>}
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
  // "Add a stop" only makes sense on free trail days — not on a paid, full-day
  // gondola or park, which fills the whole day on its own.
  const isTrailDay =
    !!chosen &&
    (chosen.tag === "hike" || chosen.tag === "walk") &&
    (!chosenAttr?.price || chosenAttr.price.free === true);
  const nearby = isTrailDay ? nearbyHikes(chosen?.coords, chosen?.attractionId) : [];
  const headerImg = imageUrl(chosenAttr?.image ?? day.image, 1200);
  const headerWiki = chosen?.wiki ?? chosenAttr?.wiki ?? regionWiki;
  const shutToday = isClosedOnDate(chosenAttr?.closedOn, day.date);
  // When the day has several photos, the tile itself becomes a swipe gallery.
  const tileGallery = chosenAttr?.images && chosenAttr.images.length > 1 ? chosenAttr.images : null;

  const tileOverlay = (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          Day {index + 1} · {day.weekday}, {formatShort(day.date)}
        </span>
        {isToday && (
          <span className="rounded-full bg-glacier-600 px-2.5 py-1 text-[11px] font-bold text-white">Today</span>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
        <div className="glass-cap max-w-[80%] rounded-xl px-3 py-2">
          <h3 className="font-serif text-base font-bold leading-snug text-white sm:text-lg">{day.title}</h3>
          {shutToday && (
            <span className="mt-1 inline-block rounded-full bg-sunset-300 px-2 py-0.5 text-[10px] font-semibold text-stone-900">
              Closed today
            </span>
          )}
        </div>
        <span className="glass-cap flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
          <Caret open={open} />
        </span>
      </div>
    </>
  );

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
      {/* Big photo tile — the day at a glance. Swipe photos, tap to open. */}
      {tileGallery ? (
        <Gallery
          images={tileGallery}
          alt={chosen?.title ?? day.title}
          heightClass="h-60 sm:h-72"
          onTap={onToggle}
          overlay={tileOverlay}
        />
      ) : (
        <button onClick={onToggle} className="block w-full text-left">
          <SmartImage
            src={headerImg}
            wiki={headerWiki}
            alt={chosen?.title ?? day.title}
            big
            className="h-60 w-full sm:h-72"
          >
            {tileOverlay}
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
            <div className="detail space-y-5 p-4">
              {/* Travel leg, with route map and stops along the way */}
              {day.drive && (
                <div className="rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                  <div className="text-sm">
                    <p className="font-semibold text-[#F6F1E6]">
                      {day.drive.from} to {day.drive.to}
                    </p>
                    <p className="text-[#EDE8DC]/80">
                      {day.drive.duration} · {day.drive.distance}
                    </p>
                    {day.drive.note && <p className="mt-1 text-[#EDE8DC]/60">{day.drive.note}</p>}
                  </div>
                  {day.drive.toQuery && (
                    <div className="mt-3">
                      <MapWithDirections destination={day.drive.toQuery} origin={day.drive.fromQuery} height={180} onDark />
                    </div>
                  )}
                  {day.drive.stops && day.drive.stops.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9A441]">Stops along the way</p>
                      {/* The first stop is the planned one, so keep it in view. */}
                      <PlaceCard
                        key={day.drive.stops[0].name}
                        title={day.drive.stops[0].name}
                        description={day.drive.stops[0].description}
                        tag={day.drive.stops[0].tag}
                        destination={placeQuery(day.drive.stops[0])}
                        coords={day.drive.stops[0].coords}
                        imageWiki={day.drive.stops[0].wiki ?? regionWiki}
                        imageSrc={day.drive.stops[0].image ? imageUrl(day.drive.stops[0].image, 200) : undefined}
                        accent="stop"
                        onDark
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
                            className="tap flex w-full items-center justify-between rounded-lg bg-white/[0.06] px-3 py-2 text-left ring-1 ring-white/10"
                          >
                            <span className="text-sm font-medium text-[#EDE8DC]/80">
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
                                      imageSrc={s.image ? imageUrl(s.image, 200) : undefined}
                                      accent="stop"
                                      onDark
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9A441]">Your plan · {chosen.title}</p>
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
                    onDark
                    driveFromBase={chosen.driveFromBase}
                    trailShape={chosen.trailShape}
                    attraction={chosen.attractionId ? attractionById(chosen.attractionId) : undefined}
                    date={day.date}
                    bare
                  />

                  {others.length > 0 && (
                    <div className="pt-1">
                      <button
                        onClick={() => setShowChange((v) => !v)}
                        className="tap text-sm font-medium text-[#D9A441]"
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
                              className="tap block w-full rounded-lg bg-white/[0.06] px-3 py-2 text-left text-sm text-[#EDE8DC] ring-1 ring-white/10 hover:bg-white/10"
                            >
                              {o.title}
                            </button>
                          ))}
                          <p className="pt-1 text-xs text-[#EDE8DC]/50">
                            Every option also lives under Places, with its own map and “near me”.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {isTrailDay && chosen?.coords && (
                    <div className="pt-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9A441]">Nearby — add to the day</p>
                      <div className="mt-2 space-y-2">
                        <a
                          href={mapsSearch(`restaurant near ${chosen.coords[0]},${chosen.coords[1]}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2.5 ring-1 ring-white/10 hover:bg-white/10"
                        >
                          <Utensils size={16} strokeWidth={1.8} className="shrink-0 text-[#D9A441]" />
                          <span className="flex-1 text-sm">
                            <span className="block font-semibold text-[#F6F1E6]">Restaurants near the trail</span>
                            <span className="text-xs text-[#EDE8DC]/60">Find a hut or café</span>
                          </span>
                          <span className="shrink-0 text-xs font-semibold text-[#D9A441]">on Maps →</span>
                        </a>
                        {nearby.map(({ a, km }) => (
                          <a
                            key={a.id}
                            href={mapsSearch(`${a.name} ${a.coords[0]},${a.coords[1]}`)}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3 py-2.5 ring-1 ring-white/10 hover:bg-white/10"
                          >
                            <Mountain size={16} strokeWidth={1.8} className="shrink-0 text-[#D9A441]" />
                            <span className="flex-1 text-sm">
                              <span className="block font-semibold text-[#F6F1E6]">{a.name}</span>
                              <span className="text-xs text-[#EDE8DC]/60">Another hike nearby</span>
                            </span>
                            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#D9A441]">
                              <Car size={12} strokeWidth={1.8} />~{approxMin(km)} min
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Family food stops */}
              {day.food && day.food.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9A441]">Family food stops</p>
                  {day.food.map((f) => (
                    <a
                      key={f.name}
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery(f))}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-[#F6F1E6]">{f.name}</span>
                        {f.playground && (
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-[#E4DDCB]">
                            Playground
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm text-[#EDE8DC]/75">{f.description}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Tips */}
              {day.tips && day.tips.length > 0 && (
                <div className="rounded-xl border-s-4 border-[#D9A441] bg-white/[0.06] p-3">
                  {day.tips.map((t) => (
                    <p key={t} className="text-sm text-[#EDE8DC]/85">
                      <span className="font-semibold text-[#F6F1E6]">Tip: </span>
                      {t}
                    </p>
                  ))}
                </div>
              )}

              {day.dayNote && <p className="text-center text-xs italic text-[#EDE8DC]/50">{day.dayNote}</p>}
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
  // Open today's card during the trip; otherwise start with everything closed
  // so the day tiles read as a clean gallery.
  return ITINERARY.some((d) => d.date === today) ? today : null;
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

  const tabs = [{ id: "all", label: "Whole trip" }, ...DESTINATIONS.map((r) => ({ id: r.id, label: r.name }))];

  return (
    <Section id="itinerary" kicker="The Plan" title="Day by Day">
      <SegmentedControl segments={tabs} value={filter} onChange={setFilter} layoutId="planTab" className="mb-7" />

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

import { useEffect, useState } from "react";
import { ITINERARY } from "../data/itinerary";
import { attractionById } from "../data/attractions";
import { PARTY, TRIP, regionById } from "../data/trip";
import { TAG_META } from "../lib/tags";
import { loadPicks, onPicksChanged } from "../lib/picks";
import SmartImage from "./SmartImage";
import {
  closedLabel,
  directionsUrl,
  familyCost,
  formatDate,
  formatFamilyCost,
  imageUrl,
  isClosedOnDate,
  isOutOfSeason,
  mapLinks,
} from "../lib/format";

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(fromIso: string, toIso: string): number {
  const a = new Date(fromIso + "T00:00:00").getTime();
  const b = new Date(toIso + "T00:00:00").getTime();
  return Math.round((b - a) / 86_400_000);
}

function scrollToDay(date: string) {
  const el = document.getElementById(`day-${date}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Today() {
  const today = todayIso();
  const [picks, setPicks] = useState(loadPicks);
  useEffect(() => onPicksChanged(() => setPicks(loadPicks())), []);

  const dayIndex = ITINERARY.findIndex((d) => d.date === today);
  const beforeTrip = today < TRIP.startDate;
  const afterTrip = today > TRIP.endDate;

  // Before the trip: a countdown teaser pointing at day one.
  if (dayIndex === -1) {
    if (afterTrip) return null; // the hero already says "we made it home"
    if (beforeTrip) {
      const first = ITINERARY[0];
      const firstRegion = regionById(first.region);
      const days = daysBetween(today, TRIP.startDate);
      return (
        <section id="today" className="px-4 pt-8">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-sm">
            <SmartImage wiki={firstRegion.wiki} alt={firstRegion.name} big overlay className="h-56 w-full sm:h-64">
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85 drop-shadow">
                  {days === 0 ? "Departure day" : `${days} day${days === 1 ? "" : "s"} to go`}
                </p>
                <h2 className="mt-1 font-serif text-3xl font-bold leading-tight drop-shadow">
                  First up: {first.title}
                </h2>
                <p className="mt-1 text-sm text-white/90 drop-shadow">
                  {first.weekday}, {formatDate(first.date)} · {firstRegion.name}
                </p>
                <button
                  onClick={() => scrollToDay(first.date)}
                  className="tap mt-4 w-fit rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/30"
                >
                  See the plan ↓
                </button>
              </div>
            </SmartImage>
          </div>
        </section>
      );
    }
    return null;
  }

  // During the trip: the day's chosen plan, front and centre.
  const day = ITINERARY[dayIndex];
  const region = regionById(day.region);
  const chosen = day.options.find((o) => o.title === picks[day.date]) ?? day.options[0];
  const attraction = chosen?.attractionId ? attractionById(chosen.attractionId) : undefined;

  const cost = familyCost(attraction?.price, PARTY);
  const total = formatFamilyCost(cost);
  const shut = isClosedOnDate(attraction?.closedOn, day.date);
  const offSeason = isOutOfSeason(attraction?.season, day.date);

  const destination = chosen?.mapQuery ?? (chosen?.coords ? `${chosen.coords[0]},${chosen.coords[1]}` : "");
  const driveHref = day.baseQuery && destination ? directionsUrl(day.baseQuery, destination) : undefined;
  const wazeHref = chosen?.coords ? mapLinks(chosen.coords).waze : undefined;

  return (
    <section id="today" className="px-4 pt-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
        <SmartImage
          src={imageUrl(attraction?.image, 1200)}
          wiki={chosen?.wiki ?? attraction?.wiki ?? region.wiki}
          alt={chosen?.title ?? day.title}
          big
          overlay
          className="h-56 w-full sm:h-64"
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-3 text-white">
            <span className="rounded-full bg-glacier-600/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em]">
              Today · Day {dayIndex + 1}
            </span>
            <span className="text-xs text-white/90 drop-shadow">
              {day.weekday}, {formatDate(day.date)} · {region.name}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-1.5 text-[11px]">
              {chosen?.tag && (
                <span className="rounded-full bg-white/25 px-2 py-0.5 font-semibold text-white backdrop-blur-sm">
                  {TAG_META[chosen.tag].label}
                </span>
              )}
              {total && (
                <span className="rounded-full bg-meadow-500/90 px-2 py-0.5 font-semibold text-white">{total}</span>
              )}
              {attraction?.buggy && (
                <span className="rounded-full bg-white/25 px-2 py-0.5 font-semibold text-white backdrop-blur-sm">
                  Buggy OK
                </span>
              )}
              {(shut || offSeason) && (
                <span className="rounded-full bg-sunset-300 px-2 py-0.5 font-semibold text-stone-900">
                  {shut ? closedLabel(attraction?.closedOn) ?? "Closed today" : "Out of season"}
                </span>
              )}
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white drop-shadow">
              {chosen?.title ?? day.title}
            </h2>
          </div>
        </SmartImage>

        <div className="p-5">
          {chosen?.description && <p className="text-sm text-stone-600">{chosen.description}</p>}

          {(shut || offSeason) && (
            <p className="mt-3 rounded-lg bg-sunset-200/50 p-2.5 text-sm font-medium text-stone-800 ring-1 ring-sunset-200">
              Heads up: this may be shut today. Check before you drive, or swap the plan.
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {driveHref && (
              <a
                href={driveHref}
                target="_blank"
                rel="noreferrer"
                className="tap flex-1 rounded-xl bg-glacier-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-glacier-700"
              >
                Drive here
              </a>
            )}
            {wazeHref && (
              <a
                href={wazeHref}
                target="_blank"
                rel="noreferrer"
                className="tap rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-glacier-700 ring-1 ring-stone-200 hover:bg-stone-50"
              >
                Waze
              </a>
            )}
            <button
              onClick={() => scrollToDay(day.date)}
              className="tap rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"
            >
              Full day ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { ITINERARY } from "../data/itinerary";
import { attractionById } from "../data/attractions";
import { PARTY, TRIP, regionById } from "../data/trip";
import { TAG_META } from "../lib/tags";
import { loadPicks, onPicksChanged } from "../lib/picks";
import {
  closedLabel,
  directionsUrl,
  familyCost,
  formatDate,
  formatFamilyCost,
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
      const days = daysBetween(today, TRIP.startDate);
      return (
        <section id="today" className="px-4 pt-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-glacier-600 p-5 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              {days === 0 ? "Departure day" : `${days} day${days === 1 ? "" : "s"} to go`}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-bold">First up: {first.title}</h2>
            <p className="mt-1 text-sm text-white/85">
              {first.weekday}, {formatDate(first.date)} · {regionById(first.region).name}
            </p>
            <button
              onClick={() => scrollToDay(first.date)}
              className="tap mt-4 rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/25"
            >
              See the plan ↓
            </button>
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
        <div className="flex items-center justify-between bg-glacier-600 px-5 py-2.5 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">
            Today · Day {dayIndex + 1}
          </span>
          <span className="text-xs text-white/85">
            {day.weekday}, {formatDate(day.date)} · {region.name}
          </span>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Your plan</p>
          <h2 className="mt-0.5 font-serif text-2xl font-bold text-stone-900">
            {chosen?.title ?? day.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            {chosen?.tag && (
              <span className="rounded-full bg-stone-100 px-2.5 py-0.5 font-medium text-stone-600">
                {TAG_META[chosen.tag].label}
              </span>
            )}
            {total && (
              <span className="rounded-full bg-meadow-100 px-2.5 py-0.5 font-semibold text-meadow-700">
                {total}
              </span>
            )}
            {attraction?.buggy && (
              <span className="rounded-full bg-meadow-50 px-2.5 py-0.5 font-medium text-meadow-700">
                Buggy OK
              </span>
            )}
            {(shut || offSeason) && (
              <span className="rounded-full bg-sunset-200 px-2.5 py-0.5 font-semibold text-stone-800">
                {shut ? closedLabel(attraction?.closedOn) ?? "Closed today" : "Out of season"}
              </span>
            )}
          </div>

          {chosen?.description && <p className="mt-3 text-sm text-stone-600">{chosen.description}</p>}

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

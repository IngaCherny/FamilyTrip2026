import { useEffect, useState } from "react";
import { ITINERARY } from "../data/itinerary";
import { attractionById } from "../data/attractions";
import { PARTY, regionById } from "../data/trip";
import { TAG_META } from "../lib/tags";
import { loadPicks, onPicksChanged } from "../lib/picks";
import SmartImage from "./SmartImage";
import Gallery from "./Gallery";
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

function scrollToDay(date: string) {
  const el = document.getElementById(`day-${date}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Today() {
  const today = todayIso();
  const [picks, setPicks] = useState(loadPicks);
  useEffect(() => onPicksChanged(() => setPicks(loadPicks())), []);

  const dayIndex = ITINERARY.findIndex((d) => d.date === today);

  // Only meaningful during the trip. Before and after, the hero already says it,
  // so the Today card stays out of the way.
  if (dayIndex === -1) return null;

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
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200/70">
        {(() => {
          const gallery = attraction?.images && attraction.images.length > 1 ? attraction.images : null;
          const overlay = (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-white">
                <span className="rounded-full bg-glacier-600/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em]">
                  Today · Day {dayIndex + 1}
                </span>
                <span className="glass-cap rounded-full px-2.5 py-1 text-xs text-white">
                  {day.weekday}, {formatDate(day.date)} · {region.name}
                </span>
              </div>
              <div className="glass-cap absolute bottom-3 left-3 max-w-[80%] rounded-xl px-3 py-2">
                <h2 className="font-serif text-lg font-bold leading-snug text-white sm:text-xl">
                  {chosen?.title ?? day.title}
                </h2>
              </div>
            </>
          );
          return gallery ? (
            <Gallery images={gallery} alt={chosen?.title ?? day.title} heightClass="h-60 sm:h-72" overlay={overlay} />
          ) : (
            <SmartImage
              src={imageUrl(attraction?.image ?? day.image, 1200)}
              wiki={chosen?.wiki ?? attraction?.wiki ?? region.wiki}
              alt={chosen?.title ?? day.title}
              big
              className="h-60 w-full sm:h-72"
            >
              {overlay}
            </SmartImage>
          );
        })()}

        <div className="p-5">
          <div className="mb-3 flex flex-wrap items-center gap-1.5 text-[11px]">
            {chosen?.tag && (
              <span className="rounded-full bg-stone-100 px-2.5 py-0.5 font-semibold text-stone-600">
                {TAG_META[chosen.tag].label}
              </span>
            )}
            {total && (
              <span className="rounded-full bg-meadow-100 px-2.5 py-0.5 font-semibold text-meadow-700">{total}</span>
            )}
            {attraction?.buggy && (
              <span className="rounded-full bg-meadow-50 px-2.5 py-0.5 font-semibold text-meadow-700">Buggy OK</span>
            )}
            {(shut || offSeason) && (
              <span className="rounded-full bg-sunset-200 px-2.5 py-0.5 font-semibold text-stone-800">
                {shut ? closedLabel(attraction?.closedOn) ?? "Closed today" : "Out of season"}
              </span>
            )}
          </div>
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

import Section from "./Section";
import { GUEST_CARDS } from "../data/cards";
import { regionById } from "../data/trip";
import type { GuestCard } from "../lib/types";

const KIND_META: Record<GuestCard["kind"], { label: string; className: string }> = {
  included: { label: "Usually included", className: "bg-meadow-100 text-meadow-700" },
  check: { label: "Ask at check-in", className: "bg-sunset-200 text-stone-800" },
  buy: { label: "We buy it", className: "bg-glacier-50 text-glacier-700" },
};

export default function Cards() {
  return (
    <Section
      id="cards"
      kicker="Before You Pay"
      title="Guest Cards & Passes"
      intro="Every region here has a card that covers lifts, buses or entry fees. Most are free with the stay but only if you ask. For five of us these are the biggest savings on the trip."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {GUEST_CARDS.map((c) => {
          const meta = KIND_META[c.kind];
          return (
            <article key={c.id} className="card-paper flex flex-col p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${meta.className}`}>
                  {meta.label}
                </span>
                <span className="text-xs text-stone-500">{regionById(c.region).name}</span>
              </div>

              <h3 className="mt-2 font-serif text-xl font-bold text-stone-900">{c.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{c.summary}</p>

              <ul className="mt-3 space-y-1">
                {c.includes.map((inc) => (
                  <li key={inc} className="flex gap-2 text-sm text-stone-700">
                    <span aria-hidden className="text-meadow-600">
                      •
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 rounded-lg bg-meadow-50 p-2.5 text-sm text-meadow-700 ring-1 ring-meadow-100">
                <span className="font-semibold">Do this: </span>
                {c.action}
              </p>

              {c.caveat && <p className="mt-2 text-xs text-stone-500">{c.caveat}</p>}

              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-glacier-600 underline underline-offset-2"
                >
                  Official details
                </a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

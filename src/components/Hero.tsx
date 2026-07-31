import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TRIP } from "../data/trip";
import { useCountdown } from "../lib/useCountdown";
import { formatDate, imageUrl } from "../lib/format";
import { useLang } from "../lib/i18n";
import Weather from "./Weather";
import type { View } from "../App";

/** The rotating hero shots — our best photos from across the trip. */
const SLIDES = [
  { img: "img/hintersteiner-see.jpg", loc: "Hintersteiner See · Tirol" },
  { img: "img/seiser-alm.jpg", loc: "Seiser Alm · South Tyrol" },
  { img: "img/pragser-wildsee.jpg", loc: "Lago di Braies · Dolomites" },
  { img: "img/rodenecker-alm.jpg", loc: "Rodenecker Alm · South Tyrol" },
  { img: "img/stuibenfall.jpg", loc: "Stuibenfall · Ötztal" },
];

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#F6F4EE]/20 bg-[#F6F4EE]/[0.12] px-3 py-1.5 backdrop-blur-sm sm:px-4">
      <span className="font-serif text-4xl font-semibold leading-none tabular-nums text-[#F6F4EE] sm:text-6xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#F6F4EE]/85 sm:text-[11px]">{label}</span>
    </div>
  );
}

function Colon() {
  return <span className="self-start pt-2 font-serif text-3xl text-[#F6F4EE]/40 sm:pt-3 sm:text-5xl">:</span>;
}

export default function Hero({ onNav }: { onNav?: (v: View) => void }) {
  const { tc } = useLang();
  const cd = useCountdown(TRIP.startDate, TRIP.endDate);
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const status = cd.isBefore
    ? tc("Two weeks across the Tyrolean & Dolomite Alps")
    : cd.isDuring
    ? `${tc("Day")} ${cd.tripDay} ${tc("of the adventure")}`
    : tc("We made it home");

  return (
    <header className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-stone-900 text-[#F6F4EE]">
      {/* Cross-fading photo carousel */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.img}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
          style={{ opacity: idx === i ? 1 : 0 }}
          aria-hidden={idx !== i}
        >
          <img
            src={imageUrl(s.img, 2000)}
            alt=""
            className="h-full w-full object-cover"
            style={{
              transform: idx === i ? "scale(1)" : "scale(1.06)",
              transition: "transform 7s ease-out",
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/20 to-stone-900/75" />

      {/* Top bar — brand + current photo location, left-aligned so the pinned
          language toggle (top-right) never covers it. */}
      <div className="relative z-10 px-6 pt-7">
        <span className="text-xs font-semibold tracking-[0.34em]">CHERNYCATION</span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-[#F6F4EE]/75">{tc(SLIDES[i].loc)}</span>
      </div>

      {/* Centrepiece */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="font-serif text-base italic text-[#F6F4EE]/85 sm:text-lg">{status}</p>
        <h1 className="mt-2 font-serif text-6xl font-semibold leading-[0.92] tracking-tight sm:text-8xl">
          {TRIP.title}
          <span className="mt-1 block text-[0.5em] font-medium tracking-wide text-stone-200">{TRIP.year}</span>
        </h1>

        {!cd.isAfter && (
          <div className="mt-7 flex items-center justify-center gap-1 sm:gap-2">
            <Unit value={cd.days} label={tc("Days")} />
            <Colon />
            <Unit value={cd.hours} label={tc("Hrs")} />
            <Colon />
            <Unit value={cd.minutes} label={tc("Min")} />
            <Colon />
            <Unit value={cd.seconds} label={tc("Sec")} />
          </div>
        )}

        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#F6F4EE]/80">
          {formatDate(TRIP.startDate)} – {formatDate(TRIP.endDate, { day: "numeric", month: "long" })}
        </p>
      </motion.div>

      {/* Bottom: "full plan" scroll cue, weather glass strip, slide dots */}
      <div className="relative z-10 px-6 pb-7">
        <button
          onClick={() => onNav?.("itinerary")}
          className="tap mx-auto mb-4 flex flex-col items-center gap-1 text-[#F6F4EE]/85 hover:text-[#F6F4EE]"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{tc("Full plan")}</span>
          <ChevronDown size={22} className="motion-safe:animate-bounce" />
        </button>
        <div className="mx-auto flex max-w-md items-end gap-3">
          <div className="min-w-0 flex-1">
            <Weather hero />
          </div>
        </div>
        <div className="mx-auto mt-3 flex max-w-md justify-center gap-1.5">
          {SLIDES.map((s, idx) => (
            <button
              key={s.img}
              onClick={() => setI(idx)}
              aria-label={`Show ${s.loc}`}
              className="h-[3px] w-6 rounded-full transition-colors"
              style={{ background: idx === i ? "rgba(246,244,238,.95)" : "rgba(246,244,238,.35)" }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

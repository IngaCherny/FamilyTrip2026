import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { TRIP, REGIONS } from "../data/trip";
import { useCountdown } from "../lib/useCountdown";
import { formatDate } from "../lib/format";
import { useWikiImage } from "../lib/useWikiImage";

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-3xl font-bold tabular-nums text-white sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">{label}</span>
    </div>
  );
}

export default function Hero() {
  const cd = useCountdown(TRIP.startDate, TRIP.endDate);
  const heroImg = useWikiImage(TRIP.heroWiki, { big: true });

  const status = cd.isBefore
    ? "Counting down to"
    : cd.isDuring
    ? `Day ${cd.tripDay} of the adventure`
    : "We made it home";

  return (
    <header className="relative min-h-[88vh] overflow-hidden sm:min-h-[80vh]">
      {/* Full-bleed alpine photo with a gradient fallback underneath. */}
      <div className="absolute inset-0 bg-gradient-to-b from-glacier-700 via-glacier-600 to-meadow-600" />
      {heroImg && (
        <img
          src={heroImg.src}
          alt="The Alps"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/35 to-stone-900/65" />
      <svg
        className="absolute bottom-0 left-0 w-full text-stone-50"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 160 L180 60 L320 120 L480 30 L620 110 L780 50 L940 120 L1100 55 L1200 110 L1200 160 Z" fill="currentColor" opacity="0.18" />
        <path d="M0 160 L160 110 L340 140 L520 90 L700 140 L880 100 L1060 145 L1200 105 L1200 160 Z" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-4 pb-28 pt-20 sm:min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            {status}
          </p>
          <h1 className="mt-2 font-serif text-5xl font-bold leading-none text-white sm:text-7xl">
            {TRIP.title}
            <span className="block text-glacier-200">{TRIP.year}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{TRIP.tagline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} />
              {formatDate(TRIP.startDate)} to {formatDate(TRIP.endDate, { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} />
              {REGIONS.map((r) => r.name).join(" · ")}
            </span>
          </div>

          {!cd.isAfter && (
            <div className="mt-8 inline-flex gap-4 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm ring-1 ring-white/20 sm:gap-7">
              <Unit value={cd.days} label="Days" />
              <Unit value={cd.hours} label="Hrs" />
              <Unit value={cd.minutes} label="Min" />
              <Unit value={cd.seconds} label="Sec" />
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}

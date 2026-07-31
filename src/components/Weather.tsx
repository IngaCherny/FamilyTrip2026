import { useEffect, useState } from "react";
import { Sun, CloudSun, Cloud, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudLightning, ChevronDown, type LucideIcon } from "lucide-react";
import { ITINERARY } from "../data/itinerary";
import { regionById } from "../data/trip";
import { fetchWeather, type Weather as WeatherData } from "../lib/weather";

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Today's base during the trip, otherwise the next upcoming base. */
function activeDay() {
  const today = todayIso();
  return (
    ITINERARY.find((d) => d.date === today) ??
    ITINERARY.find((d) => d.date >= today) ??
    ITINERARY[ITINERARY.length - 1]
  );
}

/** A WMO weather code → a neutral line icon. */
function wxIcon(code: number): LucideIcon {
  if (code === 0) return Sun;
  if (code <= 2) return CloudSun;
  if (code <= 48) return code >= 45 ? CloudFog : Cloud;
  if (code <= 57) return CloudDrizzle;
  if (code <= 67) return CloudRain;
  if (code <= 77) return CloudSnow;
  if (code <= 82) return CloudRain;
  if (code <= 86) return CloudSnow;
  return CloudLightning;
}

function weekday(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short" });
}

export default function Weather() {
  const day = activeDay();
  const region = regionById(day.region);
  const [wx, setWx] = useState<WeatherData | null>(null);
  const [failed, setFailed] = useState(false);
  const [tick, setTick] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    setFailed(false);
    setWx(null);
    const timer = setTimeout(() => {
      ctrl.abort();
      setFailed(true);
    }, 8000);
    fetchWeather(region.center, ctrl.signal)
      .then((w) => {
        setWx(w);
        setFailed(false);
      })
      .catch(() => setFailed(true))
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [region.center, tick]);

  const isToday = day.date === todayIso();
  const Icon = wx ? wxIcon(wx.code) : Cloud;
  const forecast = wx?.daily.slice(0, 5) ?? [];

  return (
    <section className="px-4 pt-6">
      <div className="glass mx-auto w-full max-w-3xl overflow-hidden rounded-3xl">
        {/* Compact strip */}
        <button
          onClick={() => (failed ? setTick((t) => t + 1) : wx && setOpen((o) => !o))}
          className="flex w-full items-center gap-3.5 px-4 py-3 text-left"
        >
          <Icon size={26} strokeWidth={1.6} className="shrink-0 text-stone-600" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-stone-900">
              {region.name}
              <span className="ms-2 text-xs font-normal text-stone-400">{isToday ? "now" : "upcoming"}</span>
            </p>
            <p className="truncate text-xs text-stone-500">
              {wx ? wx.text : failed ? "Weather unavailable — tap to retry" : "Checking the forecast…"}
            </p>
          </div>
          {wx && (
            <>
              <div className="text-end">
                <p className="text-2xl font-bold leading-none text-stone-900">{wx.current}°</p>
                <p className="mt-0.5 text-[11px] text-stone-500 tabular-nums">
                  H {wx.max}° · L {wx.min}°
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-stone-400 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </>
          )}
        </button>

        {/* Expandable multi-day forecast */}
        {open && wx && (
          <div className="grid grid-cols-5 gap-1 border-t border-stone-200/70 px-2 py-3">
            {forecast.map((d, idx) => {
              const DIcon = wxIcon(d.code);
              return (
                <div key={d.date} className="flex flex-col items-center gap-1 rounded-xl px-1 py-1.5">
                  <span className="text-[11px] font-semibold text-stone-500">{idx === 0 ? "Today" : weekday(d.date)}</span>
                  <DIcon size={20} strokeWidth={1.6} className="text-stone-600" />
                  <span className="text-xs font-semibold text-stone-800 tabular-nums">{d.max}°</span>
                  <span className="text-[11px] text-stone-400 tabular-nums">{d.min}°</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

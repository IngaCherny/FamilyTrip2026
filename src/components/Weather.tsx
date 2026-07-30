import { useEffect, useState } from "react";
import { ITINERARY } from "../data/itinerary";
import { regionById } from "../data/trip";
import { fetchWeather, type Weather as WeatherData } from "../lib/weather";

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * The location the weather is for: today's base during the trip, otherwise the
 * next upcoming day's base, so it always reflects where you are or are headed.
 */
function activeDay() {
  const today = todayIso();
  return (
    ITINERARY.find((d) => d.date === today) ??
    ITINERARY.find((d) => d.date >= today) ??
    ITINERARY[ITINERARY.length - 1]
  );
}

export default function Weather() {
  const day = activeDay();
  const region = regionById(day.region);
  const [wx, setWx] = useState<WeatherData | null>(null);
  const [failed, setFailed] = useState(false);
  const [tick, setTick] = useState(0); // bump to retry

  useEffect(() => {
    const ctrl = new AbortController();
    setFailed(false);
    setWx(null);
    // Never hang on "Checking…": give up after 8s and show the offline line.
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

  return (
    <section className="px-4 pt-6">
      <button
        onClick={() => failed && setTick((t) => t + 1)}
        className="mx-auto flex w-full max-w-3xl items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-stone-200"
      >
        <span className="text-4xl leading-none" aria-hidden>
          {wx ? wx.emoji : failed ? "☁️" : "🏔️"}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-stone-900">
            {region.name}
            <span className="ml-2 text-xs font-normal text-stone-400">{isToday ? "now" : "current"}</span>
          </p>
          <p className="truncate text-sm text-stone-500">
            {wx ? wx.text : failed ? "Weather unavailable — tap to retry" : "Checking the forecast…"}
          </p>
        </div>
        {wx && (
          <div className="text-right">
            <p className="text-2xl font-bold text-stone-900">{wx.current}°</p>
            <p className="text-xs text-stone-500">
              H {wx.max}° · L {wx.min}°
            </p>
          </div>
        )}
      </button>
    </section>
  );
}

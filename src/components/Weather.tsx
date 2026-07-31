import { useEffect, useState } from "react";
import { Sun, CloudSun, Cloud, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudLightning, ChevronDown, type LucideIcon } from "lucide-react";
import { ITINERARY } from "../data/itinerary";
import { regionById } from "../data/trip";
import { fetchWeather, type Weather as WeatherData } from "../lib/weather";
import { useLang } from "../lib/i18n";

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

/**
 * The weather widget. `hero` renders a translucent glass strip that sits over
 * the hero carousel (cream text, forecast opens upward); otherwise it renders a
 * standalone light card.
 */
export default function Weather({ hero = false }: { hero?: boolean }) {
  const { tc } = useLang();
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

  // ---- colour tokens per variant ----
  const t = hero
    ? {
        wrap: "relative",
        strip: "flex w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2 text-left backdrop-blur-md",
        icon: "text-[#F6F4EE]",
        name: "text-[#F6F4EE]",
        sub: "text-[#F6F4EE]/70",
        temp: "text-[#F6F4EE]",
        hl: "text-[#F6F4EE]/70",
        chev: "text-[#F6F4EE]/70",
        panel:
          "absolute inset-x-0 bottom-full mb-2 grid grid-cols-5 gap-1 rounded-2xl border border-white/20 bg-black/40 px-2 py-3 backdrop-blur-md",
        dName: "text-[#F6F4EE]/70",
        dIcon: "text-[#F6F4EE]",
        dMax: "text-[#F6F4EE]",
        dMin: "text-[#F6F4EE]/55",
      }
    : {
        wrap: "glass mx-auto w-full max-w-3xl overflow-hidden rounded-3xl",
        strip: "flex w-full items-center gap-3.5 px-4 py-3 text-left",
        icon: "text-stone-600",
        name: "text-stone-900",
        sub: "text-stone-400",
        temp: "text-stone-900",
        hl: "text-stone-500",
        chev: "text-stone-400",
        panel: "grid grid-cols-5 gap-1 border-t border-stone-200/70 px-2 py-3",
        dName: "text-stone-500",
        dIcon: "text-stone-600",
        dMax: "text-stone-800",
        dMin: "text-stone-400",
      };

  const widget = (
    <div className={t.wrap}>
      <button
        onClick={() => (failed ? setTick((n) => n + 1) : wx && setOpen((o) => !o))}
        className={t.strip}
      >
        <Icon size={hero ? 22 : 26} strokeWidth={1.6} className={`shrink-0 ${t.icon}`} />
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-semibold ${t.name}`}>
            {tc(region.name)}
            <span className={`ms-2 text-xs font-normal ${t.sub}`}>{isToday ? tc("now") : tc("upcoming")}</span>
          </p>
          {!hero && (
            <p className={`truncate text-xs ${t.sub}`}>
              {wx ? tc(wx.text) : failed ? tc("Weather unavailable — tap to retry") : tc("Checking the forecast…")}
            </p>
          )}
        </div>
        {wx ? (
          <>
            <div className="text-end">
              <p className={`text-xl font-bold leading-none ${t.temp} ${hero ? "" : "sm:text-2xl"}`}>{wx.current}°</p>
              <p className={`mt-0.5 text-[11px] tabular-nums ${t.hl}`}>
                {tc("H")} {wx.max}° · {tc("L")} {wx.min}°
              </p>
            </div>
            <ChevronDown size={16} className={`shrink-0 transition-transform ${t.chev} ${open ? "rotate-180" : ""}`} />
          </>
        ) : (
          hero && <span className={`text-xs ${t.sub}`}>{failed ? tc("tap to retry") : "…"}</span>
        )}
      </button>

      {open && wx && (
        <div className={t.panel}>
          {forecast.map((d, idx) => {
            const DIcon = wxIcon(d.code);
            return (
              <div key={d.date} className="flex flex-col items-center gap-1 px-1 py-0.5">
                <span className={`text-[11px] font-semibold ${t.dName}`}>{idx === 0 ? tc("Today") : tc(weekday(d.date))}</span>
                <DIcon size={20} strokeWidth={1.6} className={t.dIcon} />
                <span className={`text-xs font-semibold tabular-nums ${t.dMax}`}>{d.max}°</span>
                <span className={`text-[11px] tabular-nums ${t.dMin}`}>{d.min}°</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  if (hero) return widget;
  return <section className="px-4 pt-6">{widget}</section>;
}

import { useState } from "react";
import { CalendarDays, Compass, BedDouble, Sparkles, Menu, X } from "lucide-react";
import { useLang } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import type { View } from "../App";

const MOBILE_TABS = [
  { id: "today", key: "nav.today", Icon: Sparkles },
  { id: "itinerary", key: "nav.plan", Icon: CalendarDays },
  { id: "places", key: "nav.places", Icon: Compass },
  { id: "stays", key: "nav.stays", Icon: BedDouble },
] as const;

// Everything else lives behind "More" on mobile; the desktop bar shows it all.
const SECONDARY = [
  { id: "map", key: "nav.map" },
  { id: "services", key: "nav.services" },
  { id: "cards", key: "nav.cards" },
  { id: "food", key: "nav.food" },
  { id: "phrasebook", key: "nav.phrases" },
  { id: "quiz", key: "nav.quiz" },
  { id: "tips", key: "nav.tips" },
  { id: "packing", key: "nav.packing" },
  { id: "emergency", key: "nav.emergency" },
] as const;

const DESKTOP = [
  { id: "today", key: "nav.today" },
  { id: "itinerary", key: "nav.plan" },
  { id: "map", key: "nav.map" },
  { id: "places", key: "nav.places" },
  { id: "stays", key: "nav.stays" },
  ...SECONDARY.filter((s) => s.id !== "map"),
] as const;

export default function Nav({ view, onNav }: { view: View; onNav: (v: View) => void }) {
  const { t } = useLang();
  const [more, setMore] = useState(false);

  return (
    <>
      {/* Desktop top bar — frosted glass */}
      <nav className="glass sticky top-0 z-40 hidden rounded-none border-x-0 border-t-0 md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => onNav("today")}
            className="font-serif text-xl font-bold text-glacier-700"
          >
            Chernycation 2026
          </button>
          <div className="flex items-center gap-1">
            {DESKTOP.map((item) => (
              <button
                key={item.id}
                onClick={() => onNav(item.id as View)}
                className={`tap rounded-full px-3.5 text-sm font-medium transition-colors ${
                  view === item.id ? "bg-glacier-600 text-white" : "text-stone-600 hover:bg-white/60"
                }`}
              >
                {t(item.key)}
              </button>
            ))}
            <LanguageSwitcher className="ms-2" />
          </div>
        </div>
      </nav>

      {/* Mobile floating glass tab bar */}
      <nav className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="glass mx-auto flex max-w-md items-stretch justify-around rounded-[26px] px-1.5 py-1.5">
          {MOBILE_TABS.map(({ id, key, Icon }) => {
            const on = view === id;
            return (
              <button
                key={id}
                onClick={() => onNav(id as View)}
                aria-current={on ? "page" : undefined}
                className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-semibold transition-colors ${
                  on ? "text-glacier-700" : "text-stone-500"
                }`}
              >
                <span className={`rounded-2xl px-4 py-1 ${on ? "bg-white/70" : ""}`}>
                  <Icon size={20} strokeWidth={on ? 2.4 : 2} />
                </span>
                {t(key)}
              </button>
            );
          })}
          <button
            onClick={() => setMore(true)}
            className="flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-semibold text-stone-500"
          >
            <span className="px-4 py-1">
              <Menu size={20} strokeWidth={2} />
            </span>
            {t("nav.more")}
          </button>
        </div>
      </nav>

      {/* Mobile "More" sheet */}
      {more && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 md:hidden" onClick={() => setMore(false)}>
          <div className="w-full rounded-t-3xl bg-white p-4 pb-9" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold">{t("nav.more")}</h3>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <button onClick={() => setMore(false)} className="tap rounded-full text-stone-400" aria-label={t("common.close")}>
                  <X size={22} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SECONDARY.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNav(item.id as View);
                    setMore(false);
                  }}
                  className="tap justify-start rounded-2xl bg-stone-50 px-4 py-3 text-start text-sm font-medium text-stone-700 ring-1 ring-stone-200"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

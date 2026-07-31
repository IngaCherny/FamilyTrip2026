import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { HE_CONTENT } from "../data/i18n/he";
import { setDateLocale } from "./format";

export type Lang = "en" | "he";

const KEY = "alpine2026.lang";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof UI) => string;
  /** Translate a content string (falls back to the English source). */
  tc: (s?: string) => string;
}

const LangContext = createContext<Ctx | null>(null);

/** UI-chrome strings. Trip content (place descriptions) stays in English for now. */
const UI = {
  "nav.today": { en: "Today", he: "היום" },
  "nav.plan": { en: "Plan", he: "מסלול" },
  "nav.map": { en: "Map", he: "מפה" },
  "nav.places": { en: "Places", he: "מקומות" },
  "nav.stays": { en: "Stays", he: "לינה" },
  "nav.more": { en: "More", he: "עוד" },
  "nav.cards": { en: "Guest Cards", he: "כרטיסי אורח" },
  "nav.food": { en: "Food & Drink", he: "אוכל ושתייה" },
  "nav.phrases": { en: "Phrasebook", he: "שיחון" },
  "nav.quiz": { en: "Quiz", he: "חידון" },
  "nav.services": { en: "Services", he: "שירותים" },
  "nav.tips": { en: "Tips", he: "טיפים" },
  "nav.packing": { en: "Packing", he: "אריזה" },
  "nav.emergency": { en: "Emergency", he: "חירום" },
  "common.listen": { en: "Listen", he: "האזן" },
  "common.close": { en: "Close", he: "סגור" },
  "install.title": { en: "Add to Home Screen", he: "הוסף למסך הבית" },
  "install.body": {
    en: "Install Chernycation for full-screen, offline access on the trip.",
    he: "התקינו את Chernycation לגישה במסך מלא, גם בלי אינטרנט בטיול.",
  },
  "install.ios": {
    en: "Tap the Share icon, then “Add to Home Screen”.",
    he: "הקישו על סמל השיתוף ואז על ״הוסף למסך הבית״.",
  },
  "install.button": { en: "Install", he: "התקן" },
} as const;

/** Per-section header translations, keyed by the Section `id`. */
export const SECTION_I18N: Record<string, { kicker?: string; title?: string }> = {
  itinerary: { kicker: "המסלול", title: "יום אחר יום" },
  map: { kicker: "המסע", title: "מפת הטיול" },
  places: { kicker: "שווה עיקוף", title: "מקומות לראות" },
  stays: { kicker: "בית בדרך", title: "איפה נלון" },
  cards: { kicker: "לפני שמשלמים", title: "כרטיסי אורח ומנויים" },
  food: { kicker: "לאכול ולשתות", title: "אוכל ושתייה" },
  phrasebook: { kicker: "קצת שפה", title: "שיחון למשפחה" },
  quiz: { kicker: "לילדים", title: "חידון הטיול" },
  services: { kicker: "שימושי בדרך", title: "שירותים ליד הבסיס" },
  tips: { kicker: "כדאי לדעת", title: "טיפים לטיול" },
  packing: { kicker: "לא לשכוח", title: "רשימת אריזה" },
  emergency: { kicker: "ליתר ביטחון", title: "מידע חירום" },
};

function readLang(): Lang {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "he" || v === "en") return v;
  } catch {
    /* ignore */
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  // Keep date formatting in sync with the language. Set synchronously during
  // render (before descendants render) so dates never lag a frame behind a
  // language switch.
  setDateLocale(lang === "he" ? "he" : "en-GB");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: keyof typeof UI) => UI[key][lang] ?? UI[key].en;
  const tc = (s?: string) => {
    if (!s) return s ?? "";
    return lang === "he" ? HE_CONTENT[s] ?? s : s;
  };

  return <LangContext.Provider value={{ lang, setLang, t, tc }}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

import { useLang } from "../lib/i18n";

/** A compact EN / עברית pill toggle. */
export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex overflow-hidden rounded-full ring-1 ring-stone-200 ${className ?? ""}`}>
      {(["en", "he"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`tap px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === l ? "bg-glacier-600 text-white" : "bg-white/70 text-stone-600 hover:bg-white"
          }`}
        >
          {l === "en" ? "EN" : "עב"}
        </button>
      ))}
    </div>
  );
}

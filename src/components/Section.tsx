import type { ReactNode } from "react";
import { useLang, SECTION_I18N } from "../lib/i18n";

interface Props {
  id: string;
  kicker?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, kicker, title, intro, children, className }: Props) {
  const { lang, tc } = useLang();
  // In Hebrew, swap the header for a translated one when we have it; the intro
  // is translated through the content dictionary (falls back to English).
  const tr = lang === "he" ? SECTION_I18N[id] : undefined;
  const showKicker = tr?.kicker ?? kicker;
  const showTitle = tr?.title ?? title;
  const showIntro = intro ? tc(intro) : undefined;

  return (
    <section id={id} className={`scroll-mt-20 px-4 py-12 sm:py-16 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <header className="mb-7">
          {showKicker && <p className="kicker mb-2">{showKicker}</p>}
          <h2 className="section-title">{showTitle}</h2>
          {showIntro && <p className="mt-3 max-w-2xl text-stone-600">{showIntro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

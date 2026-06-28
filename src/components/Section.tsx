import type { ReactNode } from "react";

interface Props {
  id: string;
  kicker?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, kicker, title, intro, children, className }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-12 sm:py-16 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <header className="mb-7">
          {kicker && <p className="kicker mb-2">{kicker}</p>}
          <h2 className="section-title">{title}</h2>
          {intro && <p className="mt-3 max-w-2xl text-stone-600">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

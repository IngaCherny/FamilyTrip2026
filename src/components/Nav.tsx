import { useEffect, useState } from "react";
import { CalendarDays, Compass, BedDouble, Sparkles, Menu, X } from "lucide-react";

const MOBILE_TABS = [
  { id: "today", label: "Today", Icon: Sparkles },
  { id: "itinerary", label: "Plan", Icon: CalendarDays },
  { id: "places", label: "Places", Icon: Compass },
  { id: "stays", label: "Stays", Icon: BedDouble },
];

// Everything else lives behind "More" on mobile; the desktop bar shows it all.
const SECONDARY = [
  { id: "map", label: "Map" },
  { id: "cards", label: "Guest Cards" },
  { id: "food", label: "Food & Drink" },
  { id: "tips", label: "Tips" },
  { id: "packing", label: "Packing" },
  { id: "emergency", label: "Emergency" },
];

const DESKTOP = [
  { id: "today", label: "Today" },
  { id: "itinerary", label: "Plan" },
  { id: "map", label: "Map" },
  { id: "places", label: "Places" },
  { id: "stays", label: "Stays" },
  ...SECONDARY.filter((s) => s.id !== "map"),
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [more, setMore] = useState(false);
  const [active, setActive] = useState("today");

  useEffect(() => {
    const ids = [...DESKTOP].map((i) => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop top bar — frosted glass */}
      <nav className="glass sticky top-0 z-40 hidden rounded-none border-x-0 border-t-0 md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl font-bold text-glacier-700"
          >
            Alpine 2026
          </button>
          <div className="flex items-center gap-1">
            {DESKTOP.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`tap rounded-full px-3.5 text-sm font-medium transition-colors ${
                  active === item.id ? "bg-glacier-600 text-white" : "text-stone-600 hover:bg-white/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile floating glass tab bar */}
      <nav className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="glass mx-auto flex max-w-md items-stretch justify-around rounded-[26px] px-1.5 py-1.5">
          {MOBILE_TABS.map(({ id, label, Icon }) => {
            const on = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={on ? "page" : undefined}
                className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-semibold transition-colors ${
                  on ? "text-glacier-700" : "text-stone-500"
                }`}
              >
                <span className={`rounded-2xl px-4 py-1 ${on ? "bg-white/70" : ""}`}>
                  <Icon size={20} strokeWidth={on ? 2.4 : 2} />
                </span>
                {label}
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
            More
          </button>
        </div>
      </nav>

      {/* Mobile "More" sheet */}
      {more && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 md:hidden" onClick={() => setMore(false)}>
          <div className="w-full rounded-t-3xl bg-white p-4 pb-9" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold">More</h3>
              <button
                onClick={() => setMore(false)}
                className="tap rounded-full text-stone-400"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SECONDARY.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMore(false);
                    setTimeout(() => scrollTo(item.id), 80);
                  }}
                  className="tap justify-start rounded-2xl bg-stone-50 px-4 py-3 text-left text-sm font-medium text-stone-700 ring-1 ring-stone-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

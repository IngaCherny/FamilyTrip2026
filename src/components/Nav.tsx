import { useEffect, useState } from "react";

const PRIMARY = [
  { id: "itinerary", label: "Plan" },
  { id: "map", label: "Map" },
  { id: "places", label: "Places" },
  { id: "stays", label: "Stays" },
];

const SECONDARY = [
  { id: "food", label: "Food & Drink" },
  { id: "tips", label: "Tips" },
  { id: "packing", label: "Packing" },
  { id: "emergency", label: "Emergency" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [more, setMore] = useState(false);
  const [active, setActive] = useState("itinerary");

  useEffect(() => {
    const ids = [...PRIMARY, ...SECONDARY].map((i) => i.id);
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
      {/* Desktop top bar */}
      <nav className="sticky top-0 z-40 hidden border-b border-stone-100 bg-stone-50/85 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl font-bold text-glacier-700"
          >
            Alpine 2026
          </button>
          <div className="flex items-center gap-1">
            {[...PRIMARY, ...SECONDARY].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`tap rounded-full px-3.5 text-sm font-medium transition-colors ${
                  active === item.id ? "bg-glacier-600 text-white" : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg items-stretch justify-around">
          {PRIMARY.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`tap flex-1 py-3 text-xs font-semibold ${
                active === item.id ? "text-glacier-600" : "text-stone-500"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => setMore(true)} className="tap flex-1 py-3 text-xs font-semibold text-stone-500">
            More
          </button>
        </div>
      </nav>

      {/* Mobile "More" sheet */}
      {more && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 md:hidden" onClick={() => setMore(false)}>
          <div className="w-full rounded-t-3xl bg-white p-4 pb-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold">More</h3>
              <button onClick={() => setMore(false)} className="tap rounded-full px-3 text-sm font-medium text-stone-500">
                Close
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
                  className="card-paper tap justify-start px-4 py-3 text-left text-sm font-medium text-stone-700"
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

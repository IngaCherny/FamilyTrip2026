import { useEffect, useMemo, useState } from "react";
import Section from "./Section";
import { PACKING } from "../data/packing";

const KEY = "alpine2026.packing";

export default function Packing() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked]);

  const { total, done } = useMemo(() => {
    const all = PACKING.flatMap((g) => g.items);
    return { total: all.length, done: all.filter((i) => checked[i]).length };
  }, [checked]);

  const toggle = (item: string) => setChecked((p) => ({ ...p, [item]: !p[item] }));
  const reset = () => setChecked({});

  return (
    <Section
      id="packing"
      kicker="Don't Forget"
      title="Packing & Checklist"
      intro="Tap to tick things off, your progress saves on this device."
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-meadow-500 transition-all"
            style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
          />
        </div>
        <span className="text-sm font-semibold text-stone-600">
          {done}/{total}
        </span>
        <button onClick={reset} className="tap rounded-full px-3 text-sm font-medium text-stone-500 ring-1 ring-stone-200">
          Reset
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PACKING.map((group) => (
          <div key={group.group} className="card-paper p-4">
            <h3 className="mb-2 font-serif text-lg font-bold text-stone-900">{group.group}</h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const on = !!checked[item];
                return (
                  <li key={item}>
                    <button
                      onClick={() => toggle(item)}
                      className="flex w-full items-center gap-2.5 rounded-lg py-1.5 text-left text-sm"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${
                          on ? "border-meadow-500 bg-meadow-500 text-white" : "border-stone-300 bg-white text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={on ? "text-stone-400 line-through" : "text-stone-700"}>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

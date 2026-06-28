import { Phone, ShieldAlert } from "lucide-react";
import Section from "./Section";
import { EMERGENCY, EMERGENCY_NOTES } from "../data/emergency";

export default function Emergency() {
  return (
    <Section
      id="emergency"
      kicker="Just in Case"
      title="Emergency Info"
      intro="112 works everywhere in Austria, Italy and Germany. Keep this handy and save it offline."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {EMERGENCY.map((e) => (
          <a
            key={e.label}
            href={`tel:${e.value.replace(/\s/g, "")}`}
            className="card-paper flex items-center gap-3 p-4 ring-1 ring-stone-100 transition-shadow hover:shadow-lg"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunset-200 text-sunset-600">
              <Phone size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-stone-900">
                {e.label} <span className="font-serif text-lg text-sunset-600">{e.value}</span>
              </p>
              {e.note && <p className="text-sm text-stone-500">{e.note}</p>}
            </div>
          </a>
        ))}
      </div>

      <div className="card-paper mt-4 p-4">
        <h3 className="mb-2 flex items-center gap-2 font-semibold text-stone-900">
          <ShieldAlert size={18} className="text-sunset-600" /> Before you need it
        </h3>
        <ul className="space-y-1.5">
          {EMERGENCY_NOTES.map((n) => (
            <li key={n} className="flex gap-2 text-sm text-stone-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset-400" /> {n}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

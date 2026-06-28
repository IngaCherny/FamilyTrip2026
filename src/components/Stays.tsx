import { motion } from "framer-motion";
import Section from "./Section";
import { STAYS } from "../data/stays";
import { regionById } from "../data/trip";
import { mapLinks, formatShort } from "../lib/format";

export default function Stays() {
  return (
    <Section
      id="stays"
      kicker="Home Base"
      title="Where We Stay"
      intro="Four bases over fifteen nights, each pinned to its real address. Tap Maps or Waze to navigate, or the airport chip for driving directions from Munich."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {STAYS.map((s, i) => {
          const region = regionById(s.region);
          const links = mapLinks(s.coords, s.name);
          return (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 2) * 0.05 }}
              className="card-paper flex flex-col p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="kicker">
                    {region.flag} {region.name}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-stone-900">{s.name}</h3>
                  <p className="text-sm text-stone-500">
                    {s.town}, {s.country}
                  </p>
                  {s.address && <p className="mt-0.5 text-xs text-stone-400">{s.address}</p>}
                </div>
                <span className="shrink-0 rounded-full bg-glacier-50 px-3 py-1 text-sm font-semibold text-glacier-700">
                  {s.nights} nights
                </span>
              </div>

              <p className="mt-3 text-sm text-stone-600">{s.description}</p>

              <p className="mt-3 text-sm font-medium text-stone-700">
                {formatShort(s.checkIn)} to {formatShort(s.checkOut)}
              </p>

              {s.driveFromAirport && (
                <a
                  href={s.driveFromAirport.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center gap-2 rounded-xl bg-glacier-50 px-3 py-2 text-sm text-glacier-700 transition-colors hover:bg-glacier-100"
                >
                  <span className="font-medium">{s.driveFromAirport.duration} from Munich Airport</span>
                  <span className="text-glacier-600/70">· {s.driveFromAirport.distance}</span>
                  <span className="ms-auto font-semibold underline underline-offset-2">Directions</span>
                </a>
              )}

              <ul className="mt-3 space-y-1">
                {s.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-stone-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meadow-400" /> {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-4 border-t border-stone-100 pt-3 text-sm font-medium text-glacier-600">
                <a href={links.google} target="_blank" rel="noreferrer">
                  Maps
                </a>
                <a href={links.waze} target="_blank" rel="noreferrer">
                  Waze
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

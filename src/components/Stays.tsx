import { motion } from "framer-motion";
import { BedDouble, CalendarCheck, ExternalLink, Navigation, MapPin } from "lucide-react";
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
      intro="Four bases over fifteen nights. Coordinates are approximate town centres — swap in the exact addresses once your bookings confirm."
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
                  <span className="kicker">{region.flag} {region.name}</span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-stone-900">{s.name}</h3>
                  <p className="flex items-center gap-1 text-sm text-stone-500">
                    <MapPin size={14} /> {s.town}, {s.country}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-glacier-50 px-3 py-1 text-sm font-semibold text-glacier-700">
                  <BedDouble size={15} /> {s.nights}n
                </span>
              </div>

              <p className="mt-3 text-sm text-stone-600">{s.description}</p>

              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-stone-700">
                <CalendarCheck size={15} className="text-meadow-500" />
                {formatShort(s.checkIn)} → {formatShort(s.checkOut)}
              </p>

              <ul className="mt-3 space-y-1">
                {s.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-stone-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meadow-400" /> {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-4 border-t border-stone-100 pt-3 text-sm font-medium text-glacier-600">
                <a href={links.google} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                  <ExternalLink size={14} /> Maps
                </a>
                <a href={links.waze} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                  <Navigation size={14} /> Waze
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

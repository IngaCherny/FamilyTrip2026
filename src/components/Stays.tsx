import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "./Section";
import SmartImage from "./SmartImage";
import Gallery from "./Gallery";
import { STAYS } from "../data/stays";
import { regionById } from "../data/trip";
import { mapLinks, formatShort, imageUrl } from "../lib/format";

export default function Stays() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setOpenIds((cur) => {
      const next = new Set(cur);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <Section
      id="stays"
      kicker="Home Base"
      title="Where We Stay"
      intro="Four bases over fifteen nights, each pinned to its real address. Tap a stay for dates, directions and what makes it handy."
    >
      <div className="grid items-start gap-4 md:grid-cols-2">
        {STAYS.map((s, i) => {
          const region = regionById(s.region);
          const links = mapLinks(s.coords, s.name);
          const open = openIds.has(s.id);
          const overlay = (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
              <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                {s.nights} nights
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
                <div className="glass-cap max-w-[80%] rounded-xl px-3 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">{region.name}</span>
                  <h3 className="font-serif text-base font-bold leading-snug text-white sm:text-lg">{s.name}</h3>
                  <p className="text-[11px] text-white/85">
                    {s.town}, {s.country}
                  </p>
                </div>
                <span className="glass-cap flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                  <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                </span>
              </div>
            </>
          );
          return (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 2) * 0.05 }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200/70"
            >
              {s.images && s.images.length > 1 ? (
                <Gallery
                  images={s.images}
                  alt={s.name}
                  heightClass="h-52 sm:h-56"
                  onTap={() => toggle(s.id)}
                  overlay={overlay}
                />
              ) : (
                <button onClick={() => toggle(s.id)} className="block w-full text-left">
                  <SmartImage
                    src={imageUrl(s.image, 1200)}
                    wiki={region.wiki}
                    alt={s.name}
                    big
                    className="h-52 w-full sm:h-56"
                  >
                    {overlay}
                  </SmartImage>
                </button>
              )}

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 border-t border-stone-100 p-4">
                      {s.address && <p className="text-xs text-stone-400">{s.address}</p>}

                      <p className="text-sm text-stone-600">{s.description}</p>

                      <p className="text-sm font-medium text-stone-700">
                        {formatShort(s.checkIn)} to {formatShort(s.checkOut)}
                      </p>

                      {s.driveFromAirport && (
                        <a
                          href={s.driveFromAirport.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-xl bg-glacier-50 px-3 py-2 text-sm text-glacier-700 transition-colors hover:bg-glacier-100"
                        >
                          <span className="font-medium">{s.driveFromAirport.duration} from Munich Airport</span>
                          <span className="text-glacier-600/70">· {s.driveFromAirport.distance}</span>
                          <span className="ms-auto font-semibold underline underline-offset-2">Directions</span>
                        </a>
                      )}

                      <ul className="space-y-1">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm text-stone-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meadow-400" /> {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4 border-t border-stone-100 pt-3 text-sm font-medium text-glacier-600">
                        <a href={links.google} target="_blank" rel="noreferrer">
                          Maps
                        </a>
                        <a href={links.waze} target="_blank" rel="noreferrer">
                          Waze
                        </a>
                        {s.link && (
                          <a href={s.link} target="_blank" rel="noreferrer" className="font-semibold">
                            Hotel site
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

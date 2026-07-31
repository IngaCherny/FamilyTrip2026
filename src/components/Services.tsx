import { motion } from "framer-motion";
import Section from "./Section";
import { SERVICE_BASES, SERVICE_CATEGORIES, serviceSearchUrl } from "../data/services";
import { regionById } from "../data/trip";
import { useLang } from "../lib/i18n";

export default function Services() {
  const { lang } = useLang();
  const he = lang === "he";

  return (
    <Section
      id="services"
      kicker="Handy on the road"
      title="Services Near Base"
      intro="One tap to the nearest supermarket, pharmacy, petrol, playground, cash or hospital around each base — opens a live Google Maps search, so it's always up to date."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {SERVICE_BASES.map((base, i) => (
          <motion.div
            key={base.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (i % 2) * 0.05 }}
            className="card-paper p-4"
          >
            <div className="mb-3">
              <span className="kicker">{regionById(base.region)?.name ?? ""}</span>
              <h3 className="font-serif text-lg font-bold text-stone-900">{base.name}</h3>
              <p className="text-xs text-stone-400">{base.town}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SERVICE_CATEGORIES.map((c) => (
                <a
                  key={c.id}
                  href={serviceSearchUrl(c.query, base.town)}
                  target="_blank"
                  rel="noreferrer"
                  className="tap flex items-center gap-2 rounded-xl bg-stone-50 px-3 py-2.5 text-sm font-medium text-stone-700 ring-1 ring-stone-200 hover:bg-white"
                >
                  <span aria-hidden className="text-base">{c.emoji}</span>
                  <span>{he ? c.labelHe : c.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

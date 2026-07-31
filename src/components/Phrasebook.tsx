import { motion } from "framer-motion";
import Section from "./Section";
import ListenButton from "./ListenButton";
import { PHRASES } from "../data/phrases";
import { useLang } from "../lib/i18n";

export default function Phrasebook() {
  const { lang } = useLang();
  const he = lang === "he";

  return (
    <Section
      id="phrasebook"
      kicker="A little language"
      title="Family Phrasebook"
      intro="The handful of German (Austria & South Tyrol) and Italian words that get you a long way. Tap 🔊 to hear how each one sounds."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {PHRASES.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (i % 2) * 0.05 }}
            className="card-paper p-4"
          >
            <h3 className="mb-3 font-serif text-lg font-bold text-stone-900">{he ? g.groupHe : g.group}</h3>
            <ul className="divide-y divide-stone-100">
              {g.items.map((p) => (
                <li key={p.de + p.it} className="py-2.5">
                  <p className="text-sm font-medium text-stone-500">{he ? p.he : p.en}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-stone-500">DE</span>
                      <span className="font-semibold text-stone-800">{p.de}</span>
                      <ListenButton text={p.de} lang="de-DE" />
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-stone-500">IT</span>
                      <span className="font-semibold text-stone-800">{p.it}</span>
                      <ListenButton text={p.it} lang="it-IT" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

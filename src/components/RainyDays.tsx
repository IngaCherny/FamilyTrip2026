import { motion } from "framer-motion";
import { Umbrella } from "lucide-react";
import Section from "./Section";
import SmartImage from "./SmartImage";
import { ATTRACTIONS } from "../data/attractions";
import { PARTY, regionById } from "../data/trip";
import { familyCost, formatFamilyCost, formatPrice, imageUrl, mapLinks } from "../lib/format";
import { useLang } from "../lib/i18n";

// The two Austrian bases this covers, in order. South Tyrol and Munich are left
// out on purpose — this is the "what do we do if it rains here" list.
const REGIONS = ["wilderkaiser", "oetz"] as const;

export default function RainyDays() {
  const { tc } = useLang();

  return (
    <Section
      id="rainy"
      kicker="Wet-weather plan"
      title="Rainy Days"
      intro="Indoor pools and dry-weather options around the first two bases — with what your guest cards already cover, so a grey morning doesn't cost extra."
    >
      {/* Summer-card reminder */}
      <div className="mb-6 flex items-start gap-3 rounded-2xl bg-glacier-50 p-4 ring-1 ring-glacier-100">
        <Umbrella size={20} strokeWidth={1.8} className="mt-0.5 shrink-0 text-glacier-600" />
        <p className="text-sm text-glacier-800">
          {tc(
            "Your Ötztal hotel includes the Ötztal Inside Summer Card and your Wilder Kaiser hotel gives you the free St. Johann Card — both cover pools and lifts. Carry them and show them at the door."
          )}
        </p>
      </div>

      {REGIONS.map((rid) => {
        const region = regionById(rid);
        const spots = ATTRACTIONS.filter((a) => a.indoor && a.region === rid);
        if (spots.length === 0) return null;
        return (
          <div key={rid} className="mb-8">
            <h3 className="mb-3 font-serif text-xl font-bold text-stone-900">{tc(region.name)}</h3>
            <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {spots.map((a, i) => {
                const cost = familyCost(a.price, PARTY);
                const total = formatFamilyCost(cost, tc);
                const priceText = formatPrice(a.price, tc);
                const links = mapLinks(a.coords, a.name);
                return (
                  <motion.article
                    key={a.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                    className="card-paper overflow-hidden p-0"
                  >
                    <SmartImage src={imageUrl(a.image, 600)} wiki={a.wiki} alt={a.name} big className="h-36 w-full" />
                    <div className="p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-glacier-100 px-2.5 py-0.5 text-[11px] font-semibold text-glacier-700">
                          {tc("Indoor")}
                        </span>
                        {total && total === tc("Free for all of us") && (
                          <span className="rounded-full bg-meadow-100 px-2.5 py-0.5 text-[11px] font-bold text-meadow-700">
                            {total}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-2 font-serif text-lg font-bold text-stone-900">{tc(a.name)}</h4>
                      <p className="mt-1 text-sm text-stone-600">{tc(a.description)}</p>
                      {priceText && <p className="mt-2 text-xs text-stone-500">{priceText}</p>}
                      <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                        {a.link && (
                          <a href={a.link} target="_blank" rel="noreferrer" className="text-glacier-600 underline underline-offset-2">
                            {tc("Official site")}
                          </a>
                        )}
                        <a href={links.google} target="_blank" rel="noreferrer" className="text-glacier-600 underline underline-offset-2">
                          {tc("Maps")}
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        );
      })}
    </Section>
  );
}

import { motion } from "framer-motion";
import { UtensilsCrossed, Cake, Wine } from "lucide-react";
import Section from "./Section";
import { DISHES } from "../data/food";
import type { Dish } from "../lib/types";

const KIND_META: Record<Dish["kind"], { icon: typeof UtensilsCrossed; className: string; label: string }> = {
  savoury: { icon: UtensilsCrossed, className: "bg-sunset-200 text-sunset-600", label: "Savoury" },
  sweet: { icon: Cake, className: "bg-meadow-100 text-meadow-700", label: "Sweet" },
  drink: { icon: Wine, className: "bg-glacier-100 text-glacier-700", label: "Drink" },
};

export default function Food() {
  return (
    <Section
      id="food"
      kicker="Eat & Drink"
      title="Food & Drink"
      intro="The flavours of Tyrol and South Tyrol — what to order at the hut, the table and the bar."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DISHES.map((d, i) => {
          const meta = KIND_META[d.kind];
          const Icon = meta.icon;
          return (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
              className="card-paper p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${meta.className}`}>
                  <Icon size={12} /> {meta.label}
                </span>
                <span className="text-xs text-stone-400">{d.origin}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">{d.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{d.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

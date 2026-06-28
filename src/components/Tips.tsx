import { Lightbulb } from "lucide-react";
import Section from "./Section";
import { TIPS } from "../data/tips";

export default function Tips() {
  return (
    <Section
      id="tips"
      kicker="Good to Know"
      title="Trip Tips"
      intro="Driving, tolls, mountain weather and the little things that make three countries in two weeks run smoothly."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {TIPS.map((t) => (
          <div key={t.title} className="card-paper flex gap-3 p-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sunset-200 text-sunset-600">
              <Lightbulb size={18} />
            </span>
            <div>
              <h3 className="font-semibold text-stone-900">{t.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

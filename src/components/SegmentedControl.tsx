import { motion } from "framer-motion";

export interface Segment {
  id: string;
  label: string;
}

/**
 * An iOS-style segmented control on a frosted-glass track: a single solid pill
 * slides to the active segment. Shared so every filter row reads the same.
 */
export default function SegmentedControl({
  segments,
  value,
  onChange,
  layoutId,
  className,
}: {
  segments: Segment[];
  value: string;
  onChange: (id: string) => void;
  /** Unique id for the sliding pill's shared-layout animation. */
  layoutId: string;
  className?: string;
}) {
  return (
    <div className={`no-scrollbar -mx-4 overflow-x-auto px-4 ${className ?? ""}`}>
      <div className="glass inline-flex gap-1 rounded-full p-1">
        {segments.map((s) => {
          const active = value === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onChange(s.id)}
              className={`tap relative whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active ? "text-white" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {active && (
                <motion.span
                  layoutId={layoutId}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-glacier-600 shadow-sm"
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

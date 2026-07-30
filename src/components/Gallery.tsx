import { useRef, useState } from "react";
import { imageUrl } from "../lib/format";

/**
 * A swipe-through photo gallery: horizontal scroll-snap frames with dot
 * indicators, no timers. Renders nothing for zero images and a single static
 * photo for one, so callers can pass whatever an attraction has.
 */
export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  if (!images.length) return null;

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setI(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl"
      >
        {images.map((src, n) => (
          <img
            key={src}
            src={imageUrl(src, 1200)}
            alt={`${alt} — photo ${n + 1}`}
            loading="lazy"
            className="h-52 w-full shrink-0 snap-center object-cover sm:h-60"
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {images.map((_, n) => (
            <span
              key={n}
              className={`h-1.5 rounded-full transition-all ${
                n === i ? "w-4 bg-white" : "w-1.5 bg-white/60"
              }`}
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,.4)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

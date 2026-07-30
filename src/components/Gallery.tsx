import { useRef, useState, type ReactNode } from "react";
import { imageUrl } from "../lib/format";

/**
 * A swipe-through photo strip: horizontal scroll-snap frames with dot
 * indicators, no timers. Works as a plain gallery or as a tappable tile —
 * pass `onTap` and a swipe still scrolls while a tap opens (the browser
 * suppresses the click after a drag). An `overlay` sits on top without
 * blocking either gesture.
 */
export default function Gallery({
  images,
  alt,
  heightClass = "h-52 sm:h-60",
  onTap,
  overlay,
}: {
  images: string[];
  alt: string;
  heightClass?: string;
  onTap?: () => void;
  overlay?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  if (!images.length) return null;

  const onScroll = () => {
    const el = ref.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative">
      <div ref={ref} onScroll={onScroll} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {images.map((src, n) => (
          <img
            key={src}
            src={imageUrl(src, 1200)}
            alt={`${alt}${images.length > 1 ? ` — photo ${n + 1}` : ""}`}
            loading="lazy"
            onClick={onTap}
            className={`w-full shrink-0 snap-center object-cover ${heightClass}`}
          />
        ))}
      </div>

      {overlay && <div className="pointer-events-none absolute inset-0">{overlay}</div>}

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {images.map((_, n) => (
            <span
              key={n}
              className={`h-1.5 rounded-full transition-all ${n === i ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,.45)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

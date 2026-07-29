import { useEffect, useState, type ReactNode } from "react";
import { useWikiImage } from "../lib/useWikiImage";

/**
 * Shows a real photo with a graceful fallback chain: a pinned `src` first, then
 * the Wikipedia lead image for `wiki`, then a gradient. The chain matters
 * because a pinned photo is hand-picked and can rot (a Commons file gets
 * renamed); when that happens we quietly drop back to the article photo rather
 * than showing an empty card.
 */
export default function SmartImage({
  wiki,
  src,
  alt,
  big,
  className,
  overlay,
  children,
}: {
  wiki?: string;
  /** A pinned photo that wins over the Wikipedia lookup. */
  src?: string;
  alt: string;
  big?: boolean;
  className?: string;
  /** Add a dark gradient over the image (for text legibility). */
  overlay?: boolean;
  children?: ReactNode;
}) {
  const wikiImg = useWikiImage(wiki, { big });
  const [srcFailed, setSrcFailed] = useState(false);
  const [wikiFailed, setWikiFailed] = useState(false);

  // A new pinned photo deserves a fresh attempt.
  useEffect(() => setSrcFailed(false), [src]);
  useEffect(() => setWikiFailed(false), [wikiImg?.src]);

  const pinned = src && !srcFailed ? src : undefined;
  const fallback = wikiImg?.src && !wikiFailed ? wikiImg.src : undefined;
  const resolved = pinned ?? fallback;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-glacier-200 via-meadow-200 to-sunset-200 ${
        className ?? ""
      }`}
    >
      {resolved && (
        <img
          key={resolved}
          src={resolved}
          alt={alt}
          loading="lazy"
          onError={() => (resolved === pinned ? setSrcFailed(true) : setWikiFailed(true))}
          className="h-full w-full object-cover"
        />
      )}
      {!resolved && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Simple mountain glyph as the fallback motif. */}
          <svg viewBox="0 0 64 40" className="h-12 w-12 text-white/70" fill="currentColor" aria-hidden>
            <path d="M2 38 L22 8 L34 26 L42 16 L62 38 Z" />
          </svg>
        </div>
      )}
      {overlay && resolved && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      )}
      {children}
    </div>
  );
}

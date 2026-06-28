import { useState, type ReactNode } from "react";
import { useWikiImage } from "../lib/useWikiImage";

/**
 * Shows a real photo (from an explicit src or a Wikipedia title) with a graceful
 * gradient fallback while loading or if the image is missing / fails.
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
  src?: string;
  alt: string;
  big?: boolean;
  className?: string;
  /** Add a dark gradient over the image (for text legibility). */
  overlay?: boolean;
  children?: ReactNode;
}) {
  const wikiImg = useWikiImage(wiki, { big });
  const resolved = src ?? wikiImg?.src;
  const [failed, setFailed] = useState(false);
  const show = resolved && !failed;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-glacier-200 via-meadow-200 to-sunset-200 ${className ?? ""}`}>
      {show && (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Simple mountain glyph as the fallback motif. */}
          <svg viewBox="0 0 64 40" className="h-12 w-12 text-white/70" fill="currentColor" aria-hidden>
            <path d="M2 38 L22 8 L34 26 L42 16 L62 38 Z" />
          </svg>
        </div>
      )}
      {overlay && show && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      )}
      {children}
    </div>
  );
}

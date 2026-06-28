import { useEffect, useState } from "react";

export interface WikiImage {
  src: string;
  pageUrl: string;
  title: string;
}

// Module-level cache so each title is fetched once per session.
const cache = new Map<string, WikiImage | null>();
const inflight = new Map<string, Promise<WikiImage | null>>();

const SS_KEY = "alpine2026.wikiimg.v1";

function loadSession(): Record<string, WikiImage | null> {
  try {
    return JSON.parse(sessionStorage.getItem(SS_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveSession(map: Record<string, WikiImage | null>) {
  try {
    sessionStorage.setItem(SS_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

// Seed the in-memory cache from sessionStorage on first import.
const seeded = loadSession();
for (const [k, v] of Object.entries(seeded)) cache.set(k, v);

async function fetchWikiImage(title: string, lang: string, big: boolean): Promise<WikiImage | null> {
  const key = `${lang}:${big ? "L" : "S"}:${title}`;
  if (cache.has(key)) return cache.get(key)!;
  if (inflight.has(key)) return inflight.get(key)!;

  const p = (async () => {
    try {
      const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        title
      )}?redirect=true`;
      const res = await fetch(url, { headers: { accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      const src: string | undefined = big
        ? data?.originalimage?.source ?? data?.thumbnail?.source
        : data?.thumbnail?.source ?? data?.originalimage?.source;
      const result: WikiImage | null = src
        ? { src, pageUrl: data?.content_urls?.desktop?.page ?? "", title: data?.title ?? title }
        : null;
      cache.set(key, result);
      const sess = loadSession();
      sess[key] = result;
      saveSession(sess);
      return result;
    } catch {
      cache.set(key, null);
      return null;
    } finally {
      inflight.delete(key);
    }
  })();

  inflight.set(key, p);
  return p;
}

/**
 * Fetch a representative photo for a place from Wikipedia (CORS-enabled REST
 * API). Returns null while loading or if nothing is found, so callers can show
 * a graceful fallback.
 */
export function useWikiImage(title?: string, opts?: { lang?: string; big?: boolean }): WikiImage | null {
  const lang = opts?.lang ?? "en";
  const big = opts?.big ?? false;
  const key = title ? `${lang}:${big ? "L" : "S"}:${title}` : "";
  const [img, setImg] = useState<WikiImage | null>(() => (key && cache.has(key) ? cache.get(key)! : null));

  useEffect(() => {
    let alive = true;
    if (!title) {
      setImg(null);
      return;
    }
    if (cache.has(key)) {
      setImg(cache.get(key)!);
      return;
    }
    fetchWikiImage(title, lang, big).then((r) => {
      if (alive) setImg(r);
    });
    return () => {
      alive = false;
    };
  }, [title, lang, big, key]);

  return img;
}

/**
 * The option the user has chosen for each day, keyed by ISO date. Shared by the
 * Itinerary (where you pick) and the Today card (which reflects the pick), and
 * persisted so a choice survives a reload.
 */
const KEY = "alpine2026.picks.v1";
const EVENT = "alpine2026:picks-changed";

export function loadPicks(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function savePick(date: string, title: string): Record<string, string> {
  const next = { ...loadPicks(), [date]: title };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  // Let other mounted views (the Today card) update immediately.
  window.dispatchEvent(new CustomEvent(EVENT));
  return next;
}

/** Subscribe to pick changes, from this tab or another. Returns an unsubscribe. */
export function onPicksChanged(fn: () => void): () => void {
  const handler = () => fn();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

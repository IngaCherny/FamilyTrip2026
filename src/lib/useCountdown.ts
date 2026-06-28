import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBefore: boolean;
  isDuring: boolean;
  isAfter: boolean;
  /** Which trip day are we on (1-based) during the trip, else null. */
  tripDay: number | null;
}

export function useCountdown(startISO: string, endISO: string): Countdown {
  const compute = (): Countdown => {
    const now = Date.now();
    const start = new Date(startISO + "T00:00:00").getTime();
    // End date is the departure day, treat the trip as running through its end.
    const end = new Date(endISO + "T23:59:59").getTime();

    const isBefore = now < start;
    const isAfter = now > end;
    const isDuring = !isBefore && !isAfter;

    const target = isBefore ? start : end;
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86_400_000);
    const hours = Math.floor((diff % 86_400_000) / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000) / 60_000);
    const seconds = Math.floor((diff % 60_000) / 1000);

    let tripDay: number | null = null;
    if (isDuring) {
      tripDay = Math.floor((now - start) / 86_400_000) + 1;
    }

    return { days, hours, minutes, seconds, isBefore, isDuring, isAfter, tripDay };
  };

  const [state, setState] = useState<Countdown>(compute);

  useEffect(() => {
    const id = window.setInterval(() => setState(compute()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startISO, endISO]);

  return state;
}

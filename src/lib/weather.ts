/**
 * Live weather for a location, from Open-Meteo — free, keyless and CORS-enabled,
 * so it works from a static site with no secret to leak. The service worker
 * caches the response, so the last reading still shows when offline on the trail.
 */
export interface DayForecast {
  date: string;
  max: number;
  min: number;
  code: number;
}

export interface Weather {
  current: number;
  code: number;
  text: string;
  max: number;
  min: number;
  /** Several days ahead, for the expandable forecast. */
  daily: DayForecast[];
}

/** Short description for a WMO weather code. */
export function describeCode(code: number): string {
  if (code === 0) return "Clear";
  if (code <= 2) return "Mostly sunny";
  if (code === 3) return "Overcast";
  if (code <= 48) return "Fog";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Showers";
  if (code <= 86) return "Snow showers";
  return "Thunderstorms";
}

export async function fetchWeather([lat, lng]: [number, number], signal?: AbortSignal): Promise<Weather> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
    `&current=temperature_2m,weather_code` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
    `&timezone=auto&forecast_days=6`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(String(res.status));
  const d = await res.json();
  const code = d?.current?.weather_code ?? d?.daily?.weather_code?.[0] ?? 0;
  const dates: string[] = d?.daily?.time ?? [];
  const daily: DayForecast[] = dates.map((date, idx) => ({
    date,
    max: Math.round(d?.daily?.temperature_2m_max?.[idx] ?? 0),
    min: Math.round(d?.daily?.temperature_2m_min?.[idx] ?? 0),
    code: d?.daily?.weather_code?.[idx] ?? 0,
  }));
  return {
    current: Math.round(d?.current?.temperature_2m ?? d?.daily?.temperature_2m_max?.[0] ?? 0),
    code,
    text: describeCode(code),
    max: Math.round(d?.daily?.temperature_2m_max?.[0] ?? 0),
    min: Math.round(d?.daily?.temperature_2m_min?.[0] ?? 0),
    daily,
  };
}

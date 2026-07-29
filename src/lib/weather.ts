/**
 * Live weather for a location, from Open-Meteo — free, keyless and CORS-enabled,
 * so it works from a static site with no secret to leak. The service worker
 * caches the response, so the last reading still shows when offline on the trail.
 */
export interface Weather {
  current: number;
  max: number;
  min: number;
  emoji: string;
  text: string;
}

/** Map a WMO weather code to an emoji and a short description. */
function describe(code: number): { emoji: string; text: string } {
  if (code === 0) return { emoji: "☀️", text: "Clear" };
  if (code <= 2) return { emoji: "🌤️", text: "Mostly sunny" };
  if (code === 3) return { emoji: "☁️", text: "Overcast" };
  if (code <= 48) return { emoji: "🌫️", text: "Fog" };
  if (code <= 57) return { emoji: "🌦️", text: "Drizzle" };
  if (code <= 67) return { emoji: "🌧️", text: "Rain" };
  if (code <= 77) return { emoji: "🌨️", text: "Snow" };
  if (code <= 82) return { emoji: "🌦️", text: "Showers" };
  if (code <= 86) return { emoji: "🌨️", text: "Snow showers" };
  return { emoji: "⛈️", text: "Thunderstorms" };
}

export async function fetchWeather([lat, lng]: [number, number], signal?: AbortSignal): Promise<Weather> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
    `&current=temperature_2m,weather_code` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
    `&timezone=auto&forecast_days=1`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(String(res.status));
  const d = await res.json();
  const code = d?.current?.weather_code ?? d?.daily?.weather_code?.[0] ?? 0;
  return {
    current: Math.round(d?.current?.temperature_2m ?? d?.daily?.temperature_2m_max?.[0] ?? 0),
    max: Math.round(d?.daily?.temperature_2m_max?.[0] ?? 0),
    min: Math.round(d?.daily?.temperature_2m_min?.[0] ?? 0),
    ...describe(code),
  };
}

import type { Region } from "../lib/types";

export const TRIP = {
  title: "Alpine Summer",
  year: 2026,
  subtitle: "Wilder Kaiser · Ötztal · South Tyrol · Munich",
  startDate: "2026-08-13",
  endDate: "2026-08-28",
  nights: 15,
  tagline: "Two weeks across the Tyrolean and Dolomite Alps, meadows, lakes, cable cars and Knödel.",
  /** Wikipedia title used for the full-bleed hero photo. */
  heroWiki: "Seiser Alm",
};

export const REGIONS: Region[] = [
  {
    id: "wilderkaiser",
    name: "Wilder Kaiser",
    country: "Austria",
    flag: "🇦🇹",
    center: [47.5106, 12.2939],
    wiki: "Wilder Kaiser",
    blurb:
      "Jagged limestone peaks above flower meadows in the Tyrolean Kitzbühel Alps. Our first base, at Apartment Streif.",
  },
  {
    id: "oetz",
    name: "Ötz / Ötztal",
    country: "Austria",
    flag: "🇦🇹",
    center: [47.2017, 10.8975],
    wiki: "Ötztal",
    blurb:
      "The valley of the Iceman, glaciers, thermal spas and waterfalls running down from the highest paved road in the Alps.",
  },
  {
    id: "southtyrol",
    name: "South Tyrol",
    country: "Italy",
    flag: "🇮🇹",
    center: [46.78, 11.85],
    wiki: "Pragser Wildsee",
    blurb:
      "Where the Alps speak German and eat Italian. Based in Val Pusteria near Kronplatz, apple orchards, Dolomite spires and the famous Hugo spritz.",
  },
  {
    id: "munich",
    name: "Munich",
    country: "Germany",
    flag: "🇩🇪",
    center: [48.3538, 11.7861],
    wiki: "Marienplatz",
    blurb: "A last Bavarian night by the airport before the flight home.",
  },
];

export const regionById = (id: string) => REGIONS.find((r) => r.id === id)!;

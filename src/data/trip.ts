import type { Party, Region } from "../lib/types";

export const TRIP = {
  title: "Alpine Summer",
  year: 2026,
  subtitle: "Wilder Kaiser · Ötztal · South Tyrol",
  startDate: "2026-08-13",
  endDate: "2026-08-28",
  nights: 15,
  tagline: "Two weeks across the Tyrolean and Dolomite Alps, meadows, lakes, cable cars and Knödel.",
  /** Wikipedia title used for the full-bleed hero photo. */
  heroWiki: "Seiser Alm",
  /**
   * Pinned hero photo, winning over `heroWiki`. Full URL or a Wikimedia
   * Commons file name, e.g. "Alpe di Siusi in summer.jpg". Set this if the
   * article's lead image ever turns up snowy.
   */
  heroImage: undefined as string | undefined,
};

/**
 * Who is travelling. Ages matter more than headcount: most lifts and pools let
 * small children in free, and the cut-off moves between operators, so each
 * price can state its own. Update the ages if the trip ever moves year.
 */
export const PARTY: Party = {
  adults: 2,
  childAges: [2, 6, 8],
  // Under-3s go free virtually everywhere, so this is the safe assumption for
  // any place whose own rule we have not confirmed.
  defaultFreeUnder: 3,
};

/** Prices in the data were checked against published 2025/26 rates. */
export const PRICES_CHECKED = "2025/26 rates";

export const REGIONS: Region[] = [
  {
    id: "wilderkaiser",
    name: "Wilder Kaiser",
    country: "Austria",
    center: [47.5106, 12.2939],
    // The range's own article leads with a snow shot; the lake beneath its
    // walls says "August" instead. Pin `image` to override either of them.
    wiki: "Hintersteiner See",
    blurb:
      "Jagged limestone peaks above flower meadows in the Tyrolean Kitzbühel Alps. Our first base, at Apartment Streif.",
  },
  {
    id: "oetz",
    name: "Ötz / Ötztal",
    country: "Austria",
    center: [47.2017, 10.8975],
    // The valley article leans glacier and snow; the warm bathing lake above
    // Oetz is the summer face of the same valley.
    wiki: "Piburger See",
    blurb:
      "The valley of the Iceman, glaciers, thermal spas and waterfalls running down from the highest paved road in the Alps.",
  },
  {
    id: "southtyrol",
    name: "South Tyrol",
    country: "Italy",
    center: [46.78, 11.85],
    // Braies is a summer lake but is usually shot against snowy peaks. A
    // botanical garden cannot be wintry, and it is unmistakably South Tyrolean.
    wiki: "Gardens of Trauttmansdorff Castle",
    blurb:
      "Where the Alps speak German and eat Italian. Based in Val Pusteria near Kronplatz, apple orchards, Dolomite spires and the famous Hugo spritz.",
  },
  {
    id: "munich",
    name: "Munich Airport",
    country: "Germany",
    center: [48.3538, 11.7861],
    // Not a sightseeing destination: we only land and depart here.
    hidden: true,
    blurb: "Just the airport: land on the way in, sleep nearby the last night, fly home.",
  },
];

/** Regions shown as sightseeing destinations (excludes the land/depart airport). */
export const DESTINATIONS: Region[] = REGIONS.filter((r) => !r.hidden);

export const regionById = (id: string) => REGIONS.find((r) => r.id === id)!;

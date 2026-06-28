import type { Stay } from "../lib/types";

// Falkners Five and the Entdecker Hotel addresses are confirmed from their
// official listings. Apartment Streif could not be found publicly — its
// location is still a best guess; update it from your booking confirmation.
export const STAYS: Stay[] = [
  {
    id: "streif",
    name: "Apartment Streif",
    region: "wilderkaiser",
    town: "Wilder Kaiser",
    country: "Austria",
    nights: 4,
    checkIn: "2026-08-13",
    checkOut: "2026-08-17",
    coords: [47.5106, 12.2939],
    approxLocation: true,
    description:
      "Our base for the first four nights, tucked under the Wilder Kaiser massif. Self-catering apartment — ideal for cooking after big mountain days.",
    highlights: [
      "Walk straight out into Kaiser meadows and trails",
      "Close to Ellmau / Söll cable cars",
      "Kitchen for easy family dinners",
    ],
  },
  {
    id: "falkners-five",
    name: "Falkners Five",
    region: "oetz",
    town: "Habichen, Oetz",
    country: "Austria",
    nights: 4,
    checkIn: "2026-08-17",
    checkOut: "2026-08-21",
    coords: [47.2098, 10.8949],
    address: "Habichen 65a, 6433 Oetz, Austria",
    link: "https://www.falkners-five.at/en/",
    description:
      "Four nights in the Ötztal at the mouth of the valley. A handy springboard for Area 47, the Aqua Dome and drives up to Sölden.",
    highlights: [
      "Gateway to the whole Ötztal valley",
      "Minutes from Area 47 water park",
      "Drives to Stuibenfall and Piburger See",
    ],
  },
  {
    id: "entdecker",
    name: "Entdecker Hotel Panorama",
    region: "southtyrol",
    town: "Hofern, Kiens (Val Pusteria)",
    country: "Italy",
    nights: 6,
    checkIn: "2026-08-21",
    checkOut: "2026-08-27",
    coords: [46.801, 11.846],
    address: "Sonnenstraße 11, 39030 Hofern/Kiens, South Tyrol, Italy",
    link: "https://www.entdecker-hotel.com/en",
    description:
      "Six nights — the heart of the trip — in a sunny panoramic spot in Val Pusteria near Kronplatz. A family hotel for slower mornings; ideally placed for the eastern Dolomites (Lago di Braies and Tre Cime are close), with Bolzano and Merano an easy drive west.",
    highlights: [
      "Longest stay — unpack and settle in",
      "Family hotel near Kronplatz / Bruneck",
      "Short hops to Lago di Braies & Tre Cime",
    ],
  },
  {
    id: "muc-hotel",
    name: "Airport Hotel (Munich)",
    region: "munich",
    town: "near Munich Airport (MUC)",
    country: "Germany",
    nights: 1,
    checkIn: "2026-08-27",
    checkOut: "2026-08-28",
    coords: [48.3538, 11.7861],
    description:
      "One last night next to Munich Airport so the morning departure is stress-free. Drop the rental car, repack, sleep close to the terminal.",
    highlights: [
      "Walk / shuttle to the terminal",
      "Return the rental car the evening before",
      "Last Bavarian Brezn and beer",
    ],
  },
];

export const stayById = (id: string) => STAYS.find((s) => s.id === id);

import type { Stay } from "../lib/types";
import { directionsUrl } from "../lib/format";

// All three accommodation addresses are confirmed from their official listings.
export const STAYS: Stay[] = [
  {
    id: "streif",
    name: "Apartment Streif LXL",
    region: "wilderkaiser",
    town: "Gasteig, Kirchdorf in Tirol",
    country: "Austria",
    nights: 4,
    checkIn: "2026-08-13",
    checkOut: "2026-08-17",
    coords: [47.536, 12.397],
    address: "Vorderjägerweg 4, 6382 Kirchdorf in Tirol, Austria",
    link: "https://www.apartment-streif.at/",
    driveFromAirport: {
      duration: "~1 h 45 m",
      distance: "~145 km",
      url: directionsUrl(
        "Munich Airport (MUC)",
        "Apartment Streif LXL, Vorderjägerweg 4, 6382 Kirchdorf in Tirol, Austria"
      ),
    },
    description:
      "Our base for the first four nights, in the Gasteig hamlet at the foot of the Wilder Kaiser near St. Johann in Tirol (~14 km from Kitzbühel). Self-catering apartment with a wellness area, ideal for cooking and unwinding after big mountain days.",
    highlights: [
      "At the foot of the Wilder Kaiser, near St. Johann",
      "Wellness area: sauna, whirlpool, sun terrace",
      "Spacious terrace/balcony and full kitchen",
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
      "Six nights, the heart of the trip, in a sunny panoramic spot in Val Pusteria near Kronplatz. A family hotel for slower mornings; ideally placed for the eastern Dolomites (Lago di Braies and Tre Cime are close), with Bolzano and Merano an easy drive west.",
    highlights: [
      "Longest stay, unpack and settle in",
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

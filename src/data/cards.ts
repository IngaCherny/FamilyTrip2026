import type { GuestCard } from "../lib/types";

/**
 * Guest cards and lift passes worth sorting out at each check-in. With two
 * adults and three children, single tickets add up fast: the Ötztal card alone
 * can cover a day at Area 47 that would otherwise cost well over €100.
 */
export const GUEST_CARDS: GuestCard[] = [
  {
    id: "kitzbuehel-alps-summer-card",
    name: "Kitzbühel Alps Summer Card",
    region: "wilderkaiser",
    kind: "buy",
    summary:
      "One pass for 39 lifts across the Kitzbühel Alps, sold for 2 to 14 days at any cable-car desk. Worth doing the sums on arrival: nearly every paid thing planned for these four days is a lift.",
    includes: [
      "Söll gondola for Hexenwasser",
      "Hartkaiser funicular for Ellmi's Zauberwelt",
      "Brandstadlbahn for KaiserWelt Scheffau",
      "Steinplatte gondola for Triassic Park",
      "Buses on the listed lines, and 10–50% off bonus partners",
    ],
    action:
      "Price it at the first lift desk against the single tickets you would otherwise buy. Up to 50% cheaper if you ride on three or more days.",
    caveat:
      "Children born 2022 or later go free, so the 2 year old should not need a card. Add €2 KeyCard deposit, refunded on return.",
    link: "https://www.kitzbueheler-alpen.com/en/kam/so/summer-card-prices.html",
  },
  {
    id: "oetztal-inside-summer-card",
    name: "Ötztal Inside Summer Card",
    region: "oetz",
    kind: "check",
    summary:
      "The big one. Partner accommodations hand this out free, and it covers most of what is planned for the Ötztal. Ask Falkners Five before booking anything else.",
    includes: [
      "One free up-and-down ride per mountain lift, per day",
      "One entry to the AREA 47 water area",
      "All summer mountain lifts and public buses",
      "Museums and swimming pools at premium partner lodgings",
    ],
    action:
      "Email or ask at check-in whether Falkners Five is an Ötztal Inside partner. If it is, the card is free and Area 47 is already paid for.",
    caveat:
      "Usually valid from the second day of the stay until departure evening. The Aqua Dome is only 15% off in July and August, not free.",
    link: "https://www.oetztal.com/en/oetztal-inside-guest-cards/summer-card",
  },
  {
    id: "suedtirol-guest-pass",
    name: "Südtirol Guest Pass",
    region: "southtyrol",
    kind: "included",
    summary:
      "South Tyrol's digital guest card, included by most accommodations. Free public transport across the whole province, which makes the car optional on lazy days.",
    includes: [
      "Buses and regional trains across South Tyrol",
      "Selected cable cars",
      "Pustertal and Kronplatz region buses",
    ],
    action:
      "Ask the Entdecker Hotel for it at check-in. Validate it at the blue ticket machines by scanning the QR code before you travel.",
    caveat:
      "Only available through participating accommodations, and the extras vary by hotel. Confirm what yours includes rather than assuming.",
    link: "https://www.suedtirol.info/en/en/information/suedtirol-guest-pass",
  },
  {
    id: "alpbachtal-card",
    name: "Alpbachtal Seenland Card",
    region: "wilderkaiser",
    kind: "buy",
    summary:
      "Makes the Reitherkogelbahn free, but only for guests staying in the Alpbachtal. We are only passing through on the transfer day, so this one does not apply.",
    includes: ["Free Reitherkogelbahn for Juppi Zauberwald", "Free travel on the local three summer lifts"],
    action:
      "Nothing to do. Budget the normal fare instead: about €12 adult and €6 child return for Juppi Zauberwald.",
    caveat: "The Reitherkogelbahn is closed on Wednesdays whichever ticket you hold.",
    link: "https://www.alpbachtal.at/en/activitities/summer-mountain-lifts/reitherkogelbahn",
  },
];

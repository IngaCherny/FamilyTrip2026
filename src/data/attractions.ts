import type { Attraction } from "../lib/types";

export const ATTRACTIONS: Attraction[] = [
  // ---------- Wilder Kaiser ----------
  {
    id: "hintersteiner-see",
    name: "Hintersteiner See",
    region: "wilderkaiser",
    category: "lake",
    coords: [47.5631, 12.2522],
    description:
      "A turquoise mountain lake directly beneath the Wilder Kaiser walls. Clear, swimmable in August, with an easy 3 km loop around the shore.",
    good_for: ["Swimming", "Easy lake walk", "Picnics"],
  },
  {
    id: "hexenwasser",
    name: "Hexenwasser Söll",
    region: "wilderkaiser",
    category: "kids",
    coords: [47.4836, 12.1869],
    description:
      "A 'witch's water' adventure world at the Hohe Salve — barefoot trails, water channels and forest play. Reached by the Söll gondola.",
    good_for: ["Kids", "Barefoot trail", "Cable car views"],
  },
  {
    id: "hartkaiser-ellmi",
    name: "Hartkaiser & Ellmi's Zauberwelt",
    region: "wilderkaiser",
    category: "kids",
    coords: [47.5045, 12.3085],
    description:
      "Funicular from Ellmau up to a family playground and themed walking trails with the Wilder Kaiser as a backdrop.",
    good_for: ["Kids", "Funicular", "Gentle walks"],
  },
  {
    id: "kitzbuehel",
    name: "Kitzbühel",
    region: "wilderkaiser",
    category: "town",
    coords: [47.4467, 12.3917],
    description:
      "The famous medieval ski town, pretty in summer too — painted houses, cafés and the Hahnenkamm cable car for a high alpine stroll.",
    good_for: ["Town stroll", "Cafés", "Cable car"],
  },
  {
    id: "gaudeamushuette",
    name: "Wilder Kaiser hike (Gaudeamushütte)",
    region: "wilderkaiser",
    category: "hike",
    coords: [47.5556, 12.3331],
    description:
      "Classic hut hike into the Kaisertal / Wilder Kaiser foothills, ending at a mountain hut for Kaiserschmarrn. Several distances possible.",
    good_for: ["Hiking", "Mountain hut lunch", "Big scenery"],
  },

  // ---------- Ötztal ----------
  {
    id: "area47",
    name: "Area 47",
    region: "oetz",
    category: "kids",
    coords: [47.2406, 10.8589],
    description:
      "The Alps' biggest outdoor adventure park at the mouth of the Ötztal — lake with slides and blobs, water obstacle courses, climbing and rafting.",
    good_for: ["Kids & teens", "Water park", "Adventure"],
  },
  {
    id: "stuibenfall",
    name: "Stuibenfall Waterfall",
    region: "oetz",
    category: "hike",
    coords: [47.1361, 10.9286],
    description:
      "Tyrol's highest waterfall (159 m) above Umhausen, with stairs, a suspension bridge and viewing platforms right in the spray.",
    good_for: ["Short hike", "Suspension bridge", "Spray & rainbows"],
  },
  {
    id: "aquadome",
    name: "Aqua Dome (Längenfeld)",
    region: "oetz",
    category: "spa",
    coords: [47.0711, 10.9756],
    description:
      "Striking thermal spa with outdoor saltwater bowls steaming under the mountains. A perfect rainy-day or tired-legs afternoon.",
    good_for: ["Thermal pools", "Relax", "Rainy day"],
  },
  {
    id: "piburger-see",
    name: "Piburger See",
    region: "oetz",
    category: "lake",
    coords: [47.1986, 10.8806],
    description:
      "A small, warm, protected nature-reserve lake above Oetz with a flat loop trail and a little rowing-boat rental — swimmable in summer.",
    good_for: ["Swimming", "Easy loop", "Rowing boats"],
  },
  {
    id: "soelden-007",
    name: "Gaislachkogl & 007 Elements (Sölden)",
    region: "oetz",
    category: "sight",
    coords: [46.9636, 11.0072],
    description:
      "Cable car to 3,058 m and the James Bond cinematic museum perched on the summit. High-alpine views, glacier panoramas and the Ice Q restaurant.",
    good_for: ["Cable car", "Bond fans", "Glacier views"],
  },
  {
    id: "timmelsjoch",
    name: "Timmelsjoch High Alpine Road",
    region: "oetz",
    category: "sight",
    coords: [46.9075, 11.0972],
    description:
      "A spectacular toll pass road (2,509 m) linking the Ötztal to South Tyrol, with sculpture viewpoints along the way. A scenic option for the transfer south.",
    good_for: ["Scenic drive", "Viewpoints", "Pass crossing"],
  },

  // ---------- South Tyrol ----------
  {
    id: "pragser-wildsee",
    name: "Lago di Braies (Pragser Wildsee)",
    region: "southtyrol",
    category: "lake",
    coords: [46.6947, 12.0855],
    description:
      "The emerald jewel of the Dolomites, ringed by peaks. Walk the 3.5 km shore loop or hire a wooden rowing boat. Go early — it gets busy and needs a booked slot in summer.",
    good_for: ["Iconic photos", "Shore walk", "Rowing boats"],
  },
  {
    id: "seiser-alm",
    name: "Seiser Alm / Alpe di Siusi",
    region: "southtyrol",
    category: "hike",
    coords: [46.5447, 11.6075],
    description:
      "Europe's largest high-alpine meadow, a vast rolling plateau under the Schlern. Cable car up, then gentle trails, huts and the Sassolungo spires ahead.",
    good_for: ["Meadow walks", "Cable car", "Mountain huts"],
  },
  {
    id: "tre-cime",
    name: "Tre Cime di Lavaredo",
    region: "southtyrol",
    category: "hike",
    coords: [46.6186, 12.3055],
    description:
      "The three iconic Dolomite towers. The 10 km loop is one of the world's great hikes; a toll road takes you to the Auronzo hut trailhead.",
    good_for: ["Big hike", "Dolomite icon", "Refuge stops"],
  },
  {
    id: "bolzano-otzi",
    name: "Bolzano & Ötzi Museum",
    region: "southtyrol",
    category: "town",
    coords: [46.4983, 11.3548],
    description:
      "The capital's South Tyrol Museum of Archaeology houses Ötzi the 5,300-year-old Iceman — the mummy found above the Ötztal. Arcaded streets and piazzas outside.",
    good_for: ["Museum", "Town & piazzas", "Rainy day"],
  },
  {
    id: "merano-gardens",
    name: "Merano & Trauttmansdorff Gardens",
    region: "southtyrol",
    category: "town",
    coords: [46.6628, 11.1869],
    description:
      "An elegant spa town with palm-lined promenades and the terraced Botanical Gardens of Trauttmansdorff Castle tumbling down the hillside.",
    good_for: ["Botanical gardens", "Promenade", "Town stroll"],
  },
  {
    id: "kastelruth",
    name: "Kastelruth / Castelrotto",
    region: "southtyrol",
    category: "town",
    coords: [46.5675, 11.5597],
    description:
      "A postcard South Tyrolean village with a landmark bell tower, gateway to the Seiser Alm. Good for an easy afternoon and dinner.",
    good_for: ["Village stroll", "Dinner", "Photos"],
  },

  // ---------- Munich ----------
  {
    id: "marienplatz",
    name: "Marienplatz & Old Town",
    region: "munich",
    category: "town",
    coords: [48.1374, 11.5755],
    description:
      "Munich's central square with the New Town Hall and its Glockenspiel — an easy last stop if you have time before the flight, ~40 min by S-Bahn from the airport.",
    good_for: ["City centre", "Glockenspiel", "Last meal"],
  },
  {
    id: "muc-visitorpark",
    name: "Munich Airport Visitors Park",
    region: "munich",
    category: "kids",
    coords: [48.3667, 11.7836],
    description:
      "Right by the terminals: historic aircraft, a mini-golf course and plane-spotting mounds. A relaxed way to burn off energy before departure.",
    good_for: ["Kids", "Plane spotting", "Near terminal"],
  },
];

export const attractionById = (id: string) => ATTRACTIONS.find((a) => a.id === id);

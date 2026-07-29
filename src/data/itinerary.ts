import type { Day } from "../lib/types";

// Bases used as the origin for "drive there" directions on each option.
const BASE_STREIF = "Apartment Streif LXL, Vorderjägerweg 4, 6382 Kirchdorf in Tirol, Austria";
const BASE_FALKNER = "Falkners Five, Habichen 65a, 6433 Oetz, Austria";
const BASE_ENTDECKER = "Entdecker Hotel Panorama, Sonnenstraße 11, 39030 Hofern Kiens, Italy";
const BASE_MUC = "Munich Airport (MUC), Germany";

// Travelling with three children (ages 2, 6 and 8): options favour short
// nature walks, lakes, animals, playgrounds and cable cars over long hikes.
export const ITINERARY: Day[] = [
  {
    date: "2026-08-13",
    weekday: "Thursday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Land in Munich, drive to the Wilder Kaiser",
    subtitle: "Arrival day",
    drive: {
      from: "Munich Airport (MUC)",
      to: "Apartment Streif, Kirchdorf in Tirol",
      duration: "~1h 45m",
      distance: "~145 km",
      fromQuery: BASE_MUC,
      toQuery: BASE_STREIF,
      note: "Pick up the rental car at MUC, then head for Kufstein and St. Johann in Tirol. Austria needs a motorway vignette, so buy the digital Vignette online before you drive.",
      stops: [
        {
          name: "Chiemsee (Prien am Chiemsee)",
          wiki: "Chiemsee",
          description:
            "Bavaria's biggest lake, right off the A8 about 45 minutes from the airport. A lakeside playground, gentle shallows and a grassy lido make a perfect leg-stretch and swim for jet-lagged kids.",
          tag: "swim",
          coords: [47.8662, 12.3492],
          mapQuery: "Prienavera Erlebnisbad, Prien am Chiemsee, Germany",
        },
        {
          name: "Kufstein Fortress",
          wiki: "Kufstein",
          description:
            "A storybook clifftop castle just over the border with a panorama lift up. A short, easy visit if you have energy left before the last 40 minutes to the apartment.",
          tag: "sights",
          coords: [47.5836, 12.1758],
          mapQuery: "Festung Kufstein, Austria",
        },
      ],
    },
    options: [
      {
        title: "Settle in and meadow stroll",
        wiki: "Wilder Kaiser",
        tag: "walk",
        description:
          "Unpack, do a first grocery run, then wander the flat field paths around Gasteig with the Wilder Kaiser straight ahead.",
        kidNote: "Flat, buggy-friendly, 20 to 40 minutes at toddler pace.",
        mapQuery: BASE_STREIF,
      },
      {
        title: "Quiet swim at the apartment wellness area",
        wiki: "Wilder Kaiser",
        tag: "spa",
        description:
          "If everyone is wiped out from travel, the in-house sauna and whirlpool plus an early dinner is a gentle way to start.",
        kidNote: "Zero driving, good for an early bedtime.",
        mapQuery: BASE_STREIF,
      },
    ],
    tips: [
      "Buy the Austrian digital motorway vignette online before crossing the border.",
      "Keep day one short; a Chiemsee swim on the way breaks up the drive nicely.",
    ],
  },
  {
    date: "2026-08-14",
    weekday: "Friday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Lakes and meadows",
    subtitle: "Ease into the mountains",
    options: [
      {
        title: "Hintersteiner See lake walk and swim",
        tag: "lake",
        attractionId: "hintersteiner-see",
        description:
          "A turquoise lake under the Kaiser walls. Walk as much of the flat shore path as little legs allow, then swim in the clear shallows.",
        kidNote: "Mostly flat shore loop (~3.5 km, shorten freely). Carrier for the 2 year old. Swimming.",
        coords: [47.5631, 12.2522],
        mapQuery: "Hintersteiner See, Scheffau am Wilden Kaiser, Austria",
      },
      {
        title: "Schnackler adventure trail, Kaiserbachtal",
        tag: "walk",
        attractionId: "schnackler",
        description:
          "A story trail in the Kaiserbach valley just up the road, telling the tale of the Schnackler, a bored young shepherd who made music by clicking his tongue and snapping his fingers. Statues, boards, climbing frames and play areas along the way.",
        kidNote: "About 2 km and roughly 45 minutes at kid pace, with play stops built in. Same valley as the Griesner Alm walk.",
        coords: [47.5783, 12.3983],
        mapQuery: "Kaiserbachtal, Kirchdorf in Tirol, Austria",
      },
    ],
    food: [
      {
        name: "Cafe Bärnstatt, Hintersteiner See",
        description:
          "A lakeside farm cafe famous with families: a big adventure playground plus goats, ponies and rabbits to visit, and Kaiserschmarrn on the terrace.",
        playground: true,
        coords: [47.5613, 12.2556],
        mapQuery: "Cafe Bärnstatt, Hintersteiner See, Scheffau, Austria",
      },
    ],
    tips: ["Mornings are quietest and easiest for parking at Hintersteiner See."],
  },
  {
    date: "2026-08-15",
    weekday: "Saturday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Water world or magic mountain",
    subtitle: "Big family fun",
    options: [
      {
        title: "Hexenwasser Söll (witch's water)",
        tag: "playground",
        attractionId: "hexenwasser",
        description:
          "Ride the Söll gondola up to a whole mountain of water channels, barefoot trails, mills and play stations. One of the best kid days in the region.",
        kidNote: "Cable car up, then easy walking between play stations. Bring a towel and spare clothes.",
        coords: [47.4836, 12.1869],
        mapQuery: "Hexenwasser Söll, Austria",
      },
      {
        title: "Ellmi's Zauberwelt at Hartkaiser, Ellmau",
        tag: "cablecar",
        attractionId: "hartkaiser-ellmi",
        description:
          "Funicular from Ellmau to a mountain playground and a gentle themed walking trail with the Wilder Kaiser as the backdrop.",
        kidNote: "Funicular up, big playground, short flat trail. Buggy-friendly at the top.",
        coords: [47.5045, 12.3085],
        mapQuery: "Hartkaiser Funicular, Ellmau, Austria",
      },
      {
        title: "KaiserWelt Scheffau on the Brandstadl",
        tag: "playground",
        attractionId: "kaiserwelt",
        description:
          "Ride the Brandstadlbahn up to a play realm at 1,650 m: through a castle gate into the KaiserWald, with castle walls, treehouses, a climbing wall, a sporting course and the Little People's forest, all linked by easy family trails.",
        kidNote: "The gondola takes pushchairs, and the park is free once you have a lift ticket. Easy trails between stations suit all three ages.",
        coords: [47.5028, 12.2547],
        mapQuery: "Brandstadlbahn, Scheffau am Wilden Kaiser, Austria",
      },
      {
        title: "Triassic Park on the Steinplatte, Waidring",
        tag: "kids",
        attractionId: "triassic-park",
        description:
          "A dinosaur adventure world on a mountaintop that was a coral reef 200 million years ago. Gondola up to life-size dinosaurs, a fossil-digging beach, water rafts, a low ropes course and a stalactite cave. The park is free, you only pay the lift.",
        kidNote: "Gondola up, then wide easy paths; a big hit for the 6 and 8 year olds. Cave and indoor Triassic Centre make it work in poor weather too.",
        coords: [47.588, 12.582],
        mapQuery: "Bergbahn Steinplatte, Alpegg 10, 6384 Waidring, Austria",
      },
    ],
    food: [
      {
        name: "Stanglwirt, Going",
        description:
          "A famous Tyrolean estate with a petting area, ponies and a play barn. A fun (if pricier) lunch stop on the way back.",
        playground: true,
        coords: [47.5145, 12.2607],
        mapQuery: "Bio-Hotel Stanglwirt, Going am Wilden Kaiser, Austria",
      },
    ],
    tips: [
      "Three gondola-served kids' worlds are in reach today: Hexenwasser, Ellmi's and KaiserWelt. Pick one, each is a full day.",
      "Check the cable-car operating hours and last descent before heading up.",
    ],
  },
  {
    date: "2026-08-16",
    weekday: "Sunday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Valley hike or pretty Kitzbühel",
    subtitle: "Choose your pace",
    options: [
      {
        title: "Kaiserbachtal valley walk to Griesner Alm",
        tag: "hike",
        attractionId: "gaudeamushuette",
        description:
          "A gentle, scenic valley track deep into the Wilder Kaiser ending at mountain huts for strudel. Turn back whenever the kids have had enough.",
        kidNote: "Wide, mostly flat track. Buggy possible to Griesner Alm; carrier beyond. Hut food at the end.",
        coords: [47.5783, 12.3983],
        mapQuery: "Griesner Alm, Kirchdorf in Tirol, Austria",
      },
      {
        title: "Kitzbühel old town and Schwarzsee",
        tag: "town",
        attractionId: "kitzbuehel",
        description:
          "Wander the painted medieval town, then cool off at the warm, shallow Schwarzsee lake with a lido and playground just outside town.",
        kidNote: "Easy town stroll plus a warm swimming lake. Buggy-friendly.",
        coords: [47.4467, 12.3917],
        mapQuery: "Schwarzsee, Kitzbühel, Austria",
      },
      {
        title: "Grießbachklamm gorge, Erpfendorf",
        tag: "walk",
        attractionId: "griessbachklamm",
        description:
          "A cool, wild little gorge just up the road, where walkways and small suspension bridges carry the path over the tumbling Grießbach. A proper adventure for short legs without a long climb, and shady on a hot day.",
        kidNote: "Short loop ~1¼ hours. Bridges and steps mean a carrier for the 2 year old, no buggy. The 6 and 8 year olds will love the bridges.",
        coords: [47.5545, 12.4295],
        mapQuery: "Grießbachklamm, Erpfendorf, Austria",
      },
    ],
    tips: [
      "Pack a layer and rain shell; alpine weather turns fast even in August.",
      "The Grießbachklamm is the best hot-day option here: shaded, cool and close.",
    ],
  },
  {
    date: "2026-08-17",
    weekday: "Monday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "Travel to the Ötztal",
    subtitle: "Moving day",
    drive: {
      from: "Wilder Kaiser",
      to: "Falkners Five, Oetz",
      duration: "~1h 45m",
      distance: "~130 km",
      fromQuery: BASE_STREIF,
      toQuery: BASE_FALKNER,
      note: "West along the Inn valley past Innsbruck, then south into the mouth of the Ötztal.",
      stops: [
        {
          name: "Juppi Zauberwald, Reith im Alpbachtal",
          wiki: "Reith im Alpbachtal",
          attractionId: "juppi-zauberwald",
          description:
            "An enchanted forest on the Reitherkogel, the first good break of the drive and just off the motorway. A 2.5 km buggy-friendly loop from the gondola winds past a magic village with a witch's kitchen, a ghost moor with a wooden wizard, a wobbly bridge, a viewing tower and water games.",
          tag: "kids",
          coords: [47.4247, 11.8792],
          mapQuery: "Reitherkogelbahn, Reith im Alpbachtal, Austria",
        },
        {
          name: "Swarovski Kristallwelten, Wattens",
          wiki: "Swarovski Kristallwelten",
          description:
            "A magical crystal world with a huge, brilliant outdoor playground (a climbing tower and a play cloud) and the Giant garden. A superb mid-drive break for all three ages.",
          tag: "playground",
          coords: [47.2966, 11.6011],
          mapQuery: "Swarovski Kristallwelten, Wattens, Austria",
        },
        {
          name: "Alpenzoo Innsbruck",
          wiki: "Alpenzoo",
          description:
            "Europe's highest zoo, home to alpine animals like ibex, bears, otters and wolves, on a hillside above Innsbruck. Easy paths and lots to see.",
          tag: "animals",
          coords: [47.2847, 11.3986],
          mapQuery: "Alpenzoo Innsbruck, Austria",
        },
      ],
    },
    options: [
      {
        title: "Check in and Piburger See sunset loop",
        tag: "lake",
        attractionId: "piburger-see",
        description:
          "Drop bags, then drive up to the warm little nature-reserve lake above Oetz for an easy loop and a paddle.",
        kidNote: "Short, mostly flat loop. Warm, shallow swimming. Rowing boats to rent.",
        coords: [47.1986, 10.8806],
        mapQuery: "Piburger See, Oetz, Austria",
      },
      {
        title: "Easy evening in Oetz village",
        wiki: "Oetz",
        tag: "town",
        description:
          "If the drive was enough, restock groceries and stroll Oetz's pretty painted old town for dinner.",
        kidNote: "Flat village streets, buggy-friendly.",
        coords: [47.2017, 10.8975],
        mapQuery: "Oetz, Austria",
      },
    ],
    tips: [
      "Swarovski Kristallwelten is right on the route and makes the drive fly by for kids.",
      "Juppi Zauberwald comes first on the drive and its loop is buggy-friendly throughout. The Reitherkogelbahn is closed on Wednesdays, but today is a Monday.",
      "Three good stops on one transfer is too many; pick one and keep the drive short.",
    ],
  },
  {
    date: "2026-08-18",
    weekday: "Tuesday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "Adventure park or iceman village",
    subtitle: "Big fun day",
    options: [
      {
        title: "Area 47 water playground",
        tag: "swim",
        attractionId: "area47",
        description:
          "The Alps' biggest outdoor adventure park at the mouth of the valley: a lake with slides and a shallow kids' zone, water playgrounds and climbing.",
        kidNote: "Dedicated shallow kids' area for the 2 year old; slides and obstacles for the 6 and 8 year olds.",
        coords: [47.2406, 10.8589],
        mapQuery: "AREA 47, Ötztal, Austria",
      },
      {
        title: "Ötzi-Dorf and Greifvogelpark, Umhausen",
        wiki: "Umhausen",
        tag: "animals",
        description:
          "An open-air stone-age village with animals (aurochs, sheep, pigs) and a daily birds-of-prey flight show next door. Brilliant, gentle and educational.",
        kidNote: "Flat, buggy-friendly. Animals and a flight show hold all ages.",
        coords: [47.1369, 10.9303],
        mapQuery: "Ötzi-Dorf Umhausen, Austria",
      },
      {
        title: "Habicher See, the lake at the doorstep",
        tag: "lake",
        attractionId: "habicher-see",
        description:
          "A quiet little woodland lake right at Habichen, effectively next to the apartment. A short level circuit runs round the water with benches and a picnic spot, and it warms up enough to paddle.",
        kidNote: "The easiest outing of the whole trip: no drive, short and flat, buggy-friendly. Ideal for a late afternoon.",
        coords: [47.2145, 10.8985],
        mapQuery: "Habicher See, Oetz, Austria",
      },
    ],
    tips: [
      "For Area 47 bring swimwear, towels, water shoes and sunscreen; lockers are on site.",
      "Habicher See is a two-minute hop from the apartment, perfect if a big day is too much.",
    ],
  },
  {
    date: "2026-08-19",
    weekday: "Wednesday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "Waterfall or warm thermal pools",
    subtitle: "Water and woods",
    options: [
      {
        title: "Stuibenfall waterfall walk, Umhausen",
        tag: "waterfall",
        attractionId: "stuibenfall",
        description:
          "Tyrol's highest waterfall with viewing platforms and a suspension bridge in the spray. Walk only the lower section with smaller kids.",
        kidNote: "Lower viewpoints are an easy walk; the full stairway is for the 6 and 8 year olds. Carrier for the 2 year old.",
        coords: [47.1361, 10.9286],
        mapQuery: "Stuibenfall Wasserfall, Umhausen, Austria",
      },
      {
        title: "Aqua Dome thermal spa, Längenfeld",
        tag: "spa",
        attractionId: "aquadome",
        description:
          "Striking outdoor thermal bowls steaming under the mountains, with an indoor children's water world and slides. Perfect for a cloudy day or tired legs.",
        kidNote: "Separate children's water world with shallow pools and slides; all ages welcome.",
        coords: [47.0711, 10.9756],
        mapQuery: "Aqua Dome, Längenfeld, Austria",
      },
      {
        title: "9 Treasures of Piburger See loop (official Ötztal trail)",
        wiki: "Piburger See",
        tag: "walk",
        description:
          "The official Ötztal family route: a loop of the warm nature-reserve lake passing nine viewing platforms and 'places of strength'. The wider western shore is stroller-friendly; the eastern shore is a rootier adventure path.",
        kidNote: "About 1.5 to 2 hours; west shore is buggy-friendly, swimming at the lake. Take the Elsinger Weg up from Oetz.",
        coords: [47.1986, 10.8806],
        mapQuery: "Piburger See, Oetz, Austria",
        link: "https://www.oetztal.com/en/activities/summer/hiking-mountaineering/hiking-regions/oetz-region/the-9-treasures-of-lake-piburgersee",
        linkLabel: "Official route on oetztal.com",
      },
    ],
    food: [
      {
        name: "Piburger See lakeside",
        description:
          "Pack a picnic, or grab a snack near the lake after the morning, with a flat shore to run around on.",
        coords: [47.1986, 10.8806],
        mapQuery: "Piburger See, Oetz, Austria",
      },
    ],
    tips: ["Trainers with grip help on the damp waterfall steps."],
  },
  {
    date: "2026-08-20",
    weekday: "Thursday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "High cable car or gentle gorge",
    subtitle: "Heights or shade",
    options: [
      {
        title: "Gaislachkogl cable car, Sölden",
        tag: "cablecar",
        attractionId: "soelden-007",
        description:
          "Ride to 3,058 m for glacier views and the 007 Elements film world on the summit. A thrilling, low-effort way to reach the high mountains.",
        kidNote: "All the height with no climbing. Bring warm layers; it is cold at the top even in August.",
        coords: [46.9636, 11.0072],
        mapQuery: "Gaislachkoglbahn, Sölden, Austria",
      },
      {
        title: "WIDIVERSUM Hochoetz play trail",
        tag: "kids",
        attractionId: "widiversum",
        description:
          "The kid-focused alternative to the Gaislachkogl: the Acherkogelbahn lifts you straight from Oetz to Hochoetz, where a themed trail follows WIDI the dragon between 36 play and puzzle stations across the mountainside.",
        kidNote: "Gondola up, wide mostly level paths near the top station, so a buggy works around the main area. Stations suit all three ages.",
        coords: [47.2075, 10.9375],
        mapQuery: "WIDIVERSUM Hochoetz, Oetz, Austria",
      },
      {
        title: "Auer Klamm gorge walk, Oetz",
        wiki: "Oetz",
        tag: "walk",
        description:
          "A shady, dramatic little gorge walk along rushing water close to the apartment. Cool and atmospheric on a hot afternoon.",
        kidNote: "Short out-and-back; secure footing needed, carrier for the 2 year old.",
        coords: [47.2125, 10.9],
        mapQuery: "Auer Klamm, Oetz, Austria",
      },
      {
        title: "Andreas-Hofer-Weg river walk (official Oetz route)",
        wiki: "Ötztal",
        tag: "walk",
        description:
          "An easy official Oetz valley walk along the Ötztaler Ache from the village to the Weller Bridge near Habichen, on toward Piburger See and back. Flat and right on the doorstep.",
        kidNote: "About 2 hours, mostly flat riverside paths, buggy-friendly. Shorten any time.",
        coords: [47.2017, 10.8975],
        mapQuery: "Andreas-Hofer-Weg, Oetz, Austria",
        link: "https://www.oetztal.com/en/activities/summer/hiking-mountaineering/hiking-regions/oetz-region",
        linkLabel: "Oetz hiking region on oetztal.com",
      },
    ],
    tips: ["Decide heights versus shade by the morning weather and how tired everyone is."],
  },
  {
    date: "2026-08-21",
    weekday: "Friday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Cross into South Tyrol, Italy",
    subtitle: "Moving day into Italy",
    drive: {
      from: "Oetz, Ötztal",
      to: "Entdecker Hotel, Hofern / Kiens",
      duration: "~2h 30m",
      distance: "~160 km",
      fromQuery: BASE_FALKNER,
      toQuery: BASE_ENTDECKER,
      note: "Back to the Inn valley, then south over the Brenner motorway into Italy and east into the Val Pusteria. Italy uses per-trip motorway tolls, not a vignette.",
      stops: [
        {
          name: "Sterzing / Vipiteno old town",
          wiki: "Vipiteno",
          description:
            "One of South Tyrol's prettiest little towns just past the Brenner, with a pedestrian main street, the Zwölferturm tower and gelato. An easy, flat lunch stop.",
          tag: "town",
          coords: [46.8966, 11.43],
          mapQuery: "Sterzing Vipiteno, Italy",
        },
        {
          name: "Franzensfeste Fortress",
          wiki: "Franzensfeste",
          description:
            "A vast, atmospheric 19th-century fortress with family trails and a hidden underground passage. A quick, different stop right by the motorway.",
          tag: "sights",
          coords: [46.7905, 11.609],
          mapQuery: "Franzensfeste Fortress, Italy",
        },
      ],
    },
    options: [
      {
        title: "Check in and Toblacher See loop",
        wiki: "Lake Dobbiaco",
        tag: "lake",
        description:
          "Settle into the longest stay, then drive to the flat, easy loop around Lake Toblach with mountain views and a kiosk.",
        kidNote: "Flat, buggy-friendly shore loop (~3.5 km). Snack kiosk on site.",
        coords: [46.715, 12.223],
        mapQuery: "Toblacher See, Toblach, Italy",
      },
      {
        title: "Sentiero degli Elfi (Elves' Path), Vandoies",
        tag: "walk",
        attractionId: "elfenweg",
        description:
          "A magical themed walk a short run down the valley road, with eleven storytelling stations through the woods past a deer enclosure to the 43 m Vandoies waterfall. A gentle, enchanting way to end the arrival day.",
        kidNote: "About 4 km / ~1 hour, some climbing; carrier for the 2 year old. The story stations keep little ones going.",
        coords: [46.9005, 11.6595],
        mapQuery: "Sentiero degli Elfi, Vandoies di Sopra, Italy",
      },
      {
        title: "Farm trail Kiens – St. Sigmund (at the doorstep)",
        tag: "walk",
        attractionId: "kiens-farmtrail",
        description:
          "The closest walk of all, in the valley just below the hotel: a gentle path between Kiens and the hamlet of St. Sigmund, past working farms and grazing animals with the Dolomites ahead. Close enough to walk to rather than drive.",
        kidNote: "Flat and short as you like; buggy-friendly on the valley sections. Animals to spot along the way.",
        coords: [46.8075, 11.872],
        mapQuery: "St. Sigmund, Kiens, Italy",
      },
      {
        title: "Easy evening near the hotel",
        wiki: "Puster Valley",
        tag: "free",
        description:
          "Toast the arrival with a Hugo spritz (invented here in South Tyrol) and let the kids settle into the new base.",
        kidNote: "No driving; relax after the longest transfer.",
        mapQuery: BASE_ENTDECKER,
      },
    ],
    tips: [
      "Italy charges per-trip motorway tolls; keep a card or euro coins for the booths.",
      "Sterzing is the nicest leg-stretch on this drive and very buggy-friendly.",
      "The Elves' Path at Vandoies is the nearest themed family walk to the hotel, an easy first taste of the valley. Tap 'Drive here' on any option for the live driving time.",
    ],
  },
  {
    date: "2026-08-22",
    weekday: "Saturday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Kronplatz playground or meadow plateau",
    subtitle: "Dolomites day one",
    options: [
      {
        title: "Kronplatz summit & Concordia 360° loop",
        tag: "cablecar",
        attractionId: "concordia-360",
        description:
          "The local mountain right above the hotel. Ride the cable car from Reischach, then walk the level Concordia 360° circuit around the flat summit plateau past the Peace Bell, the Messner and LUMEN museums and staged viewpoints, with the Dolomites on one side and the Zillertal Alps on the other.",
        kidNote: "The best buggy walk of the trip: gondola up, then a flat loop at 2,275 m. Huts and museums along the way if the weather turns.",
        coords: [46.7378, 11.954],
        mapQuery: "Kronplatz / Plan de Corones, Italy",
      },
      {
        title: "Seiser Alm meadow walk",
        tag: "walk",
        attractionId: "seiser-alm",
        description:
          "Cable car up to Europe's largest high-alpine meadow, then flat, pram-friendly trails under the Sassolungo spires with huts for lunch.",
        kidNote: "Cable car up, very gentle wide meadow paths. Some trails are buggy-friendly.",
        coords: [46.5447, 11.6075],
        mapQuery: "Seiser Alm Aerial Cableway, Italy",
      },
      {
        title: "WoodyWalk on the Plose (near Brixen)",
        tag: "walk",
        attractionId: "woodywalk-plose",
        description:
          "A themed family adventure trail out west beyond the mouth of the valley, above Brixen: ride the Plose gondola up, then a wide, stroller-friendly path to the Rossalm past wooden play stations, a Kneipp water walk and a viking ship, under the Geisler spires.",
        kidNote: "Gondola up, then ~5 km of easy walking with play stops. Buggy-friendly; the play stations pace the little ones.",
        coords: [46.6975, 11.7405],
        mapQuery: "Plose cable car mountain station, Brixen, Italy",
      },
    ],
    food: [
      {
        name: "Mountain huts on the Seiser Alm",
        description:
          "Family-run Schwaige huts dot the meadow with sunny terraces, Knödel, strudel and often a small playground or animals nearby.",
        playground: true,
        coords: [46.5447, 11.6075],
        mapQuery: "Gostner Schwaige, Seiser Alm, Italy",
      },
    ],
    tips: ["Cars are restricted on the Seiser Alm by day, so the cable car is the easy way up."],
  },
  {
    date: "2026-08-23",
    weekday: "Sunday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Lago di Braies, the Dolomite jewel",
    subtitle: "Postcard lake",
    options: [
      {
        title: "Lago di Braies shore loop and rowing boats",
        tag: "lake",
        attractionId: "pragser-wildsee",
        description:
          "The emerald jewel of the Dolomites, only ~30 minutes away. Walk the flat shore loop and hire a wooden rowing boat on the still water.",
        kidNote: "Mostly flat shore path (~3.5 km), buggy-friendly on the near side. Rowing boats are a hit.",
        coords: [46.6947, 12.0855],
        mapQuery: "Lago di Braies, Italy",
      },
      {
        title: "Reinbach Waterfalls, Sand in Taufers",
        wiki: "Sand in Taufers",
        tag: "waterfall",
        description:
          "A lovely forest walk past three thundering waterfalls with bridges and a Franciscan friary, plus the 'Bad Winkel' barefoot area for the kids.",
        kidNote: "Well-made forest path with some steps; carrier for the 2 year old. About 1 to 1.5 hours.",
        coords: [46.8855, 11.954],
        mapQuery: "Reinbach Waterfalls, Sand in Taufers, Italy",
      },
      {
        title: "Issinger Weiher swim & forest loop (very close)",
        tag: "swim",
        attractionId: "issinger-weiher",
        description:
          "A warm little swimming lake at Issing near Pfalzen, the next village along from the hotel, with a lawn, playground and small water slide. An easy loop circles the water and returns through shady forest along the stream, an easy walk that ends in a swim.",
        kidNote: "Short, flat loop and safe shallow swimming; playground and slide on site. A great hot-day fallback close to base.",
        coords: [46.7967, 11.893],
        mapQuery: "Issinger Weiher, Pfalzen, Italy",
      },
    ],
    tips: [
      "Go to Lago di Braies early; in peak summer access is timed or by shuttle, so check before you set off.",
    ],
  },
  {
    date: "2026-08-24",
    weekday: "Monday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Iceman museum or mountain coaster",
    subtitle: "Culture or thrills",
    options: [
      {
        title: "Ötzi Museum, Bolzano",
        tag: "sights",
        attractionId: "bolzano-otzi",
        description:
          "Meet Ötzi, the 5,300-year-old iceman found above the Ötztal you just visited, then eat under Bolzano's medieval arcades. A great rainy-day plan.",
        kidNote: "Indoor and stroller-friendly; the 6 and 8 year olds will love the iceman story.",
        coords: [46.4983, 11.3548],
        mapQuery: "South Tyrol Museum of Archaeology, Bolzano, Italy",
      },
      {
        title: "Klausberg family park, Ahrntal",
        wiki: "Ahrntal",
        tag: "playground",
        description:
          "A summit fun park reached by gondola with a downhill alpine coaster (the Klausberg Flitzer), a water playground and farm animals.",
        kidNote: "Gondola up; coaster has age and height rules, but there is plenty for the 2 year old too.",
        coords: [46.9889, 11.9686],
        mapQuery: "Klausberg, Steinhaus Ahrntal, Italy",
      },
      {
        title: "Rodelbahn Haunold summer toboggan (near San Candido)",
        wiki: "San Candido",
        tag: "playground",
        attractionId: "rodelbahn-haunold",
        description:
          "A summer toboggan run and family fun park at the foot of the Haunold near San Candido, about 45 minutes east. The fun spot you found while driving back last time.",
        kidNote: "The toboggan has height rules for solo riders, but little ones ride with a parent; fun park alongside.",
        coords: [46.7183, 12.2556],
        mapQuery: "Rodelbahn Haunold, San Candido, Italy",
      },
    ],
    tips: ["The Bolzano museum is a perfect option if the forecast turns wet."],
  },
  {
    date: "2026-08-25",
    weekday: "Tuesday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Three Peaks views or a gentle lake day",
    subtitle: "Dolomite icons",
    options: [
      {
        title: "Tre Cime, easy section to Rifugio Lavaredo",
        tag: "hike",
        attractionId: "tre-cime",
        description:
          "Drive the toll road up to the Auronzo hut beneath the three famous towers, then walk the gentle, wide path to Rifugio Lavaredo for the classic view.",
        kidNote: "Start at 2,300 m, so the famous view needs only a short, gentle walk. Carrier for the 2 year old; skip the full loop with kids.",
        coords: [46.6186, 12.3055],
        mapQuery: "Rifugio Auronzo, Tre Cime di Lavaredo, Italy",
      },
      {
        title: "Val Fiscalina family valley walk (near San Candido)",
        wiki: "Sesto Dolomites",
        tag: "walk",
        description:
          "A flat, stroller-friendly valley in the Three Peaks Nature Park next to San Candido, with the Sundial peaks towering ahead. The gentle, scenic back-door approach to the Tre Cime, and one of the prettiest easy walks in the Dolomites.",
        kidNote: "Flat gravel valley path, buggy-friendly, mountain huts along the way. Turn back at the Talschluss hut.",
        coords: [46.6773, 12.363],
        mapQuery: "Val Fiscalina Fischleintal, Sexten, Italy",
      },
      {
        title: "Pragser or Toblach lake and bike path",
        wiki: "Lake Dobbiaco",
        tag: "walk",
        description:
          "A calmer alternative: the flat Toblach-to-Cortina valley path, ideal for a stroller or rented kids' bikes, with picnic spots along the river.",
        kidNote: "Flat, paved, buggy and balance-bike friendly. Go as far as you like and turn back.",
        coords: [46.715, 12.223],
        mapQuery: "Toblacher See, Toblach, Italy",
      },
      {
        title: "Antholzer See lakeside walk & playground",
        tag: "lake",
        attractionId: "antholzer-see",
        description:
          "A deep green lake at 1,642 m at the head of the Antholz valley, ringed by forest and peaks, with a playground and a restaurant at the near end. Cooler valley air and far quieter than Braies.",
        kidNote: "Flat, easy near shore, ideal with a buggy; the far side of the 2.7 km loop gets rougher, so turn back rather than circle it.",
        coords: [46.8697, 12.1719],
        mapQuery: "Antholzer See, Rasen-Antholz, Italy",
      },
    ],
    tips: [
      "Val Fiscalina near San Candido is about a 45 minute drive and a gentle family alternative to the Tre Cime toll road.",
      "Start the Tre Cime drive early for parking; carry layers, water and snacks up high.",
    ],
  },
  {
    date: "2026-08-26",
    weekday: "Wednesday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Gardens of Merano or a slow Bruneck day",
    subtitle: "Last full day in Italy",
    options: [
      {
        title: "Trauttmansdorff Gardens, Merano",
        tag: "walk",
        attractionId: "merano-gardens",
        description:
          "Terraced botanical gardens tumbling down a hillside, with themed worlds, ponds, a play area and an adventure trail for children.",
        kidNote: "Lots of flat paths and a dedicated kids' play world; buggy-friendly.",
        coords: [46.6628, 11.1869],
        mapQuery: "Gardens of Trauttmansdorff Castle, Merano, Italy",
      },
      {
        title: "Rienz Gorge & Sternwaldele walk, Bruneck",
        tag: "walk",
        attractionId: "rienz-gorge",
        description:
          "A shady, flat family walk on the edge of Bruneck, the nearest town: from the old ice rink, follow the Rienz river into its gorge or take the Sternwaldele nature trail through cool forest, ending in the old town for gelato.",
        kidNote: "Level and buggy-friendly; a good hot-day option. Go as far as you like and turn back.",
        coords: [46.7928, 11.927],
        mapQuery: "Rienzschlucht, Bruneck, Italy",
      },
      {
        title: "Bruneck old town and play day",
        wiki: "Bruneck",
        tag: "town",
        description:
          "Stroll Bruneck's pretty pedestrian street for gelato and souvenirs, with a riverside playground, and pack at an easy pace for tomorrow.",
        kidNote: "Flat town centre, playground, very buggy-friendly.",
        coords: [46.7959, 11.9369],
        mapQuery: "Bruneck Brunico old town, Italy",
      },
    ],
    food: [
      {
        name: "Bring home some Speck and Lagrein",
        description:
          "Pick up vacuum-packed Speck and a bottle of Lagrein or Gewürztraminer in Bruneck as edible souvenirs.",
        coords: [46.7959, 11.9369],
        mapQuery: "Bruneck Brunico, Italy",
      },
    ],
    tips: ["Pick up vacuum-packed Speck and local wine as easy souvenirs to bring home."],
  },
  {
    date: "2026-08-27",
    weekday: "Thursday",
    region: "munich",
    base: "Airport Hotel (Munich)",
    baseQuery: BASE_MUC,
    title: "Drive to Munich",
    subtitle: "Moving day toward home",
    drive: {
      from: "South Tyrol",
      to: "Munich Airport area",
      duration: "~3h 30m",
      distance: "~280 km",
      fromQuery: BASE_ENTDECKER,
      toQuery: BASE_MUC,
      note: "West through the Val Pusteria, then north over the Brenner and the Inn valley back into Bavaria. Return the rental car this evening if you can.",
      stops: [
        {
          name: "Innsbruck: Alpenzoo or Swarovski (again)",
          wiki: "Innsbruck",
          description:
            "Roughly the midpoint of the drive. Break it up with the alpine zoo or the crystal world playground, both right by the motorway.",
          tag: "animals",
          coords: [47.2847, 11.3986],
          mapQuery: "Alpenzoo Innsbruck, Austria",
        },
        {
          name: "Chiemsee swim stop",
          wiki: "Chiemsee",
          description:
            "If the weather is warm, a final lake swim and playground at the Chiemsee about 45 minutes before the airport.",
          tag: "swim",
          coords: [47.8662, 12.3492],
          mapQuery: "Prien am Chiemsee, Germany",
        },
      ],
    },
    options: [
      {
        title: "Settle in near the airport and return the car",
        wiki: "Munich Airport",
        tag: "free",
        description:
          "Check into the airport hotel, drop the rental car, and repack for the flight so the morning is calm. The drive stops above break up the journey.",
        kidNote: "No extra outing needed after a long drive; early dinner and bed.",
        mapQuery: BASE_MUC,
      },
      {
        title: "One last alpine swim on the way (Chiemsee)",
        wiki: "Chiemsee",
        tag: "swim",
        description:
          "If the weather is warm and you have time, the Chiemsee lido and playground about 45 minutes before the airport is a lovely final dip.",
        kidNote: "Lake swimming and a playground; flat and buggy-friendly.",
        coords: [47.8662, 12.3492],
        mapQuery: "Prienavera Erlebnisbad, Prien am Chiemsee, Germany",
      },
    ],
    tips: ["Refuel and clean out the rental car before returning it to avoid extra fees."],
  },
  {
    date: "2026-08-28",
    weekday: "Friday",
    region: "munich",
    base: "Airport Hotel (Munich)",
    baseQuery: BASE_MUC,
    title: "Fly home from Munich",
    subtitle: "Departure day",
    options: [
      {
        title: "Check out and fly home from Munich (MUC)",
        wiki: "Munich Airport",
        tag: "flight",
        description:
          "A short shuttle or walk to departures, then home. Allow extra time with kids and for an international flight.",
        kidNote: "Be at the terminal about 3 hours before an intercontinental departure.",
        mapQuery: BASE_MUC,
      },
    ],
    tips: ["Auf Wiedersehen, Alps. Safe travels home!"],
  },
];

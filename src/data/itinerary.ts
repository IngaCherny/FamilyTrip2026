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
    image: "img/heimstettener.jpg",
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
          name: "Heimstettener See (first stop, swim)",
          image: "img/heimstettener.jpg",
          description:
            "A calm bathing lake at Heimstetten, just east of Munich and barely 20 minutes from the airport. Grassy banks, gentle shallows and shade — the perfect first leg-stretch and swim to shake off the flight before the drive south.",
          tag: "swim",
          coords: [48.1646, 11.748],
          mapQuery: "Heimstettener See, Kirchheim bei München, Germany",
        },
        {
          name: "SPAR, St. Johann in Tirol (food shop)",
          description:
            "Second stop: the big grocery run about 5 km before the apartment, at Speckbacherstraße 10. Open 07:15 to 19:30 on the Thursday you arrive. Stock up here — tomorrow is fine, but the 15th is a holiday, so buy a few days' worth.",
          tag: "food",
          coords: [47.5222, 12.4244],
          mapQuery: "SPAR, Speckbacherstraße 10, 6380 St. Johann in Tirol, Austria",
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
      "Shop on the way in, not tomorrow morning. Austrian supermarkets shut around 19:30 and all day Sunday, and the 15th is a public holiday, so the fridge has to carry you to Monday.",
      "If the flight lands late, buy in Germany before Kufstein instead, where shops usually run to 20:00.",
      "Keep day one short; a Chiemsee swim on the way breaks up the drive nicely.",
    ],
  },
  {
    date: "2026-08-14",
    weekday: "Friday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Hexenwasser Söll",
    subtitle: "The big witch's water day",
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
        title: "Hintersteiner See lake walk and swim",
        tag: "lake",
        attractionId: "hintersteiner-see",
        description:
          "A quieter alternative: a turquoise lake under the Kaiser walls. Walk as much of the flat shore path as little legs allow, then swim in the clear shallows.",
        kidNote: "Mostly flat shore loop (~3.5 km, shorten freely). Carrier for the 2 year old. Swimming.",
        coords: [47.5631, 12.2522],
        mapQuery: "Hintersteiner See, Scheffau am Wilden Kaiser, Austria",
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
    tips: [
      "Do the big grocery shop today. Tomorrow is a public holiday and Sunday follows it, so the shops are shut for two days straight.",
      "Check the cable-car operating hours and last descent before heading up.",
    ],
  },
  {
    date: "2026-08-15",
    weekday: "Saturday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Schnackler trail in the Kaiserbachtal",
    subtitle: "A quiet valley on a busy holiday",
    options: [
      {
        title: "Schnackler adventure trail, Kaiserbachtal",
        tag: "walk",
        attractionId: "schnackler",
        description:
          "A story trail in the Kaiserbach valley just up the road, telling the tale of the Schnackler, a bored young shepherd who made music by clicking his tongue and snapping his fingers. Statues, boards, climbing frames and play areas along the way.",
        kidNote:
          "About 2 km and roughly 45 minutes at kid pace, with play stops built in. Out and back on the same path, so simply turn around when you have had enough.",
        coords: [47.5783, 12.3983],
        mapQuery: "Fischbachalm, Kaiserbachtal, Kirchdorf in Tirol, Austria",
      },
      {
        title: "Carry on up the Kaiserbachtal to the Griesner Alm",
        tag: "hike",
        attractionId: "gaudeamushuette",
        description:
          "The same valley, further in: a gentle, scenic track under the Wilder Kaiser walls ending at the Griesner Alm for Kaiserschmarrn. Pairs naturally with the Schnackler trail since both start from the same toll road.",
        kidNote: "Wide, mostly flat track. Buggy possible as far as the Griesner Alm; carrier beyond.",
        coords: [47.5783, 12.3983],
        mapQuery: "Griesner Alm, Kirchdorf in Tirol, Austria",
      },
      {
        title: "Grießbachklamm gorge, Erpfendorf",
        tag: "walk",
        attractionId: "griessbachklamm",
        description:
          "A cool, wild little gorge just up the road, where walkways and small suspension bridges carry the path over the tumbling Grießbach. Shady, and usually quieter than the mountain parks on a holiday.",
        kidNote: "Short loop ~1¼ hours. Bridges and steps mean a carrier for the 2 year old, no buggy.",
        coords: [47.5545, 12.4295],
        mapQuery: "Grießbachklamm, Erpfendorf, Austria",
      },
    ],
    food: [
      {
        name: "Alpengasthaus Griesner Alm",
        description:
          "At the end of the Kaiserbachtal toll road at 1,024 m, right where the Schnackler trail leads. Open daily 08:00 to 22:00 from June to late October, and used to families.",
        coords: [47.5783, 12.3983],
        mapQuery: "Alpengasthaus Griesner Alm, Kirchdorf in Tirol, Austria",
      },
    ],
    tips: [
      "Today is Mariä Himmelfahrt, a public holiday across Austria and Ferragosto in Italy. Shops are shut and the gondola-served parks will be at their busiest all summer, which is exactly why the quiet valley is the better call.",
      "Drive Kirchdorf to Gasteig to Griesenau, then left into the Kaiserbachtal. Pay at the toll station after 650 m and keep driving to the Fischbachalm car park, where the trail starts.",
      "The Schnackler trail is out and back rather than a loop, so there is nothing to arrange for the return: just walk back to the car.",
    ],
  },
  {
    date: "2026-08-16",
    weekday: "Sunday",
    region: "wilderkaiser",
    base: "Apartment Streif LXL",
    baseQuery: BASE_STREIF,
    title: "Triassic Park on the Steinplatte",
    subtitle: "Dinosaurs on an old coral reef",
    options: [
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
      {
        title: "KaiserWelt Scheffau on the Brandstadl",
        tag: "playground",
        attractionId: "kaiserwelt",
        description:
          "Ride the Brandstadlbahn up to a play realm at 1,650 m: through a castle gate into the KaiserWald, with castle walls, treehouses, a climbing wall, a sporting course and the Little People's forest.",
        kidNote: "The gondola takes pushchairs, and the park is free once you have a lift ticket. Easy trails between stations suit all three ages.",
        coords: [47.5028, 12.2547],
        mapQuery: "Brandstadlbahn, Scheffau am Wilden Kaiser, Austria",
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
        title: "Kitzbühel old town and Schwarzsee",
        tag: "town",
        attractionId: "kitzbuehel",
        description:
          "Wander the painted medieval town, then cool off at the warm, shallow Schwarzsee lake with a lido and playground just outside town.",
        kidNote: "Easy town stroll plus a warm swimming lake. Buggy-friendly.",
        coords: [47.4467, 12.3917],
        mapQuery: "Schwarzsee, Kitzbühel, Austria",
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
      "Shops are shut again today, the second of the two closed days, so everything should already be in the fridge.",
      "Triassic Park entry is free and you pay only the Steinplatte gondola, which the Kitzbühel Alps Summer Card also covers.",
      "Check the cable-car operating hours and last descent before heading up.",
    ],
  },
  {
    date: "2026-08-17",
    weekday: "Monday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "Travel to the Ötztal",
    subtitle: "Moving day, via Juppi Zauberwald",
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
        title: "Juppi Zauberwald on the drive to the Ötztal",
        tag: "kids",
        attractionId: "juppi-zauberwald",
        description:
          "The highlight of the moving day: an enchanted forest on the Reitherkogel, right off the Inn-valley motorway. A 2.5 km buggy-friendly loop from the gondola winds past a magic village with a witch's kitchen, a ghost moor with a wooden wizard, a wobbly bridge, a viewing tower, a bird's-nest swing and water games.",
        kidNote:
          "Buggy-friendly the whole loop, a proper leg-stretch mid-drive. The Reitherkogelbahn is closed on Wednesdays, but this is a Monday. The Alpbachtaler Kinderpark by the gondola has lunch and a playground.",
        coords: [47.4247, 11.8792],
        mapQuery: "Reitherkogelbahn, Reith im Alpbachtal, Austria",
      },
      {
        title: "Check in and Piburger See sunset loop",
        tag: "lake",
        attractionId: "piburger-see",
        description:
          "Drop bags, then drive up to Piburg and the warm little nature-reserve lake above Oetz for a gentle shore circuit and a paddle.",
        kidNote:
          "Drive up rather than walking from Oetz. The shore circuit is about an hour but is rooty and rocky in places, so carrier rather than buggy for the 2 year old. Warm, shallow swimming and rowing boats.",
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
    food: [
      {
        name: "Alpbachtaler Kinderpark, Reith im Alpbachtal",
        description:
          "Five minutes from the Juppi gondola: minigolf, a park train, trampolines, electric cars and a petting zoo with goats, rabbits and donkeys, with refreshments on site. Open 15 May to 31 October.",
        playground: true,
        coords: [47.4247, 11.8792],
        mapQuery: "Alpbachtaler Kinderpark, Reith im Alpbachtal, Austria",
      },
      {
        name: "Reither See, Reith im Alpbachtal",
        description:
          "The village bathing lake, with a separate shallow children's water area and a playground beside it. A good swap if the day turns hot rather than hungry.",
        playground: true,
        coords: [47.4267, 11.8756],
        mapQuery: "Reither See, Reith im Alpbachtal, Austria",
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
    title: "WIDI day at Hochoetz",
    subtitle: "Play world plus one themed trail",
    options: [
      {
        title: "WIDIVERSUM Hochoetz play world",
        tag: "kids",
        attractionId: "widiversum",
        description:
          "The Acherkogelbahn lifts you straight from Oetz to Hochoetz, where 36 play and puzzle stations are spread over 3,000 m² of mountainside, themed around WIDI the mountain sheep.",
        kidNote: "Gondola up, wide mostly level paths near the top station, so a buggy works around the main area. Stations suit all three ages.",
        coords: [47.2075, 10.9375],
        mapQuery: "WIDIVERSUM Hochoetz, Oetz, Austria",
      },
      {
        title: "WIDI trail A: Glück auf! World of the miners",
        tag: "walk",
        attractionId: "widi-glueck-auf",
        description:
          "The shorter of the two themed trails: 2.7 km and 110 m of climbing over the Balbach to the Kühtaile Alm, where the miner Kuno tells the story of mining in the valley. There is a hut partway for refreshments.",
        kidNote:
          "About 1¼ hours on paper, so closer to 2½ with children stopping at everything. The hut halfway is the reason to pick this one.",
        coords: [47.2075, 10.9375],
        mapQuery: "Kühtaile Alm, Hochoetz, Austria",
      },
      {
        title: "WIDI trail B: Hoch hinaus! For summit conquerors",
        tag: "walk",
        attractionId: "widi-hoch-hinaus",
        description:
          "The bigger-feeling one, though it only climbs about 130 m: from the Panorama Restaurant at 2,020 m via the Balanceakt to the Bielefelder Hütte at 2,150 m, then the climbing crystal, WIDI's photo platform and a Hollywood swing before looping back.",
        kidNote:
          "Roughly 3.5 km and an hour on paper, again about double that in practice. Pick this one for the mountain hut and the summit views rather than for difficulty.",
        coords: [47.2075, 10.9375],
        mapQuery: "Bielefelder Hütte, Hochoetz, Austria",
      },
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
        title: "Alpine Coaster Hoch-Imst (longest in the world)",
        tag: "kids",
        attractionId: "alpine-coaster-imst",
        description:
          "The nearest equivalent to the Fiss Funpark, about 20 minutes away: 3,535 m of alpine coaster dropping 500 m down the mountain, plus Albin's play park at the valley station with slides, trampolines and a quad track.",
        kidNote:
          "Minimum age 3 to ride even with an adult, so the 2 year old cannot go on the coaster; Albin's play park at the base covers her instead. From 8 and 1.25 m they may ride alone, so the 8 year old probably can.",
        coords: [47.2231, 10.7256],
        mapQuery: "Alpine Coaster Imst, Hoch-Imst, Austria",
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
    title: "Treasure trails or thermal pools",
    subtitle: "A day on the doorstep",
    options: [
      {
        title: "9 Schätze Habicher See from Oetz (morning)",
        tag: "walk",
        attractionId: "habicher-see",
        description:
          "The doorstep treasure route. Out from Oetz along the Ötztaler Ache to the Wellerbrücke, where a viewpoint overlooks the grade-5 rapids used for the extreme kayak world championship, then a gentle forest climb to Habichen past the Grassmayr bell-founders' house, branching to the ice cellar and the treasure chest at the lake.",
        kidNote:
          "Easy but not flat, so carrier for the 2 year old. The ice cellar sits at 0–2 °C year round, which is a shock in August. Find the treasure chest and stamp the book.",
        coords: [47.2145, 10.8985],
        mapQuery: "Habicher See, Oetz, Austria",
        link: "https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/9-schaetze-habicher-see.r-19878715",
        linkLabel: "Official route on oetztal.com",
      },
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
        title: "Naturpark Haus, Längenfeld (Wednesday stations)",
        tag: "sights",
        attractionId: "naturparkhaus",
        description:
          "The Ötztal Nature Park visitor centre: a compact multimedia exhibition on the valley's animals, geology and water, with touchscreens, a hologram, VR glasses and a children's puzzle sheet. Same village as the Aqua Dome, so the two pair naturally.",
        kidNote:
          "An hour indoors rather than a whole outing, and it is an exhibition, not a play centre. Today is the one Wednesday here, and Wednesday afternoons run nature activity stations from 14:00 to 16:30 with no booking.",
        coords: [47.0703, 10.9714],
        mapQuery: "Naturpark Haus, Oberlängenfeld 142, Längenfeld, Austria",
      },
      {
        title: "9 Treasures of Piburger See loop (afternoon)",
        tag: "walk",
        attractionId: "piburger-see",
        description:
          "The official Ötztal family route: a loop of the warm nature-reserve lake passing nine viewing platforms and 'places of strength'. The wider western shore is stroller-friendly; the eastern shore is a rootier adventure path.",
        kidNote:
          "About 1.5 to 2 hours at the lake itself; the west shore takes a buggy, the east shore does not. Park at Piburg. Walking up the Elsinger Weg from Oetz adds a real climb, so only with a carrier and no buggy.",
        coords: [47.1986, 10.8806],
        mapQuery: "Piburger See, Oetz, Austria",
        link: "https://www.oetztal.com/en/activities/summer/hiking-mountaineering/hiking-regions/oetz-region/the-9-treasures-of-lake-piburgersee",
        linkLabel: "Official route on oetztal.com",
      },
    ],
    food: [
      {
        name: "Gasthaus Seehäusl, Piburger See",
        description:
          "Lakeside inn with an outdoor sandbox and an indoor play box with books, open daily 11:00 to 18:00 from mid-May to early October. About 30 minutes from the Piburg car park along the right bank, on a trail that takes a pram.",
        playground: true,
        coords: [47.1986, 10.8806],
        mapQuery: "Gasthaus Seehäusl, Piburger See, Oetz, Austria",
      },
      {
        name: "Restaurant am Piburger See",
        description:
          "Runs the bathing area at the south-east end of the lake, with a children's pool, a children's slide and rowing-boat hire, and a sun terrace straight above the water. The pick if you want lunch and a swim in one stop.",
        playground: true,
        coords: [47.1986, 10.8806],
        mapQuery: "Restaurant am Piburger See, Oetz, Austria",
      },
    ],
    tips: [
      "Both treasure routes fit into one day with almost no driving: Habicher See on foot from Oetz in the morning, then ten minutes up to Piburg for the lake and a swim after lunch. Two of the nine treasures, and the car barely moves.",
      "This is the only Wednesday of the Ötztal stay, and the Naturpark Haus runs its nature activity stations on Wednesday afternoons. If the weather breaks, that plus the Aqua Dome makes a whole Längenfeld day.",
      "Trainers with grip help on the damp waterfall steps.",
    ],
  },
  {
    date: "2026-08-20",
    weekday: "Thursday",
    region: "oetz",
    base: "Falkners Five",
    baseQuery: BASE_FALKNER,
    title: "Treasure hunt or an easy river walk",
    subtitle: "Last full day in the Ötztal",
    options: [
      {
        title: "Treasure hunt village round, Ochsengarten",
        tag: "walk",
        attractionId: "ochsengarten-schatzsuche",
        description:
          "The gentlest themed walk in the valley: 2.94 km with only 51 m of climbing, up through forest on one side of the stream and back along the other. Find the caches, collect a letter from each, and the solution word earns a gift at the info office.",
        kidNote:
          "Wide enough to push a buggy the whole way round, about 1¼ hours, and it finishes at a children's playground. The easiest of the three options for this day.",
        coords: [47.199, 10.9986],
        mapQuery: "Ochsengarten 27, 6433 Haiming, Austria",
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
    ],
    tips: [
      "Of the three routes considered for today, two are good and one is not. Ochsengarten and the Andreas-Hofer-Weg are both gentle and buggy-friendly; the Wasserläufer Piburger See theme trail is listed as easy but is 9.2 km with 538 m of climbing and a steep pull to the Seejöchl, so it is not a toddler route.",
      "Decide by the morning weather and how tired everyone is.",
    ],
  },
  {
    date: "2026-08-21",
    weekday: "Friday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Arrive in South Tyrol",
    subtitle: "Check in, pool, no pressure",
    image: "img/entdecker.jpg",
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
          name: "Rosskopf alpine coaster, Sterzing",
          image: "img/rosskopf.jpg",
          description:
            "Ride the gondola up from Sterzing and let off steam after the long transfer: the Rosskopf summer alpine coaster runs 1.2 km down the mountain on rails, brakes in your own hands, and a child from about three can ride tucked in front of a parent. Playground, huts and big views at the top. A fun, easy first taste of Italy right by the motorway.",
          tag: "cablecar",
          coords: [46.9036, 11.4494],
          mapQuery: "Rosskopf Sterzing cable car, Italy",
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
        title: "Check in and relax at the hotel pool",
        wiki: "Puster Valley",
        tag: "spa",
        description:
          "Arrive around noon, check into the Entdecker for the six-night stay, then let the kids loose in the pool and explore the hotel. Dinner in, no pressure to do anything else after the long transfer.",
        kidNote: "No driving, no plan. Pool, unpack, early dinner.",
        mapQuery: BASE_ENTDECKER,
      },
      {
        title: "Toblacher See loop if you have energy",
        tag: "lake",
        attractionId: "toblacher-see",
        description:
          "If everyone is still fresh, the flat, easy shore loop around Lake Toblach with mountain views and a kiosk is a gentle first taste of the Dolomites.",
        kidNote: "Flat, buggy-friendly shore loop (~3.5 km). Snack kiosk on site.",
        coords: [46.715, 12.223],
        mapQuery: "Toblacher See, Toblach, Italy",
      },
    ],
    tips: [
      "Ask at check-in for the Südtirol Guest Pass; it makes buses and trains across South Tyrol free, which the bike day especially uses.",
      "Keep today gentle; the plan proper starts tomorrow.",
    ],
  },
  {
    date: "2026-08-22",
    weekday: "Saturday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Easy nature & orchard day",
    subtitle: "A soft first full day",
    options: [
      {
        title: "Apple Trail through the Natz-Schabs orchards",
        tag: "walk",
        attractionId: "apfelweg",
        description:
          "A gentle, mostly flat themed loop through the apple orchards of the sunny Natz-Schabs plateau, ~30 minutes west. Information panels on South Tyrol's apples, ponds and biotopes along the way, and a viewpoint with sun loungers. Walk as much of the 7.7 km as little legs want and turn back.",
        kidNote: "Flat and buggy-friendly. Pair it with the Apfelgarten playground and the Raiermoos boardwalk for an easy morning, and be back for the pool by mid-afternoon.",
        coords: [46.7925, 11.6642],
        mapQuery: "Apfelweg Natz-Schabs, Italy",
      },
      {
        title: "Apfelgarten playground, Natz-Schabs",
        tag: "playground",
        attractionId: "apfelgarten-playground",
        description:
          "A family playground on the apple plateau, the easy morning start before the orchard walk.",
        kidNote: "Flat, buggy-friendly, pure play.",
        coords: [46.793, 11.665],
        mapQuery: "Natz-Schabs playground, Italy",
      },
      {
        title: "Raiermoos biotope boardwalk, Raas",
        tag: "walk",
        attractionId: "raier-moos",
        description:
          "A flat boardwalk over a protected wetland of reeds and ponds near Raas, rich in birdlife and shaded on a hot day. A short leg on its own or part of the Apple Trail.",
        kidNote: "Flat boardwalk, buggy-friendly, short.",
        coords: [46.8017, 11.6742],
        mapQuery: "Raiermoos, Raas, Natz-Schabs, Italy",
      },
    ],
    tips: [
      "An easy first full day on purpose: orchard walk in the morning, hotel pool from 3 to 4 pm.",
    ],
  },
  {
    date: "2026-08-23",
    weekday: "Sunday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Plose & the WoodyWalk",
    subtitle: "The must-do mountain day",
    options: [
      {
        title: "Plose cable car & the WoodyWalk",
        tag: "cablecar",
        attractionId: "woodywalk-plose",
        description:
          "Ride the Plose gondola above Brixen, then the wide, stroller-friendly WoodyWalk to the Rossalm past wooden play stations, a Kneipp water walk, giant loungers and a viking ship, under the Peitlerkofel and Geisler spires. Lunch at a mountain hut, let the kids play, and add more walking only if everyone still has energy.",
        kidNote: "Gondola up, then easy walking with play stops all along. Buggy-friendly. One of the highlights of the whole trip.",
        coords: [46.6975, 11.7405],
        mapQuery: "Plose cable car mountain station, Brixen, Italy",
      },
      {
        title: "Kronplatz summit & Concordia 360° loop",
        tag: "cablecar",
        attractionId: "concordia-360",
        description:
          "A nearer cable-car alternative right above the hotel: the level Concordia 360° circuit around the flat Kronplatz summit, with the Peace Bell, mountain museums and staged Dolomite viewpoints.",
        kidNote: "The best buggy walk of the trip: gondola up, then a flat loop at 2,275 m.",
        coords: [46.7378, 11.954],
        mapQuery: "Kronplatz / Plan de Corones, Italy",
      },
    ],
    tips: [
      "Check the Plose gondola's first-up and last-down times, and carry a layer; it is cool at 2,000 m even in August.",
    ],
  },
  {
    date: "2026-08-24",
    weekday: "Monday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Family bike adventure",
    subtitle: "Olang to Welsberg, train back",
    options: [
      {
        title: "Cycle Olang to Welsberg, train back",
        tag: "sights",
        attractionId: "olang-welsberg-bike",
        description:
          "Drive to Olang, hire bikes, and roll the flat, easy Pustertal cycle path past Lake Olang to Welsberg. Play at Prenninger Park, coffee and ice cream in the village, then take the Pustertal train back to Olang with the bikes. Level, paved and away from traffic.",
        kidNote: "The most fun day for the kids. Flat the whole way; bike seat or trailer for the 2 year old, booked when you hire.",
        coords: [46.7447, 12.0206],
        mapQuery: "Olang Valdaora, Italy",
      },
      {
        title: "Lago di Braies, the Dolomite jewel",
        tag: "lake",
        attractionId: "pragser-wildsee",
        description:
          "Up the valley from Welsberg: the emerald jewel of the Dolomites. Walk the flat shore loop and hire a wooden rowing boat. Go early; access is timed or by shuttle in peak summer.",
        kidNote: "Mostly flat shore path (~3.5 km), buggy-friendly on the near side. Rowing boats are a hit.",
        coords: [46.6947, 12.0855],
        mapQuery: "Lago di Braies, Italy",
      },
    ],
    food: [
      {
        name: "Prenninger Park, Welsberg",
        description:
          "A riverside family park with a playground and room to run, the natural turnaround of the bike ride and a shady picnic spot before the train back.",
        playground: true,
        coords: [46.7486, 12.1046],
        mapQuery: "Prenninger Park, Welsberg, Italy",
      },
    ],
    tips: [
      "Book bikes with a child seat or trailer ahead in Olang. The Südtirol Guest Pass covers the train back.",
    ],
  },
  {
    date: "2026-08-25",
    weekday: "Tuesday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Fane Alm",
    subtitle: "The prettiest alpine village",
    options: [
      {
        title: "Fane Alm alpine village, Vals",
        tag: "hike",
        attractionId: "fane-alm",
        description:
          "Often called South Tyrol's prettiest alpine village: 35 weathered wooden huts and a little church across the meadows at 1,740 m. From the Berg am Boden car park it is a gentle hour up the Milk Trail beside a splashing stream, with staffed huts for a long lunch and the kids free to roam. Cross the bridges, watch the cows, and wander further up the valley only as far as everyone fancies.",
        kidNote: "Gentle gravel road up, buggy possible with effort or carrier. Streams, bridges and animals the whole way; huts to play around.",
        coords: [46.9061, 11.6606],
        mapQuery: "Fane Alm, Vals, Italy",
      },
      {
        title: "Rodenecker-Lüsner Alm meadows",
        tag: "hike",
        attractionId: "rodenecker-luesner-alm",
        description:
          "If you would rather wide-open meadows than a hut village: the gentle, quiet high pastures of the Rodenecker-Lüsner Alm, easy walking with huts and big views.",
        kidNote: "Almost flat, buggy-friendly on the main paths. Very easy.",
        coords: [46.7967, 11.6183],
        mapQuery: "Zumis parking, Rodeneck, Italy",
      },
    ],
    tips: [
      "A shuttle covers the last stretch of road up to Fane Alm if the walk from Berg am Boden is too much with the little one.",
    ],
  },
  {
    date: "2026-08-26",
    weekday: "Wednesday",
    region: "southtyrol",
    base: "Entdecker Hotel Panorama",
    baseQuery: BASE_ENTDECKER,
    title: "Rodenecker-Lüsner Alm",
    subtitle: "Easy meadows, quiet & beautiful",
    options: [
      {
        title: "Rodenecker-Lüsner Alm high meadows",
        tag: "hike",
        attractionId: "rodenecker-luesner-alm",
        description:
          "One of the easiest and most beautiful hiking days in South Tyrol, and far quieter than the Seiser Alm. From the Zumis car park, wide gentle paths with barely a climb cross huge rolling pastures dotted with wooden huts, with the Creation Trail's art stations along the way and enormous views. Mountain huts for lunch.",
        kidNote: "Almost flat, buggy-friendly on the main paths, huts to break the walk. The easiest big-meadow day of the trip.",
        coords: [46.7967, 11.6183],
        mapQuery: "Zumis parking, Rodeneck, Italy",
      },
      {
        title: "Seiser Alm meadow walk",
        tag: "walk",
        attractionId: "seiser-alm",
        description:
          "The famous alternative: Europe's largest high-alpine meadow under the Sassolungo spires, cable car up then flat, pram-friendly trails and huts. Busier than the Rodenecker Alm.",
        kidNote: "Cable car up, very gentle wide meadow paths. Some trails are buggy-friendly.",
        coords: [46.5447, 11.6075],
        mapQuery: "Seiser Alm Aerial Cableway, Italy",
      },
    ],
    tips: [
      "Last full day in South Tyrol. Pack tonight so tomorrow's gorge-and-drive day is easy, and pick up Speck and a bottle of Lagrein as edible souvenirs.",
    ],
  },
  {
    date: "2026-08-27",
    weekday: "Thursday",
    region: "munich",
    base: "Airport Hotel (Munich)",
    baseQuery: BASE_MUC,
    title: "Kundlerklamm, then drive to Munich",
    subtitle: "An easy gorge on the way home",
    drive: {
      from: "South Tyrol",
      to: "Munich Airport area",
      duration: "~3h 30m driving",
      distance: "~280 km",
      fromQuery: BASE_ENTDECKER,
      toQuery: BASE_MUC,
      note: "North over the Brenner and down into the Inn valley, stopping at the Kundler Klamm near Wörgl, roughly halfway. Return the rental car this evening if you can.",
      stops: [
        {
          name: "Swarovski Kristallwelten, Wattens",
          wiki: "Swarovski Kristallwelten",
          description:
            "The crystal world's huge outdoor playground, a climbing tower and play cloud, right by the motorway near Innsbruck. A big playground stop to break the drive.",
          tag: "playground",
          coords: [47.2966, 11.6011],
          mapQuery: "Swarovski Kristallwelten, Wattens, Austria",
        },
        {
          name: "Chiemsee swim & playground",
          wiki: "Chiemsee",
          description:
            "A final lake swim and lakeside playground at the Chiemsee, about 45 minutes before the airport, if the weather is warm.",
          tag: "swim",
          coords: [47.8662, 12.3492],
          mapQuery: "Prienavera Erlebnisbad, Prien am Chiemsee, Germany",
        },
      ],
    },
    options: [
      {
        title: "Kundler Klamm gorge near Wörgl",
        tag: "walk",
        attractionId: "kundlerklamm",
        description:
          "Break the drive home with an easy, free gorge right by the A12 near Wörgl, roughly halfway. A wide, stroller-friendly path runs about 3.5 km along the water under 200 m rock walls, more a leisurely stream walk than a hike, with places to splash, skip stones and paddle. A little shuttle train saves the legs to the entrance.",
        kidNote: "The easiest gorge of the trip: flat and buggy-friendly, and the kids can play in the stream. Free.",
        coords: [47.4585, 12.0836],
        mapQuery: "Kundler Klamm, Kundl, Austria",
      },
      {
        title: "Gilfenklamm marble gorge, near Sterzing",
        tag: "hike",
        attractionId: "gilfenklamm",
        description:
          "The alternative gorge, taken early instead: the only gorge in the world carved through pure white marble, 2 km off the Sterzing motorway exit at the start of the drive. Wooden walkways climb past a 15 m waterfall and glowing white rock. Swap to this if you would rather do the gorge first thing and drive straight through afterwards.",
        kidNote: "Bridges and 175 m of climb, so a carrier for the 2 year old and best for ages 4+.",
        coords: [46.875, 11.3583],
        mapQuery: "Gilfenklamm, Stange, Racines, Italy",
      },
      {
        title: "Straight to the airport hotel",
        wiki: "Munich Airport",
        tag: "free",
        description:
          "If everyone would rather just travel, skip the gorge, drive through with a playground stop, drop the rental car and repack so the flight morning is calm.",
        kidNote: "No extra outing; the drive stops break up the journey.",
        mapQuery: BASE_MUC,
      },
    ],
    tips: [
      "The Kundler Klamm is free, flat and stroller-friendly, roughly halfway home. If you would rather do the marble gorge instead, the Gilfenklamm is 2 km off the Sterzing exit at the start of the drive; switch with Change plan.",
      "Refuel and clean out the rental car before returning it to avoid extra fees.",
    ],
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

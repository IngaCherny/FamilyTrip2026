/**
 * English → Hebrew content translations. Any key not present here falls back to
 * the English source, so coverage can grow incrementally without breaking the
 * app. Keyed by the exact English string as it appears in the data/UI.
 */
export const HE_CONTENT: Record<string, string> = {
  // ---- weekdays ----
  Sunday: "יום ראשון",
  Monday: "יום שני",
  Tuesday: "יום שלישי",
  Wednesday: "יום רביעי",
  Thursday: "יום חמישי",
  Friday: "יום שישי",
  Saturday: "שבת",

  // ---- itinerary UI labels ----
  Day: "יום",
  Today: "היום",
  "The route": "המסלול",
  "Your plan": "התוכנית",
  "Nearby — add to the day": "בסביבה — להוסיף ליום",
  "Restaurants near the trail": "מסעדות ליד המסלול",
  "Find a hut or café": "בקתה או בית קפה",
  "Another hike nearby": "טיול נוסף בקרבת מקום",
  "Family food stops": "עצירות אוכל למשפחה",
  "Stops along the way": "עצירות בדרך",
  "Hide extra stops": "הסתר עצירות נוספות",
  "on Maps →": "במפות →",
  "more stop": "עצירה נוספת",
  "more stops": "עצירות נוספות",
  "and this day is one of them. Check before you drive.":
    "והיום הזה הוא אחד מהם. כדאי לבדוק לפני שנוסעים.",
  Runs: "פעיל",
  to: "עד",
  "so it may be shut on this date.": "אז ייתכן שסגור בתאריך הזה.",
  Playground: "גן שעשועים",
  "Every option also lives under Places, with its own map and “near me”.":
    "כל אפשרות קיימת גם תחת ׳מקומות׳, עם מפה משלה ו׳בקרבתי׳.",
  "Show map": "הצג מפה",
  "Drive here": "נווט לכאן",
  drive: "נסיעה",
  "Change plan": "שנה תוכנית",
  "Hide alternatives": "הסתר חלופות",
  "Open in Maps": "פתח ב-Maps",
  Waze: "Waze",
  Place: "מקום",
  Maps: "מפות",
  "Official site": "האתר הרשמי",
  "Official route": "המסלול הרשמי",
  Tip: "טיפ",
  "For the kids": "לילדים",
  Price: "מחיר",
  Free: "חינם",
  "Closed today": "סגור היום",
  "Out of season": "מחוץ לעונה",
  "Buggy OK": "מתאים לעגלה",

  // ---- trail shapes ----
  "There & back": "הלוך ושוב",
  Loop: "מעגלי",
  "Gentle loops": "לולאות קלות",
  "There & back — or the shuttle train": "הלוך ושוב — או ברכבת המעבורת",

  // ---- tags ----
  Drive: "נסיעה",
  Hike: "טיול הליכה",
  "Nature walk": "טיול בטבע",
  Swim: "שחייה",
  Sights: "אתרים",
  Town: "עיירה",
  Lake: "אגם",
  Waterfall: "מפל",
  "Cable car": "רכבל",
  Animals: "חיות",
  Food: "אוכל",
  Kids: "ילדים",
  Spa: "ספא",
  Flight: "טיסה",

  // ===================================================================
  //  ITINERARY CONTENT
  // ===================================================================

  // ---- day titles ----
  "Land in Munich, drive to the Wilder Kaiser": "נחיתה במינכן, נסיעה לווילדר קייזר",
  "Hexenwasser Söll": "הקסוואסר, זל",
  "Schnackler trail in the Kaiserbachtal": "שביל שנאקלר בקייזרבכטל",
  "Triassic Park on the Steinplatte": "טריאסיק פארק בשטיינפלאטה",
  "Travel to the Ötztal": "נסיעה לאצטל",
  "WIDI day at Hochoetz": "יום WIDI בהוכאץ",
  "Treasure trails or thermal pools": "שבילי אוצר או בריכות תרמיות",
  "Treasure hunt or an easy river walk": "ציד אוצר או טיול נחל קליל",
  "Rosskopf coaster on the way in": "רכבת ההרים רוסקופף בדרך",
  "Easy nature & orchard day": "יום טבע ומטעים רגוע",
  "Plose & the WoodyWalk": "פלוזה ושביל WoodyWalk",
  "Family bike adventure": "הרפתקת אופניים משפחתית",
  "Fane Alm": "פאנה אלם",
  "Rodenecker-Lüsner Alm": "רודנקר-ליזנר אלם",
  "Kundlerklamm, then drive to Munich": "קונדלרקלאם, ואז נסיעה למינכן",
  "Fly home from Munich": "טיסה הביתה ממינכן",

  // ---- day subtitles ----
  "Arrival day": "יום הגעה",
  "The big witch's water day": "היום הגדול של מי המכשפה",
  "A quiet valley on a busy holiday": "עמק שקט בחג עמוס",
  "Dinosaurs on an old coral reef": "דינוזאורים על שונית אלמוגים עתיקה",
  "Moving day, via Juppi Zauberwald": "יום מעבר, דרך יופי צאוברוואלד",
  "Play world plus one themed trail": "עולם משחקים ועוד שביל נושאי אחד",
  "A day on the doorstep": "יום ממש ליד הבית",
  "Last full day in the Ötztal": "היום המלא האחרון באצטל",
  "Break the drive at Sterzing, then check in": "עצירה בשטרצינג, ואז צ׳ק-אין",
  "A soft first full day": "יום מלא ראשון ורגוע",
  "The must-do mountain day": "יום ההר שאסור לפספס",
  "Olang to Welsberg, train back": "מאולנג לוולסברג, חזרה ברכבת",
  "The prettiest alpine village": "הכפר האלפיני היפה ביותר",
  "Easy meadows, quiet & beautiful": "אחו קליל, שקט ויפה",
  "An easy gorge on the way home": "קניון קליל בדרך הביתה",
  "Departure day": "יום עזיבה",

  // ---- day notes ----
  "Arrival day — settle in and take it easy.": "יום הגעה — להתמקם ולקחת בקלות.",
  "A full day out — cook dinner back at the apartment.":
    "יום שלם בחוץ — לבשל ארוחת ערב בחזרה בדירה.",
  "Pack a picnic, or lunch at the Griesner Alm.":
    "לארוז פיקניק, או ארוחת צהריים בגריזנר אלם.",
  "A full day up on the plateau.": "יום שלם למעלה על המישור.",
  "Drive ~40 min to Juppi, play, then ~1h 05m on to the apartment in Oetz.":
    "נסיעה של כ-40 דק׳ ליופי, לשחק, ואז עוד כ-1:05 שעה לדירה באץ.",
  "A full day at the play world.": "יום שלם בעולם המשחקים.",
  "Easy day close to base — cook in tonight.":
    "יום קליל קרוב לבסיס — לבשל בבית הערב.",
  "A quiet half-day; relax at the apartment after.":
    "חצי יום שקט; לנוח בדירה אחר כך.",
  "Ride Rosskopf at Sterzing, then ~30 min on to the hotel in Kiens.":
    "רכבת ההרים רוסקופף בשטרצינג, ואז עוד כ-30 דק׳ למלון בקינס.",
  "Everything's at the hotel — pools and dinner back at the Entdecker.":
    "הכול במלון — בריכות וארוחת ערב בחזרה באנטדקר.",
  "Back to the Entdecker pools for the afternoon.":
    "חזרה לבריכות האנטדקר לשעות אחר הצהריים.",
  "Hotel pools and dinner in tonight.": "בריכות המלון וארוחת ערב בבית הערב.",
  "Hike the morning, then the hotel pools.": "טיול בבוקר, ואז בריכות המלון.",
  "Last gorge on the way home, then ~1h 15m on to the airport hotel.":
    "הקניון האחרון בדרך הביתה, ואז עוד כ-1:15 שעה למלון שדה התעופה.",

  // ---- option / stop titles ----
  "First stop — Heimstettener See, swim": "עצירה ראשונה — היימשטטנר זה, שחייה",
  "Arrive at Apartment Streif": "הגעה לדירת שטרייף",
  "Hexenwasser Söll (witch's water)": "הקסוואסר זל (מי המכשפה)",
  "Hintersteiner See lake walk and swim": "טיול ושחייה באגם הינטרשטיינר זה",
  "Schnackler adventure trail, Kaiserbachtal": "שביל ההרפתקאות שנאקלר, קייזרבכטל",
  "Carry on up the Kaiserbachtal to the Griesner Alm":
    "להמשיך במעלה הקייזרבכטל אל גריזנר אלם",
  "Grießbachklamm gorge, Erpfendorf": "קניון גריסבכקלאם, ארפנדורף",
  "Triassic Park on the Steinplatte, Waidring": "טריאסיק פארק בשטיינפלאטה, ויידרינג",
  "KaiserWelt Scheffau on the Brandstadl": "קייזרוולט שפאו בברנדשטאדל",
  "Ellmi's Zauberwelt at Hartkaiser, Ellmau": "עולם הקסמים של אלמי בהרטקייזר, אלמאו",
  "Kitzbühel old town and Schwarzsee": "העיר העתיקה של קיצביהל ושוורצזה",
  "Juppi Zauberwald, Reith im Alpbachtal": "יופי צאוברוואלד, רייט אים אלפבכטל",
  "Arrive at Falkners Five, Oetz": "הגעה לפלקנרס פייב, אץ",
  "WIDIVERSUM Hochoetz play world": "עולם המשחקים WIDIVERSUM הוכאץ",
  "WIDI trail A: Glück auf! World of the miners":
    "שביל WIDI א׳: Glück auf! עולם הכורים",
  "WIDI trail B: Hoch hinaus! For summit conquerors":
    "שביל WIDI ב׳: Hoch hinaus! לכובשי הפסגות",
  "Area 47 water playground": "גן שעשועי מים Area 47",
  "Ötzi-Dorf and Greifvogelpark, Umhausen": "אצי-דורף ופארק ציפורי הטרף, אומהאוזן",
  "Alpine Coaster Hoch-Imst (longest in the world)":
    "אלפיין קוסטר הוך-אימסט (הארוך בעולם)",
  "9 Schätze Habicher See from Oetz (morning)": "9 אוצרות הביכר זה מאץ (בוקר)",
  "Stuibenfall waterfall walk, Umhausen": "טיול מפל שטויבנפאל, אומהאוזן",
  "Aqua Dome thermal spa, Längenfeld": "ספא תרמי אקווה דום, לנגנפלד",
  "Naturpark Haus, Längenfeld (Wednesday stations)":
    "בית פארק הטבע, לנגנפלד (עמדות יום רביעי)",
  "9 Treasures of Piburger See loop (afternoon)":
    "מסלול 9 האוצרות של פיבורגר זה (אחר הצהריים)",
  "Treasure hunt village round, Ochsengarten": "סבב ציד האוצר בכפר, אוקסנגארטן",
  "Auer Klamm gorge walk, Oetz": "טיול קניון אאואר קלאם, אץ",
  "Andreas-Hofer-Weg river walk (official Oetz route)":
    "טיול הנחל אנדראס-הופר-וג (המסלול הרשמי של אץ)",
  "Gaislachkogl cable car, Sölden": "רכבל גייזלכקוגל, זלדן",
  "Rosskopf alpine coaster, Sterzing": "אלפיין קוסטר רוסקופף, שטרצינג",
  "Arrive at Entdecker Hotel, Kiens": "הגעה למלון אנטדקר, קינס",
  "Apple Trail through the Natz-Schabs orchards": "שביל התפוחים דרך מטעי נאץ-שאבס",
  "Apfelgarten playground, Natz-Schabs": "גן שעשועים אפפלגארטן, נאץ-שאבס",
  "Raiermoos biotope boardwalk, Raas": "שביל העץ בביוטופ ראיירמוס, ראס",
  "Plose cable car & the WoodyWalk": "רכבל פלוזה ושביל WoodyWalk",
  "Kronplatz summit & Concordia 360° loop": "פסגת קרונפלאץ ומסלול קונקורדיה 360°",
  "Cycle Olang to Welsberg, train back": "רכיבה מאולנג לוולסברג, חזרה ברכבת",
  "Lago di Braies, the Dolomite jewel": "לאגו די בראייס, פנינת הדולומיטים",
  "Fane Alm alpine village, Vals": "הכפר האלפיני פאנה אלם, ואלס",
  "Rodenecker-Lüsner Alm meadows": "אחו רודנקר-ליזנר אלם",
  "Rodenecker-Lüsner Alm high meadows": "האחו הגבוה של רודנקר-ליזנר אלם",
  "Seiser Alm meadow walk": "טיול אחו זייזר אלם",
  "Kundler Klamm gorge, near Wörgl": "קניון קונדלר קלאם, ליד ורגל",
  "Arrive at Hilton Munich Airport": "הגעה להילטון שדה התעופה מינכן",
  "Check out and fly home from Munich (MUC)": "צ׳ק-אאוט וטיסה הביתה ממינכן (MUC)",

  // ---- option descriptions ----
  "A calm bathing lake just east of Munich, barely 20 minutes from the airport. Grassy banks, gentle shallows and shade — the perfect first leg-stretch and swim to shake off the flight before the drive south.":
    "אגם רחצה שקט ממש ממזרח למינכן, פחות מ-20 דקות משדה התעופה. גדות דשא, מים רדודים ונעימים וצל — עצירה ראשונה מושלמת למתוח את הרגליים ולשחות ולנער את הטיסה לפני הנסיעה דרומה.",
  "On south past Kufstein to Gasteig — grab groceries at the SPAR in St. Johann on the way. Unpack, then a flat meadow stroll with the Wilder Kaiser ahead, or the in-house sauna and whirlpool if everyone's wiped out. Early dinner, early night.":
    "דרומה דרך קופשטיין אל גסטייג — לקנות מצרכים ב-SPAR בסנקט יוהאן בדרך. לפרוק, ואז טיול קצר במישור עם הווילדר קייזר מלפנים, או הסאונה והג׳קוזי במקום אם כולם גמורים. ארוחת ערב מוקדמת ולישון מוקדם.",
  "Ride the Söll gondola up to a whole mountain of water channels, barefoot trails, mills and play stations. One of the best kid days in the region.":
    "עולים ברכבל של זל אל הר שלם של תעלות מים, שבילים יחפים, טחנות ועמדות משחק. אחד מימי הילדים הטובים באזור.",
  "A quieter alternative: a turquoise lake under the Kaiser walls. Walk as much of the flat shore path as little legs allow, then swim in the clear shallows.":
    "חלופה שקטה יותר: אגם טורקיז מתחת לצוקי הקייזר. ללכת כמה שהרגליים הקטנות מאפשרות על שביל החוף המישורי, ואז לשחות במים הרדודים והצלולים.",
  "A lakeside farm cafe famous with families: a big adventure playground plus goats, ponies and rabbits to visit, and Kaiserschmarrn on the terrace.":
    "בית קפה חוותי לחוף האגם שמשפחות אוהבות: גן שעשועי הרפתקאות גדול ועיזים, סוסי פוני וארנבים לבקר, וקייזרשמארן על המרפסת.",
  "A story trail in the Kaiserbach valley just up the road, telling the tale of the Schnackler, a bored young shepherd who made music by clicking his tongue and snapping his fingers. Statues, boards, climbing frames and play areas along the way.":
    "שביל סיפור בעמק הקייזרבך ממש במעלה הדרך, המספר את סיפורו של השנאקלר, רועה צעיר ומשועמם שיצר מוזיקה בהקשת הלשון והצמדת האצבעות. פסלים, שלטים, מתקני טיפוס ואזורי משחק לאורך הדרך.",
  "The same valley, further in: a gentle, scenic track under the Wilder Kaiser walls ending at the Griesner Alm for Kaiserschmarrn. Pairs naturally with the Schnackler trail since both start from the same toll road.":
    "אותו עמק, עמוק יותר פנימה: מסלול נוף עדין מתחת לצוקי הווילדר קייזר שמסתיים בגריזנר אלם לקייזרשמארן. משתלב טבעי עם שביל השנאקלר כי שניהם מתחילים מאותו כביש אגרה.",
  "A cool, wild little gorge just up the road, where walkways and small suspension bridges carry the path over the tumbling Grießbach. Shady, and usually quieter than the mountain parks on a holiday.":
    "קניון קטן, פראי וקריר ממש במעלה הדרך, שבו שבילי עץ וגשרים תלויים קטנים נושאים את הדרך מעל נחל הגריסבך הגועש. מוצל, ובדרך כלל שקט יותר מפארקי ההרים בחג.",
  "At the end of the Kaiserbachtal toll road at 1,024 m, right where the Schnackler trail leads. Open daily 08:00 to 22:00 from June to late October, and used to families.":
    "בקצה כביש האגרה של הקייזרבכטל בגובה 1,024 מ׳, בדיוק היכן ששביל השנאקלר מוביל. פתוח מדי יום 08:00 עד 22:00 מיוני עד סוף אוקטובר, ורגיל למשפחות.",
  "A dinosaur adventure world on a mountaintop that was a coral reef 200 million years ago. Gondola up to life-size dinosaurs, a fossil-digging beach, water rafts, a low ropes course and a stalactite cave. The park is free, you only pay the lift.":
    "עולם הרפתקאות דינוזאורים על פסגת הר שהייתה שונית אלמוגים לפני 200 מיליון שנה. רכבל למעלה אל דינוזאורים בגודל טבעי, חוף לחפירת מאובנים, רפסודות מים, מסלול חבלים נמוך ומערת נטיפים. הפארק חינם, משלמים רק על הרכבל.",
  "Ride the Brandstadlbahn up to a play realm at 1,650 m: through a castle gate into the KaiserWald, with castle walls, treehouses, a climbing wall, a sporting course and the Little People's forest.":
    "עולים ברכבל הברנדשטאדל אל ממלכת משחקים בגובה 1,650 מ׳: דרך שער טירה אל היער קייזרוואלד, עם חומות טירה, בתי עץ, קיר טיפוס, מסלול ספורט ויער האנשים הקטנים.",
  "Funicular from Ellmau to a mountain playground and a gentle themed walking trail with the Wilder Kaiser as the backdrop.":
    "רכבל הרים מאלמאו אל גן שעשועים הררי ושביל הליכה נושאי עדין עם הווילדר קייזר ברקע.",
  "Wander the painted medieval town, then cool off at the warm, shallow Schwarzsee lake with a lido and playground just outside town.":
    "לשוטט בעיירה מימי הביניים המצוירת, ואז להתרענן באגם השוורצזה החמים והרדוד עם חוף רחצה וגן שעשועים ממש מחוץ לעיירה.",
  "A famous Tyrolean estate with a petting area, ponies and a play barn. A fun (if pricier) lunch stop on the way back.":
    "אחוזה טירולית מפורסמת עם פינת ליטוף, סוסי פוני ואסם משחקים. עצירת צהריים כיפית (אם כי יקרה יותר) בדרך חזרה.",
  "The highlight of the moving day: an enchanted forest on the Reitherkogel, right off the Inn-valley motorway. A 2.5 km buggy-friendly loop from the gondola winds past a magic village, a ghost moor, a wobbly bridge, a viewing tower and water games. Optional detours on the way: Swarovski Kristallwelten or Alpenzoo Innsbruck.":
    "שיא יום המעבר: יער קסום על הרייטרקוגל, ממש ליד כביש עמק האין. מסלול מעגלי של 2.5 ק״מ ידידותי לעגלה מהרכבל מתפתל ליד כפר קסום, ביצת רפאים, גשר מתנדנד, מגדל תצפית ומשחקי מים. עקיפות אופציונליות בדרך: עולם הבדולח סברובסקי או גן החיות האלפיני של אינסברוק.",
  "On south into the mouth of the Ötztal for four nights. Unpack and settle in. If there is evening energy, the Piburger See sunset loop is close by, or just wander Oetz village for gelato.":
    "דרומה אל פתח האצטל לארבעה לילות. לפרוק ולהתמקם. אם יש אנרגיה לערב, מסלול השקיעה של פיבורגר זה קרוב, או פשוט לשוטט בכפר אץ עם גלידה.",
  "Five minutes from the Juppi gondola: minigolf, a park train, trampolines, electric cars and a petting zoo with goats, rabbits and donkeys, with refreshments on site. Open 15 May to 31 October.":
    "חמש דקות מהרכבל של יופי: מיני גולף, רכבת פארק, טרמפולינות, מכוניות חשמליות וגן חיות פינתי עם עיזים, ארנבים וחמורים, עם כיבוד במקום. פתוח מ-15 במאי עד 31 באוקטובר.",
  "The village bathing lake, with a separate shallow children's water area and a playground beside it. A good swap if the day turns hot rather than hungry.":
    "אגם הרחצה של הכפר, עם אזור מים רדוד נפרד לילדים וגן שעשועים לצידו. חלופה טובה אם היום מתחמם במקום מרעיב.",
  "The Acherkogelbahn lifts you straight from Oetz to Hochoetz, where 36 play and puzzle stations are spread over 3,000 m² of mountainside, themed around WIDI the mountain sheep.":
    "רכבל האכרקוגל מעלה אתכם ישירות מאץ להוכאץ, שם 36 עמדות משחק וחידה פרוסות על 3,000 מ״ר של מדרון הר, סביב הדמות של WIDI כבש ההרים.",
  "The shorter of the two themed trails: 2.7 km and 110 m of climbing over the Balbach to the Kühtaile Alm, where the miner Kuno tells the story of mining in the valley. There is a hut partway for refreshments.":
    "הקצר מבין שני השבילים הנושאיים: 2.7 ק״מ ו-110 מ׳ טיפוס מעל הבלבך אל הקיהטיילה אלם, שם הכורה קונו מספר את סיפור הכרייה בעמק. יש בקתה באמצע הדרך לכיבוד.",
  "The bigger-feeling one, though it only climbs about 130 m: from the Panorama Restaurant at 2,020 m via the Balanceakt to the Bielefelder Hütte at 2,150 m, then the climbing crystal, WIDI's photo platform and a Hollywood swing before looping back.":
    "זה שמרגיש גדול יותר, אף שהוא מטפס רק כ-130 מ׳: ממסעדת הפנורמה בגובה 2,020 מ׳ דרך הבלנסאקט אל בקתת בילפלדר בגובה 2,150 מ׳, ואז גביש הטיפוס, פלטפורמת הצילום של WIDI ונדנדת הוליווד לפני שסוגרים מעגל.",
  "The Alps' biggest outdoor adventure park at the mouth of the valley: a lake with slides and a shallow kids' zone, water playgrounds and climbing.":
    "פארק ההרפתקאות החיצוני הגדול ביותר באלפים בפתח העמק: אגם עם מגלשות ואזור רדוד לילדים, גני שעשועי מים וטיפוס.",
  "An open-air stone-age village with animals (aurochs, sheep, pigs) and a daily birds-of-prey flight show next door. Brilliant, gentle and educational.":
    "כפר תקופת אבן פתוח עם חיות (שוורי בר, כבשים, חזירים) ומופע תעופה יומי של ציפורי טרף בסמוך. מבריק, עדין וחינוכי.",
  "The nearest equivalent to the Fiss Funpark, about 20 minutes away: 3,535 m of alpine coaster dropping 500 m down the mountain, plus Albin's play park at the valley station with slides, trampolines and a quad track.":
    "המקבילה הקרובה ביותר לפאן-פארק פיס, כ-20 דקות משם: 3,535 מ׳ של אלפיין קוסטר שיורד 500 מ׳ במורד ההר, ובנוסף פארק המשחקים של אלבין בתחנת העמק עם מגלשות, טרמפולינות ומסלול אופנועי שטח.",
  "The doorstep treasure route. Out from Oetz along the Ötztaler Ache to the Wellerbrücke, where a viewpoint overlooks the grade-5 rapids used for the extreme kayak world championship, then a gentle forest climb to Habichen past the Grassmayr bell-founders' house, branching to the ice cellar and the treasure chest at the lake.":
    "מסלול האוצר שליד הבית. מאץ לאורך נהר האצטלר אכה אל גשר וולר, שם נקודת תצפית משקיפה על אשדות דרגה 5 המשמשות לאליפות העולם בקיאקים אתגריים, ואז טיפוס יער עדין להביכן ליד בית יצקני הפעמונים גראסמאייר, עם הסתעפות אל מרתף הקרח ותיבת האוצר ליד האגם.",
  "Tyrol's highest waterfall with viewing platforms and a suspension bridge in the spray. Walk only the lower section with smaller kids.":
    "המפל הגבוה ביותר בטירול עם פלטפורמות תצפית וגשר תלוי בתוך הרסס. עם ילדים קטנים כדאי ללכת רק את החלק התחתון.",
  "Striking outdoor thermal bowls steaming under the mountains, with an indoor children's water world and slides. Perfect for a cloudy day or tired legs.":
    "קערות תרמיות חיצוניות מרשימות שמעלות אדים מתחת להרים, עם עולם מים לילדים ומגלשות בפנים. מושלם ליום מעונן או לרגליים עייפות.",
  "The Ötztal Nature Park visitor centre: a compact multimedia exhibition on the valley's animals, geology and water, with touchscreens, a hologram, VR glasses and a children's puzzle sheet. Same village as the Aqua Dome, so the two pair naturally.":
    "מרכז המבקרים של פארק הטבע אצטל: תערוכת מולטימדיה קומפקטית על החיות, הגאולוגיה והמים של העמק, עם מסכי מגע, הולוגרמה, משקפי VR ודף חידה לילדים. באותו כפר כמו האקווה דום, כך שהשניים משתלבים טבעי.",
  "The official Ötztal family route: a loop of the warm nature-reserve lake passing nine viewing platforms and 'places of strength'. The wider western shore is stroller-friendly; the eastern shore is a rootier adventure path.":
    "המסלול המשפחתי הרשמי של האצטל: הקפה של אגם שמורת הטבע החמים עם תשע פלטפורמות תצפית ו׳מקומות של עוצמה׳. החוף המערבי הרחב ידידותי לעגלה; החוף המזרחי הוא שביל הרפתקה משורש יותר.",
  "Lakeside inn with an outdoor sandbox and an indoor play box with books, open daily 11:00 to 18:00 from mid-May to early October. About 30 minutes from the Piburg car park along the right bank, on a trail that takes a pram.":
    "פונדק לחוף האגם עם ארגז חול בחוץ ופינת משחק עם ספרים בפנים, פתוח מדי יום 11:00 עד 18:00 מאמצע מאי עד תחילת אוקטובר. כ-30 דקות מחניון פיבורג לאורך הגדה הימנית, בשביל שמתאים לעגלה.",
  "Runs the bathing area at the south-east end of the lake, with a children's pool, a children's slide and rowing-boat hire, and a sun terrace straight above the water. The pick if you want lunch and a swim in one stop.":
    "מנהל את אזור הרחצה בקצה הדרום-מזרחי של האגם, עם בריכת ילדים, מגלשת ילדים והשכרת סירות משוט, ומרפסת שיזוף ממש מעל המים. הבחירה אם רוצים ארוחת צהריים ושחייה בעצירה אחת.",
  "The gentlest themed walk in the valley: 2.94 km with only 51 m of climbing, up through forest on one side of the stream and back along the other. Find the caches, collect a letter from each, and the solution word earns a gift at the info office.":
    "הטיול הנושאי העדין ביותר בעמק: 2.94 ק״מ עם 51 מ׳ טיפוס בלבד, במעלה דרך היער בצד אחד של הנחל וחזרה לאורך הצד השני. למצוא את המחבואים, לאסוף אות מכל אחד, ומילת הפתרון מזכה במתנה במשרד המידע.",
  "A shady, dramatic little gorge walk along rushing water close to the apartment. Cool and atmospheric on a hot afternoon.":
    "טיול קניון קטן, מוצל ודרמטי לאורך מים גועשים קרוב לדירה. קריר ואטמוספרי בשעת אחר צהריים חמה.",
  "An easy official Oetz valley walk along the Ötztaler Ache from the village to the Weller Bridge near Habichen, on toward Piburger See and back. Flat and right on the doorstep.":
    "טיול עמק רשמי וקל של אץ לאורך האצטלר אכה מהכפר אל גשר וולר ליד הביכן, הלאה לכיוון פיבורגר זה וחזרה. מישורי וממש ליד הבית.",
  "Ride to 3,058 m for glacier views and the 007 Elements film world on the summit. A thrilling, low-effort way to reach the high mountains.":
    "עולים לגובה 3,058 מ׳ לנופי קרחונים ולעולם הסרטים 007 Elements בפסגה. דרך מרגשת ובלי מאמץ להגיע להרים הגבוהים.",
  "Break the transfer just past the Brenner: ride the gondola up from Sterzing and let off steam on the alpine coaster and the summit playground. Optional: a wander round Sterzing's pretty old town, or the Franzensfeste fortress right by the motorway.":
    "לפצל את הנסיעה מיד אחרי הברנר: לעלות ברכבל משטרצינג ולשחרר אנרגיה באלפיין קוסטר ובגן השעשועים בפסגה. אופציונלי: שיטוט בעיר העתיקה היפה של שטרצינג, או מבצר פרנצנספסטה ממש ליד הכביש.",
  "East into the Val Pusteria to the Entdecker for six nights — the heart of the trip. Check in, then straight to the pools. If everyone is still fresh, the flat Toblacher See loop is an easy first taste of the Dolomites.":
    "מזרחה אל ואל פוסטריה אל האנטדקר לשישה לילות — לב הטיול. צ׳ק-אין, ואז ישר לבריכות. אם כולם עדיין רעננים, המסלול המישורי של טובלכר זה הוא טעימה ראשונה וקלה מהדולומיטים.",
  "A gentle, mostly flat themed loop through the apple orchards of the sunny Natz-Schabs plateau, ~30 minutes west. Information panels on South Tyrol's apples, ponds and biotopes along the way, and a viewpoint with sun loungers. Walk as much of the 7.7 km as little legs want and turn back.":
    "מסלול מעגלי נושאי עדין וברובו מישורי דרך מטעי התפוחים של מישור נאץ-שאבס השטוף שמש, כ-30 דקות מערבה. שלטי מידע על התפוחים, הבריכות והביוטופים של דרום טירול לאורך הדרך, ונקודת תצפית עם מיטות שיזוף. ללכת כמה שהרגליים הקטנות רוצות מתוך ה-7.7 ק״מ ולחזור.",
  "A family playground on the apple plateau, the easy morning start before the orchard walk.":
    "גן שעשועים משפחתי על מישור התפוחים, פתיחת בוקר קלה לפני טיול המטעים.",
  "A flat boardwalk over a protected wetland of reeds and ponds near Raas, rich in birdlife and shaded on a hot day. A short leg on its own or part of the Apple Trail.":
    "שביל עץ מישורי מעל ביצה מוגנת של קנים ובריכות ליד ראס, עשירה בציפורים ומוצלת ביום חם. קטע קצר בפני עצמו או חלק משביל התפוחים.",
  "Ride the Plose gondola above Brixen, then the wide, stroller-friendly WoodyWalk to the Rossalm past wooden play stations, a Kneipp water walk, giant loungers and a viking ship, under the Peitlerkofel and Geisler spires. Lunch at a mountain hut, let the kids play, and add more walking only if everyone still has energy.":
    "עולים ברכבל פלוזה מעל בריקסן, ואז שביל ה-WoodyWalk הרחב וידידותי-העגלה אל הרוסאלם ליד עמדות משחק מעץ, מסלול מים ע״ש קנייפ, מיטות שיזוף ענקיות וספינת ויקינגים, מתחת לצוקי הפייטלרקופל והגייזלר. ארוחת צהריים בבקתת הרים, לתת לילדים לשחק, ולהוסיף הליכה רק אם לכולם עוד יש אנרגיה.",
  "A nearer cable-car alternative right above the hotel: the level Concordia 360° circuit around the flat Kronplatz summit, with the Peace Bell, mountain museums and staged Dolomite viewpoints.":
    "חלופת רכבל קרובה יותר ממש מעל המלון: מסלול קונקורדיה 360° המישורי סביב פסגת הקרונפלאץ השטוחה, עם פעמון השלום, מוזיאוני הרים ונקודות תצפית מבוימות אל הדולומיטים.",
  "Drive to Olang, hire bikes, and roll the flat, easy Pustertal cycle path past Lake Olang to Welsberg. Play at Prenninger Park, coffee and ice cream in the village, then take the Pustertal train back to Olang with the bikes. Level, paved and away from traffic.":
    "נוסעים לאולנג, שוכרים אופניים, ורוכבים על שביל האופניים המישורי והקל של הפוסטרטל ליד אגם אולנג אל וולסברג. לשחק בפארק פרנינגר, קפה וגלידה בכפר, ואז חזרה ברכבת הפוסטרטל לאולנג עם האופניים. מישורי, סלול ורחוק מתנועה.",
  "Up the valley from Welsberg: the emerald jewel of the Dolomites. Walk the flat shore loop and hire a wooden rowing boat. Go early; access is timed or by shuttle in peak summer.":
    "במעלה העמק מוולסברג: פנינת הברקת של הדולומיטים. ללכת את מסלול החוף המישורי ולשכור סירת משוט מעץ. להגיע מוקדם; הכניסה מתוזמנת או בהסעה בשיא הקיץ.",
  "A riverside family park with a playground and room to run, the natural turnaround of the bike ride and a shady picnic spot before the train back.":
    "פארק משפחתי לחוף הנהר עם גן שעשועים ומקום לרוץ, נקודת המפנה הטבעית של רכיבת האופניים ומקום פיקניק מוצל לפני החזרה ברכבת.",
  "Often called South Tyrol's prettiest alpine village: 35 weathered wooden huts and a little church across the meadows at 1,740 m. From the Berg am Boden car park it is a gentle hour up the Milk Trail beside a splashing stream, with staffed huts for a long lunch and the kids free to roam. Cross the bridges, watch the cows, and wander further up the valley only as far as everyone fancies.":
    "נקרא לעיתים קרובות הכפר האלפיני היפה ביותר בדרום טירול: 35 בקתות עץ מיושנות וכנסייה קטנה מעבר לאחו בגובה 1,740 מ׳. מחניון ברג אם בודן זו שעה עדינה במעלה שביל החלב לצד נחל מפכפך, עם בקתות מאוישות לארוחת צהריים ארוכה והילדים חופשיים לשוטט. לחצות את הגשרים, להביט בפרות, ולהמשיך במעלה העמק רק עד כמה שכולם רוצים.",
  "If you would rather wide-open meadows than a hut village: the gentle, quiet high pastures of the Rodenecker-Lüsner Alm, easy walking with huts and big views.":
    "אם מעדיפים אחו פתוח ורחב על פני כפר בקתות: המרעה הגבוה, העדין והשקט של רודנקר-ליזנר אלם, הליכה קלה עם בקתות ונופים גדולים.",
  "One of the easiest and most beautiful hiking days in South Tyrol, and far quieter than the Seiser Alm. From the Zumis car park, wide gentle paths with barely a climb cross huge rolling pastures dotted with wooden huts, with the Creation Trail's art stations along the way and enormous views. Mountain huts for lunch.":
    "אחד מימי הטיולים הקלים והיפים ביותר בדרום טירול, ושקט הרבה יותר מהזייזר אלם. מחניון צומיס, שבילים רחבים ועדינים כמעט בלי טיפוס חוצים מרעה מתגלגל ענק זרוע בקתות עץ, עם עמדות האמנות של שביל הבריאה לאורך הדרך ונופים אדירים. בקתות הרים לארוחת צהריים.",
  "The famous alternative: Europe's largest high-alpine meadow under the Sassolungo spires, cable car up then flat, pram-friendly trails and huts. Busier than the Rodenecker Alm.":
    "החלופה המפורסמת: האחו הגבוה-אלפיני הגדול באירופה מתחת לצוקי הסאסולונגו, רכבל למעלה ואז שבילים מישוריים ידידותיים-לעגלה ובקתות. עמוס יותר מהרודנקר אלם.",
  "Break the drive home with an easy, free gorge right by the A12, roughly halfway. A wide, stroller-friendly path runs about 3.5 km along the water under 200 m rock walls, with places to splash and skip stones; a little shuttle train saves the legs to the entrance. Prefer the white-marble Gilfenklamm instead? It is 2 km off the Sterzing exit at the start of the drive.":
    "לפצל את הנסיעה הביתה עם קניון קל וחינמי ממש ליד ה-A12, בערך באמצע הדרך. שביל רחב וידידותי-לעגלה נמשך כ-3.5 ק״מ לאורך המים מתחת לצוקים בגובה 200 מ׳, עם מקומות להתיז ולהקפיץ אבנים; רכבת הסעה קטנה חוסכת את ההליכה עד הכניסה. מעדיפים את הגילפנקלאם משיש לבן במקום? הוא 2 ק״מ מיציאת שטרצינג בתחילת הנסיעה.",
  "The last leg to the airport hotel — drop the rental car, repack, and a last Bavarian dinner. Walk or shuttle to the terminal in the morning.":
    "הקטע האחרון למלון שדה התעופה — להחזיר את הרכב השכור, לארוז מחדש, וארוחת ערב בווארית אחרונה. ללכת או בהסעה לטרמינל בבוקר.",
  "A short shuttle or walk to departures, then home. Allow extra time with kids and for an international flight.":
    "הסעה קצרה או הליכה לטרמינל היוצא, ואז הביתה. להקצות זמן נוסף עם ילדים ולטיסה בינלאומית.",

  // ---- kid notes ----
  "Easy shallows for a first splash. Bring towels in the hand luggage.":
    "מים רדודים וקלים לשכשוך ראשון. להביא מגבות בכבודה היד.",
  "Zero more driving once you're in. Good for an early bedtime.":
    "אפס נסיעה נוספת ברגע שמגיעים. טוב לשעת שינה מוקדמת.",
  "Cable car up, then easy walking between play stations. Bring a towel and spare clothes.":
    "רכבל למעלה, ואז הליכה קלה בין עמדות המשחק. להביא מגבת ובגדים להחלפה.",
  "Mostly flat shore loop (~3.5 km, shorten freely). Carrier for the 2 year old. Swimming.":
    "מסלול חוף ברובו מישורי (כ-3.5 ק״מ, אפשר לקצר). מנשא לקטנה. שחייה.",
  "About 2 km and roughly 45 minutes at kid pace, with play stops built in. Out and back on the same path, so simply turn around when you have had enough.":
    "כ-2 ק״מ ובערך 45 דקות בקצב של ילדים, עם עצירות משחק משולבות. הלוך ושוב באותו שביל, אז פשוט מסתובבים כשנמאס.",
  "Wide, mostly flat track. Buggy possible as far as the Griesner Alm; carrier beyond.":
    "מסלול רחב וברובו מישורי. עגלה אפשרית עד הגריזנר אלם; מנשא הלאה משם.",
  "Short loop ~1¼ hours. Bridges and steps mean a carrier for the 2 year old, no buggy.":
    "מסלול מעגלי קצר של כשעה ורבע. גשרים ומדרגות מחייבים מנשא לקטנה, בלי עגלה.",
  "Gondola up, then wide easy paths; a big hit for the 6 and 8 year olds. Cave and indoor Triassic Centre make it work in poor weather too.":
    "רכבל למעלה, ואז שבילים רחבים וקלים; להיט גדול לבני ה-6 וה-8. המערה ומרכז הטריאס המקורה עושים אותו מתאים גם למזג אוויר גרוע.",
  "The gondola takes pushchairs, and the park is free once you have a lift ticket. Easy trails between stations suit all three ages.":
    "הרכבל מקבל עגלות, והפארק חינם ברגע שיש כרטיס לרכבל. שבילים קלים בין העמדות מתאימים לכל שלושת הגילאים.",
  "Funicular up, big playground, short flat trail. Buggy-friendly at the top.":
    "רכבל למעלה, גן שעשועים גדול, שביל מישורי קצר. ידידותי לעגלה למעלה.",
  "Easy town stroll plus a warm swimming lake. Buggy-friendly.":
    "טיול עיירה קל ואגם שחייה חמים. ידידותי לעגלה.",
  "Buggy-friendly the whole loop — a proper leg-stretch mid-drive. The Reitherkogelbahn is closed Wednesdays, but this is a Monday.":
    "ידידותי לעגלה לכל אורך המסלול — מתיחת רגליים אמיתית באמצע הנסיעה. רכבל הרייטרקוגל סגור בימי רביעי, אבל זה יום שני.",
  "No more driving once you are in.": "אין עוד נסיעה ברגע שמגיעים.",
  "Gondola up, wide mostly level paths near the top station, so a buggy works around the main area. Stations suit all three ages.":
    "רכבל למעלה, שבילים רחבים וברובם מישוריים ליד התחנה העליונה, כך שעגלה עובדת סביב האזור המרכזי. העמדות מתאימות לכל שלושת הגילאים.",
  "About 1¼ hours on paper, so closer to 2½ with children stopping at everything. The hut halfway is the reason to pick this one.":
    "כשעה ורבע על הנייר, כלומר קרוב לשעתיים וחצי עם ילדים שעוצרים בכל דבר. הבקתה באמצע הדרך היא הסיבה לבחור בזה.",
  "Roughly 3.5 km and an hour on paper, again about double that in practice. Pick this one for the mountain hut and the summit views rather than for difficulty.":
    "בערך 3.5 ק״מ ושעה על הנייר, שוב בערך כפול מזה בפועל. לבחור בזה בשביל בקתת ההרים ונופי הפסגה ולא בגלל הקושי.",
  "Dedicated shallow kids' area for the 2 year old; slides and obstacles for the 6 and 8 year olds.":
    "אזור ילדים רדוד ייעודי לקטנה; מגלשות ומכשולים לבני ה-6 וה-8.",
  "Flat, buggy-friendly. Animals and a flight show hold all ages.":
    "מישורי, ידידותי לעגלה. חיות ומופע תעופה מרתקים את כל הגילאים.",
  "Minimum age 3 to ride even with an adult, so the 2 year old cannot go on the coaster; Albin's play park at the base covers her instead. From 8 and 1.25 m they may ride alone, so the 8 year old probably can.":
    "גיל מינימום 3 לרכיבה גם עם מבוגר, אז הקטנה לא יכולה לעלות על רכבת ההרים; פארק המשחקים של אלבין בבסיס מכסה אותה במקום. מגיל 8 וגובה 1.25 מ׳ מותר לרכוב לבד, אז בן ה-8 כנראה יכול.",
  "Easy but not flat, so carrier for the 2 year old. The ice cellar sits at 0–2 °C year round, which is a shock in August. Find the treasure chest and stamp the book.":
    "קל אבל לא מישורי, אז מנשא לקטנה. מרתף הקרח נמצא ב-0 עד 2 מעלות כל השנה, מה שמפתיע באוגוסט. למצוא את תיבת האוצר ולהחתים את הספר.",
  "Lower viewpoints are an easy walk; the full stairway is for the 6 and 8 year olds. Carrier for the 2 year old.":
    "נקודות התצפית התחתונות הן הליכה קלה; מכלול המדרגות הוא לבני ה-6 וה-8. מנשא לקטנה.",
  "Separate children's water world with shallow pools and slides; all ages welcome.":
    "עולם מים נפרד לילדים עם בריכות רדודות ומגלשות; מתאים לכל הגילאים.",
  "An hour indoors rather than a whole outing, and it is an exhibition, not a play centre. Today is the one Wednesday here, and Wednesday afternoons run nature activity stations from 14:00 to 16:30 with no booking.":
    "שעה בפנים ולא טיול שלם, וזו תערוכה, לא מרכז משחקים. היום הוא יום רביעי היחיד כאן, ובאחר הצהריים של יום רביעי מפעילים עמדות פעילות טבע מ-14:00 עד 16:30 בלי הזמנה.",
  "About 1.5 to 2 hours at the lake itself; the west shore takes a buggy, the east shore does not. Park at Piburg. Walking up the Elsinger Weg from Oetz adds a real climb, so only with a carrier and no buggy.":
    "כשעה וחצי עד שעתיים באגם עצמו; החוף המערבי מתאים לעגלה, המזרחי לא. לחנות בפיבורג. עלייה בשביל אלסינגר וג מאץ מוסיפה טיפוס אמיתי, אז רק עם מנשא ובלי עגלה.",
  "Wide enough to push a buggy the whole way round, about 1¼ hours, and it finishes at a children's playground. The easiest of the three options for this day.":
    "רחב מספיק כדי לדחוף עגלה לכל אורך ההקפה, כשעה ורבע, ומסתיים בגן שעשועים לילדים. הקל מבין שלוש האפשרויות ליום הזה.",
  "Short out-and-back; secure footing needed, carrier for the 2 year old.":
    "הלוך ושוב קצר; דרושה דריכה בטוחה, מנשא לקטנה.",
  "About 2 hours, mostly flat riverside paths, buggy-friendly. Shorten any time.":
    "כשעתיים, שבילי גדה ברובם מישוריים, ידידותי לעגלה. אפשר לקצר בכל רגע.",
  "All the height with no climbing. Bring warm layers; it is cold at the top even in August.":
    "כל הגובה בלי טיפוס. להביא שכבות חמות; קר למעלה גם באוגוסט.",
  "Coaster from about age 3 tucked in with an adult; playground and easy meadow strolls up top.":
    "רכבת הרים מגיל 3 בערך כשצמודים למבוגר; גן שעשועים וטיולי אחו קלים למעלה.",
  "Pool, unpack, early dinner — no pressure after the transfer.":
    "בריכה, לפרוק, ארוחת ערב מוקדמת — בלי לחץ אחרי הנסיעה.",
  "Flat and buggy-friendly. Pair it with the Apfelgarten playground and the Raiermoos boardwalk for an easy morning, and be back for the pool by mid-afternoon.":
    "מישורי וידידותי לעגלה. לשלב עם גן השעשועים אפפלגארטן ושביל העץ ראיירמוס לבוקר קל, ולחזור לבריכה עד אמצע אחר הצהריים.",
  "Flat, buggy-friendly, pure play.": "מישורי, ידידותי לעגלה, משחק טהור.",
  "Flat boardwalk, buggy-friendly, short.": "שביל עץ מישורי, ידידותי לעגלה, קצר.",
  "Gondola up, then easy walking with play stops all along. Buggy-friendly. One of the highlights of the whole trip.":
    "רכבל למעלה, ואז הליכה קלה עם עצירות משחק לכל האורך. ידידותי לעגלה. אחד משיאי הטיול כולו.",
  "The best buggy walk of the trip: gondola up, then a flat loop at 2,275 m.":
    "טיול העגלה הטוב ביותר בטיול: רכבל למעלה, ואז מסלול מעגלי מישורי בגובה 2,275 מ׳.",
  "The most fun day for the kids. Flat the whole way; bike seat or trailer for the 2 year old, booked when you hire.":
    "היום הכי כיפי לילדים. מישורי לכל האורך; כיסא אופניים או עגלת גרירה לקטנה, מוזמנים בעת ההשכרה.",
  "Mostly flat shore path (~3.5 km), buggy-friendly on the near side. Rowing boats are a hit.":
    "שביל חוף ברובו מישורי (כ-3.5 ק״מ), ידידותי לעגלה בצד הקרוב. סירות המשוט הן להיט.",
  "Gentle gravel road up, buggy possible with effort or carrier. Streams, bridges and animals the whole way; huts to play around.":
    "דרך חצץ עדינה במעלה, עגלה אפשרית במאמץ או מנשא. נחלים, גשרים וחיות לכל האורך; בקתות לשחק סביבן.",
  "Almost flat, buggy-friendly on the main paths. Very easy.":
    "כמעט מישורי, ידידותי לעגלה בשבילים הראשיים. קל מאוד.",
  "Almost flat, buggy-friendly on the main paths, huts to break the walk. The easiest big-meadow day of the trip.":
    "כמעט מישורי, ידידותי לעגלה בשבילים הראשיים, בקתות לחלק את הטיול. יום האחו-הגדול הקל ביותר בטיול.",
  "Cable car up, very gentle wide meadow paths. Some trails are buggy-friendly.":
    "רכבל למעלה, שבילי אחו רחבים ועדינים מאוד. חלק מהשבילים ידידותיים לעגלה.",
  "The easiest gorge of the trip: flat and buggy-friendly, and the kids can play in the stream. Free.":
    "הקניון הקל ביותר בטיול: מישורי וידידותי לעגלה, והילדים יכולים לשחק בנחל. חינם.",
  "One last sleep close to the terminal for the early flight.":
    "לינה אחרונה קרוב לטרמינל לקראת הטיסה המוקדמת.",
  "Be at the terminal about 3 hours before an intercontinental departure.":
    "להיות בטרמינל כ-3 שעות לפני יציאה בין-יבשתית.",

  // ---- food stops ----
  "Cafe Bärnstatt, Hintersteiner See": "קפה ברנשטאט, הינטרשטיינר זה",
  "Alpengasthaus Griesner Alm": "אכסניית ההרים גריזנר אלם",
  "Stanglwirt, Going": "שטנגלווירט, גואינג",
  "Alpbachtaler Kinderpark, Reith im Alpbachtal": "פארק הילדים אלפבכטלר, רייט אים אלפבכטל",
  "Reither See, Reith im Alpbachtal": "רייטר זה, רייט אים אלפבכטל",
  "Gasthaus Seehäusl, Piburger See": "אכסניית זההויזל, פיבורגר זה",
  "Restaurant am Piburger See": "מסעדה על פיבורגר זה",
  "Prenninger Park, Welsberg": "פארק פרנינגר, וולסברג",

  // ---- tips ----
  "Buy the Austrian digital motorway vignette online before crossing the border.":
    "לקנות את תו הכביש הדיגיטלי האוסטרי (וינייטה) אונליין לפני חציית הגבול.",
  "Shop on the way in, not tomorrow morning. Austrian supermarkets shut around 19:30 and all day Sunday, and the 15th is a public holiday, so the fridge has to carry you to Monday.":
    "לקנות בדרך פנימה, לא מחר בבוקר. הסופרמרקטים האוסטרים נסגרים בסביבות 19:30 וכל יום ראשון, וה-15 הוא חג, אז המקרר צריך להחזיק עד יום שני.",
  "If the flight lands late, buy in Germany before Kufstein instead, where shops usually run to 20:00.":
    "אם הטיסה נוחתת מאוחר, לקנות בגרמניה לפני קופשטיין במקום, שם החנויות פתוחות בדרך כלל עד 20:00.",
  "Keep day one short; a Chiemsee swim on the way breaks up the drive nicely.":
    "לשמור על יום ראשון קצר; שחייה בקימזה בדרך מפצלת את הנסיעה יפה.",
  "Do the big grocery shop today. Tomorrow is a public holiday and Sunday follows it, so the shops are shut for two days straight.":
    "לעשות את קניית המצרכים הגדולה היום. מחר חג ויום ראשון אחריו, אז החנויות סגורות יומיים ברצף.",
  "Check the cable-car operating hours and last descent before heading up.":
    "לבדוק את שעות הפעילות של הרכבל ואת שעת הירידה האחרונה לפני שעולים.",
  "Today is Mariä Himmelfahrt, a public holiday across Austria and Ferragosto in Italy. Shops are shut and the gondola-served parks will be at their busiest all summer, which is exactly why the quiet valley is the better call.":
    "היום הוא חג העלייה של מריה, חג בכל אוסטריה ופרגוסטו באיטליה. החנויות סגורות והפארקים עם הרכבלים יהיו העמוסים ביותר בכל הקיץ, ובדיוק בגלל זה העמק השקט הוא הבחירה הטובה יותר.",
  "Drive Kirchdorf to Gasteig to Griesenau, then left into the Kaiserbachtal. Pay at the toll station after 650 m and keep driving to the Fischbachalm car park, where the trail starts.":
    "לנסוע מקירכדורף לגסטייג לגריזנאו, ואז שמאלה אל הקייזרבכטל. לשלם בתחנת האגרה אחרי 650 מ׳ ולהמשיך לנסוע עד חניון הפישבכאלם, שם השביל מתחיל.",
  "The Schnackler trail is out and back rather than a loop, so there is nothing to arrange for the return: just walk back to the car.":
    "שביל השנאקלר הוא הלוך ושוב ולא מעגלי, אז אין מה לארגן לחזרה: פשוט חוזרים ברגל לרכב.",
  "Shops are shut again today, the second of the two closed days, so everything should already be in the fridge.":
    "החנויות סגורות שוב היום, השני מבין שני ימי הסגירה, אז הכול כבר צריך להיות במקרר.",
  "Triassic Park entry is free and you pay only the Steinplatte gondola, which the Kitzbühel Alps Summer Card also covers.":
    "הכניסה לטריאסיק פארק חינם ומשלמים רק על רכבל השטיינפלאטה, שגם כרטיס הקיץ של אלפי קיצביהל מכסה.",
  "Swarovski Kristallwelten is right on the route and makes the drive fly by for kids.":
    "עולם הבדולח סברובסקי ממש על הדרך וגורם לנסיעה לעוף לילדים.",
  "Juppi Zauberwald comes first on the drive and its loop is buggy-friendly throughout. The Reitherkogelbahn is closed on Wednesdays, but today is a Monday.":
    "יופי צאוברוואלד מגיע ראשון בנסיעה והמסלול שלו ידידותי לעגלה לכל אורכו. רכבל הרייטרקוגל סגור בימי רביעי, אבל היום זה יום שני.",
  "Three good stops on one transfer is too many; pick one and keep the drive short.":
    "שלוש עצירות טובות בנסיעה אחת זה יותר מדי; לבחור אחת ולשמור על נסיעה קצרה.",
  "For Area 47 bring swimwear, towels, water shoes and sunscreen; lockers are on site.":
    "ל-Area 47 להביא בגדי ים, מגבות, נעלי מים וקרם הגנה; יש לוקרים במקום.",
  "Habicher See is a two-minute hop from the apartment, perfect if a big day is too much.":
    "הביכר זה במרחק שתי דקות מהדירה, מושלם אם יום גדול הוא יותר מדי.",
  "Both treasure routes fit into one day with almost no driving: Habicher See on foot from Oetz in the morning, then ten minutes up to Piburg for the lake and a swim after lunch. Two of the nine treasures, and the car barely moves.":
    "שני מסלולי האוצר נכנסים ליום אחד כמעט בלי נסיעה: הביכר זה ברגל מאץ בבוקר, ואז עשר דקות למעלה לפיבורג לאגם ולשחייה אחרי הצהריים. שניים מתשעת האוצרות, והרכב כמעט לא זז.",
  "This is the only Wednesday of the Ötztal stay, and the Naturpark Haus runs its nature activity stations on Wednesday afternoons. If the weather breaks, that plus the Aqua Dome makes a whole Längenfeld day.":
    "זהו יום רביעי היחיד בשהות באצטל, ובית פארק הטבע מפעיל את עמדות פעילות הטבע שלו באחר הצהריים של יום רביעי. אם מזג האוויר מתקלקל, זה יחד עם האקווה דום עושה יום לנגנפלד שלם.",
  "Trainers with grip help on the damp waterfall steps.":
    "נעלי ספורט עם אחיזה עוזרות על מדרגות המפל הלחות.",
  "Of the three routes considered for today, two are good and one is not. Ochsengarten and the Andreas-Hofer-Weg are both gentle and buggy-friendly; the Wasserläufer Piburger See theme trail is listed as easy but is 9.2 km with 538 m of climbing and a steep pull to the Seejöchl, so it is not a toddler route.":
    "מבין שלושת המסלולים שנשקלו להיום, שניים טובים ואחד לא. אוקסנגארטן ואנדראס-הופר-וג שניהם עדינים וידידותיים לעגלה; שביל הנושא ואסרלויפר פיבורגר זה מסווג כקל אבל הוא 9.2 ק״מ עם 538 מ׳ טיפוס ועלייה תלולה אל הזייויכל, אז הוא לא מסלול לפעוטות.",
  "Decide by the morning weather and how tired everyone is.":
    "להחליט לפי מזג האוויר בבוקר וכמה כולם עייפים.",
  "Ask at check-in for the Südtirol Guest Pass; it makes buses and trains across South Tyrol free, which the bike day especially uses.":
    "לבקש בצ׳ק-אין את כרטיס האורח של דרום טירול (Südtirol Guest Pass); הוא הופך אוטובוסים ורכבות בכל דרום טירול לחינמיים, מה שיום האופניים במיוחד מנצל.",
  "Keep today gentle; the plan proper starts tomorrow.":
    "לשמור על היום עדין; התוכנית האמיתית מתחילה מחר.",
  "An easy first full day on purpose: orchard walk in the morning, hotel pool from 3 to 4 pm.":
    "יום מלא ראשון קל בכוונה: טיול מטעים בבוקר, בריכת המלון מ-15:00 עד 16:00.",
  "Check the Plose gondola's first-up and last-down times, and carry a layer; it is cool at 2,000 m even in August.":
    "לבדוק את שעות העלייה הראשונה והירידה האחרונה של רכבל פלוזה, ולקחת שכבה; קריר בגובה 2,000 מ׳ גם באוגוסט.",
  "Book bikes with a child seat or trailer ahead in Olang. The Südtirol Guest Pass covers the train back.":
    "להזמין אופניים עם כיסא ילד או עגלת גרירה מראש באולנג. כרטיס האורח של דרום טירול מכסה את הרכבת חזרה.",
  "A shuttle covers the last stretch of road up to Fane Alm if the walk from Berg am Boden is too much with the little one.":
    "הסעה מכסה את קטע הדרך האחרון במעלה אל פאנה אלם אם ההליכה מברג אם בודן היא יותר מדי עם הקטנה.",
  "Last full day in South Tyrol. Pack tonight so tomorrow's gorge-and-drive day is easy, and pick up Speck and a bottle of Lagrein as edible souvenirs.":
    "היום המלא האחרון בדרום טירול. לארוז הערב כדי שיום הקניון-והנסיעה של מחר יהיה קל, ולקחת שפק ובקבוק לגריין כמזכרות אכילות.",
  "The Kundler Klamm is free, flat and stroller-friendly, roughly halfway home. If you would rather do the marble gorge instead, the Gilfenklamm is 2 km off the Sterzing exit at the start of the drive; switch with Change plan.":
    "הקונדלר קלאם חינמי, מישורי וידידותי לעגלה, בערך באמצע הדרך הביתה. אם מעדיפים לעשות את קניון השיש במקום, הגילפנקלאם 2 ק״מ מיציאת שטרצינג בתחילת הנסיעה; להחליף עם ׳שנה תוכנית׳.",
  "Refuel and clean out the rental car before returning it to avoid extra fees.":
    "לתדלק ולנקות את הרכב השכור לפני ההחזרה כדי להימנע מחיובים נוספים.",

  // ===================================================================
  //  REGIONS
  // ===================================================================
  "Wilder Kaiser": "וילדר קייזר",
  "Ötz / Ötztal": "אץ / אצטל",
  "South Tyrol": "דרום טירול",
  "Munich Airport": "שדה התעופה מינכן",

  // ===================================================================
  //  SHARED UI (across sections)
  // ===================================================================
  "Do this": "מה לעשות",
  "Official details": "פרטים רשמיים",
  "Before you need it": "לפני שצריך",
  Reset: "איפוס",
  Clear: "נקה",
  "All regions": "כל האזורים",
  Directions: "הוראות הגעה",
  "Hotel site": "אתר המלון",
  nights: "לילות",
  away: "משם",
  of: "מתוך",
  Hikes: "טיולים",
  Lakes: "אגמים",
  Towns: "עיירות",

  // ---- Places filters ----
  "Locating…": "מאתר…",
  "✓ Nearest first": "✓ הקרובים ביותר",
  "📍 Near me": "📍 קרוב אליי",
  "Buggy-friendly": "מתאים לעגלה",
  "Works in rain": "מתאים לגשם",
  Open: "פתוח",
  "Sorted by distance from you, across all regions. Tap “Nearest first” again to switch back.":
    "ממוין לפי מרחק ממך, בכל האזורים. הקישו שוב על ׳הקרובים ביותר׳ כדי לחזור.",
  "Nothing matches those filters here. Try clearing one, or switch region.":
    "שום דבר לא תואם את הסינון כאן. נסו להסיר סינון, או להחליף אזור.",

  // ---- price / cost words (format.ts) ----
  adult: "מבוגר",
  child: "ילד",
  "per car": "לרכב",
  "Free entry": "כניסה חינם",
  "Free for all of us": "חינם לכולנו",
  "for the family": "למשפחה",
  age: "גיל",
  ages: "גילאי",
  free: "חינם",
  family: "משפחה",
  Closed: "סגור",
  Sundays: "ימי ראשון",
  Mondays: "ימי שני",
  Tuesdays: "ימי שלישי",
  Wednesdays: "ימי רביעי",
  Thursdays: "ימי חמישי",
  Fridays: "ימי שישי",
  Saturdays: "שבתות",

  // ---- Today card ----
  "Heads up: this may be shut today. Check before you drive, or swap the plan.":
    "לתשומת לב: ייתכן שסגור היום. כדאי לבדוק לפני שנוסעים, או להחליף תוכנית.",

  // ---- Hero ----
  "Two weeks across the Tyrolean & Dolomite Alps": "שבועיים ברחבי האלפים של טירול והדולומיטים",
  "of the adventure": "של ההרפתקה",
  "We made it home": "חזרנו הביתה",
  Days: "ימים",
  Hrs: "שעות",
  Min: "דקות",
  Sec: "שניות",
  "Full plan": "התוכנית המלאה",
  "Hintersteiner See · Tirol": "הינטרשטיינר זה · טירול",
  "Seiser Alm · South Tyrol": "זייזר אלם · דרום טירול",
  "Lago di Braies · Dolomites": "לאגו די בראייס · דולומיטים",
  "Rodenecker Alm · South Tyrol": "רודנקר אלם · דרום טירול",
  "Stuibenfall · Ötztal": "שטויבנפאל · אצטל",

  // ---- Weather ----
  now: "עכשיו",
  upcoming: "בקרוב",
  "Weather unavailable — tap to retry": "מזג האוויר לא זמין — הקישו לניסיון חוזר",
  "Checking the forecast…": "בודק את התחזית…",
  "tap to retry": "הקישו לניסיון חוזר",
  H: "מקס׳",
  L: "מינ׳",
  "Clear sky": "שמיים בהירים",
  "Mostly sunny": "בעיקר שמשי",
  Overcast: "מעונן",
  Fog: "ערפל",
  Drizzle: "טפטוף",
  Rain: "גשם",
  Snow: "שלג",
  Showers: "ממטרים",
  "Snow showers": "ממטרי שלג",
  Thunderstorms: "סופות רעמים",
  Mon: "ב׳",
  Tue: "ג׳",
  Wed: "ד׳",
  Thu: "ה׳",
  Fri: "ו׳",
  Sat: "ש׳",
  Sun: "א׳",

  // ---- section intros ----
  "Every region here has a card that covers lifts, buses or entry fees. Most are free with the stay but only if you ask. For five of us these are the biggest savings on the trip.":
    "לכל אזור כאן יש כרטיס שמכסה רכבלים, אוטובוסים או דמי כניסה. רובם חינם עם הלינה אבל רק אם מבקשים. עבור חמישתנו אלה החיסכון הגדול ביותר בטיול.",
  "The flavours of Tyrol and South Tyrol, what to order at the hut, the table and the bar.":
    "הטעמים של טירול ודרום טירול, מה להזמין בבקתה, בשולחן ובבר.",
  "One tap to the nearest supermarket, pharmacy, petrol, playground, cash or hospital around each base — opens a live Google Maps search, so it's always up to date.":
    "הקשה אחת לסופרמרקט, בית מרקחת, תחנת דלק, גן שעשועים, כספומט או בית חולים הקרובים לכל בסיס — נפתח חיפוש חי ב-Google Maps, כך שתמיד מעודכן.",
  "Driving, tolls, mountain weather and the little things that make three countries in two weeks run smoothly.":
    "נהיגה, אגרות, מזג אוויר הררי והדברים הקטנים שגורמים לשלוש מדינות בשבועיים להתנהל חלק.",
  "112 works everywhere in Austria, Italy and Germany. Keep this handy and save it offline.":
    "112 עובד בכל מקום באוסטריה, איטליה וגרמניה. כדאי לשמור בהישג יד וגם במצב לא מקוון.",
  "Tap to tick things off, your progress saves on this device.":
    "הקישו כדי לסמן, ההתקדמות נשמרת במכשיר הזה.",
  "Nine quick questions about the places we're visiting. How many can you get?":
    "תשע שאלות קצרות על המקומות שנבקר בהם. כמה תצליחו?",
  "Our four bases (★) and the places worth the detour. Filter by what you fancy, then open Google Maps or Waze to navigate.":
    "ארבעת הבסיסים שלנו (★) והמקומות ששווים עיקוף. סננו לפי מה שבא לכם, ואז פתחו את Google Maps או Waze לניווט.",
  "The handful of German (Austria & South Tyrol) and Italian words that get you a long way. Tap 🔊 to hear how each one sounds.":
    "כמה מילים בגרמנית (אוסטריה ודרום טירול) ובאיטלקית שמספיקות לכם לדרך ארוכה. הקישו 🔊 כדי לשמוע איך כל אחת נשמעת.",

  // ===================================================================
  //  GUEST CARDS
  // ===================================================================
  "Usually included": "בדרך כלל כלול",
  "Ask at check-in": "לשאול בצ׳ק-אין",
  "We buy it": "כדאי לקנות",
  "Kitzbühel Alps Summer Card": "כרטיס הקיץ של אלפי קיצביהל",
  "Ötztal Inside Summer Card": "כרטיס הקיץ Ötztal Inside",
  "Südtirol Guest Pass": "כרטיס האורח של דרום טירול",
  "Alpbachtal Seenland Card": "כרטיס Alpbachtal Seenland",
  "One pass for 39 lifts across the Kitzbühel Alps, sold for 2 to 14 days at any cable-car desk. Worth doing the sums on arrival: nearly every paid thing planned for these four days is a lift.":
    "כרטיס אחד ל-39 רכבלים ברחבי אלפי קיצביהל, נמכר ל-2 עד 14 ימים בכל דלפק רכבל. שווה לחשב בהגעה: כמעט כל דבר בתשלום שמתוכנן לארבעת הימים האלה הוא רכבל.",
  "The big one. Partner accommodations hand this out free, and it covers most of what is planned for the Ötztal. Ask Falkners Five before booking anything else.":
    "הגדול שבהם. מקומות לינה שותפים מחלקים אותו חינם, והוא מכסה את רוב מה שמתוכנן לאצטל. כדאי לשאול את פלקנרס פייב לפני שמזמינים משהו אחר.",
  "South Tyrol's digital guest card, included by most accommodations. Free public transport across the whole province, which makes the car optional on lazy days.":
    "כרטיס האורח הדיגיטלי של דרום טירול, כלול ברוב מקומות הלינה. תחבורה ציבורית חינם בכל המחוז, מה שהופך את הרכב לאופציונלי בימים עצלים.",
  "Makes the Reitherkogelbahn free, but only for guests staying in the Alpbachtal. We are only passing through on the transfer day, so this one does not apply.":
    "הופך את רכבל הרייטרקוגל לחינמי, אבל רק לאורחים ששוהים באלפבכטל. אנחנו רק עוברים בו ביום המעבר, אז זה לא רלוונטי לנו.",
  "Söll gondola for Hexenwasser": "רכבל זל להקסוואסר",
  "Hartkaiser funicular for Ellmi's Zauberwelt": "רכבל הרטקייזר לעולם הקסמים של אלמי",
  "Brandstadlbahn for KaiserWelt Scheffau": "רכבל ברנדשטאדל לקייזרוולט שפאו",
  "Steinplatte gondola for Triassic Park": "רכבל שטיינפלאטה לטריאסיק פארק",
  "Buses on the listed lines, and 10–50% off bonus partners": "אוטובוסים בקווים המפורטים, ו-10–50% הנחה אצל שותפי בונוס",
  "One free up-and-down ride per mountain lift, per day": "נסיעה חינם אחת מעלה ומטה בכל רכבל הררי, ליום",
  "One entry to the AREA 47 water area": "כניסה אחת לאזור המים של AREA 47",
  "All summer mountain lifts and public buses": "כל רכבלי הקיץ ההרריים והאוטובוסים הציבוריים",
  "Museums and swimming pools at premium partner lodgings": "מוזיאונים ובריכות שחייה במקומות לינה שותפים פרימיום",
  "Buses and regional trains across South Tyrol": "אוטובוסים ורכבות אזוריות בכל דרום טירול",
  "Selected cable cars": "רכבלים נבחרים",
  "Pustertal and Kronplatz region buses": "אוטובוסים באזור הפוסטרטל והקרונפלאץ",
  "Free Reitherkogelbahn for Juppi Zauberwald": "רכבל רייטרקוגל חינם ליופי צאוברוואלד",
  "Free travel on the local three summer lifts": "נסיעה חינם בשלושת רכבלי הקיץ המקומיים",
  "Price it at the first lift desk against the single tickets you would otherwise buy. Up to 50% cheaper if you ride on three or more days.":
    "תמחרו אותו בדלפק הרכבל הראשון מול הכרטיסים הבודדים שהייתם קונים אחרת. עד 50% זול יותר אם רוכבים בשלושה ימים או יותר.",
  "Email or ask at check-in whether Falkners Five is an Ötztal Inside partner. If it is, the card is free and Area 47 is already paid for.":
    "שלחו מייל או שאלו בצ׳ק-אין אם פלקנרס פייב הוא שותף Ötztal Inside. אם כן, הכרטיס חינם ו-Area 47 כבר משולם.",
  "Ask the Entdecker Hotel for it at check-in. Validate it at the blue ticket machines by scanning the QR code before you travel.":
    "בקשו אותו ממלון אנטדקר בצ׳ק-אין. אמתו אותו במכונות הכרטיסים הכחולות על ידי סריקת קוד ה-QR לפני הנסיעה.",
  "Nothing to do. Budget the normal fare instead: about €12 adult and €6 child return for Juppi Zauberwald.":
    "אין מה לעשות. תקצבו במקום את המחיר הרגיל: כ-€12 למבוגר ו-€6 לילד הלוך ושוב ליופי צאוברוואלד.",
  "Children born 2022 or later go free, so the 2 year old should not need a card. Add €2 KeyCard deposit, refunded on return.":
    "ילדים שנולדו ב-2022 או אחר כך נכנסים חינם, אז הקטנה לא אמורה להזדקק לכרטיס. יש להוסיף פיקדון KeyCard של €2, מוחזר בהחזרה.",
  "Usually valid from the second day of the stay until departure evening. The Aqua Dome is only 15% off in July and August, not free.":
    "בדרך כלל תקף מהיום השני של השהות עד ערב העזיבה. האקווה דום הוא רק 15% הנחה ביולי ואוגוסט, לא חינם.",
  "Only available through participating accommodations, and the extras vary by hotel. Confirm what yours includes rather than assuming.":
    "זמין רק דרך מקומות לינה משתתפים, וההטבות משתנות ממלון למלון. כדאי לאמת מה שלכם כולל במקום להניח.",
  "The Reitherkogelbahn is closed on Wednesdays whichever ticket you hold.":
    "רכבל הרייטרקוגל סגור בימי רביעי לא משנה איזה כרטיס יש לכם.",

  // ===================================================================
  //  FOOD & DRINK
  // ===================================================================
  Savoury: "מלוח",
  Sweet: "מתוק",
  Drink: "משקה",
  Kaiserschmarrn: "קייזרשמארן",
  "Tiroler Gröstl": "טירולר גרסטל",
  "Kasspatzln (Käsespätzle)": "קספצלן (קזה-שפצלה)",
  Apfelstrudel: "אפפלשטרודל",
  "Knödel / Canederli": "קנודל / קנדרלי",
  "Speck Alto Adige": "שפק אלטו אדיג׳ה",
  Schlutzkrapfen: "שלוצקראפן",
  "Hugo Spritz": "הוגו שפריץ",
  "Lagrein & Gewürztraminer": "לגריין וגוורצטרמינר",
  "Almdudler & Radler": "אלמדודלר וראדלר",
  "Tyrol / Austria": "טירול / אוסטריה",
  "Austria & South Tyrol": "אוסטריה ודרום טירול",
  "South Tyrol / Italy": "דרום טירול / איטליה",
  "South Tyrol (invented here!)": "דרום טירול (הומצא כאן!)",
  Austria: "אוסטריה",
  Italy: "איטליה",
  Germany: "גרמניה",
  "Fluffy shredded pancake dusted with icing sugar, served with apple sauce or plum compote. The reward at every mountain hut.":
    "פנקייק קרוע ואוורירי מפוזר באבקת סוכר, מוגש עם רסק תפוחים או קומפוט שזיפים. הפרס בכל בקתת הרים.",
  "Pan-fried potatoes, beef or pork and onion, topped with a fried egg. Hearty fuel after a hike.":
    "תפוחי אדמה מטוגנים במחבת, בקר או חזיר ובצל, עם ביצת עין מלמעלה. דלק משביע אחרי טיול.",
  "Soft egg noodles baked with mountain cheese and crispy onions, the Alpine mac & cheese.":
    "אטריות ביצים רכות אפויות עם גבינת הרים ובצל פריך, ה׳מק אנד צ׳יז׳ האלפיני.",
  "Warm apple strudel with vanilla sauce, best with apples from the South Tyrolean orchards.":
    "שטרודל תפוחים חם עם רוטב וניל, הכי טוב עם תפוחים ממטעי דרום טירול.",
  "Big bread dumplings, often with Speck or cheese, served in broth or with butter. South Tyrol on a plate.":
    "כופתאות לחם גדולות, לרוב עם שפק או גבינה, מוגשות במרק או עם חמאה. דרום טירול על צלחת.",
  "Lightly smoked, air-dried ham with a protected name. Sliced thin on a wooden board with rye bread and pickles.":
    "נקניק מעושן קלות ומיובש באוויר עם שם מוגן. פרוס דק על קרש עץ עם לחם שיפון וחמוצים.",
  "Half-moon ravioli filled with spinach and ricotta, in brown butter and chives.":
    "רביולי בצורת חצי סהר במילוי תרד וריקוטה, בחמאה חומה ועירית.",
  "Prosecco, elderflower syrup, soda and mint, the refreshing aperitivo that was born in South Tyrol. (Adults only.)":
    "פרוסקו, סירופ פרחי סמבוק, סודה ונענע, האפריטיף המרענן שנולד בדרום טירול. (למבוגרים בלבד.)",
  "Lagrein, a deep local red; Gewürztraminer, an aromatic white from the village of Tramin. A bottle makes a fine souvenir.":
    "לגריין, יין אדום מקומי ועמוק; גוורצטרמינר, יין לבן ארומטי מהכפר טרמין. בקבוק הוא מזכרת נאה.",
  "Almdudler is Austria's herbal soda; a Radler is beer shandy. Easy, family-friendly drinks on a sunny terrace.":
    "אלמדודלר הוא משקה תוסס על בסיס צמחים של אוסטריה; ראדלר הוא בירה עם לימונדה. משקאות קלים ומשפחתיים על מרפסת שטופת שמש.",

  // ===================================================================
  //  SERVICES
  // ===================================================================
  "Wilder Kaiser base": "בסיס וילדר קייזר",
  "Ötztal base": "בסיס אצטל",
  "South Tyrol base": "בסיס דרום טירול",
  "Kirchdorf in Tirol, Austria": "קירכדורף אין טירול, אוסטריה",
  "Oetz, Austria": "אץ, אוסטריה",
  "Kiens, South Tyrol, Italy": "קינס, דרום טירול, איטליה",
  "Munich Airport, Germany": "שדה התעופה מינכן, גרמניה",

  // ===================================================================
  //  TRIP TIPS
  // ===================================================================
  "Austrian motorway vignette": "וינייטה לכבישי אוסטריה",
  "To drive on Austrian motorways you need a vignette (digital or sticker). Buy the digital one online a few days before you travel, it activates after a short delay. Some alpine roads and tunnels (and the Timmelsjoch) charge a separate toll on top.":
    "כדי לנסוע על כבישים מהירים באוסטריה צריך וינייטה (דיגיטלית או מדבקה). קנו את הדיגיטלית אונליין כמה ימים לפני הנסיעה, היא מופעלת אחרי השהיה קצרה. חלק מכבישי ההרים והמנהרות (והטימלסיוך) גובים אגרה נפרדת בנוסף.",
  "Italian tolls, not vignettes": "אגרות איטלקיות, לא וינייטות",
  "Italy charges per-trip motorway tolls instead of a vignette, take a ticket entering and pay leaving. Keep a card and some euro coins handy for the booths.":
    "איטליה גובה אגרות כביש לפי נסיעה במקום וינייטה, קחו כרטיס בכניסה ושלמו ביציאה. שמרו כרטיס אשראי וכמה מטבעות יורו בהישג יד לתאי התשלום.",
  "Timmelsjoch pass": "מעבר טימלסיוך",
  "The scenic Timmelsjoch High Alpine Road between the Ötztal and South Tyrol is a paid toll road that closes overnight and in bad weather. Check it's open before routing over it; the Brenner motorway is the all-weather alternative.":
    "כביש ההרים הנופי טימלסיוך בין האצטל לדרום טירול הוא כביש אגרה בתשלום שנסגר בלילה ובמזג אוויר גרוע. בדקו שהוא פתוח לפני שמנתבים דרכו; הכביש המהיר ברנר הוא החלופה לכל מזג אוויר.",
  "Use 'Drive here' for real driving times": "השתמשו ב׳נווט לכאן׳ לזמני נסיעה אמיתיים",
  "Every option and stop has a 'Drive here' button that opens Google Maps directions from that day's base, and a Waze link next to it. Trust those for timings rather than any rough guide in the text: they account for the day's traffic, roadworks and pass closures, which matter a lot on single-lane alpine roads in August.":
    "לכל אפשרות ועצירה יש כפתור ׳נווט לכאן׳ שפותח הוראות הגעה ב-Google Maps מהבסיס של אותו יום, וקישור Waze לצידו. סמכו עליהם לזמנים ולא על ההערכות בטקסט: הם מתחשבים בעומסי התנועה, בעבודות ובסגירת מעברים של אותו יום, שחשובים מאוד בכבישים אלפיניים חד-נתיביים באוגוסט.",
  "Alpine weather changes fast": "מזג האוויר האלפיני משתנה מהר",
  "Even in August, mountains can swing from sun to thunderstorms. Pack layers and a rain shell every day, start hikes early, and check cable-car and hut hours before heading up.":
    "גם באוגוסט, ההרים יכולים לעבור משמש לסופות רעמים. ארזו שכבות ומעיל גשם בכל יום, התחילו טיולים מוקדם, ובדקו את שעות הרכבלים והבקתות לפני העלייה.",
  "Book lakes & cable cars ahead": "הזמינו אגמים ורכבלים מראש",
  "Honeypots like Lago di Braies and the Seiser Alm restrict cars and may need a timed ticket or shuttle in peak summer. Arrive early and book online where you can.":
    "אתרים מבוקשים כמו לאגו די בראייס והזייזר אלם מגבילים כניסת רכבים ועשויים לדרוש כרטיס מתוזמן או הסעה בשיא הקיץ. הגיעו מוקדם והזמינו אונליין כשאפשר.",
  "Two countries, one trip": "שתי מדינות, טיול אחד",
  "You'll cross Austria → Italy → Germany. All use the euro and are in the Schengen area (no border checks), but keep passports handy and your EHIC/GHIC or travel insurance details accessible.":
    "תעברו אוסטריה → איטליה → גרמניה. כולן משתמשות ביורו ונמצאות באזור שנגן (בלי בדיקות גבול), אבל שמרו דרכונים בהישג יד ואת פרטי ביטוח הבריאות/הנסיעות נגישים.",
  "Cash & cards": "מזומן וכרטיסים",
  "Cards are widely accepted, but mountain huts, small lake kiosks and parking machines often prefer cash. Carry some euro notes and coins for the trail.":
    "כרטיסים מתקבלים בהרחבה, אבל בקתות הרים, קיוסקים קטנים ליד אגמים ומכונות חנייה מעדיפים לרוב מזומן. שאו כמה שטרות ומטבעות יורו לדרך.",
  "Mountain huts (Hütten)": "בקתות הרים (Hütten)",
  "Huts serve hearty food at fair prices and are the soul of an alpine day. Many close mid-afternoon and don't take reservations for lunch, go a bit early to grab a table.":
    "הבקתות מגישות אוכל משביע במחירים הוגנים והן הנשמה של יום אלפיני. רבות נסגרות באמצע אחר הצהריים ולא מקבלות הזמנות לצהריים, הגיעו קצת מוקדם כדי לתפוס שולחן.",

  // ===================================================================
  //  EMERGENCY
  // ===================================================================
  "European emergency number": "מספר החירום האירופי",
  "Alpine / mountain rescue (Austria)": "חילוץ הרים (אוסטריה)",
  "Ambulance (Italy)": "אמבולנס (איטליה)",
  "Police (Germany)": "משטרה (גרמניה)",
  "Emergency at sea/water poison info": "חירום במים / מידע הרעלות",
  "Works in Austria, Italy & Germany, police, fire, ambulance": "עובד באוסטריה, איטליה וגרמניה, משטרה, כבאות, אמבולנס",
  "Bergrettung, mountain emergencies in Tyrol": "Bergrettung, מצבי חירום בהרים בטירול",
  "Or 112": "או 112",
  "Use 112 and ask for the right service": "חייגו 112 ובקשו את השירות המתאים",
  "Save your accommodation addresses and phone numbers offline in case you have no signal.":
    "שמרו את כתובות מקומות הלינה ומספרי הטלפון במצב לא מקוון למקרה שאין קליטה.",
  "When calling mountain rescue, give your location coordinates, most phones show them in the maps app.":
    "כשמתקשרים לחילוץ הרים, מסרו את קואורדינטות המיקום שלכם, רוב הטלפונים מציגים אותן באפליקציית המפות.",
  "Pharmacies (Apotheke / Farmacia) handle minor ailments; look for the green cross sign.":
    "בתי מרקחת (Apotheke / Farmacia) מטפלים במחלות קלות; חפשו את שלט הצלב הירוק.",
  "Carry travel insurance details and any EHIC/GHIC cards; keep a photo of passports on your phone.":
    "שאו את פרטי ביטוח הנסיעות וכרטיסי EHIC/GHIC; שמרו צילום של הדרכונים בטלפון.",

  // ===================================================================
  //  PACKING
  // ===================================================================
  "Documents & money": "מסמכים וכסף",
  "Hiking & outdoors": "טיולים וטבע",
  "Water & swim": "מים ושחייה",
  Tech: "טכנולוגיה",
  "Apartment self-catering": "דירה ובישול עצמי",
  "Passports (everyone) & flight details": "דרכונים (לכולם) ופרטי טיסה",
  "Driving licence + rental car booking": "רישיון נהיגה + הזמנת רכב שכור",
  "Travel insurance / EHIC-GHIC cards": "ביטוח נסיעות / כרטיסי EHIC-GHIC",
  "Austrian digital vignette purchased": "וינייטה דיגיטלית אוסטרית נרכשה",
  "Euro cash + cards": "מזומן יורו + כרטיסים",
  "Hotel & apartment confirmations": "אישורי מלון ודירה",
  "Hiking shoes / trainers with grip": "נעלי טיולים / נעלי ספורט עם אחיזה",
  "Daypack per person": "תיק יום לכל אחד",
  "Rain shell + warm layer (every day)": "מעיל גשם + שכבה חמה (כל יום)",
  "Sun hat, sunglasses, sunscreen SPF 50": "כובע שמש, משקפי שמש, קרם הגנה SPF 50",
  "Refillable water bottles": "בקבוקי מים למילוי חוזר",
  "Small first-aid kit & blister plasters": "ערכת עזרה ראשונה קטנה ופלסטרים לשלפוחיות",
  "Swimwear & quick-dry towels": "בגדי ים ומגבות מתייבשות מהר",
  "Water shoes (lakes & Area 47)": "נעלי מים (אגמים ו-Area 47)",
  "Goggles for the kids": "משקפי שחייה לילדים",
  "Dry bag for wet kit": "שק אטים למים לציוד רטוב",
  "Snacks for drive days": "חטיפים לימי נסיעה",
  "Travel games / tablet + headphones": "משחקי דרך / טאבלט + אוזניות",
  "Comfort items for the apartment": "חפצי נחמה לדירה",
  "Spare layers, mountains get cold fast": "שכבות להחלפה, בהרים מתקרר מהר",
  "EU power adapters (Type F)": "מתאמי חשמל לאיחוד האירופי (Type F)",
  "Phone car mount + charger for navigation": "מחזיק טלפון לרכב + מטען לניווט",
  "Power bank": "סוללת גיבוי",
  "Offline maps downloaded for the regions": "מפות לא מקוונות שהורדו לאזורים",
  "Reusable shopping bag": "שקית קניות רב-פעמית",
  "Basic pantry plan for first night": "תכנון מזון בסיסי ללילה הראשון",
  "Travel mugs / picnic kit": "ספלי דרך / ערכת פיקניק",

  // ===================================================================
  //  QUIZ
  // ===================================================================
  "Play again": "שחקו שוב",
  "Alpine expert!": "מומחה אלפיני!",
  "Nicely done!": "כל הכבוד!",
  "Great try — play again!": "ניסיון יפה — שחקו שוב!",
  Question: "שאלה",
  Score: "ניקוד",
  "Correct!": "נכון!",
  "Good try.": "ניסיון יפה.",
  "See my score": "לצפייה בניקוד",
  "Next question": "השאלה הבאה",
  "Ötzi the Iceman was found frozen in the Alps. How old is he?":
    "אצי איש הקרח נמצא קפוא באלפים. בן כמה הוא?",
  "About 500 years": "בערך 500 שנה",
  "About 5,300 years": "בערך 5,300 שנה",
  "About 100 years": "בערך 100 שנה",
  "Ötzi lived around 3,300 BC — over 5,300 years ago! You can meet a copy of him at Ötzi-Dorf.":
    "אצי חי בסביבות 3,300 לפני הספירה — לפני יותר מ-5,300 שנה! אפשר לפגוש עותק שלו באצי-דורף.",
  "Triassic Park sits on a mountain that was once…": "טריאסיק פארק יושב על הר שהיה פעם…",
  "A coral reef under the sea": "שונית אלמוגים מתחת לים",
  "A volcano": "הר געש",
  "A desert": "מדבר",
  "The Steinplatte was a tropical coral reef about 200 million years ago. Now it's a dinosaur park in the sky!":
    "השטיינפלאטה הייתה שונית אלמוגים טרופית לפני כ-200 מיליון שנה. עכשיו זה פארק דינוזאורים בשמיים!",
  "The Stuibenfall is Tyrol's biggest what?": "השטויבנפאל הוא הכי גדול בטירול מבין מה?",
  Cave: "מערה",
  "It's the largest waterfall in the Ötztal, dropping about 159 metres. A stairway with 700+ steps climbs beside it.":
    "זהו המפל הגדול ביותר באצטל, בנפילה של כ-159 מטר. גרם מדרגות עם יותר מ-700 מדרגות מטפס לצידו.",
  "What is the Gilfenklamm gorge near Sterzing made of?": "ממה עשוי קניון הגילפנקלאם ליד שטרצינג?",
  "White marble": "שיש לבן",
  "Black lava": "לבה שחורה",
  "Red brick": "לבנים אדומות",
  "It's the only gorge in the world carved through pure white marble — the rock almost glows.":
    "זהו הקניון היחיד בעולם החצוב בשיש לבן טהור — הסלע כמעט זוהר.",
  "How do you get up to the Fichtenschloss spruce castle on the Rosenalm?":
    "איך מגיעים לטירת האשוחית פיכטנשלוס ברוזנאלם?",
  "A rocket": "רקטה",
  "A gondola (cable car)": "רכבל",
  "A submarine": "צוללת",
  "You ride the Rosenalmbahn gondola up the mountain, then the giant wooden castle is right at the top.":
    "עולים ברכבל רוזנאלם במעלה ההר, ואז טירת העץ הענקית ממש בפסגה.",
  "South Tyrol's Val Venosta / Puster valleys are famous for growing…":
    "עמקי ואל וונוסטה / פוסטר בדרום טירול מפורסמים בגידול…",
  Bananas: "בננות",
  Apples: "תפוחים",
  Pineapples: "אננס",
  "South Tyrol grows about 10% of all of Europe's apples — that's why there's a whole Apple Trail to walk!":
    "דרום טירול מגדלת כ-10% מכל התפוחים באירופה — בגלל זה יש שביל תפוחים שלם לטייל בו!",
  "The pale, jagged mountains of South Tyrol are called the…":
    "ההרים החיוורים והמשוננים של דרום טירול נקראים…",
  Dolomites: "דולומיטים",
  Himalayas: "הימלאיה",
  Andes: "אנדים",
  "The Dolomites are a UNESCO World Heritage site and turn pink at sunset — locals call it 'enrosadira'.":
    "הדולומיטים הם אתר מורשת עולמית של אונסק״ו והופכים ורודים בשקיעה — המקומיים קוראים לזה ׳אנרוסדירה׳.",
  "In South Tyrol, most people speak two languages. Which two?":
    "בדרום טירול רוב האנשים מדברים שתי שפות. אילו שתיים?",
  "German & Italian": "גרמנית ואיטלקית",
  "French & Spanish": "צרפתית וספרדית",
  "English & Greek": "אנגלית ויוונית",
  "South Tyrol is in Italy but most people speak German too — signs are in both languages everywhere.":
    "דרום טירול נמצאת באיטליה אבל רוב האנשים מדברים גם גרמנית — השלטים בשתי השפות בכל מקום.",
  "Which emergency number works in Austria, Italy AND Germany?":
    "איזה מספר חירום עובד באוסטריה, איטליה וגם גרמניה?",
  "112 reaches emergency services across the whole of Europe. Good to remember on the trip!":
    "112 מגיע לשירותי החירום בכל רחבי אירופה. כדאי לזכור בטיול!",

  // ===================================================================
  //  STAYS
  // ===================================================================
  "Apartment Streif LXL": "דירת שטרייף LXL",
  "Falkners Five": "פלקנרס פייב",
  "Entdecker Hotel Panorama": "מלון אנטדקר פנורמה",
  "Gasteig, Kirchdorf in Tirol": "גסטייג, קירכדורף אין טירול",
  "Habichen, Oetz": "הביכן, אץ",
  "Hofern, Kiens (Val Pusteria)": "הופרן, קינס (ואל פוסטריה)",
  "near Munich Airport (MUC)": "ליד שדה התעופה מינכן (MUC)",
  "Our base for the first four nights, in the Gasteig hamlet at the foot of the Wilder Kaiser near St. Johann in Tirol (~14 km from Kitzbühel). Self-catering apartment with a wellness area, ideal for cooking and unwinding after big mountain days.":
    "הבסיס שלנו לארבעת הלילות הראשונים, בכפר הקטן גסטייג למרגלות הווילדר קייזר ליד סנקט יוהאן אין טירול (כ-14 ק״מ מקיצביהל). דירת בישול עצמי עם אזור ספא, אידיאלית לבישול ולהירגעות אחרי ימי הרים גדולים.",
  "At the foot of the Wilder Kaiser, near St. Johann": "למרגלות הווילדר קייזר, ליד סנקט יוהאן",
  "Wellness area: sauna, whirlpool, sun terrace": "אזור ספא: סאונה, ג׳קוזי, מרפסת שיזוף",
  "Spacious terrace/balcony and full kitchen": "מרפסת מרווחת ומטבח מלא",
  "Four nights in the Ötztal at the mouth of the valley. A handy springboard for Area 47, the Aqua Dome and drives up to Sölden.":
    "ארבעה לילות באצטל בפתח העמק. נקודת זינוק נוחה ל-Area 47, לאקווה דום ולנסיעות במעלה לזלדן.",
  "Gateway to the whole Ötztal valley": "שער לכל עמק האצטל",
  "Minutes from Area 47 water park": "דקות מפארק המים Area 47",
  "Drives to Stuibenfall and Piburger See": "נסיעות לשטויבנפאל ולפיבורגר זה",
  "Six nights, the heart of the trip, in a sunny panoramic spot in Val Pusteria near Kronplatz. A family hotel for slower mornings; ideally placed for the eastern Dolomites (Lago di Braies and Tre Cime are close), with Bolzano and Merano an easy drive west.":
    "שישה לילות, לב הטיול, במקום פנורמי ושטוף שמש בוואל פוסטריה ליד קרונפלאץ. מלון משפחתי לבקרים רגועים; ממוקם אידיאלית לדולומיטים המזרחיים (לאגו די בראייס וטרה צ׳ימה קרובים), עם בולצאנו ומראנו במרחק נסיעה קלה מערבה.",
  "Longest stay, unpack and settle in": "השהות הארוכה ביותר, לפרוק ולהתמקם",
  "Family hotel near Kronplatz / Bruneck": "מלון משפחתי ליד קרונפלאץ / ברונק",
  "Short hops to Lago di Braies & Tre Cime": "קפיצות קצרות ללאגו די בראייס ולטרה צ׳ימה",
  "One last night next to Munich Airport so the morning departure is stress-free. Drop the rental car, repack, sleep close to the terminal.":
    "לילה אחרון ליד שדה התעופה מינכן כדי שהיציאה בבוקר תהיה בלי לחץ. להחזיר את הרכב השכור, לארוז מחדש, לישון קרוב לטרמינל.",
  "Walk / shuttle to the terminal": "הליכה / הסעה לטרמינל",
  "Return the rental car the evening before": "להחזיר את הרכב השכור בערב הקודם",
  "Last Bavarian Brezn and beer": "ברצן ובירה בווארים אחרונים",

  // ===================================================================
  //  ATTRACTIONS — names
  // ===================================================================
  "Hintersteiner See": "הינטרשטיינר זה",
  "Hartkaiser & Ellmi's Zauberwelt": "הרטקייזר ועולם הקסמים של אלמי",
  "Triassic Park, Steinplatte (Waidring)": "טריאסיק פארק, שטיינפלאטה (ויידרינג)",
  Kitzbühel: "קיצביהל",
  "Wilder Kaiser hike (Gaudeamushütte)": "טיול הווילדר קייזר (בקתת גאודאמוס)",
  "KaiserWelt Scheffau (Brandstadl)": "קייזרוולט שפאו (ברנדשטאדל)",
  "Kundler Klamm gorge, Kundl": "קניון קונדלר קלאם, קונדל",
  "Rosenalm & Fichtenschloss, Zillertal": "רוזנאלם ופיכטנשלוס, צילרטל",
  "Habicher See": "הביכר זה",
  "WIDI trail: Glück auf! The world of the miners": "שביל WIDI: Glück auf! עולם הכורים",
  "WIDI trail: Hoch hinaus! The round for summit conquerors": "שביל WIDI: Hoch hinaus! המסלול לכובשי הפסגות",
  "Alpine Coaster Hoch-Imst": "אלפיין קוסטר הוך-אימסט",
  "WIDIVERSUM Hochoetz": "ווידיוורסום הוכאץ",
  "Area 47": "Area 47",
  "Stuibenfall Waterfall": "מפל שטויבנפאל",
  "Aqua Dome (Längenfeld)": "אקווה דום (לנגנפלד)",
  "Naturpark Haus, Längenfeld": "בית פארק הטבע, לנגנפלד",
  "Piburger See": "פיבורגר זה",
  "Gaislachkogl & 007 Elements (Sölden)": "גייזלכקוגל ו-007 Elements (זלדן)",
  "Lago di Braies (Pragser Wildsee)": "לאגו די בראייס (פראגסר וילדזה)",
  "Seiser Alm / Alpe di Siusi": "זייזר אלם / אלפה די סיוזי",
  "Merano & Trauttmansdorff Gardens": "מראנו וגני טראוטמנסדורף",
  "Val Fiscalina (Fischleintal)": "ואל פיסקלינה (פישליינטל)",
  "Sentiero degli Elfi (Elves' Path), Vandoies": "סנטיירו דלי אלפי (שביל השדונים), ואנדואיס",
  "Concordia 360° panoramic loop, Kronplatz": "מסלול פנורמי קונקורדיה 360°, קרונפלאץ",
  "Antholzer See (Lago di Anterselva)": "אנטהולצר זה (לאגו די אנטרסלבה)",
  "Ötzi-Dorf & Greifvogelpark, Umhausen": "אצי-דורף ופארק ציפורי הטרף, אומהאוזן",
  "Andreas-Hofer-Weg river walk, Oetz": "טיול הנחל אנדראס-הופר-וג, אץ",
  "Toblacher See (Lake Dobbiaco)": "טובלכר זה (אגם דוביאקו)",
  "Reinbach Waterfalls, Sand in Taufers": "מפלי ריינבך, זנד אין טאופרס",
  "Klausberg family park, Ahrntal": "פארק המשפחות קלאוסברג, אהרנטל",
  "Bruneck / Brunico old town": "העיר העתיקה ברונק / ברוניקו",
  "Apple Trail (Apfelweg), Natz-Schabs": "שביל התפוחים (אפפלוג), נאץ-שאבס",
  "Family bike: Olang to Welsberg": "אופניים משפחתיים: מאולנג לוולסברג",
  "Fane Alm, Vals": "פאנה אלם, ואלס",
  "Gilfenklamm marble gorge, Racines": "קניון השיש גילפנקלאם, רצ׳ינס",
  "Issinger Weiher (Lago d'Issengo)": "איזינגר וייהר (לאגו ד׳איסנגו)",
  "Rienz Gorge & Sternwaldele, Bruneck": "קניון ריינץ ושטרנוואלדלה, ברונק",
  "WoodyWalk on the Plose (near Brixen)": "שביל WoodyWalk בפלוזה (ליד בריקסן)",
  "Bathing area": "אזור רחצה",

  // ---- attraction descriptions ----
  "A turquoise mountain lake directly beneath the Wilder Kaiser walls. Clear, swimmable in August, with an easy 3 km loop around the shore.":
    "אגם הררי בצבע טורקיז ממש מתחת לצוקי הווילדר קייזר. צלול, מתאים לשחייה באוגוסט, עם מסלול קל של 3 ק״מ סביב החוף.",
  "A 'witch's water' adventure world at the Hohe Salve, barefoot trails, water channels and forest play. Reached by the Söll gondola.":
    "עולם הרפתקאות ׳מי מכשפה׳ בהוהה סאלבה, שבילים יחפים, תעלות מים ומשחקי יער. מגיעים ברכבל של זל.",
  "Funicular from Ellmau up to a family playground and themed walking trails with the Wilder Kaiser as a backdrop.":
    "רכבל הרים מאלמאו אל גן שעשועים משפחתי ושבילי הליכה נושאיים עם הווילדר קייזר ברקע.",
  "A dinosaur adventure world on top of the Steinplatte above Waidring, in the next valley north-east of the base. Ride the gondola up to life-size dinosaurs, dig for fossils at the 'Triassic Beach', paddle rafts, try the low ropes course and explore a stalactite cave, all on a plateau that was a coral reef 200 million years ago. Entry to the park itself is free, you only pay the lift.":
    "עולם הרפתקאות דינוזאורים על פסגת השטיינפלאטה מעל ויידרינג, בעמק הבא מצפון-מזרח לבסיס. עולים ברכבל אל דינוזאורים בגודל טבעי, חופרים מאובנים ב׳חוף הטריאס׳, משייטים ברפסודות, מנסים את מסלול החבלים הנמוך וחוקרים מערת נטיפים, הכול על מישור שהיה שונית אלמוגים לפני 200 מיליון שנה. הכניסה לפארק עצמו חינם, משלמים רק על הרכבל.",
  "A story trail for younger walkers in the Kaiserbach valley, a few minutes from the base. It tells the tale of the Schnackler, a young shepherd so bored minding the herd on the Griesener Alpe that he made music by clicking his tongue and snapping his fingers. Statues and boards mark the stations, with climbing frames and play areas along the way. About 2 km, roughly 45 minutes, and it runs into the same valley as the Griesner Alm walk.":
    "שביל סיפור למטיילים צעירים בעמק הקייזרבך, כמה דקות מהבסיס. הוא מספר את סיפורו של השנאקלר, רועה צעיר כה משועמם ברעיית העדר על הגריזנר אלפה עד שיצר מוזיקה בהקשת הלשון והצמדת האצבעות. פסלים ושלטים מסמנים את העמדות, עם מתקני טיפוס ואזורי משחק לאורך הדרך. כ-2 ק״מ, בערך 45 דקות, והוא נכנס לאותו עמק כמו טיול הגריזנר אלם.",
  "The famous medieval ski town, pretty in summer too, painted houses, cafés and the Hahnenkamm cable car for a high alpine stroll.":
    "עיירת הסקי המפורסמת מימי הביניים, יפה גם בקיץ, בתים מצוירים, בתי קפה ורכבל האהננקאם לטיול אלפיני גבוה.",
  "Classic hut hike into the Kaisertal / Wilder Kaiser foothills, ending at a mountain hut for Kaiserschmarrn. Several distances possible.":
    "טיול בקתות קלאסי אל מרגלות הקייזרטל / הווילדר קייזר, שמסתיים בבקתת הרים לקייזרשמארן. אפשריים כמה אורכים.",
  "A mountain play realm at 1,650 m on the Brandstadl above Scheffau. You step through a castle gate into the KaiserWald to find castle walls, treehouses, a climbing wall, a sporting course, the Little People's forest and a handicraft workshop, all linked by easy family trails. Entry is free once you have a gondola ticket, and the 8-seater Brandstadlbahn takes pushchairs. Open mid-May to mid-October.":
    "ממלכת משחקים הררית בגובה 1,650 מ׳ בברנדשטאדל מעל שפאו. עוברים דרך שער טירה אל היער קייזרוואלד ומוצאים חומות טירה, בתי עץ, קיר טיפוס, מסלול ספורט, יער האנשים הקטנים וסדנת מלאכה, הכול מחובר בשבילים משפחתיים קלים. הכניסה חינם ברגע שיש כרטיס רכבל, ורכבל הברנדשטאדל בן 8 המושבים מקבל עגלות. פתוח מאמצע מאי עד אמצע אוקטובר.",
  "An enchanted-forest circuit on the Reitherkogel, right beside the Inn valley motorway on the way from the Wilder Kaiser to the Ötztal. The 2.5 km loop from the gondola station is buggy-friendly the whole way round, past a magic village with a witch's kitchen, a ghost moor with a wooden wizard, a wobbly bridge, a viewing tower, a bird's-nest swing, a barefoot path, water games and a petting zoo. Note the Reitherkogelbahn is closed on Wednesdays.":
    "מסלול יער קסום על הרייטרקוגל, ממש ליד כביש עמק האין בדרך מהווילדר קייזר לאצטל. המסלול המעגלי של 2.5 ק״מ מתחנת הרכבל ידידותי לעגלה לכל אורכו, ליד כפר קסום עם מטבח מכשפה, ביצת רפאים עם קוסם עץ, גשר מתנדנד, מגדל תצפית, נדנדת קן ציפור, שביל יחף, משחקי מים וגן חיות פינתי. שימו לב שרכבל הרייטרקוגל סגור בימי רביעי.",
  "A cool, wild little gorge just up the road from the base, where the Grießbach tumbles down through the rock. Walkways, wooden jetties and small suspension bridges carry the path over the water, so the kids get a proper adventure without a long climb. The short loop takes about 1¼ hours; a longer 2½ hour round continues above the gorge.":
    "קניון קטן, פראי וקריר ממש במעלה הדרך מהבסיס, שם נחל הגריסבך גולש במורד הסלע. שבילי עץ, רציפי עץ וגשרים תלויים קטנים נושאים את הדרך מעל המים, כך שהילדים מקבלים הרפתקה אמיתית בלי טיפוס ארוך. המסלול הקצר אורך כשעה ורבע; מסלול ארוך יותר של שעתיים וחצי ממשיך מעל הקניון.",
  "An easy, wide gorge trail along the water between Kundl and Mühltal, right by the A12 near Wörgl and roughly the midpoint of the drive to Munich. Free, stroller-friendly and about 3.5 km of level walking under 200 m rock walls, more a leisurely stream walk than a hike, with places to splash, skip stones and paddle. A little shuttle train saves the legs to the gorge entrance.":
    "שביל קניון קל ורחב לאורך המים בין קונדל למיהלטל, ממש ליד ה-A12 ליד ורגל ובערך באמצע הדרך למינכן. חינמי, ידידותי לעגלה וכ-3.5 ק״מ של הליכה מישורית מתחת לצוקים בגובה 200 מ׳, יותר טיול נחל נינוח מאשר מסלול, עם מקומות להתיז, להקפיץ אבנים ולשכשך. רכבת הסעה קטנה חוסכת את ההליכה עד הכניסה לקניון.",
  "A giant wooden 'spruce castle' adventure playground at the top of the Rosenalmbahn above Zell am Ziller, with towers, rope bridges, slides, water play and easy summit strolls. A day trip from the Wilder Kaiser base: about an hour down the Inn valley to Wörgl and up the Zillertal. Note it is not on the way to anything else, so it is a there-and-back outing rather than a stop.":
    "מגרש משחקים הרפתקאות בטירת עץ ענקית בראש רכבל הרוזנאלם מעל צל אם צילר, עם מגדלים, גשרי חבלים, מגלשות, משחקי מים וטיולי פסגה קלים. טיול יום מבסיס הווילדר קייזר: כשעה במורד עמק האין לוורגל ובמעלה הצילרטל. שימו לב שהוא לא בדרך לשום דבר אחר, אז זו יציאה הלוך ושוב ולא עצירה.",
  "A small, quiet lake in the woods at Habichen, effectively on the doorstep of the Ötztal apartment. A short, level circuit runs round the water with benches and a picnic spot, and it warms up enough to paddle. Two different waymarked walks reach it from Oetz. The plain Rundweg follows the Ötztaler Ache and stays flat. The official '9 Schätze' route is the better one with children: it runs along the river to the Wellerbrücke, climbs gently through forest to Habichen past the Grassmayr bell-founders' house, and branches to the lake and the ice cellar, a natural cave fridge that sits at 0–2 °C and was used to keep food cold until the 1960s. There is a treasure chest with a treasures book at the lake.":
    "אגם קטן ושקט ביער בהביכן, כמעט ממש ליד דירת האצטל. מסלול קצר ומישורי מקיף את המים עם ספסלים ומקום פיקניק, והוא מתחמם מספיק לשכשוך. שני שבילים מסומנים שונים מגיעים אליו מאץ. ה-Rundweg הפשוט עוקב אחרי האצטלר אכה ונשאר מישורי. המסלול הרשמי ׳9 Schätze׳ הוא הטוב יותר עם ילדים: הוא נמשך לאורך הנהר אל גשר וולר, מטפס בעדינות דרך היער להביכן ליד בית יצקני הפעמונים גראסמאייר, ומסתעף אל האגם ואל מרתף הקרח, מקרר מערה טבעי שנמצא ב-0 עד 2 מעלות ושימש לשמירת מזון קר עד שנות ה-60. יש תיבת אוצר עם ספר אוצרות ליד האגם.",
  "2.7 km, about 1¼ hours, 110 m of climbing between 1,951 and 2,061 m. Runs over the Balbach to the Kühtaile Alm, where the miner Kuno tells the story of mining in the valley. Rated easy and family-friendly, with a hut for refreshments partway and the gondola doing the height for you.":
    "2.7 ק״מ, כשעה ורבע, 110 מ׳ טיפוס בין 1,951 ל-2,061 מ׳. עובר מעל הבלבך אל הקיהטיילה אלם, שם הכורה קונו מספר את סיפור הכרייה בעמק. מדורג קל ומשפחתי, עם בקתה לכיבוד באמצע הדרך והרכבל שעושה את הגובה בשבילכם.",
  "About 3.5 km and an hour of walking, from the Panorama Restaurant at 2,020 m via the Balanceakt to the Bielefelder Hütte at 2,150 m, then the climbing crystal, WIDI's photo platform and a Hollywood swing before looping back. Despite the name it only gains around 130 m, and every station is built for children.":
    "כ-3.5 ק״מ ושעת הליכה, ממסעדת הפנורמה בגובה 2,020 מ׳ דרך הבלנסאקט אל בקתת בילפלדר בגובה 2,150 מ׳, ואז גביש הטיפוס, פלטפורמת הצילום של WIDI ונדנדת הוליווד לפני שסוגרים מעגל. למרות השם הוא מטפס רק כ-130 מ׳, וכל עמדה בנויה לילדים.",
  "The gentlest themed walk in the valley and the best of the treasure hunts: 2.94 km with only 51 m of climbing, about 1¼ hours, up through forest on one side of the stream and back along the other. Small caches hidden along the way each hold a letter; collect them all to spell the solution word and claim a gift at the info office. The path is wide enough to push a buggy the whole way, and it ends at a children's playground.":
    "הטיול הנושאי העדין ביותר בעמק והטוב שבצידי האוצר: 2.94 ק״מ עם 51 מ׳ טיפוס בלבד, כשעה ורבע, במעלה דרך היער בצד אחד של הנחל וחזרה לאורך הצד השני. מחבואים קטנים מוסתרים לאורך הדרך מכילים כל אחד אות; אספו את כולן כדי לאיית את מילת הפתרון ולקבל מתנה במשרד המידע. השביל רחב מספיק לדחוף עגלה לכל אורכו, והוא מסתיים בגן שעשועים לילדים.",
  "The closest thing to the Fiss Funpark without the long drive: the world's longest alpine coaster, 3,535 m of track dropping 500 m down the mountain, about 20 minutes from Oetz. At the valley station Albin's play park adds slides, swings, trampolines, a bungee trampoline and a quad track, so there is plenty for anyone too small to ride.":
    "הדבר הכי קרוב לפאן-פארק פיס בלי הנסיעה הארוכה: האלפיין קוסטר הארוך בעולם, 3,535 מ׳ מסלול שיורד 500 מ׳ במורד ההר, כ-20 דקות מאץ. בתחנת העמק פארק המשחקים של אלבין מוסיף מגלשות, נדנדות, טרמפולינות, טרמפולינת בנג׳י ומסלול אופנועי שטח, אז יש הרבה לכל מי שקטן מכדי לרכוב.",
  "The Ötztal's most popular family destination: 36 play and puzzle stations spread over 3,000 m² of mountainside at Hochoetz, reached by the Acherkogelbahn gondola straight up from Oetz. A themed trail follows WIDI the dragon between the stations, with wide, mostly level paths around the mountain station.":
    "היעד המשפחתי הפופולרי ביותר באצטל: 36 עמדות משחק וחידה פרוסות על 3,000 מ״ר של מדרון הר בהוכאץ, מגיעים ברכבל האכרקוגל ישירות מאץ. שביל נושאי עוקב אחרי WIDI הדרקון בין העמדות, עם שבילים רחבים וברובם מישוריים סביב תחנת ההר.",
  "The Alps' biggest outdoor adventure park at the mouth of the Ötztal, lake with slides and blobs, water obstacle courses, climbing and rafting.":
    "פארק ההרפתקאות החיצוני הגדול ביותר באלפים בפתח האצטל, אגם עם מגלשות ובלובים, מסלולי מכשולי מים, טיפוס ורפטינג.",
  "Tyrol's highest waterfall (159 m) above Umhausen, with stairs, a suspension bridge and viewing platforms right in the spray.":
    "המפל הגבוה ביותר בטירול (159 מ׳) מעל אומהאוזן, עם מדרגות, גשר תלוי ופלטפורמות תצפית ממש בתוך הרסס.",
  "Striking thermal spa with outdoor saltwater bowls steaming under the mountains. A perfect rainy-day or tired-legs afternoon.":
    "ספא תרמי מרשים עם קערות מי מלח חיצוניות שמעלות אדים מתחת להרים. אחר צהריים מושלם ליום גשום או לרגליים עייפות.",
  "The Ötztal Nature Park visitor centre, about 300 m² of modern multimedia exhibition on the valley's plants, animals, geology and water, from glaciers to moors. Touchscreens, listening stations, a hologram, VR glasses and a digital wall relief carry the content, and there is a fact-finding puzzle for children. Small, indoor and cheap, so it works as an hour's shelter rather than a whole outing. It is in Längenfeld, the same village as the Aqua Dome. Every Wednesday afternoon from 14:00 to 16:30 there are nature activity stations, no booking needed.":
    "מרכז המבקרים של פארק הטבע אצטל, כ-300 מ״ר של תערוכת מולטימדיה מודרנית על הצמחים, החיות, הגאולוגיה והמים של העמק, מקרחונים ועד ביצות. מסכי מגע, עמדות האזנה, הולוגרמה, משקפי VR ותבליט קיר דיגיטלי נושאים את התוכן, ויש חידת גילוי עובדות לילדים. קטן, מקורה וזול, אז הוא עובד כמחסה לשעה ולא כטיול שלם. הוא בלנגנפלד, אותו כפר כמו האקווה דום. בכל יום רביעי אחר הצהריים מ-14:00 עד 16:30 יש עמדות פעילות טבע, בלי צורך בהזמנה.",
  "A small, warm, protected nature-reserve lake above Oetz, swimmable in summer, with a little rowing-boat rental. Drive up to Piburg and the circuit round the water is 2.3 km, about 45 minutes, of which only roughly half takes a pram. Do not confuse it with the 'große Runde' from the valley floor: that one climbs 271 m over 6.3 km with stairs and a steep pull to the Seejöchl, and is a proper hike.":
    "אגם שמורת טבע קטן, חמים ומוגן מעל אץ, מתאים לשחייה בקיץ, עם השכרת סירות משוט קטנה. נוסעים למעלה לפיבורג והמסלול סביב המים הוא 2.3 ק״מ, כ-45 דקות, שמתוכם רק כחצי מתאים לעגלה. אל תבלבלו עם ה׳große Runde׳ מקרקעית העמק: זה מטפס 271 מ׳ לאורך 6.3 ק״מ עם מדרגות ועלייה תלולה אל הזייויכל, והוא מסלול של ממש.",
  "Cable car to 3,058 m and the James Bond cinematic museum perched on the summit. High-alpine views, glacier panoramas and the Ice Q restaurant.":
    "רכבל לגובה 3,058 מ׳ ומוזיאון הקולנוע של ג׳יימס בונד שיושב על הפסגה. נופים אלפיניים גבוהים, פנורמות קרחונים ומסעדת Ice Q.",
  "The emerald jewel of the Dolomites, ringed by peaks. Walk the 3.5 km shore loop or hire a wooden rowing boat. Go early, it gets busy and needs a booked slot in summer.":
    "פנינת הברקת של הדולומיטים, מוקפת פסגות. ללכת את מסלול החוף של 3.5 ק״מ או לשכור סירת משוט מעץ. להגיע מוקדם, נעשה עמוס וצריך חלון זמן מוזמן בקיץ.",
  "Europe's largest high-alpine meadow, a vast rolling plateau under the Schlern. Cable car up, then gentle trails, huts and the Sassolungo spires ahead.":
    "האחו הגבוה-אלפיני הגדול באירופה, מישור מתגלגל עצום מתחת לשלרן. רכבל למעלה, ואז שבילים עדינים, בקתות וצוקי הסאסולונגו מלפנים.",
  "An elegant spa town with palm-lined promenades and the terraced Botanical Gardens of Trauttmansdorff Castle tumbling down the hillside.":
    "עיירת ספא אלגנטית עם טיילות מוקפות דקלים והגנים הבוטניים המדורגים של טירת טראוטמנסדורף שנשפכים במורד הגבעה.",
  "A flat, family-friendly valley in the Three Peaks Nature Park next to San Candido and Sexten, with the Sundial (Meridiana) peaks towering at the head of the valley. One of the loveliest gentle Dolomite walks, about a 45 minute drive from the Entdecker hotel.":
    "עמק מישורי ומשפחתי בפארק הטבע שלוש הפסגות ליד סן קנדידו וסקסטן, עם פסגות שעון השמש (מרידיאנה) מתנשאות בראש העמק. אחד מטיולי הדולומיטים העדינים והיפים ביותר, כ-45 דקות נסיעה ממלון אנטדקר.",
  "A magical themed family walk above Vandoies di Sopra, a short run down the valley road from the hotel. Eleven storytelling stations (animal tracks, bees, deer, dry-stone walls, lizards) lead past a deer enclosure to the thundering 43 m waterfall on the Rio di Terento and a stone viewing balcony. About 4 km with 150 m of climbing, roughly an hour of gentle walking.":
    "טיול משפחתי נושאי וקסום מעל ואנדואיס די סופרה, נסיעה קצרה במורד כביש העמק מהמלון. אחת-עשרה עמדות סיפור (עקבות חיות, דבורים, צבאים, חומות אבן יבשות, לטאות) מובילות ליד מכלאת צבאים אל המפל הגועש בגובה 43 מ׳ על הריו די טרנטו ומרפסת תצפית מאבן. כ-4 ק״מ עם 150 מ׳ טיפוס, בערך שעה של הליכה עדינה.",
  "The gentlest big-view walk of the trip and the best buggy option in the area. A level circular path runs right around the flat Kronplatz summit plateau at 2,275 m, taking in the Peace Bell Concordia 2000, the Messner and LUMEN museums and staged viewpoints, with the Dolomites on one side and the Zillertal Alps on the other. Cable car up from Reischach, just above Bruneck.":
    "טיול הנוף הגדול העדין ביותר בטיול ואפשרות העגלה הטובה ביותר באזור. שביל מעגלי מישורי מקיף את מישור פסגת הקרונפלאץ השטוח בגובה 2,275 מ׳, וכולל את פעמון השלום קונקורדיה 2000, את מוזיאוני מסנר ו-LUMEN ונקודות תצפית מבוימות, עם הדולומיטים בצד אחד ואלפי הצילרטל בצד השני. רכבל למעלה מריישאך, ממש מעל ברונק.",
  "A deep green mountain lake at 1,642 m at the head of the Antholz valley, ringed by forest and peaks. A 2.7 km nature trail circles the shore, with a playground and a restaurant at the eastern end. The near shore is flat and easy; the far side gets rougher, so with a buggy walk out and back rather than the full loop.":
    "אגם הררי ירוק ועמוק בגובה 1,642 מ׳ בראש עמק אנטהולץ, מוקף יער ופסגות. שביל טבע של 2.7 ק״מ מקיף את החוף, עם גן שעשועים ומסעדה בקצה המזרחי. החוף הקרוב מישורי וקל; הצד הרחוק נעשה מחוספס, אז עם עגלה כדאי ללכת הלוך ושוב ולא את המסלול המלא.",
  "An open-air stone-age village recreating how Ötzi would have lived, with aurochs, sheep and pigs, and a birds-of-prey park next door running daily flight shows. Flat, gentle and genuinely educational.":
    "כפר תקופת אבן פתוח שמשחזר כיצד אצי חי, עם שוורי בר, כבשים וחזירים, ופארק ציפורי טרף בסמוך שמפעיל מופעי תעופה יומיים. מישורי, עדין וחינוכי באמת.",
  "An easy official Oetz valley walk along the Ötztaler Ache from the village to the Weller Bridge near Habichen and on toward Piburger See. Flat riverside paths, about two hours, and you can shorten it anywhere.":
    "טיול עמק רשמי וקל של אץ לאורך האצטלר אכה מהכפר אל גשר וולר ליד הביכן והלאה לכיוון פיבורגר זה. שבילי גדה מישוריים, כשעתיים, ואפשר לקצר בכל מקום.",
  "A flat, easy shore loop of about 3.5 km around Lake Toblach with mountain views and a kiosk, at the mouth of the Höhlensteintal. Buggy-friendly the whole way and an easy first or last outing.":
    "מסלול חוף מישורי וקל של כ-3.5 ק״מ סביב אגם טובלך עם נופי הרים וקיוסק, בפתח ההולנשטיינטל. ידידותי לעגלה לכל אורכו ויציאה ראשונה או אחרונה קלה.",
  "A forest walk past three thundering waterfalls linked by bridges, with a Franciscan friary above and the 'Bad Winkel' barefoot area for the kids. About an hour to an hour and a half, with some steps. The Ahrntal cycle path finishes here.":
    "טיול יער ליד שלושה מפלים גועשים המחוברים בגשרים, עם מנזר פרנציסקני מעל ואזור יחף ׳Bad Winkel׳ לילדים. כשעה עד שעה וחצי, עם כמה מדרגות. שביל האופניים של האהרנטל מסתיים כאן.",
  "A summit fun park reached by gondola, with the Klausberg Flitzer alpine coaster running back down the mountain, a water playground and farm animals. The coaster has height and age rules; the rest suits everyone.":
    "פארק שעשועים בפסגה שמגיעים אליו ברכבל, עם האלפיין קוסטר Klausberg Flitzer שרץ במורד ההר, גן שעשועי מים וחיות משק. לרכבת ההרים כללי גובה וגיל; השאר מתאים לכולם.",
  "The main town of the Val Pusteria and the nearest to the hotel: a pretty pedestrian street for gelato and souvenirs, a riverside playground, and the Rienz gorge walk starting at its edge. Flat and very buggy-friendly.":
    "העיירה הראשית של ואל פוסטריה והקרובה ביותר למלון: רחוב מדרחוב יפה לגלידה ומזכרות, גן שעשועים לחוף הנהר, וטיול קניון הריינץ שמתחיל בקצה שלה. מישורי וידידותי מאוד לעגלה.",
  "A gentle themed loop through the apple orchards of the Natz-Schabs plateau, about 30 minutes west of the hotel. Mostly flat and family-friendly, lined with information panels about South Tyrol's apple growing, passing the Flötscher pond, the Sommersürs and Raiermoos biotopes and the Ölberg viewpoint with its sun loungers. The full circuit is 7.7 km, but you can walk any part and turn back.":
    "מסלול מעגלי נושאי ועדין דרך מטעי התפוחים של מישור נאץ-שאבס, כ-30 דקות מערבה מהמלון. ברובו מישורי ומשפחתי, מלווה בשלטי מידע על גידול התפוחים של דרום טירול, עובר את בריכת פלטשר, את הביוטופים זומרסירס וראיירמוס ואת נקודת התצפית אולברג עם מיטות השיזוף שלה. המסלול המלא הוא 7.7 ק״מ, אבל אפשר ללכת כל חלק ולחזור.",
  "A protected wetland biotope near Raas on the Natz-Schabs plateau, with a flat boardwalk over the reeds and ponds and rich birdlife. A short, easy leg on its own or part of the Apple Trail, and shaded on a hot day.":
    "ביוטופ ביצה מוגן ליד ראס במישור נאץ-שאבס, עם שביל עץ מישורי מעל הקנים והבריכות וציפורים רבות. קטע קצר וקל בפני עצמו או חלק משביל התפוחים, ומוצל ביום חם.",
  "A family playground on the sunny Natz-Schabs apple plateau, an easy first-morning stop paired with the Apple Trail and the Raiermoos boardwalk. Flat and buggy-friendly.":
    "גן שעשועים משפחתי על מישור התפוחים השטוף שמש של נאץ-שאבס, עצירת בוקר ראשונה קלה בשילוב עם שביל התפוחים ושביל העץ ראיירמוס. מישורי וידידותי לעגלה.",
  "The kids' favourite day: hire bikes in Olang and roll the flat, easy Pustertal cycle path past Lake Olang to the village of Welsberg, with Prenninger Park to play in and gelato in town, then take the Pustertal train back to Olang with the bikes. Level, paved and well away from traffic.":
    "היום האהוב על הילדים: לשכור אופניים באולנג ולרכוב על שביל האופניים המישורי והקל של הפוסטרטל ליד אגם אולנג אל כפר וולסברג, עם פארק פרנינגר לשחק בו וגלידה בעיר, ואז לחזור ברכבת הפוסטרטל לאולנג עם האופניים. מישורי, סלול ורחוק מאוד מתנועה.",
  "Often called South Tyrol's prettiest alpine village: 35 weathered wooden huts, barns and a little church scattered across the meadows at 1,740 m at the head of the Valser valley. From the Berg am Boden car park it is a gentle hour up the Milk Trail beside a splashing stream, past grazing cows and sheep, with staffed huts for a long lunch and children free to roam and play. Continue further up the valley only as far as everyone fancies.":
    "נקרא לעיתים קרובות הכפר האלפיני היפה ביותר בדרום טירול: 35 בקתות עץ מיושנות, אסמים וכנסייה קטנה פזורים על האחו בגובה 1,740 מ׳ בראש עמק ואלס. מחניון ברג אם בודן זו שעה עדינה במעלה שביל החלב לצד נחל מפכפך, ליד פרות וכבשים רועות, עם בקתות מאוישות לארוחת צהריים ארוכה וילדים חופשיים לשוטט ולשחק. המשיכו במעלה העמק רק עד כמה שכולם רוצים.",
  "One of the easiest and loveliest high-meadow days in South Tyrol, and far quieter than the Seiser Alm. From the Zumis car park at 1,725 m, wide gentle paths with barely any climb cross huge rolling pastures dotted with wooden huts, the Roner and Starkenfeld huts among them, with the art stations of the Creation Trail along the way and enormous views. Ideal for small children.":
    "אחד מימי האחו-הגבוה הקלים והיפים ביותר בדרום טירול, ושקט הרבה יותר מהזייזר אלם. מחניון צומיס בגובה 1,725 מ׳, שבילים רחבים ועדינים כמעט בלי טיפוס חוצים מרעה מתגלגל ענק זרוע בקתות עץ, ביניהן בקתות רונר וסטרקנפלד, עם עמדות האמנות של שביל הבריאה לאורך הדרך ונופים אדירים. אידיאלי לילדים קטנים.",
  "The only gorge in the world carved through pure white marble, near Sterzing and right on the Brenner route toward Munich. Wooden walkways and bridges thread up the canyon past a 15 m waterfall and glowing white rock, cool and shaded. About 2.5 km and an hour one way, 175 m of climbing, so a carrier rather than a buggy for the 2 year old, and best for children of about 4 and up.":
    "הקניון היחיד בעולם החצוב בשיש לבן טהור, ליד שטרצינג וממש על ציר הברנר לכיוון מינכן. שבילי עץ וגשרים מתפתלים במעלה הקניון ליד מפל בגובה 15 מ׳ וסלע לבן זוהר, קריר ומוצל. כ-2.5 ק״מ ושעה לכיוון אחד, 175 מ׳ טיפוס, אז מנשא ולא עגלה לקטנה, והכי מתאים לילדים מגיל 4 בערך ומעלה.",
  "A warm little swimming lake at Issing near Pfalzen, the next village along from the hotel, with a lawn, playground and a small water slide. A leisurely loop trail circles the water and returns through shady forest along the Pfalznerbach. The perfect close half-day: an easy family walk that ends in a swim. Bathing area open mid-June to end of August.":
    "אגם שחייה קטן וחמים באיסינג ליד פפאלצן, הכפר הבא מהמלון, עם מדשאה, גן שעשועים ומגלשת מים קטנה. מסלול מעגלי נינוח מקיף את המים וחוזר דרך יער מוצל לאורך הפפאלצנרבך. חצי היום הקרוב המושלם: טיול משפחתי קל שמסתיים בשחייה. אזור הרחצה פתוח מאמצע יוני עד סוף אוגוסט.",
  "A shady, flat family walk on the edge of Bruneck, the nearest town to the hotel, starting by the old ice rink. Follow the Rienz river into the gently carved Rienz Gorge, or take the Sternwaldele nature trail through cool forest. Level, buggy-friendly and ideal for a hot afternoon, with Bruneck's old town and gelato at the end.":
    "טיול משפחתי מוצל ומישורי בשולי ברונק, העיירה הקרובה ביותר למלון, שמתחיל ליד זירת הקרח הישנה. עקבו אחרי נהר הריינץ אל קניון הריינץ החצוב בעדינות, או קחו את שביל הטבע שטרנוואלדלה דרך יער קריר. מישורי, ידידותי לעגלה ואידיאלי לאחר צהריים חם, עם העיר העתיקה של ברונק וגלידה בסוף.",
  "A playful family adventure trail on the Plose above Brixen, the furthest of these trails, out west beyond the mouth of the valley. From the gondola top station a wide, stroller-friendly path runs to the Rossalm past wooden play stations, a Kneipp water walk, giant loungers and a viking ship, all under the Peitlerkofel and Geisler spires. About 5 km, ~100 m of climb.":
    "שביל הרפתקאות משפחתי ומשחקי בפלוזה מעל בריקסן, הרחוק ביותר מבין השבילים האלה, במערב מעבר לפתח העמק. מהתחנה העליונה של הרכבל שביל רחב וידידותי-לעגלה נמשך אל הרוסאלם ליד עמדות משחק מעץ, מסלול מים ע״ש קנייפ, מיטות שיזוף ענקיות וספינת ויקינגים, הכול מתחת לצוקי הפייטלרקופל והגייזלר. כ-5 ק״מ, כ-100 מ׳ טיפוס.",

  // ---- attraction good_for chips ----
  Swimming: "שחייה",
  "Easy lake walk": "טיול אגם קל",
  Picnics: "פיקניקים",
  "Barefoot trail": "שביל יחף",
  "Cable car views": "נופים מהרכבל",
  Funicular: "רכבל הרים",
  "Gentle walks": "טיולים עדינים",
  Dinosaurs: "דינוזאורים",
  "Fossil digging": "חפירת מאובנים",
  "Story stations": "עמדות סיפור",
  "Play areas": "אזורי משחק",
  "Short and easy": "קצר וקל",
  "Town stroll": "טיול בעיירה",
  Cafés: "בתי קפה",
  Hiking: "טיולי הליכה",
  "Mountain hut lunch": "צהריים בבקתת הרים",
  "Big scenery": "נופים גדולים",
  "Castle & treehouses": "טירה ובתי עץ",
  "Pushchair-friendly gondola": "רכבל ידידותי לעגלה",
  "Free with the lift": "חינם עם הרכבל",
  "Buggy-friendly loop": "מסלול ידידותי לעגלה",
  "Magic-forest stations": "עמדות יער קסום",
  "Perfect drive break": "עצירה מושלמת בנסיעה",
  "Shady hot-day walk": "טיול מוצל ליום חם",
  "Bridges & walkways": "גשרים ושבילי עץ",
  "Short loop option": "אפשרות מסלול קצר",
  "Stroller-friendly gorge": "קניון ידידותי לעגלה",
  "Splashing & stones": "שכשוך ואבנים",
  "Huge wooden castle playground": "מגרש משחקים ענק בטירת עץ",
  "Gondola up": "רכבל למעלה",
  "Day trip from Wilder Kaiser": "טיול יום מווילדר קייזר",
  "At the doorstep": "ממש ליד הבית",
  "Treasure chest & ice cellar": "תיבת אוצר ומרתף קרח",
  Paddling: "שכשוך במים",
  "Shortest of the two": "הקצר מבין השניים",
  "Hut halfway": "בקתה באמצע הדרך",
  "Mining story": "סיפור הכרייה",
  "Mountain hut on the way": "בקתת הרים בדרך",
  "Climbing crystal": "גביש טיפוס",
  "Big summit views": "נופי פסגה גדולים",
  "Buggy the whole way": "עגלה לכל אורך הדרך",
  "Real treasure hunt": "ציד אוצר אמיתי",
  "Playground at the end": "גן שעשועים בסוף",
  "Longest alpine coaster": "האלפיין קוסטר הארוך ביותר",
  "Play park at the base": "פארק משחקים בבסיס",
  "Close to Oetz": "קרוב לאץ",
  "Themed play trail": "שביל משחק נושאי",
  "All three ages": "כל שלושת הגילאים",
  "Kids & teens": "ילדים ובני נוער",
  "Water park": "פארק מים",
  Adventure: "הרפתקה",
  "Short hike": "טיול קצר",
  "Suspension bridge": "גשר תלוי",
  "Spray & rainbows": "רסס וקשתות",
  "Thermal pools": "בריכות תרמיות",
  Relax: "רגיעה",
  "Rainy day": "יום גשום",
  "Rainy hour": "שעה גשומה",
  "VR & touchscreens": "VR ומסכי מגע",
  "Wednesday activity stations": "עמדות פעילות בימי רביעי",
  "Lakeside circuit": "מסלול לחוף האגם",
  "Rowing boats": "סירות משוט",
  "Bond fans": "מעריצי בונד",
  "Glacier views": "נופי קרחונים",
  "Iconic photos": "תמונות אייקוניות",
  "Shore walk": "טיול לאורך החוף",
  "Meadow walks": "טיולי אחו",
  "Mountain huts": "בקתות הרים",
  "Botanical gardens": "גנים בוטניים",
  Promenade: "טיילת",
  "Family valley walk": "טיול עמק משפחתי",
  "Dolomite views": "נופי דולומיטים",
  "Themed family walk": "טיול משפחתי נושאי",
  "360° Dolomite views": "נופי דולומיטים 360°",
  "Cable car up": "רכבל למעלה",
  "Lakeside playground": "גן שעשועים לחוף האגם",
  "Flat near shore": "חוף קרוב ומישורי",
  "Cool valley air": "אוויר עמק קריר",
  "Flight show": "מופע תעופה",
  "Flat and buggy-friendly": "מישורי וידידותי לעגלה",
  "Flat riverside": "גדת נהר מישורית",
  "Shorten any time": "אפשר לקצר בכל רגע",
  "Flat shore loop": "מסלול חוף מישורי",
  "Kiosk on site": "קיוסק במקום",
  "Three waterfalls": "שלושה מפלים",
  "Barefoot area": "אזור יחף",
  "Forest shade": "צל יער",
  "Alpine coaster": "אלפיין קוסטר",
  "Water playground": "גן שעשועי מים",
  "Farm animals": "חיות משק",
  "Gelato & shops": "גלידה וחנויות",
  "Riverside playground": "גן שעשועים לחוף הנהר",
  "Nearest town": "העיירה הקרובה ביותר",
  "Flat orchard walk": "טיול מטעים מישורי",
  "Ponds & biotopes": "בריכות וביוטופים",
  "Do any section": "אפשר כל קטע",
  "Flat boardwalk": "שביל עץ מישורי",
  "Birds & ponds": "ציפורים ובריכות",
  "Orchard plateau": "מישור המטעים",
  "Pairs with the Apple Trail": "משתלב עם שביל התפוחים",
  "Flat & paved": "מישורי וסלול",
  "Train back with bikes": "חזרה ברכבת עם האופניים",
  "Park & gelato": "פארק וגלידה",
  "Storybook alpine village": "כפר אלפיני מספר סיפור",
  "Stream & bridges": "נחל וגשרים",
  "Hut lunch": "צהריים בבקתה",
  "Huge gentle meadows": "אחו ענק ועדין",
  "Quiet & easy": "שקט וקל",
  "White marble gorge": "קניון שיש לבן",
  "Waterfalls & bridges": "מפלים וגשרים",
  "On the way to Munich": "בדרך למינכן",
  "Alpine coaster fun": "כיף באלפיין קוסטר",
  "Right by the motorway": "ממש ליד הכביש המהיר",
  "Playground & views": "גן שעשועים ונופים",
  "Swim & play": "שחייה ומשחק",
  "Easy forest loop": "מסלול יער קל",
  "Very close": "קרוב מאוד",
  "River gorge": "קניון נהר",
  "Shady & flat": "מוצל ומישורי",
  "Wooden play stations": "עמדות משחק מעץ",
  "Stroller-friendly": "ידידותי לעגלה",

  // ---- price: covers ----
  "incl. Söll gondola": "כולל רכבל זל",
  "Hartkaiser funicular": "רכבל הרטקייזר",
  "Steinplatte gondola return": "רכבל שטיינפלאטה הלוך ושוב",
  "Reitherkogelbahn return": "רכבל רייטרקוגל הלוך ושוב",
  "Rosenalmbahn gondola return": "רכבל רוזנאלם הלוך ושוב",
  "Acherkogelbahn return": "רכבל אכרקוגל הלוך ושוב",
  "coaster ride including the lift": "נסיעת רכבת הרים כולל הרכבל",
  "Water AREA day ticket": "כרטיס יומי לאזור המים",
  "3-hour ticket": "כרטיס ל-3 שעות",
  "exhibition entry": "כניסה לתערוכה",
  "Gaislachkogl cable car": "רכבל גייזלכקוגל",
  "cable car return": "רכבל הלוך ושוב",
  "Kronplatz cable car return": "רכבל קרונפלאץ הלוך ושוב",
  "gorge entry": "כניסה לקניון",
  "gondola return": "רכבל הלוך ושוב",
  "Plose gondola from St. Andrä": "רכבל פלוזה מסנקט אנדרה",

  // ---- price: notes ----
  "Parking ~€5/day": "חניה כ-€5 ליום",
  "Playground free": "גן השעשועים חינם",
  "Park entry free; under-4s free, older children reduced. Free parking. Confirm on steinplatte.tirol.":
    "הכניסה לפארק חינם; עד גיל 4 חינם, ילדים גדולים יותר בהנחה. חניה חינם. לאימות ב-steinplatte.tirol.",
  "Kaiserbachtal is a toll road, about €5 per car": "הקייזרבכטל הוא כביש אגרה, כ-€5 לרכב",
  "Town free; Hahnenkamm cable car ~€32 adult": "העיירה חינם; רכבל האהננקאם כ-€32 למבוגר",
  "Hut food extra": "אוכל בבקתה בתוספת תשלום",
  "Park free; you pay only the Brandstadlbahn (SkiWelt summer rate, check skiwelt.at). Children born 2022 or later ride free. Covered by the Kitzbühel Alps Summer Card.":
    "הפארק חינם; משלמים רק על רכבל הברנדשטאדל (מחיר קיץ של SkiWelt, בדקו ב-skiwelt.at). ילדים שנולדו ב-2022 או אחר כך נוסעים חינם. מכוסה בכרטיס הקיץ של אלפי קיצביהל.",
  "~€9.50 / €5 one way. The forest itself is free.": "כ-€9.50 / €5 לכיוון אחד. היער עצמו חינם.",
  "Small parking fee at Erpfendorf": "דמי חניה קטנים בארפנדורף",
  "Rowing boat ~€10/hr. Parking at Piburg saves the climb from Oetz.":
    "סירת משוט כ-€10 לשעה. חניה בפיבורג חוסכת את הטיפוס מאץ.",
  "The Fichtenschloss playground is free; you pay only the gondola. Covered by the Zillertal Activcard. Checked against 2024 rates — confirm on site.":
    "גן השעשועים פיכטנשלוס חינם; משלמים רק על הרכבל. מכוסה בכרטיס Zillertal Activcard. נבדק מול מחירי 2024 — לאימות במקום.",
  "Same lift ticket as the Widiversum, so the trail costs nothing extra.":
    "אותו כרטיס רכבל כמו הווידיוורסום, אז השביל לא עולה שום דבר נוסף.",
  "Free, and the solution word earns a small gift at the Ochsengarten or Oetz info office.":
    "חינם, ומילת הפתרון מזכה במתנה קטנה במשרד המידע של אוקסנגארטן או אץ.",
  "Seasonal rates, check imst.at. Albin's play park at the valley station is free.":
    "מחירים עונתיים, בדקו ב-imst.at. פארק המשחקים של אלבין בתחנת העמק חינם.",
  "Play world free": "עולם המשחקים חינם",
  "Child rate is ages 5–15, so the 2 year old is free. Included outright if the Ötztal Inside Summer Card applies.":
    "מחיר הילד לגילאי 5–15, אז הקטנה חינם. כלול לחלוטין אם כרטיס הקיץ Ötztal Inside חל.",
  "Children 6–14 pay the reduced rate. The Monday 18:00 guided tour is free.":
    "ילדים 6–14 משלמים מחיר מוזל. הסיור המודרך ביום שני ב-18:00 חינם.",
  "007 Elements ~€23 extra. Children's lift age rules vary — confirm on soelden.com.":
    "007 Elements בתוספת כ-€23. כללי הגיל לרכבל לילדים משתנים — לאימות ב-soelden.com.",
  "Parking from ~€7; rowing boat ~€30/30min. Timed access or shuttle in peak summer, book ahead.":
    "חניה מ-כ-€7; סירת משוט כ-€30 ל-30 דקות. כניסה מתוזמנת או הסעה בשיא הקיץ, הזמינו מראש.",
  "Children under 8 ride free; under-16s get 30% off.":
    "ילדים מתחת לגיל 8 נוסעים חינם; מתחת לגיל 16 מקבלים 30% הנחה.",
  "Under 6 free; reduced 6–14. Confirm on trauttmansdorff.it.":
    "עד גיל 6 חינם; מוזל 6–14. לאימות ב-trauttmansdorff.it.",
  "Paid parking at Fischleinboden": "חניה בתשלום בפישליינבודן",
  "Free Töpslplatz parking by the San Nicolò church": "חניית Töpslplatz חינם ליד כנסיית סן ניקולו",
  "Children under 8 ride free, one per paying adult, so only the 8 year old pays.":
    "ילדים מתחת לגיל 8 נוסעים חינם, אחד לכל מבוגר משלם, אז רק בן ה-8 משלם.",
  "Paid parking at the lake": "חניה בתשלום ליד האגם",
  "Combined ticket with the Greifvogelpark next door; check oetztal.com for the current rate.":
    "כרטיס משולב עם פארק ציפורי הטרף הסמוך; בדקו את המחיר העדכני ב-oetztal.com.",
  "Paid parking at the lake.": "חניה בתשלום ליד האגם.",
  "Gondola ticket, with the alpine coaster charged per ride.":
    "כרטיס רכבל, כשהאלפיין קוסטר בתשלום לכל נסיעה.",
  "Town free; museums and the cable car extra.": "העיירה חינם; מוזיאונים והרכבל בתוספת תשלום.",
  "Path free; bike hire in Olang extra, and the Pustertal train back is covered by the Südtirol Guest Pass.":
    "השביל חינם; השכרת אופניים באולנג בתוספת, והרכבת חזרה בפוסטרטל מכוסה בכרטיס האורח של דרום טירול.",
  "Parking at Berg am Boden; a shuttle runs up the last stretch of road.":
    "חניה בברג אם בודן; הסעה נוסעת בקטע הדרך האחרון.",
  "Parking charge at the Zumis car park; a bus runs from Mühlbach.":
    "דמי חניה בחניון צומיס; אוטובוס נוסע ממיהלבך.",
  "Best for ages 4+. Open early May to early November, 09:00–18:00 in July and August.":
    "מתאים לגיל 4 ומעלה. פתוח מתחילת מאי עד תחילת נובמבר, 09:00–18:00 ביולי ואוגוסט.",
  "Alpine coaster charged per ride (about €5, or ~€4 with a lift ticket). Kids under about 8 ride tucked in with an adult. Checked against 2024 rates — confirm on site.":
    "האלפיין קוסטר בתשלום לכל נסיעה (כ-€5, או כ-€4 עם כרטיס רכבל). ילדים מתחת לגיל 8 בערך נוסעים צמודים למבוגר. נבדק מול מחירי 2024 — לאימות במקום.",
  "Parking nearby": "חניה בקרבת מקום",
  "Under 6 free, older children reduced. Confirm on plose.org.":
    "עד גיל 6 חינם, ילדים גדולים יותר בהנחה. לאימות ב-plose.org.",
};

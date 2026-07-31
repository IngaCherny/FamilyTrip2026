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
};

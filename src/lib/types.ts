export type RegionId = "wilderkaiser" | "oetz" | "southtyrol" | "munich";

export type LatLng = [number, number];

export interface Region {
  id: RegionId;
  name: string;
  country: string;
  flag?: string;
  /** Approximate map centre for the region. */
  center: LatLng;
  blurb: string;
  /** Wikipedia article title used to fetch a representative photo. */
  wiki?: string;
  /**
   * Pinned photo, winning over `wiki`. Either a full URL or a Wikimedia
   * Commons file name. Use it when the article's lead image is a winter shot.
   */
  image?: string;
  /** Hidden from destination lists (e.g. the arrival/departure airport). */
  hidden?: boolean;
}

export interface Stay {
  id: string;
  name: string;
  region: RegionId;
  town: string;
  country: string;
  nights: number;
  checkIn: string; // ISO date
  checkOut: string; // ISO date
  coords: LatLng;
  /** Full street address, if confirmed. */
  address?: string;
  /** True when the location is a best guess, not a confirmed booking. */
  approxLocation?: boolean;
  /** Driving info from the arrival airport (Munich), with a directions link. */
  driveFromAirport?: { duration: string; distance: string; url: string };
  description: string;
  highlights: string[];
  /** Optional booking / website link. */
  link?: string;
  /** Pinned photo (bundled "img/…" path or URL) for the stay card. */
  image?: string;
  /** Extra photos for a swipe-through gallery on the stay tile. */
  images?: string[];
}

export type ActivityTag =
  | "drive"
  | "hike"
  | "walk"
  | "swim"
  | "sights"
  | "town"
  | "lake"
  | "waterfall"
  | "cablecar"
  | "animals"
  | "playground"
  | "food"
  | "kids"
  | "spa"
  | "flight"
  | "free";

/** A place that can be shown on a Google map and routed to. */
export interface Mappable {
  coords?: LatLng;
  /** Address or place name used for the Google Maps query (overrides coords). */
  mapQuery?: string;
}

/** One of the day's choices. Each can be opened to reveal a map + directions. */
export interface DayOption extends Mappable {
  title: string;
  description: string;
  tag?: ActivityTag;
  /** Kid-focused note: walk length, terrain, buggy/carrier, swimming, etc. */
  kidNote?: string;
  attractionId?: string;
  /** Wikipedia title used for the card's thumbnail photo. */
  wiki?: string;
  /** External link, e.g. an official tourism-board route page. */
  link?: string;
  linkLabel?: string;
  /** Approximate drive from the day's base, e.g. "~20 min". */
  driveFromBase?: string;
  /** Trail shape, e.g. "Loop", "There & back", "Linear — bus back to the car". */
  trailShape?: string;
}

/** A worthwhile stop or sight to break up a long drive. */
export interface RouteStop extends Mappable {
  name: string;
  description: string;
  tag?: ActivityTag;
  /** Wikipedia title used for the card's thumbnail photo. */
  wiki?: string;
  /** Pinned photo (full URL or bundled "img/…" path), winning over `wiki`. */
  image?: string;
  /** Links to an attraction for price, closures and access flags. */
  attractionId?: string;
}

/** A family-friendly place to eat, flagged if it has a playground. */
export interface FoodStop extends Mappable {
  name: string;
  description: string;
  playground?: boolean;
}

export interface Drive {
  from: string;
  to: string;
  duration: string;
  distance: string;
  note?: string;
  /** Origin / destination strings for Google Maps directions. */
  fromQuery?: string;
  toQuery?: string;
  /** Worthwhile stops along the way. */
  stops?: RouteStop[];
}

export interface Day {
  date: string; // ISO date
  weekday: string;
  region: RegionId;
  base: string;
  /** Address/place of the base, used as the origin for option directions. */
  baseQuery?: string;
  title: string;
  subtitle?: string;
  /** Pinned hero photo for the day tile (bundled "img/…" path or URL). */
  image?: string;
  /** Set on travel days. */
  drive?: Drive;
  /** The day's choices (we always offer a few). */
  options: DayOption[];
  /** Family restaurants / snack stops, ideally with a playground. */
  food?: FoodStop[];
  /** A one-line footer for the day, e.g. "A full day here — cook dinner in." */
  dayNote?: string;
  tips?: string[];
}

export type PoiCategory = "sight" | "hike" | "lake" | "spa" | "kids" | "town";

/**
 * Admission cost as data rather than prose, so it can be shown next to a day's
 * options, filtered on, and added up for the whole family.
 */
export interface Price {
  /** Nothing to pay to get in. Parking and extras go in `note`. */
  free?: boolean;
  /** Euro per adult. */
  adult?: number;
  /** Euro per child. */
  child?: number;
  /** Flat euro per car, e.g. a toll road. */
  perCar?: number;
  /** What the figures buy, e.g. "cable car return", "day ticket". */
  covers?: string;
  /**
   * Children below this age go free. Varies a lot: the Dolomite cable cars say
   * under 8, Area 47 starts charging at 5, the Tyrolean lifts at about 4. Left
   * unset, the party's conservative default applies.
   */
  freeUnder?: number;
  /** Whatever the numbers cannot say: parking, extras, guest cards. */
  note?: string;
}

/** Who is going, for turning per-person prices into a family total. */
export interface Party {
  adults: number;
  /** Each child's age during the trip. */
  childAges: number[];
  /** Free-child age assumed when a price does not state one. */
  defaultFreeUnder: number;
}

/** A family total, split so the UI can say who got in free. */
export interface FamilyCost {
  total: number;
  payingChildren: number;
  /** Ages that go free, for a "the 2 year old is free" note. */
  freeAges: number[];
}

/** 0 = Sunday … 6 = Saturday, matching `Date.prototype.getDay()`. */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** An operating season, as inclusive "MM-DD" bounds. */
export interface Season {
  from: string;
  to: string;
  /** What the season applies to, e.g. "Bathing area". Defaults to the place. */
  label?: string;
}

export interface Attraction {
  id: string;
  name: string;
  region: RegionId;
  category: PoiCategory;
  coords: LatLng;
  description: string;
  good_for: string[];
  link?: string;
  /** Wikipedia article title used to fetch a representative photo. */
  wiki?: string;
  /** Pinned photo (full URL or Commons file name), winning over `wiki`. */
  image?: string;
  /**
   * Extra photos for a swipe-through gallery in the day details. The hero
   * (`image`, or the first entry) leads; the rest become swipe frames.
   */
  images?: string[];
  /** Approximate admission, checked against 2025 rates. */
  price?: Price;
  /** Weekdays the place (or its lift) does not operate. */
  closedOn?: Weekday[];
  /** Operating season, when it does not cover the whole of August. */
  season?: Season;
  /** A pushchair can manage the main route. */
  buggy?: boolean;
  /** Largely indoors or sheltered, so it still works in the rain. */
  indoor?: boolean;
}

/**
 * A regional guest card or lift pass. These are the biggest single saving
 * available on a trip like this, and most are only offered if you ask.
 */
export interface GuestCard {
  id: string;
  name: string;
  region: RegionId;
  /** included = free with the stay · buy = we pay for it · check = ask first. */
  kind: "included" | "buy" | "check";
  summary: string;
  /** What it covers that this trip actually uses. */
  includes: string[];
  /** The thing to actually do, and when. */
  action: string;
  /** Anything that could catch us out. */
  caveat?: string;
  link?: string;
}

export interface Dish {
  name: string;
  origin: string;
  kind: "savoury" | "sweet" | "drink";
  description: string;
}

export interface PackingGroup {
  group: string;
  items: string[];
}

export interface Tip {
  title: string;
  body: string;
}

export interface EmergencyEntry {
  label: string;
  value: string;
  note?: string;
}

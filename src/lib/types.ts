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
}

/** A worthwhile stop or sight to break up a long drive. */
export interface RouteStop extends Mappable {
  name: string;
  description: string;
  tag?: ActivityTag;
  /** Wikipedia title used for the card's thumbnail photo. */
  wiki?: string;
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
  /** Set on travel days. */
  drive?: Drive;
  /** The day's choices (we always offer a few). */
  options: DayOption[];
  /** Family restaurants / snack stops, ideally with a playground. */
  food?: FoodStop[];
  tips?: string[];
}

export type PoiCategory = "sight" | "hike" | "lake" | "spa" | "kids" | "town";

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
  /** Approximate 2026 admission, e.g. "Free" or "~€34 adult / €17 child". */
  price?: string;
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

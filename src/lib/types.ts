export type RegionId = "wilderkaiser" | "oetz" | "southtyrol" | "munich";

export type LatLng = [number, number];

export interface Region {
  id: RegionId;
  name: string;
  country: string;
  flag: string;
  /** Approximate map centre for the region. */
  center: LatLng;
  blurb: string;
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
  | "swim"
  | "sights"
  | "town"
  | "lake"
  | "food"
  | "kids"
  | "spa"
  | "flight"
  | "free";

export interface Activity {
  time?: string;
  title: string;
  description: string;
  tag?: ActivityTag;
  attractionId?: string;
  optional?: boolean;
}

export interface Day {
  date: string; // ISO date
  weekday: string;
  region: RegionId;
  base: string;
  title: string;
  subtitle?: string;
  /** Set on travel days. */
  drive?: { from: string; to: string; duration: string; distance: string; note?: string };
  activities: Activity[];
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

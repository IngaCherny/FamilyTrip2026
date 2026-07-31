import {
  Car,
  Footprints,
  Mountain,
  TreePine,
  Waves,
  Droplets,
  CableCar,
  PawPrint,
  Blocks,
  Landmark,
  UtensilsCrossed,
  Baby,
  Sparkles,
  Plane,
  Coffee,
  type LucideIcon,
} from "lucide-react";
import type { ActivityTag, PoiCategory } from "./types";

// One quiet neutral chip for every tag — refined, not colourful.
const CHIP = "bg-stone-100 text-stone-600";

export const TAG_META: Record<ActivityTag, { label: string; icon: LucideIcon; className: string }> = {
  drive: { label: "Drive", icon: Car, className: CHIP },
  hike: { label: "Hike", icon: Mountain, className: CHIP },
  walk: { label: "Nature walk", icon: TreePine, className: CHIP },
  swim: { label: "Swim", icon: Waves, className: CHIP },
  sights: { label: "Sights", icon: Landmark, className: CHIP },
  town: { label: "Town", icon: Landmark, className: CHIP },
  lake: { label: "Lake", icon: Waves, className: CHIP },
  waterfall: { label: "Waterfall", icon: Droplets, className: CHIP },
  cablecar: { label: "Cable car", icon: CableCar, className: CHIP },
  animals: { label: "Animals", icon: PawPrint, className: CHIP },
  playground: { label: "Playground", icon: Blocks, className: CHIP },
  food: { label: "Food", icon: UtensilsCrossed, className: CHIP },
  kids: { label: "Kids", icon: Baby, className: CHIP },
  spa: { label: "Spa", icon: Sparkles, className: CHIP },
  flight: { label: "Flight", icon: Plane, className: CHIP },
  free: { label: "Free", icon: Coffee, className: CHIP },
};

// Category badges over photos: a single ink chip, no colour.
const POI_INK = "#23211d";
export const POI_META: Record<PoiCategory, { label: string; icon: LucideIcon; color: string }> = {
  sight: { label: "Sight", icon: Landmark, color: POI_INK },
  hike: { label: "Hike", icon: Footprints, color: POI_INK },
  lake: { label: "Lake", icon: Waves, color: POI_INK },
  spa: { label: "Spa", icon: Sparkles, color: POI_INK },
  kids: { label: "Kids", icon: Baby, color: POI_INK },
  town: { label: "Town", icon: Landmark, color: POI_INK },
};

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

export const TAG_META: Record<ActivityTag, { label: string; icon: LucideIcon; className: string }> = {
  drive: { label: "Drive", icon: Car, className: "bg-stone-100 text-stone-700" },
  hike: { label: "Hike", icon: Mountain, className: "bg-meadow-100 text-meadow-700" },
  walk: { label: "Nature walk", icon: TreePine, className: "bg-meadow-100 text-meadow-700" },
  swim: { label: "Swim", icon: Waves, className: "bg-glacier-100 text-glacier-700" },
  sights: { label: "Sights", icon: Landmark, className: "bg-sunset-200 text-sunset-600" },
  town: { label: "Town", icon: Landmark, className: "bg-stone-100 text-stone-700" },
  lake: { label: "Lake", icon: Waves, className: "bg-glacier-100 text-glacier-700" },
  waterfall: { label: "Waterfall", icon: Droplets, className: "bg-glacier-100 text-glacier-700" },
  cablecar: { label: "Cable car", icon: CableCar, className: "bg-sunset-200 text-sunset-600" },
  animals: { label: "Animals", icon: PawPrint, className: "bg-meadow-100 text-meadow-700" },
  playground: { label: "Playground", icon: Blocks, className: "bg-meadow-100 text-meadow-700" },
  food: { label: "Food", icon: UtensilsCrossed, className: "bg-sunset-200 text-sunset-600" },
  kids: { label: "Kids", icon: Baby, className: "bg-meadow-100 text-meadow-700" },
  spa: { label: "Spa", icon: Sparkles, className: "bg-glacier-100 text-glacier-700" },
  flight: { label: "Flight", icon: Plane, className: "bg-stone-100 text-stone-700" },
  free: { label: "Free", icon: Coffee, className: "bg-stone-100 text-stone-600" },
};

export const POI_META: Record<PoiCategory, { label: string; icon: LucideIcon; color: string }> = {
  sight: { label: "Sight", icon: Landmark, color: "#e3823a" },
  hike: { label: "Hike", icon: Footprints, color: "#567a35" },
  lake: { label: "Lake", icon: Waves, color: "#1f7f8d" },
  spa: { label: "Spa", icon: Sparkles, color: "#2ba0ae" },
  kids: { label: "Kids", icon: Baby, color: "#6f9a47" },
  town: { label: "Town", icon: Landmark, color: "#8a7f6b" },
};

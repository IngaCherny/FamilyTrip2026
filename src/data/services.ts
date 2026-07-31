export interface ServiceCategory {
  id: string;
  label: string;
  labelHe: string;
  emoji: string;
  /** Search term used in the Google Maps query. */
  query: string;
}

export interface ServiceBase {
  id: string;
  /** Base name shown as the card heading. */
  name: string;
  /** Town used to centre the "near me / near here" searches. */
  town: string;
  region: string;
}

/** Everyday practical stops. We link to a live Maps search rather than pin a
 *  specific shop, so the results are always current wherever you are. */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "supermarket", label: "Supermarket", labelHe: "סופרמרקט", emoji: "🛒", query: "supermarket" },
  { id: "pharmacy", label: "Pharmacy", labelHe: "בית מרקחת", emoji: "💊", query: "pharmacy" },
  { id: "petrol", label: "Petrol", labelHe: "תחנת דלק", emoji: "⛽", query: "petrol station" },
  { id: "playground", label: "Playground", labelHe: "גן שעשועים", emoji: "🛝", query: "playground" },
  { id: "atm", label: "ATM", labelHe: "כספומט", emoji: "🏧", query: "ATM" },
  { id: "hospital", label: "Hospital / ER", labelHe: "בית חולים", emoji: "🏥", query: "hospital emergency" },
];

export const SERVICE_BASES: ServiceBase[] = [
  { id: "wilderkaiser", name: "Wilder Kaiser base", town: "Kirchdorf in Tirol, Austria", region: "wilderkaiser" },
  { id: "oetz", name: "Ötztal base", town: "Oetz, Austria", region: "oetz" },
  { id: "southtyrol", name: "South Tyrol base", town: "Kiens, South Tyrol, Italy", region: "southtyrol" },
  { id: "munich", name: "Munich Airport", town: "Munich Airport, Germany", region: "munich" },
];

export function serviceSearchUrl(query: string, town: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query} near ${town}`)}`;
}

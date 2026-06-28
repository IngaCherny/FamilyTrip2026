import type { EmergencyEntry } from "../lib/types";

// 112 is the single European emergency number across all three countries.
export const EMERGENCY: EmergencyEntry[] = [
  { label: "European emergency number", value: "112", note: "Works in Austria, Italy & Germany, police, fire, ambulance" },
  { label: "Alpine / mountain rescue (Austria)", value: "140", note: "Bergrettung, mountain emergencies in Tyrol" },
  { label: "Ambulance (Italy)", value: "118", note: "Or 112" },
  { label: "Police (Germany)", value: "110" },
  { label: "Emergency at sea/water poison info", value: "112", note: "Use 112 and ask for the right service" },
];

export const EMERGENCY_NOTES: string[] = [
  "Save your accommodation addresses and phone numbers offline in case you have no signal.",
  "When calling mountain rescue, give your location coordinates, most phones show them in the maps app.",
  "Pharmacies (Apotheke / Farmacia) handle minor ailments; look for the green cross sign.",
  "Carry travel insurance details and any EHIC/GHIC cards; keep a photo of passports on your phone.",
];

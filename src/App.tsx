import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Itinerary from "./components/Itinerary";
import TripMap from "./components/TripMap";
import Places from "./components/Places";
import Stays from "./components/Stays";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Phrasebook from "./components/Phrasebook";
import Quiz from "./components/Quiz";
import Services from "./components/Services";
import Tips from "./components/Tips";
import Packing from "./components/Packing";
import Emergency from "./components/Emergency";
import InstallPrompt from "./components/InstallPrompt";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { TRIP } from "./data/trip";

export type View =
  | "today"
  | "itinerary"
  | "map"
  | "places"
  | "stays"
  | "services"
  | "cards"
  | "food"
  | "phrasebook"
  | "quiz"
  | "tips"
  | "packing"
  | "emergency";

const SECTIONS: Record<Exclude<View, "today">, () => JSX.Element> = {
  itinerary: Itinerary,
  map: TripMap,
  places: Places,
  stays: Stays,
  services: Services,
  cards: Cards,
  food: Food,
  phrasebook: Phrasebook,
  quiz: Quiz,
  tips: Tips,
  packing: Packing,
  emergency: Emergency,
};

export default function App() {
  const [view, setView] = useState<View>("today");

  // Each section is its own page, so jump to the top when switching.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const isHome = view === "today";
  const Section = isHome ? null : SECTIONS[view];

  return (
    <div className="min-h-screen pb-28 md:pb-0">
      {/* Always-available language toggle (desktop keeps the one in the nav bar). */}
      <div className="glass fixed end-3 top-3 z-[60] rounded-full p-0.5 md:hidden">
        <LanguageSwitcher />
      </div>
      {isHome && <Hero />}
      <Nav view={view} onNav={setView} />
      <main className={isHome ? "" : "pt-2"}>
        {isHome ? (
          <Today onNav={setView} />
        ) : (
          Section && <Section />
        )}
      </main>
      {isHome && (
        <footer className="border-t border-stone-200 bg-white px-4 py-8 text-center text-sm text-stone-500">
          <p className="font-serif text-lg font-bold text-glacier-700">
            {TRIP.title} {TRIP.year}
          </p>
          <p className="mt-1">{TRIP.subtitle}</p>
          <p className="mt-3 text-xs text-stone-400">
            Made with love for the family. Safe travels and guten Appetit!
          </p>
          <p className="mt-1 text-xs text-stone-400">Photos via Wikipedia / Wikimedia Commons.</p>
        </footer>
      )}
      <InstallPrompt />
    </div>
  );
}

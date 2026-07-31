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
import { TRIP } from "./data/trip";

export default function App() {
  return (
    <div className="min-h-screen pb-28 md:pb-0">
      <Hero />
      <Nav />
      <main>
        <Today />
        <Itinerary />
        <TripMap />
        <Places />
        <Stays />
        <Services />
        <Cards />
        <Food />
        <Phrasebook />
        <Quiz />
        <Tips />
        <Packing />
        <Emergency />
      </main>
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
      <InstallPrompt />
    </div>
  );
}

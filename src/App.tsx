import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Weather from "./components/Weather";
import Itinerary from "./components/Itinerary";
import TripMap from "./components/TripMap";
import Places from "./components/Places";
import Stays from "./components/Stays";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Tips from "./components/Tips";
import Packing from "./components/Packing";
import Emergency from "./components/Emergency";
import { TRIP } from "./data/trip";

export default function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Hero />
      <Nav />
      <main>
        <Weather />
        <Today />
        <Itinerary />
        <TripMap />
        <Places />
        <Stays />
        <Cards />
        <Food />
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
    </div>
  );
}

import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Itinerary from "./components/Itinerary";
import TripMap from "./components/TripMap";
import Places from "./components/Places";
import Stays from "./components/Stays";
import Food from "./components/Food";
import Tips from "./components/Tips";
import Packing from "./components/Packing";
import Emergency from "./components/Emergency";
import { REGIONS, TRIP } from "./data/trip";

function RegionsStrip() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {REGIONS.map((r) => (
          <div key={r.id} className="card-paper p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-2xl">{r.flag}</span>
              <div>
                <h3 className="font-serif text-lg font-bold leading-tight text-stone-900">{r.name}</h3>
                <p className="text-xs text-stone-400">{r.country}</p>
              </div>
            </div>
            <p className="text-sm text-stone-600">{r.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Hero />
      <Nav />
      <main>
        <RegionsStrip />
        <Itinerary />
        <TripMap />
        <Places />
        <Stays />
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
          Made with love for the family. Safe travels & guten Appetit! 🏔️
        </p>
      </footer>
    </div>
  );
}

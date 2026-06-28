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
import SmartImage from "./components/SmartImage";
import { DESTINATIONS, TRIP } from "./data/trip";

function RegionsStrip() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto mb-5 max-w-5xl">
        <p className="kicker mb-1">Three alpine bases</p>
        <h2 className="section-title">The Route</h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {DESTINATIONS.map((r) => (
          <article key={r.id} className="card-paper group overflow-hidden">
            <SmartImage wiki={r.wiki} alt={r.name} overlay className="h-36 w-full">
              <div className="absolute bottom-0 left-0 p-3">
                <span className="text-lg">{r.flag}</span>
                <h3 className="font-serif text-xl font-bold leading-tight text-white drop-shadow">{r.name}</h3>
                <p className="text-xs text-white/80">{r.country}</p>
              </div>
            </SmartImage>
            <p className="p-4 text-sm text-stone-600">{r.blurb}</p>
          </article>
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
        <p className="mt-1 text-xs text-stone-400">Photos via Wikipedia / Wikimedia Commons.</p>
      </footer>
    </div>
  );
}

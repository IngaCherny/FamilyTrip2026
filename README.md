# Alpine Summer 2026 🏔️

A mobile-first companion app for our family trip across the Alps,
**13–28 August 2026**: Wilder Kaiser (Austria) → Ötztal (Austria) →
South Tyrol (Italy) → Munich (Germany).

Inspired by [tuscany-2026](https://github.com/tikel1/tuscany-2026).

## Features

- **Live countdown** to departure (switches to a "Day X" tracker during the trip)
- **Day-by-day itinerary** with travel legs, timed activities, tags and tips
- **Interactive map** (Leaflet) of all four bases and every place worth a detour, with Google Maps + Waze links
- **Places to see** — lakes, hikes, towns and rainy-day backups, filterable by region
- **Stays** — the four accommodations with dates and highlights
- **Food & drink** — Tyrolean and South Tyrolean specialities
- **Trip tips** — vignettes, tolls, mountain weather, booking honeypots
- **Packing checklist** — tap to tick off; progress saves on your device
- **Emergency info** — 112 and country-specific numbers, tap to call
- Installable as a PWA / add-to-home-screen, designed for phones on the trail

## Tech stack

Vite · React 18 · TypeScript · Tailwind CSS · React-Leaflet · Framer Motion · Lucide icons.

All trip content lives as plain TypeScript in [`src/data/`](src/data/) — no
database. Edit those files to change the plan.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and
publishes to GitHub Pages. The Vite `base` is set to `/FamilyTrip2026/` for
production so asset paths resolve under the Pages subpath.

> Enable Pages once under **Settings → Pages → Build and deployment → GitHub Actions**.

## Customising

- **Itinerary**: [`src/data/itinerary.ts`](src/data/itinerary.ts)
- **Stays** (swap in exact addresses/coords): [`src/data/stays.ts`](src/data/stays.ts)
- **Places & map pins**: [`src/data/attractions.ts`](src/data/attractions.ts)
- **Food, tips, packing, emergency**: the other files in `src/data/`

Coordinates for the stays are approximate town centres — update them with the
exact addresses from your booking confirmations.

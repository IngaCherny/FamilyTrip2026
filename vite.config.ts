import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// GitHub Pages serves this repo from /FamilyTrip2026/.
// Use a relative base in dev so it also works from the filesystem / previews.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/FamilyTrip2026/" : "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192.png", "icon-512.png"],
      manifest: {
        name: "Chernycation 2026 — Family Trip",
        short_name: "Chernycation",
        description: "Our family trip through Austria, South Tyrol and Munich, August 2026.",
        start_url: "./",
        scope: "./",
        display: "standalone",
        background_color: "#f7f6f3",
        theme_color: "#1f7f8d",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,webp,ico,webmanifest}"],
        navigateFallback: "index.html",
        // Cache photos and map tiles as they are viewed, so they work offline later.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname.endsWith("wikimedia.org"),
            handler: "CacheFirst",
            options: {
              cacheName: "wiki-images",
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname.endsWith("wikipedia.org"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "wiki-api",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Live weather: prefer the network, but keep the last reading so the
            // card still shows something in a valley with no signal.
            urlPattern: ({ url }) => url.hostname.endsWith("open-meteo.com"),
            handler: "NetworkFirst",
            options: {
              cacheName: "weather",
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 6 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Photos pinned via `image` can live on any host (a tourist board,
            // for instance), so cache cross-origin images by request type
            // rather than by hostname. Without this a pinned photo would be
            // the one thing on the page that fails in a valley with no signal.
            urlPattern: ({ request, url }) =>
              request.destination === "image" && url.origin !== self.location.origin,
            handler: "CacheFirst",
            options: {
              cacheName: "pinned-images",
              expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname.endsWith("basemaps.cartocdn.com"),
            handler: "CacheFirst",
            options: {
              cacheName: "map-tiles",
              expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
}));

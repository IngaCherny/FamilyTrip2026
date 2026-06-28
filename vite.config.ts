import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo from /FamilyTrip2026/.
// Use a relative base in dev so it also works from the filesystem / previews.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/FamilyTrip2026/" : "/",
}));

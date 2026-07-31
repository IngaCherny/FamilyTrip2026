/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Muted, neutral-light palette — warm greige ground with a quiet
        // desaturated glacier-teal accent. Nothing bright.
        meadow: {
          50: "#f1f3ec",
          100: "#e3e7d8",
          200: "#ccd4b8",
          400: "#9aa87e",
          500: "#808f63",
          600: "#6b7a4b",
          700: "#55603c",
        },
        glacier: {
          50: "#eef2f2",
          100: "#dce4e3",
          200: "#bccecb",
          400: "#7f9c9a",
          500: "#688583",
          600: "#5c7a79",
          700: "#4a6564",
        },
        stone: {
          50: "#f5f3ee",
          100: "#eae7df",
          200: "#d8d3c8",
          400: "#a49d8f",
          500: "#867e6f",
          600: "#645d50",
          700: "#4c453b",
          900: "#23211d",
        },
        sunset: {
          200: "#ecdfcb",
          400: "#cbab7d",
          500: "#b3925c",
          600: "#8f7346",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        paper: "0 1px 2px rgba(44,40,32,0.04), 0 8px 24px rgba(44,40,32,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

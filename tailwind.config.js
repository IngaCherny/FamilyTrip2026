/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Alpine palette drawn from meadows, glaciers, larch wood and stone.
        meadow: {
          50: "#f3f7ee",
          100: "#e3eed6",
          200: "#c7dcae",
          400: "#8fb368",
          500: "#6f9a47",
          600: "#567a35",
          700: "#43602c",
        },
        glacier: {
          50: "#eefafb",
          100: "#d2f0f3",
          200: "#a7e1e8",
          400: "#4fbecb",
          500: "#2ba0ae",
          600: "#1f7f8d",
          700: "#1d6571",
        },
        stone: {
          50: "#f7f6f3",
          100: "#ece9e2",
          200: "#d8d2c6",
          400: "#a89e8b",
          500: "#8a7f6b",
          600: "#6b6253",
          700: "#4f483d",
          900: "#2c2820",
        },
        sunset: {
          200: "#f8d7b8",
          400: "#ef9f5f",
          500: "#e3823a",
          600: "#c5651f",
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

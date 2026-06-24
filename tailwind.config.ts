import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff7ef",
        blush: "#fce8ee",
        rose: {
          50: "#fff1f5",
          100: "#ffe4eb",
          200: "#fecdd9",
          300: "#fda4b9",
          400: "#fb718e",
          500: "#ee4f73",
          600: "#d9355d"
        },
        plum: {
          50: "#fbf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          500: "#8b5cf6",
          700: "#5b2f6f",
          800: "#432153",
          900: "#2b1435"
        },
        sage: {
          50: "#f0f7f2",
          100: "#dcefe2",
          600: "#4f8f65",
          700: "#3e714f"
        },
        honey: "#f7b955",
        ink: "#28182f"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(67, 33, 83, 0.12)",
        ring: "0 0 0 4px rgba(238, 79, 115, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf5",
          100: "#faf6ec",
          200: "#f3ecd7",
          300: "#e8dcb8",
          400: "#d9c590",
          500: "#c9ab6b",
        },
        olive: {
          50: "#f5f6ef",
          100: "#e8ecd7",
          200: "#d2d9b2",
          300: "#b5c085",
          400: "#98a762",
          500: "#7a8a4a",
          600: "#5e6d38",
          700: "#4a5623",
          800: "#3a4420",
          900: "#2e3619",
        },
        gold: {
          50: "#fcf8ee",
          100: "#f8efd3",
          200: "#f0dda2",
          300: "#e6c369",
          400: "#dcab3f",
          500: "#c9972b",
          600: "#a87721",
          700: "#87591e",
          800: "#6f471e",
          900: "#5e3c1d",
        },
        clay: {
          50: "#faf6f1",
          100: "#f3ebdf",
          200: "#e6d3bc",
          300: "#d5b592",
          400: "#c2946b",
          500: "#b07a52",
          600: "#996547",
          700: "#7e513d",
          800: "#674337",
          900: "#553931",
        },
        moss: {
          50: "#f3f6ef",
          100: "#e3ead9",
          200: "#c7d5b5",
          300: "#a1b789",
          400: "#7d9962",
          500: "#5f7d48",
          600: "#476237",
          700: "#394e2e",
          800: "#2f4027",
          900: "#283622",
        },
        // Aspen Moon brand purple — sampled from the original logo (#463F81).
        // Use as a secondary accent alongside olive/gold, for dark bands,
        // eyebrows, and link/CTA hover states.
        aspen: {
          50: "#f5f4fa",
          100: "#ebe9f4",
          200: "#d4d0e7",
          300: "#b0a9d0",
          400: "#877fb4",
          500: "#655c9c",
          600: "#544d8a",
          700: "#463f81",
          800: "#3a346a",
          900: "#2e2952",
          950: "#1f1c3a",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 20px -4px rgba(74, 86, 35, 0.08)",
        card: "0 8px 30px -8px rgba(74, 86, 35, 0.12)",
        lift: "0 20px 40px -16px rgba(74, 86, 35, 0.18)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 20s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      opacity: {
        "3": "0.03",
        "8": "0.08",
        "12": "0.12",
        "15": "0.15",
        "18": "0.18",
        "22": "0.22",
        "35": "0.35",
        "45": "0.45",
        "55": "0.55",
        "65": "0.65",
        "85": "0.85",
      },
    },
  },
  plugins: [],
};

export default config;

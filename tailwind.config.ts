import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: {
          purple: "rgb(var(--accent) / <alpha-value>)",
          blue: "rgb(var(--accent-hover) / <alpha-value>)",
          cyan: "rgb(var(--accent-2) / <alpha-value>)",
        },
        sky: { 400: "rgb(var(--c-sky) / <alpha-value>)" },
        blue: { 400: "rgb(var(--c-blue) / <alpha-value>)" },
        violet: { 400: "rgb(var(--c-violet) / <alpha-value>)" },
        indigo: { 400: "rgb(var(--c-indigo) / <alpha-value>)" },
        pink: { 400: "rgb(var(--c-pink) / <alpha-value>)" },
        orange: { 400: "rgb(var(--c-orange) / <alpha-value>)" },
        amber: { 400: "rgb(var(--c-amber) / <alpha-value>)" },
        yellow: { 400: "rgb(var(--c-yellow) / <alpha-value>)" },
        red: { 400: "rgb(var(--c-red) / <alpha-value>)" },
        emerald: { 400: "rgb(var(--c-emerald) / <alpha-value>)" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, rgb(var(--btn)), rgb(var(--btn-hover)))",
      },
      borderRadius: {
        card: "14px",
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

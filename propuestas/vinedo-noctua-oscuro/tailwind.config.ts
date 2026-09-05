import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080b",
        night: "#0b0d12",
        dusk: "#12151c",
        slate: "#1a1e28",
        bone: "#e7dfd1",
        parchment: "#cfc6b6",
        mist: "#8a8478",
        brass: "#b8956a",
        wine: "#7a2e38",
        oxblood: "#4a1820",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        brand: "0.42em",
        kicker: "0.28em",
      },
      maxWidth: {
        page: "1440px",
      },
      backgroundImage: {
        "vignette":
          "radial-gradient(120% 80% at 50% 20%, transparent 40%, rgba(7,8,11,0.72) 100%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(184,149,106,0.35)",
      },
      transitionTimingFunction: {
        night: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

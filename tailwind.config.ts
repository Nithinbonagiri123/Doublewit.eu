import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#04060F",
          900: "#070B1A",
          800: "#0B1124",
          700: "#101933",
        },
        ink: {
          50: "#F5F7FB",
          100: "#E5E9F2",
          300: "#A3ADC2",
          400: "#7B86A0",
          500: "#5A6582",
        },
        accent: {
          400: "#7AA8FF",
          500: "#4F8CFF",
          600: "#2E6FE6",
          glow: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "serif"],
      },
      backgroundImage: {
        "radial-spotlight":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,140,255,0.35), transparent 60%)",
        "grid-mesh":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

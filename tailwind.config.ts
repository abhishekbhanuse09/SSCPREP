import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F4",
        ink: "#211F1C",
        "ink-muted": "#6B665F",
        card: "#FFFFFF",
        border: "#E7E2D9",
        accent: {
          DEFAULT: "#2C3E6B",
          dark: "#1F2C4D",
          light: "#EEF1F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "check-pop": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "check-pop": "check-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;

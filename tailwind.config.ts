import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#D62828",
          dark: "#B31E1E",
        },
        ink: "#161616",
        offwhite: "#FAFAFA",
        gray: {
          100: "#F2F2F2",
          500: "#6B6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"],
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;

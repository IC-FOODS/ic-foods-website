import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#022851",
          gold: "#FFBF00",
        },
        primary: "#022851",
        accent: "#FFBF00",
        "default-text": "#18181B",
        "muted-text": "#64748B",
        "subtle-border": "#E2E8F0",
        surface: "#FFFFFF",
        "surface-raised": "#F8FAFC",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;

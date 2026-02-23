import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#C79B2B",
        forest: "#2F5D3A",
        cream: "#FBF6EA",
        earth: "#7A5A2E"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;

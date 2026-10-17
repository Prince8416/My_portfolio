/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6FA",
        ink: "#0E1530",
        cobalt: { DEFAULT: "#2441E6", deep: "#1A31B8" },
        sun: "#FFB82E",
        line: "#DCE1F0",
        mute: "#5B6482",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

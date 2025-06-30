/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        reddit: ["Reddit Sans", "sans-serif"],
      },
      colors: {
        "medium-gray": "#efefed",
        "dark-blue": "#0b467e",
        purple: "#989efa",
        "clear-blue": "#9fd3ed",
        "medium-blue": "#68a8e7",
        "clear-gray": "#f5f5f5",
      },
    },
  },
  plugins: [],
};

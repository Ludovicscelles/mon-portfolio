/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        reddit: ["Reddit Sans", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};

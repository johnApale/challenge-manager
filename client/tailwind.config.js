/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        lightblack: "#16131B",
        custwhite: "#D9D9D9",
        custgrey: "#A8A7A9",
        container: "#231F29",
        lightcontainer: "#2E2936",
      },
    },
  },
  plugins: [],
};

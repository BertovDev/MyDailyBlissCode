/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7564cc",
          50: "#9571D5",
          100: "#241265",
          150: "#1e1265",
          200: "#0B0800",
        },
      },
      fontFamily: {
        darkerGrote: ["Darker Grotesque", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

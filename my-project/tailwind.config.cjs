/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7564cc",
          50: "#9571D5",
          100: "#241265",
          200: "#0B0800",
        },
      },
    },
  },
  plugins: [],
};

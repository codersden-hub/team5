/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "head-blue": "#0227c3",
      "body-slate": "#f5f4f0",
      "footer-blue": "#2b2b43",
      "text-gray": "#565561",
      "hover-color": "#990062",
      "border-color": "#c2c1c5",
      "dark-body": "#040404",
      "dark-border": "#f5f4f0",
      "dark-footer": "#2b2b43",
      "dark-text": "#ffffff",
      "light-text": "white"
    },
    fontFamily: {
      sans: ["Inconsolata", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
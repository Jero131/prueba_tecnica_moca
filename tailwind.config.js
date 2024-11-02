/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/components/**.vue", "./src/**.vue",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'mainRed': "#FF2929",
      'secondaryBlue': '#41628b',
    },
  },
  plugins: [],
}


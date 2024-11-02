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
      'mygray': '#eeeeee',

      green: {
        200: '#A7DB8D',
        700: '#4E8234'
      },
      purple: {
        200: '#C183C1',
        700: '#682A68'
      },
      red: {
        200: '#F5AC78',
        500: '#EF4444',
        700: '#9C531F'
      },
      blue: {
        200: '#9DB7F5',
        700: '#445E9C'
      },
      yellow: {
        200: '#FAE078',
        700: '#A1871F'
      },
      gray: {
        100: '#F5F5F5',
        200: '#eeeeee',
        500: '#757575',
        700: '#4B4B4B',
        800: '#333333'
      },
      black: '#000000',
      white: '#FFFFFF',
      flying: {
        200: '#B2D7FF',
        700: '#2962FF'
      },
      bug: {
        200: '#D6D678',
        700: '#787838'
      },
      normal: {
        200: '#D9D9D9',
        700: '#696969'
      },
      ground: {
        200: '#DBB886',
        700: '#8B785A'
      },
      psychic: {
        200: '#F9D7F9',
        700: '#8B458B'
      },
      ice: {
        200: '#D0F0FF',
        700: '#698BFF'
      },
      fighting: {
        200: '#F0D0D0',
        700: '#8B4513'
      },
      rock: {
        200: '#D8D8D8',
        700: '#706040'
      },
      dragon: {
        200: '#99CCFF',
        700: '#584270'
      },
      ghost: {
        200: '#D0B0FF',
        700: '#6A006A'
      },
      dark: {
        200: '#B8B886',
        700: '#585838'
      },
      steel: {
        200: '#C0C0C0',
        700: '#707070'
      },
      fairy: {
        200: '#F9CAFF',
        700: '#A54AA5'
      }
    },
  },
  plugins: [],
}


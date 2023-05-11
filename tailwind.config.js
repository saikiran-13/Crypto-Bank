const { toBePartiallyChecked } = require('@testing-library/jest-dom/dist/matchers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: '#4072d9',
      white:'#f3f5f9',
      blue:'#4072d9',
      gray:'#6b6e70',
      least:'#2e58ad',
      dark:'#474b4f',
      black:'#222629',
      light:'#ececeb',
      green:'#86c232',
      gold:'#ffcf40',

    },
    fontFamily:{
      poppins: `'Poppins', sans-serif`
    },
    extend: {
      backgroundColor:{
        //  blacky: '#222629',
        blacky:'rgb(241,245,249)'
      }
      
    },
  },

plugins: [],
}



const { toBePartiallyChecked } = require('@testing-library/jest-dom/dist/matchers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: '#86c232',
      white:'#f3f5f9',
      blue:'#4072d9',
      gray:'#6b6e70',
      least:'#61893f',
      dark:'#474b4f',
      black:'#222629',
      light:'#ececeb'

    },
    fontFamily:{
      poppins: `'Poppins', sans-serif`
    },
    extend: {
      backgroundColor:{
         blacky: '#222629',
      }
      
    },
  },

plugins: [],
}



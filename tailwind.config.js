/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center : true ,
      padding : '55px',
    },
    extend: {
      fontFamily: {
        'fira-sans' : ["Fira Sans", "sans-serif"] ,
        'poppins' : ["Poppins", "sans-serif"] ,
        'inter' : ["Inter", "sans-serif"]
      } ,
      screens : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}


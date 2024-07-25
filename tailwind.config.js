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
      } ,
      boxShadow : {
        'shadow-me' : '5px 7px 25px rgba(0, 0, 0, 0.6)',
        'shadow-me2' : '2px 4px 10px rgba(0, 0, 0, 0.4)'
      } 
    },
  },
  plugins: [],
}


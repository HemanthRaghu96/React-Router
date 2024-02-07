/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      height:{
        cardheight: '27rem',
        smallcard:'30rem'
      },
      width:{
        86:'21rem'
      }
      
    },
  },
  plugins: [],
}


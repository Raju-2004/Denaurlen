/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors : {
        indigo : '#4B0082',
        lavender : '#F7F2FF',
        light_gray : '#F5F5F5'
      },
      backgroundImage:{
        'Wave':"url('assets/Vector 3.svg')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif']
      },
      colors: {
        "pry-clr-0": 'rgb(241, 245, 248)',
        "pry-clr-1": 'rgb(16, 42, 66)',
        "pry-clr-2": 'rgb(44, 174, 186)',
        "pry-clr-3": 'rgb(136, 235, 242)',
        "pry-clr-4": 'rgb(4, 78, 83)',
        "pry-clr-5": 'rgb(218, 226, 236)',
        "pry-clr-6": 'rgb(97, 125, 152)',
        "pry-clr-7": 'rgb(50, 77, 103)',
      }
    },
  },
  plugins: [],
}
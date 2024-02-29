/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "cool-Sage": 'rgb(200, 219, 190)',
        "darkerSage": 'rgb(212, 231, 197)',
        "darkestSage": 'rgb(153, 188, 133)',
        "textPink": 'rgb(233, 218, 240)',
        "textPeach": 'rgb(102, 90, 72)',
        "textBrown": 'rgb(159, 135, 114)',
        "bgPeach": 'rgb(255, 225, 198)',
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}


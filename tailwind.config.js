/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(31.56deg, rgba(141, 49, 245, 0) 0%, #8D31F5 100%, #FFFFFF 100%)',
      },
      screens: {
        'xs': {'max': '426px'}, // Custom max-width for 426px
      },
    },
  },
  plugins: [],
}


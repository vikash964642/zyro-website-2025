/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(233.8deg, #FFFFFF 0%, #9573DE 53%, #FFFFFF 100%)',
      },
      borderImage: {
        'gradient': 'linear-gradient(126.25deg, #A901A3 12.17%, #3500C1 119.91%)',
      },
      screens: {
        'xs': {'max': '426px'},
        'custom-md' : {'max': '769px'},
      },
    },
  },
  plugins: [],
}


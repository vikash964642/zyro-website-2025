/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        mobileMenuSape:"url(/public/image/shades/mobile_menu_shad.svg)"
      }
    },
  },
  plugins: [],
}

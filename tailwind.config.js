/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        mobileMenuSape:"url(/public/image/shades/mobile_menu_shad.svg)",
        footerSape:"url(/public/image/shades/footer-shad.svg)",
        footerMobileSape:"url(/public/image/shades/footer_mobile_shad.svg)"
      }
    },
  },
  plugins: [],
}

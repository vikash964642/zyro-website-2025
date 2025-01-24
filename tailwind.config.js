/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileMenuShape: "url('/image/shades/mobile_menu_shad.svg')",
        gradientText: "linear-gradient(202deg, #fff, #9573DE 53%, #fff)",
      },
      colors: {
        gradientTextStart: "#fff",
        gradientTextMid: "#9573DE",
        gradientTextEnd: "#fff",
      },
    },
  },
  plugins: [],
};

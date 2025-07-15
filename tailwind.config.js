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
        textgradient: "linear-gradient(50deg,rgba(255, 255, 255, 1) 0%, rgba(141, 49, 245, 0.8) 91%, rgba(255, 255, 255, 1) 100%);",

      },
      colors: {
        gradientTextStart: "#fff",
        gradientTextMid: "#9573DE",
        gradientTextEnd: "#fff",
        white70:"rgba(255, 255, 255, 0.70)",
         white90:"rgba(255, 255, 255, 0.90)",
         white20: "rgba(255, 255, 255, 0.20)",
          white80: "rgba(255, 255, 255, 0.80)",
         grey70:"rgba(191, 191, 191, 0.70)",
         newletterBG: "rgba(109, 236, 49, 0.02)",
         newletterboxBorder:"rgba(109, 236, 49, 0.50)",
         bordercolor1: "rgba(255, 255, 255, 0.20)",
         backgroundColor1: "rgba(8, 4, 17, 0.50)",
         
      },
    },
  },
  plugins: [],
};

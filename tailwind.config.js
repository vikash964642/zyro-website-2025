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
        textgradiantMid: "linear-gradient(45deg, #EDEDED 24%, #9573DE 45%, #F7F7F7 72%)",
        gradientText: "linear-gradient(202deg, #fff, #9573DE 53%, #fff)",
        featuregradientText: "linear-gradient(360deg,rgba(255, 255, 255, 0) 0%, rgba(80, 49, 181, 0.75) 43%, rgba(80, 49, 181, 1) 100%)",
      },
      colors: {
        featurediv: " linear-gradient(145deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
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
         backgroundColor2: "rgba(8, 4, 17, 0.00)",
         
      },
    },
  },
  plugins: [],
};

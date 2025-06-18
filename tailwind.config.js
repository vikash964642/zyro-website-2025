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
        white70:"rgba(255, 255, 255, 0.70)",
         white80:"rgba(255, 255, 255, 0.90)",
         white20: "rgba(255, 255, 255, 0.20)",
      },
    },
  },
  plugins: [],
};

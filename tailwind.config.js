const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#5041BC",
        borderForLogo: "#D8D8D8",
        borderForItems: "#EBE8FF",
        borderForStatus: "#D3CBFB",
        mainTextColor: "#1F192F",
        mainTextForNav: "#54657E",
        goldTextColor: "#F7941D",
        greenTextColor: "#43BE83",
        bgGreenForStatus: "#B5FFCE",
        bgRedForStatus: "#FFD9D7",
        textColorForStatus: "#EA8F95"
      },
      fontFamily: {
        nunitoSans: "Nunito Sans"
      },
      screens: {
        md: "1000px",
        md2: "1245px"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
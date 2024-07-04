
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "Light_Cyan": "hsl(193, 38%, 86%)",
        "Neon_Green": "hsl(150, 100%, 66%)",
        "Grayish_Blue": "hsl(217, 19%, 38%)",
        "Dark_Grayish_Blue": "hsl(217, 19%, 24%)",
        "Dark_Blue": "hsl(218, 23%, 16%)"
      },
      fontFamily : {
        "font_Manrope" : "Manrope,sans-serif", 
      },
      boxShadow : {
        "sha" : "box-shadow: hsl(150, 100%, 66%) 0px 54px 55px, hsl(150, 100%, 66%) 0px -12px 30px, hsl(150, 100%, 66%) 0px 4px 6px, hsl(150, 100%, 66%) 0px 12px 13px, hsl(150, 100%, 66%) 0px -3px 5px;"
      }
    },
  },
  plugins: [],
}

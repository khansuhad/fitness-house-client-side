/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      
      fontFamily: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
      instrumentSans: "Instrument Sans, sans-serif",
      tiroBangla: "Tiro Bangla , sans-serif",
      hindSiliguri: "Hind Siliguri , sans-serif",
      teko: "Teko , sans-serif"
    },
      colors: {
        "firstColor": "#860A35",
        "headingcolor": "#282938",
        "navmenu":"#EEE2DE",
        "dashmenu": "#EBE3D5",
        "bgShade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#1C1E53",
        "text-red": "#e50918",
      }
    },
  },
  plugins: [require("daisyui")],
}


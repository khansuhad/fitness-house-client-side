/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#860A35",
        "headingcolor": "#282938",
        "navmenu":"#EEE2DE",
        "dashmenu": "#EBE3D5",
        "bgShade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#1C1E53",
      }
    },
  },
  plugins: [require("daisyui")],
}


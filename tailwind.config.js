/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        customClicked : "rgb(0, 61, 255)",
        customHover  : "rgba(0, 61, 255, 0.2)",
      }
    },
  },
  plugins: [],
}


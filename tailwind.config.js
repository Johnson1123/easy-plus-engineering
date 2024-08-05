const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f3f3f3",
        primary: "#E3FEF7",
        secondary: "#77B0AA",
        tertiary: "#135D66",
        deep: "#003C43",
      },
      fontFamily: {
        roboto: ["Roboto", "Rubik", "Helvetica", "Arial", "sans-serif"],
        rubik: ["Roboto", "Rubik", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundColor: {
        primary: "#E3FEF7",
        secondary: "#77B0AA",
        tertiary: "#135D66",
        deep: "#003C43",
      },
    },
  },
  plugins: [],
};

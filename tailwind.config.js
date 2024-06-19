/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0E0016",
        secondary: "#aaa6c3",
        tertiary: "#0E0016",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        purple: "#4E1352",
        purpleclear: "#680BAB",
        darkPurple: "#0A1020",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

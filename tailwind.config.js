/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    colors: {
      primary: "#002147",
      secondary: "#C2D7EF",
      red: "#FF0000",
      blue: "#0099ff",
    },
    extend: {
      backgroundImage: {
        "slider-image-one": "src/assests/banner/image-slider-1.webp",
        "slider-image-two": "src/assests/banner/image-slider-2.webp",
        "slider-image-three": "src/assests/banner/image-slider-3.jpg",
      },
      boxShadow: {
        "2px": "0px 0px 2px 0px rgb(108 108 108 / 25%)",
      },
    },
  },
};

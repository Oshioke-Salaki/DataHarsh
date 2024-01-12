/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      primaryBg: "url('/src/assets/bg.png')",
    },
    fontFamily: {
      sans: ["Bowlby One SC", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

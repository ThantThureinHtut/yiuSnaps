/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yiumaincolor: "#b33131",
      },
      keyframes: {
        fad: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fad: "fad 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F37937",
        secondary: "#FCD8C5",
        "Text-Primary": "#151414",
        "Text-Secondary": "#343434",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "6px 9px 25px 0px rgba(0, 0, 0, 0.35)",
      },
      background: {
        "hero-pattern":
          "url('./assets/Images/Noise-Texture'), lightgray -47.906px 0px / 106.654% 100% no-repeat",
      },
    },
  },
  plugins: [],
};

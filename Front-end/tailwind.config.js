/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // Estilos personalizados de fontes:
    fontFamily:{
      titulos: ["Dancing Script","cursive"],
      paragrafos:["Abel","sans-serif"],
      text_ale:["Atma","sans-serif"],
      text_ale2:["Indie Flower", "Rubik Bubbles"]

    }
  },
  plugins: [],
};
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
      text_ale:['"Baloo 2"', "sans-serif"], 
    }
  },
  plugins: [],
};
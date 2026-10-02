/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1E4620', // Meadow Green
        'brand-white': '#FDFBF7', // Warm Cream
        'brand-gold': '#D4AF37', // Gold
        'brand-steel': '#6B8E70', // Muted Meadow
        'brand-light': '#F0F4F1', // Light Mint/Beige
      },
      fontFamily: {
        basetica: ['Inter', 'sans-serif'],
        plaak: ['Outfit', 'Impact', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

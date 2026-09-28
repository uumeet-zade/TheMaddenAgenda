/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#3D151B', // Rich Dark Burgundy (replaces navy)
        'brand-white': '#FDFBF7', // Warm Cream
        'brand-gold': '#D4AF37', // Elegant Metallic Gold
        'brand-steel': '#8C777A', // Muted Rose-Taupe (replaces steel)
        'brand-light': '#F4EFEA', // Warm Beige Background
      },
      fontFamily: {
        basetica: ['Inter', 'sans-serif'],
        plaak: ['Outfit', 'Impact', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

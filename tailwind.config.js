/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pastel': '#FFF5F5',
        'soft-pink': '#FED7E2',
      },
      fontFamily: {
        'serif-heart': ['"Great Vibes"', 'cursive'],
        'sans-ui': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

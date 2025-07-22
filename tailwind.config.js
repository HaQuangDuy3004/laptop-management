/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#C4151C',
        'custom-beige': '#ffe9b4',
      }
    },
  },
  plugins: [],
}

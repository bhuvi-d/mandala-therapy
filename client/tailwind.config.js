/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
       animation: {
        'fade-in': 'fadeIn 1s ease-in-out both'
      },
    },
  },
  plugins: [],
}

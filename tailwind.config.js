/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dash-dark': '#1a1f2e',
        'dash-darker': '#151921',
        'dash-blue': '#3b82f6',
        'dash-blue-dark': '#2563eb',
      }
    },
  },
  plugins: [],
}
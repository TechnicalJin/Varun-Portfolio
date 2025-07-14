/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#38bdf8',
        'accent-dark': '#0ea5e9',
        'accent-light': '#bae6fd',
        text: '#f8fafc',
        'text-secondary': '#e2e8f0',
      },
    },
  },
  plugins: [],
}
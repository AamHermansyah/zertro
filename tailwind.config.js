/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxs: '300px',
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      container: {
        center: true
      },
      colors: {
        primary: 'rgb(55, 48, 163)',
      }
    },
  },
  plugins: [],
}

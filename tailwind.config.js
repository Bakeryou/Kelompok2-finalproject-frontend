/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./src/assets/img/bg.jpg')",
      },
      colors: {
        primary: '#0D0701',
        secondary: '#201203',
        surface: '#FDFDFD',
        border: '#0D0701',
        hover: '#3f2305',
        pressed: '#41485A',
        focus: '#3f2305',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#675BC8',
        primaryLight: '#9990DA',
        primaryBold: '#19143D',
        secondary: '#0A453A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        acme: ['Acme', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

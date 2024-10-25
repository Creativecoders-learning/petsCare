/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#675BC8', // Replace with your primary color hex code
        secondary: '#0A453A', // Replace with your secondary color hex code
      },
    },
  },
  plugins: [],
};

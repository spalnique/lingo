/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      'roboto-regular': 'roboto-regular, sans-serif',
      'roboto-medium': 'roboto-medium, sans-serif',
      'roboto-bold': 'roboto-bold, sans-serif',
      'roboto-italic': 'roboto-italic, sans-serif',
    },
    extend: {},
  },
  plugins: [],
};

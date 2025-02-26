/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#97D4DA',
        secondary: '#2E4769',
        primaryHover: '#67BCC4',
        secondaryHover: '#486284'
      }
    }
  },
  plugins: []
};

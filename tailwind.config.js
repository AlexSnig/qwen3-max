/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#e63946',
          600: '#d90429',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          800: '#1d3557',
          900: '#14213d',
        },
        success: '#2a9d8f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

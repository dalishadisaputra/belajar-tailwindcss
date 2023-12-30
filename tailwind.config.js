/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee',

      },
      animation: {
        'spin-lambat': 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}


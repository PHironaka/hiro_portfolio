/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)'},
        },
      },
      animation: {
        pulse: 'pulseScale 1.5s ease-in-out infinite',
      },
    },
    fontFamily: {
      body: ['DM-Regular', 'sans-serif'],
      bold: ['DM-Bold', 'sans-serif'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      bg: '#161518',
      green: '#22c55e',
      gray: '#AAAAAA',
      red: '#FF4534',
    },
  },
  plugins: [],
}

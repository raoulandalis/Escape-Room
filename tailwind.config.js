/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2' : '10px',
      },
      animation: {
        type: 'type 2.5s steps(36, end)',
        slideUp: 'slideUp 2s ease-out forwards'
      },
      keyframes: {
        type: {
          from: {width: '0'},
          to: {width: '10em'},
        },
        slideUp: {
          '0%': {transform: 'translateY(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}

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
        type: 'type 3s steps(36, end)'
      },
      keyframes: {
        type: {
          from: {width: '0'},
          to: {width: '10em'},
        },
      }
    },
  },
  plugins: [],
}

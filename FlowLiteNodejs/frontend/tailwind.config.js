/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#c3c6cc', // New color value for gray-400
        },
      },
      width: {
        '66': '270px'
      },
      fontSize: {
        smb: '0.8rem'
      },
    },
  },
  plugins: [],
}


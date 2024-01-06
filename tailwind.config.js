/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens:{
        'xxl': '1600px',
       }
    },
  },
  plugins: [],
}
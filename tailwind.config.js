/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px',
        '16': '16px',
        
      },
    },
    fontFamily: {
      signature: ["Satisfy"],
      default: ["Raleway"],
    },
  },
  plugins: [],
};
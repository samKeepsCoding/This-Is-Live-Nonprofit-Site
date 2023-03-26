/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "TILGold" : '#c18d21',
        "TILBlack" : "#1c1b1a",
        "TILWhite" : "#ffffff",
        "TILGrey" : "#d4d5d5"
      },
    },
  },
  plugins: [],
}

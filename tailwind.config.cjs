/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
    },
      colors: {
        "blue-primary": "hsl(207,90%,54%)",
        "pale-blue": "hsl(205, 87%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "HSL(219, 9%, 45%)",
        "grayish-blue": "HSL(220, 14%, 75%)",
        "light-grayish-blue": "HSL(223, 64%, 98%)",
        "black-75": "hsl(0,0%,0%)",
  },
  },
  plugins: [],
}
}
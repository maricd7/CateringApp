/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'ctaGradStart':'#D84F03',
        'ctaGradEnd':'#DC3100',
        'primCol':'#D94D03'
      },
    },
  },
  plugins: [],
}


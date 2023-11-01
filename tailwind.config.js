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
        'primCol':'#D94D03',
        'blackTxt':'#242424',
        'gradRedStart':'#B62920',
        'gradRedEnd':'#7A0700',
      },
      maxWidth: {
      '1/4': '25%',
      '1/2': '300px',
      '3/4': '75%',
              }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      sm : '340px',
      md : '768px'
    },
    extend: {
      height : {
        100 : '26.5rem'
      },
      width : {
        24 : '24%'
      },
      inset : {
        40 : '40%'
      },
      animation : {
        fadeOu : 'fadeOu 2s ease-in'
      },
      keyframes : {
        fadeOu : {
          '0%' : {
            opacity : 100
          },
          '100%' : {
            opacity : 0
          }
        }
      }
    },
  },
  plugins: [],
}


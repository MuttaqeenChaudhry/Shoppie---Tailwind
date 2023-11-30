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
        fadeIn : 'fadeIn 1s ease-in',
        fadeOut : 'fadeOut 1s ease-in',
        ltr : 'ltr 0.5s ease-in-out'
      },
      keyframes : {
        ltr : {
          '0%' : {
            transform : 'translateX(-350px)'
          },
          '100%' : {
            transform : 'translateX(0px)'
          }

        },
        fadeIn : {
          '0%' : {
            opacity : 0
          },
          '100%' : {
            opacity : 100
          }
        },
        fadeOut : {
          '0%' : {
            opacity : 100
          },
          '100%' : {
            opacity : 0
          }
        },
      }
    },
  },
  plugins: [],
}


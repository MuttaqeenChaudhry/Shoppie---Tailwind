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
        24 : '24%',
        100 : '99rem'
      },
      inset : {
        40 : '40%'
      },
      animation : {
        fadeIn : 'fadeIn 1s ease-in',
        fadeOut : 'fadeOut 1s ease-in',
        ltr1 : 'ltr1 0.3s ease-in-out',
        ltr2 : "ltr2 0.3s ease-in-out",
        rtl384 : 'rtl384 0.3s ease-in-out',
        rtl3842 : 'rtl3842 0.3s ease-in-out'
      },
      keyframes : {
        ltr1 : {
          '0%' : {
            transform : 'translateX(-384px)'
          },
          '100%' : {
            transform : 'translateX(0px)'
          }
        },
        ltr2 : {
          '0%' : {
            transform : 'translateX(0px)'
          },
          '100%' : {
            transform : 'translateX(384px)'
          }
        },
        rtl384 : {
          '0%' : {
            transform : 'translateX(0px)'
          },
          '100%' : {
            transform : 'translateX(-384px)'
          }
        },
        rtl3842 : {
          '0%' : {
            transform : 'translateX(384px)'
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


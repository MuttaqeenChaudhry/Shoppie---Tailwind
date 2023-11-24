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
    extend: {},
  },
  plugins: [],
}


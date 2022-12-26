/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        greenSuper: 'rgba(0, 170, 161, 1)',
        fontBlack: 'rgba(34, 34, 34, 1)',
        greenFooter: 'rgba(232, 243, 243, 1)',
        greenGray: 'rgba (242, 248, 247, 1 )',
        greenNav: 'rgba(209, 231, 229, 1)'
      },
    },
  },
  plugins: [],
}
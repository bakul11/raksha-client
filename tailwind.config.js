/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      ssm: '350px',
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      xxl: '1440px',
    },
  },
  plugins: [],
}


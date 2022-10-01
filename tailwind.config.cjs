/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');

// module.exports = {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = konstaConfig({

  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'class' 'media' - default
  theme: {
    fontFamily: {
      ios: 'my-ios-font',
      material: 'my-material-font',
    },
    extend: {
      colors: {
        // auto generated colors
        primary: {
          light: '#ff864b',
          DEFAULT: '#ff6b22',
          dark: '#f85200',
        },
      
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
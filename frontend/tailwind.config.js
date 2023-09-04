/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'light-gray': '#f2f2f2',
      'slate-light-gray': '#fbfafa',
      'dark-gray': '#595858',
      'peach-dark': '#ffd9b3',
      'peach-light': '#ffe6cc',
      blue: '#d9edf7',
      'dark-blue': '#80dbf1',
      'extra-dark-blue': '#31708f',
      red: '#ff3333',
      yellow: '#f2d537',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};

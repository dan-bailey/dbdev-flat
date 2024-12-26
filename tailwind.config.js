/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html",],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      aspectRatio: {
        '16/9': [16, 9],
        '4/3': [4, 3],
      },
    },
    colors: {
      'gunmetal': '#19323C',
      'charcoal' : '#244856',
      'mintcream': '#F3F7F0',
      'mustardy': '#E09F3E',
      'battleship': '#74776B',
      'aquatic': '#1B9AAA',
      'violet': '#7F557D',
      'eggplant': '#673C4F',
    },
    fontFamily: {
      headline: ['Monda', 'Verdana', 'sans-serif'],
      code: ['Source Code Pro', 'Courier New', 'monospace'],
      body: ['Verdana', 'Arial', 'sans-serif'],
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}

      

      
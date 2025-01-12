/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js",],
  darkMode: 'media',
  theme: {
    extend: {
    },
    colors: {
      'brightblue': '#76E5FC',
      'butterscotch': '#EEA243',
      'ghostwhite': '#FFFAFF',
      'jet': '#303036',
      'tomato': '#C03221',
    },
    fontFamily: {
      headline: ['Monda', 'Verdana', 'sans-serif'],
      code: ['Source Code Pro', 'Courier New', 'monospace'],
      body: ['Verdana', 'Arial', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

      

      
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
          // Simple 8 row grid
         '100': 'repeat(100, minmax(0, 1fr))',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

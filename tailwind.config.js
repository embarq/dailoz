// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '2xl': '0.875rem'
      },
      boxShadow: {
        '2xl-primary': '-3px 7px 13px #F1F7FF',
        '2xl-blue': '20px 7px 13px #7DC8E7',
        '2xl-purple': '20px 7px 13px #7D88E7',
        '2xl-red': '20px 7px 13px #E77D7D',
        '2xl-green': '20px 7px 13px #81E89E',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))'
      },
      backgroundImage: {
        'tasks-summary-tile-blue': 'linear-gradient(46.12deg, #7DC8E7 0%, rgba(125, 200, 231, 0.69) 100%)',
        'tasks-summary-tile-red': 'linear-gradient(60.11deg, #E77D7D 0%, rgba(231, 125, 125, 0.71) 100%)',
        'tasks-summary-tile-purple': 'linear-gradient(60.75deg, #7D88E7 0%, rgba(125, 136, 231, 0.74) 100%)',
        'tasks-summary-tile-green': 'linear-gradient(46.12deg, #81E89E 0%, rgba(129, 232, 158, 0.35) 100%)',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

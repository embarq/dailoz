// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '3xl': '0.875rem'
      },
      boxShadow: {
        '2xl-primary': '-3px 7px 13px #F1F7FF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

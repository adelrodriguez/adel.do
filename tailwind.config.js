module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        display: 'CircularStd',
      },
      fontSize: {
        '7xl': '5rem',
      },
      minHeight: {
        '1/2-screen': '50vh',
      },
      minWidth: {
        64: '16rem',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
  },
  plugins: [],
};

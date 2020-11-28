module.exports = {
  theme: {
    purge: [
      './src/components/**/*.js',
      './src/pages/**/*.js',
      './public/index.html',
    ],
    extend: {
      colors: {
        'nc-green': '#f0f3ec',
        'nc-dark-green': '#505948'
      },
      spacing: {
        '48%': '48%',
        '31%': '31%',
        '40%': '40%',
        '60%': '60%',
        '18%': '18%',
        '23%': '23%',
      },
    },
  },
  variants: {},
  plugins: [],
}

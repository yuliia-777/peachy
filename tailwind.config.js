const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3.5rem',
        xl: '4.5rem',
        '2xl': '5.5rem',
      },
    },
    extend: {
      colors: {
        'base': '#242323',
        'primary_main_1': '#FFD11F',
        'secondary_bg_2': '#FDE0DC',
        'secondary_bg_3': '#FDF5F4',
      },
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};

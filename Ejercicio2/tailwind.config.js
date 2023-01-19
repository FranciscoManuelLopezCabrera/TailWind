module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        zooming: {
          "0%, 100%": {
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        "zooming-letra": "zooming 1s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

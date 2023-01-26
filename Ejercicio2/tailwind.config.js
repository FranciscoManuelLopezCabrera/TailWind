module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        moverTexto: {
          "0%, 25%": { transform: "translateX(0);" },
          "75%, 100%": { transform: "translateX(-100);"},
        },
      },
      animation: {
        "mover-letra": "moverTexto",
        "spin-slow":"spin 2s linear infinite"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

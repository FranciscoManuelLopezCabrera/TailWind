module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    extend: {
      animation: ["responsive", "hover", "group-hover"],
      fontSize: ["responsive", "hover", "group-hover"],
      transform: ["responsive", "hover", "group-hover"],
      scale: ["responsive", "hover", "group-hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        "naranja":"#ff8000",
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#00538c",
        "azul-medio": "#0370b9",
        "gris-claro": "#F4F7FE",
      },
      keyframes: {
        rotateGear: {
        },
      },     
    },
  },
};

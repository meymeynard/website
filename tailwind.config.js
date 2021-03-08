// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      blue: colors.blue,
    },
  },
};

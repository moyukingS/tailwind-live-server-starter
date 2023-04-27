module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require('tailwind-scrollbar'),
  ],
};

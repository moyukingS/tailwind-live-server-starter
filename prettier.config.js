module.exports = {
  printWidth: 120,
  tabWidth: 2,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "ignore",
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};

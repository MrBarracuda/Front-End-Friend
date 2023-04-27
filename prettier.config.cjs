/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  cssOrder: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
  plugins: ['prettier-plugin-css-order'],
};

// module.exports = {
//   singleQuote: true,
//   printWidth: 100,
//   trailingComma: "all",
//   plugins: ['prettier-plugin-css-order'],

//   // optional sorting rules
//   cssOrder: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
// };

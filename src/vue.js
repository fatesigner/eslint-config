/**
 * Eslint for vue file and typescript
 */

const eslint = require('./js');
const tslint = require('./ts');

module.exports = {
  files: ['**/*.vue'],
  env: eslint.env,
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  globals: eslint.globals,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ...eslint.parserOptions,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...eslint.rules,
    ...tslint.rules
  }
};

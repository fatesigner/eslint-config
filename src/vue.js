/**
 * Eslint for vue file and typescript
 */

const eslint = require('./js');
const tslint = require('./ts');

module.exports = {
  files: ['**/*.vue'],
  env: eslint.env,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: eslint.globals,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaVersion: 12,
    ecmaFeatures: {
      decoratorsBeforeExport: true,
      experimentalObjectRestSpread: true,
      globalReturn: false,
      legacy: true,
      legacyDecorators: true,
      jsx: true,
      modules: true
    },
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    ...eslint.rules,
    ...tslint.rules
  }
};

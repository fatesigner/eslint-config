/**
 * eslint
 * for vue file and typescript
 */

const eslint = require('./');
const tslint = require('./ts');

module.exports = {
  files: ['**/*.vue'],
  env: eslint.env,
  extends: [],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2019,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: tslint.rules
};

/**
 * eslint
 * for vue file and javascript
 */

const eslint = require('./');

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
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': ['error']
  }
};

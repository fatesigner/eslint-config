/**
 * Eslint for ts、tsx file
 */

const eslint = require('./js');

module.exports = {
  files: ['**/*.ts', '**/*.tsx'],
  env: eslint.env,
  extends: ['standard', 'prettier'],
  plugins: ['prettier', 'promise', '@typescript-eslint'],
  globals: eslint.globals,
  parser: '@typescript-eslint/parser',
  parserOptions: eslint.parserOptions,
  rules: {
    ...eslint.rules,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-var': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }]
  }
};

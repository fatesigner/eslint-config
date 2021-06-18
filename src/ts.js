/**
 * Eslint for ts、tsx file
 */

module.exports = {
  files: ['**/*.ts', '**/*.tsx'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
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
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true
      }
    ],
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
    '@typescript-eslint/no-this-alias': 'off',
    'no-unused-vars': 'warn',
    'no-var': 'warn',
    'no-empty': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }]
  }
};

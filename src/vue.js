/**
 * Eslint for vue file and typescript
 */

const eslint = require('./js');
const tslint = require('./ts');

module.exports = {
  files: ['**/*.vue'],
  env: eslint.env,
  extends: ['standard', 'plugin:vue/vue3-essential'],
  plugins: ['vue'],
  globals: eslint.globals,
  parser: 'vue-eslint-parser',
  parserOptions: Object.assign({}, eslint.parserOptions, {
    vueFeatures: {
      filter: false
    },
    parser: {
      // Script parser for `<script>`
      js: eslint.parser,
      jsx: eslint.parser,
      // Script parser for `<script lang="ts">`
      ts: tslint.parser,
      tsx: tslint.parser,
      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      '<template>': 'espree'
    }
  }),
  rules: {
    ...eslint.rules,
    ...tslint.rules
  }
};

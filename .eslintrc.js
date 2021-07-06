// javascript
const eslint = require('./src/js');

// typescript
const tslint = require('./src/ts');

// vue
const vuelint = require('./src/vue');

module.exports = {
  root: true,
  overrides: [eslint, tslint, vuelint]
};

const eslint = require('./src/js');
const tslint = require('./src/ts');
const vuelint = require('./src/vue');

module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  overrides: [eslint, tslint, vuelint]
};

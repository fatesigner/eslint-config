﻿# eslint-config

[![build][travis-image]][travis-url]
[![commitizen][commitizen-image]][commitizen-url]
[![download][download-image]][download-url]
[![npm][npm-image]][npm-url]
[![semantic][semantic-image]][semantic-url]
             
[npm-image]: https://img.shields.io/npm/v/@fatesigner/eslint-config.svg?color=blue&logo=npm
[npm-url]: https://npmjs.org/package/fatesigner/eslint-config
[travis-image]: https://travis-ci.com/fatesigner/eslint-config.svg?color=green&token=i21P7stb8bZPNjZakvsi&branch=master
[travis-url]: https://travis-ci.com/fatesigner/eslint-config
[download-image]: https://img.shields.io/npm/dw/@fatesigner/eslint-config.svg?color=yellowgreen
[download-url]: https://npmjs.org/package/fatesigner/eslint-config
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-green.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-url]: https://opensource.org/licenses/MIT

eslint插件配置，包含js、ts、vue通用规则

**基于 [eslint-config-standard](https://github.com/standard/eslint-config-standard).**

## Install
```bash
npm i @fatesigner/eslint-config -D
```

## 使用
添加以下代码到 `.eslintrc.js`
```javascript
module.exports = {
  "extends": "@fatesigner/eslint-config"
}
```

## 添加对ts和vue文件的规则支持
添加以下代码到 `.eslintrc.js`
```javascript
const tslint = require('@fatesigner/eslint-config/ts');
const vuelint = require('@fatesigner/eslint-config/vue');

module.exports = {
  "extends": "@fatesigner/eslint-config",
  "overrides": [
    tslint,
    vuelint
  ]
}
```

﻿/**
 * Eslint for js
 */

module.exports = {
  files: ['**/*.js', '**/*.jsx'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  // 扩展配置文件
  extends: ['standard', 'prettier', 'plugin:promise/recommended'],
  plugins: ['prettier', 'promise'],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  // 指定解析器，默认 Espree
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: false,
    allowReserved: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    },
    // 指定 ECMAScript 版本，默认 5
    ecmaVersion: 2020,
    // 指定使用的额外的语言特性，所有选项默认 false
    ecmaFeatures: {
      decoratorsBeforeExport: true,
      experimentalObjectRestSpread: true,
      // 当 parserOptions.ecmaVersion >= 5 时，是否启用全局 strict mode（严格模式）
      impliedStrict: true,
      // 是否允许在全局作用域下使用 return 语句，默认 false
      globalReturn: false,
      // 启用 JSX
      jsx: true,
      legacy: true,
      legacyDecorators: true,
      modules: true
    },
    requireConfigFile: false,
    // 指定源码类型是 script (默认) 还是 module 类型（允许使用 imports）
    sourceType: 'module'
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
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // 在命名变量时，样式指南通常属于两个阵营之一：camelcase（variableName）和underscores（variable_name）。
    // 此规则侧重于使用camelcase方法。如果您的样式指南要求camelCasing您的变量名称，那么此规则适合您！
    camelcase: 'off',
    // 要求或禁止使用尾随逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    // 要求 === 和 ！==
    eqeqeq: 'off',
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    // getter 必须有返回值，并且禁止返回空，比如 return;
    'getter-return': [
      'error',
      {
        allowImplicit: false
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // 强制执行回调错误处理
    'handle-callback-err': 'off',
    // 强制执行一致的缩进（缩进）
    // indent: ['error', 2, { SwitchCase: 1 }],
    indent: 'off',
    'no-tabs': 'off',
    quotes: 'off',
    // quotes: ['error', 'single', { avoidEscape: true }],
    // 对象字面量中的属性名是否强制双引号
    'quote-props': 'off',
    // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
    // @off 要求太严格了，有时需要在循环中写 await
    'no-await-in-loop': 'off',
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 在条件语句中禁止赋值运算符，除非这个赋值运算被括号包起来了
    'no-cond-assign': ['error', 'except-parens'],
    // 禁止使用 console
    // @off console 的使用很常见
    'no-console': 'off',
    'no-unused-expressions': 'off',
    // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
    // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
    'no-control-regex': 'error',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止出现多个空格
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],
    // 禁止 new 对象（非新）
    'no-new': 'off',
    // 禁止 new Function（非新）
    'no-new-func': 'off',
    // 禁止未声明的变量
    'no-undef': 'off',
    // 禁止不必要的转义用法
    'no-useless-escape': 'off',
    'no-useless-constructor': 'off',
    // 禁止多余的 return 语句
    'no-useless-return': 'off',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'off',
    // 禁止在导入中使用Webpack加载器语法
    'import/no-webpack-loader-syntax': 'off',
    // 要求import导入排序
    // 'sort-imports': 1,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    // 要求对象键进行排序
    // 'sort-keys': 'off',
    // 在数组括号内强制实现一致的间距
    'standard/array-bracket-even-spacing': 'off',
    // callback(true)或callback(false)在ES6里是不被允许的
    'standard/no-callback-literal': 'off',
    'multiline-ternary': 'off',
    'no-var': 'warn',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': [
      'warn',
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'all'
      }
    ],
    // 语句强制分号结尾
    semi: ['error', 'always'],
    // 格式化函数时，函数名称或function关键字与开头表达式之间允许有空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ],
    // 在块之前需要或不允许空间（空格 - 块之前）
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],
    // 要求块语句以空行开头和结尾
    'padded-blocks': 'off',
    // 空行最多不能超过 100 行
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 100
      }
    ],
    // 关闭禁止混用 tab 和空格
    'no-mixed-spaces-and-tabs': 'off'
  }
};

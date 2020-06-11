module.exports = {
  '**/*.{js,jsx}': ['eslint --fix --cache --quiet', 'prettier --write --ignore-path .eslintignore']
};

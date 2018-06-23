const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
      jest: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  extends: 'airbnb',
};

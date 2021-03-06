module.exports = {
  'plugins': [
    'react',
  ],
  'env': {
    'node': true,
    'browser': true,
    'es6': true,
    'jest' : true
  },
  'extends': [
    "eslint:recommended",
    'plugin:react/recommended',
    "airbnb"
  ],
  'parser': 'babel-eslint',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  "rules": {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
  },
  "ignorePatterns": [
    "env.js",
    "modules.js",
    "start.js",
    "test.js",
    "build.js",
    "webpackDevServer.config.js",
    "serviceWorker.js",
    "webpack.config.js",
    "paths.js",
    "UnityProgress.js",
    "UnityLoader.js"],
};

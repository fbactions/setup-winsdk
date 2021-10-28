module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['@fbluemle', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  ignorePatterns: ['dist/'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
};

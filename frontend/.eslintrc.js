module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint'],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
  },
}

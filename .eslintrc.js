module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/base', 'plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended', 'eslint:recommended', 'standard', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parser: 'vue-eslint-parser',
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint']
};
const { mergeConfig } = require('vite');
const { quasar } = require('@quasar/vite-plugin');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  staticDirs: [{ from: '../src/core/assets/icons', to: '/assets' }],
  // eslint-disable-next-line require-await
  async viteFinal(config, { _configType }) {
    return mergeConfig(config, {
      plugins: [
        quasar({
          sassVariables: '../src/core/assets/styles/quasar.variables.sass'
        })
      ]
    });
  }
}
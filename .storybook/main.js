module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-docs'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}

import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts)'],

  addons: ['@storybook/addon-docs'],

  framework: '@storybook/web-components-vite',
};

export default config;

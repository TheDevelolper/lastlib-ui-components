import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/web-components-vite',

  async viteFinal(config) {
    config.build ??= {};
    config.build.outDir = 'dist-storybook-vite';

    return config;
  },
};

export default config;

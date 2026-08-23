import type { Preview } from '@storybook/web-components-vite';
import '../src/global/tailwind.generated.css';

import { defineCustomElements } from '../loader/index.js';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

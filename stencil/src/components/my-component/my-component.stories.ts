import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/My Component',
  component: 'my-component',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html` <my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component> `,
};

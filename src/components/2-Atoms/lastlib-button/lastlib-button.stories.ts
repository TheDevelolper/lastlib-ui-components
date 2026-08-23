import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Atoms/Button',
  component: 'lastlib-button',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => html` <lastlib-button>Button</lastlib-button> `,
};

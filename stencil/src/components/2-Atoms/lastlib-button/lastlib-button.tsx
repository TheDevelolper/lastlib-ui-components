import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lastlib-button',
  styleUrl: 'lastlib-button.css',
  shadow: false,
})
export class LastlibButton {
  render() {
    return (
      <Host>
        <button
          type="button"
          class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}

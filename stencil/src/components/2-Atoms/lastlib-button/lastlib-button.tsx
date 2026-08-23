import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lastlib-button',
  styleUrl: 'lastlib-button.css',
  shadow: true,
})
export class LastlibButton {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}

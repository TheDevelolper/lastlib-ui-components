import { newSpecPage } from '@stencil/core/testing';
import { LastlibButton } from '../lastlib-button';

describe('lastlib-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LastlibButton],
      html: `<lastlib-button></lastlib-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lastlib-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lastlib-button>
    `);
  });
});

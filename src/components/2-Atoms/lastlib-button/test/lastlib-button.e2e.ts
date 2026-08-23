import { newE2EPage } from '@stencil/core/testing';

describe('lastlib-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lastlib-button></lastlib-button>');

    const element = await page.find('lastlib-button');
    expect(element).toHaveClass('hydrated');
  });
});

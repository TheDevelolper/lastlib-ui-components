import type { Components, JSX } from "../dist/types/components";

interface LastlibButton extends Components.LastlibButton, HTMLElement {}
export const LastlibButton: {
    prototype: LastlibButton;
    new (): LastlibButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

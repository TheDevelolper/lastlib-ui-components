import { p as proxyCustomElement, H, h, d as Host, t as transformTag } from './index2.js';

const lastlibButtonCss = () => `:host{display:block}`;

const LastlibButton$1 = /*@__PURE__*/ proxyCustomElement(class LastlibButton extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: '6a6772a4eca6dd17f7f124b9034996e596195b10' }, h("button", { key: '577db39710a71b8179e27457fab8a5dd5fd6ad2a', type: "button", class: "text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" }, h("slot", { key: '5a221055e853675e8a0d713b4a8a31dc78fbe6fe' }))));
    }
    static get style() { return lastlibButtonCss(); }
}, [260, "lastlib-button"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["lastlib-button"];
    components.forEach(tagName => { switch (tagName) {
        case "lastlib-button":
            if (!customElements.get(transformTag(tagName))) {
                customElements.define(transformTag(tagName), LastlibButton$1);
            }
            break;
    } });
}
defineCustomElement$1(LastlibButton$1);

const LastlibButton = LastlibButton$1;
const defineCustomElement = defineCustomElement$1;

export { LastlibButton, defineCustomElement };
//# sourceMappingURL=lastlib-button.js.map

//# sourceMappingURL=lastlib-button.js.map
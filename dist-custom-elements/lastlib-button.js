import { p as proxyCustomElement, H, h, d as Host, t as transformTag } from './index2.js';

const lastlibButtonCss = () => `:host{display:block}`;

const LastlibButton$1 = /*@__PURE__*/ proxyCustomElement(class LastlibButton extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '166e997f3220e56357ea60b5be069e2445035b3a' }, h("button", { key: '8fadd3fa78cda9b252250ee6a3cf9fb2ae46781d' }, h("slot", { key: '7a862ff7b2ee79e8c227ba687ff866527506e76c' }))));
    }
    static get style() { return lastlibButtonCss(); }
}, [257, "lastlib-button"]);
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
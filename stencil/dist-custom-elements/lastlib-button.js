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
        return (h(Host, { key: '9fcc01fb5a376d0ca5669eb710f86a5c4a7dc1bc' }, h("button", { key: 'b90f64c796c4ac21b0720e03db3b889a4bc510fc' }, h("slot", { key: 'd8b2612859812ad6ccfe19a055b51d41236bb317' }))));
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
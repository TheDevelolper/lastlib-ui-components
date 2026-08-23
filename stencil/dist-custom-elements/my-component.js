import { p as proxyCustomElement, H, h, t as transformTag } from './index2.js';
import { f as format } from './utils.js';

const myComponentCss = () => `:host{display:block}`;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '8922bcc5693180fdcb6c15d0e1fe038e4c21deb8' }, "Hello, World! I'm ", this.getText());
    }
    static get style() { return myComponentCss(); }
}, [513, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(transformTag(tagName))) {
                customElements.define(transformTag(tagName), MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1(MyComponent$1);

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
//# sourceMappingURL=my-component.js.map

//# sourceMappingURL=my-component.js.map
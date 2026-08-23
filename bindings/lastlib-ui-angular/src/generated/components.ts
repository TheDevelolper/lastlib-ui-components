/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from "@angular/core";

import { ProxyCmp } from "./angular-component-lib/utils";

import { defineCustomElement as defineLastlibButton } from "../../../../stencil/dist-custom-elements/lastlib-button";
import { Components } from "../../../../stencil/dist/types/components";
@ProxyCmp({
  defineCustomElementFn: defineLastlibButton,
})
@Component({
  selector: "lastlib-button",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<ng-content></ng-content>",
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class LastlibButton {
  protected el: HTMLLastlibButtonElement;
  constructor(
    c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone,
  ) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface LastlibButton extends Components.LastlibButton {}

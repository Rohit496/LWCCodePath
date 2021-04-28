/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 26-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   26-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class CssShadowDom extends LightningElement {
  isLoaded = false;
  renderedCallback() {
    if (this.isLoaded) return;
    const style = document.createElement("style");
    style.innerText = `c-css-shadow-dom .slds-button{
            background: red;
            color: white;
        } `;
    this.template.querySelector("lightning-button").appendChild(style);
    this.isLoaded = true;
    console.log("🚀 ~ this.isLoaded", this.isLoaded);
  }
}

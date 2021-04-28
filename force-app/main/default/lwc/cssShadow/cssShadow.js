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

export default class CssShadow extends LightningElement {
  idLoaded = false;
  renderedCallback() {
    if (this.isLoaded) return;
    alert(1);
    const styles = document.createElement("style");
    styles.innerText = `c-css-shadow .slds-button{
             background-color: red;
             color: white;
        }`;
    this.template.querySelector("lightning-button").appendChild(styles);
    return true;
  }
}

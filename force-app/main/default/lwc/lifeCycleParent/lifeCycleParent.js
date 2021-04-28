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

export default class LifeCycleParent extends LightningElement {
  constructor() {
    super();
    console.log("Parent Constructor called");
  }
  connectedCallback() {
    console.log("Parent Connected Callback called");
  }
  renderedCallback() {
    console.log("Parent Rendered Callback called");
  }

  errorCallback(error, stack) {
    console.log("🚀 ~ stack", stack);
    console.log("🚀 ~ error", error.message);
  }

  name;
  handlerChange(event) {
    this.name = event.target.value;
  }

  isVisible = false;
  showChild(event) {
    this.isVisible = !this.isVisible;
  }
}

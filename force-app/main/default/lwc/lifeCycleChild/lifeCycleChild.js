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

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("Child Constructor called");
  }
  connectedCallback() {
    console.log("Child Connected Callback called");
    throw new Error("Child component is not connected");
  }
  renderedCallback() {
    console.log("Child Rendered Callback called");
  }
  disconnectedCallback() {
    console.log("Child Disconnected Callback called");
  }
}

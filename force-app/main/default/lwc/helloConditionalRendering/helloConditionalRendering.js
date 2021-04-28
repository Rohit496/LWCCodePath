/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 21-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   21-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class HelloConditionalRendering extends LightningElement {
  isVisible = false;
  name;

  handleClick(event) {
    this.isVisible = true;
  }

  toggleHandler(event) {
    this.isVisible = !this.isVisible;
  }

  dataHandler(event) {
    this.name = event.target.value;
  }

  get dataChnage() {
    return this.name === "papa";
  }
}

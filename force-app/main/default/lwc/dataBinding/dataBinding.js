/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 28-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   28-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class DataBinding extends LightningElement {
  message = "Rohit Kumar";

  handler(event) {
    this.message = event.target.value;
  }

  handleClick(event) {
    this.message = "Rohit Bhadana";
  }
}

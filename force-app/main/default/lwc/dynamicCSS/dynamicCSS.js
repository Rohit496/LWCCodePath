/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 25-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   25-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class DynamicCSS extends LightningElement {
  percent = 10;
  dynamicCss(event) {
    this.percent = event.target.value;
  }

  get percentage() {
    return `width:${this.percent}%`;
  }
}

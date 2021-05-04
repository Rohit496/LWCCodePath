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

export default class CalculatorDemo extends LightningElement {
  no1;
  no2;
  result;

  firstNum(event) {
    this.no1 = event.target.value;
  }
  secondNum(event) {
    this.no2 = event.target.value;
  }
  handleClick(event) {
    this.result = parseInt(this.no1) + parseInt(this.no2);
  }

  handleClear() {
    this.no1 = null;
    this.no2 = null;
    this.result = null;
  }
}

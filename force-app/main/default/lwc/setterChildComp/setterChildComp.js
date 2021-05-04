/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 04-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   04-05-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, api } from "lwc";

export default class SetterChildComp extends LightningElement {
  message;
  @api
  get detail() {
    return this.message;
  }

  set detail(data) {
    let myAge = data.age * 2;
    this.message = { ...data, age: myAge, location: "London" };
  }
}

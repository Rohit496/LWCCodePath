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
import { LightningElement } from "lwc";

export default class GetterDemoComp extends LightningElement {
  num1 = 10;
  num2 = 20;

  get sum() {
    return this.num1 + this.num2;
  }

  userList = ["Amit", "Sumit", "Dinesh"];

  get getUser() {
    return this.userList[0];
  }

  firstName = "Rohit";
  lastName = "Kumar";

  get fullName() {
    return `The firstname: ${this.firstName} and lastname: ${
      this.lastName
    } and fullName ${this.firstName + " " + this.lastName}`;
  }
}

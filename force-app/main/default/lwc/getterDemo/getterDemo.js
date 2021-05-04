/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 30-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   30-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, api, track } from "lwc";

export default class GetterDemo extends LightningElement {
  num1 = 10;
  num2 = 20;

  users = ["Amit", "Sumit", "Ajay"];

  get myAdditions() {
    return this.num1 + this.num2;
  }

  get getUsers() {
    return this.users[0];
  }
  @api objectApiName;
  @api recordId;
  @track currenObjectName;
  @track currenRecordId;

  connectedCallback() {
    this.currenRecordId = this.recordId;
    this.currenObjectName = this.objectApiName;
  }
}

/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 03-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   03-05-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, api } from "lwc";

export default class MyAlertComponent extends LightningElement {
  // primitive data types
  @api message;
  @api isVisible;
  @api salary;

  // array
  @api userList;

  // object
  @api empData;

  // Array of objects
  @api carsoulData;

  @api val;

  @api slideVal;

  @api defaultValue() {
    this.slideVal = 50;
  }
}

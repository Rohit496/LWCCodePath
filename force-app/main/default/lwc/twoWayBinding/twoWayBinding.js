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

export default class TwoWayBinding extends LightningElement {
  message = "Hello Two Way Binding";

  handlerChange(event) {
    this.message = event.target.value;
  }
}

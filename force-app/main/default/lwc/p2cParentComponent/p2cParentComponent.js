/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 27-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   27-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class P2cParentComponent extends LightningElement {
  greeting = "This is Rohit From Parent Component";

  greetingMessage(event) {
    this.greeting = event.target.value;
  }
}

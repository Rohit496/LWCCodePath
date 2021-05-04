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
import pubsub from "c/pubsub";

export default class PubsubComponentA extends LightningElement {
  message;
  inputHandler(event) {
    this.message = event.target.value;
  }

  publishHandler() {
    pubsub.publish("componentA", this.message);
  }
}

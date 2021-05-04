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
import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { messageContext, publish } from "lightning/messageService";

export default class LmsComponentA extends LightningElement {
  @wire(messageContext) context;

  inputValue;

  getMessage(event) {
    this.inputValue = event.target.value;
  }

  handleClick() {
    const message = {
      lmsData: {
        value: this.inputValue
      }
    };
    publish(this.context, SAMPLEMC, message);
  }
}

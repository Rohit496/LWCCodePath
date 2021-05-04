/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 02-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   02-05-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, api } from "lwc";

export default class SliderComp extends LightningElement {
  @api val = 10;

  slideHandler(event) {
    this.val = event.target.value;
  }

  @api resetSlider() {
    this.val = 50;
  }
}

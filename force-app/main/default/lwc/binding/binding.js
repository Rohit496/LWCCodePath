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

export default class Binding extends LightningElement {
  name;
  handlerName(event) {
    this.name = event.target.value;
  }
}

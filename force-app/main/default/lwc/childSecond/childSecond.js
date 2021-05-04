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
import { api, LightningElement } from "lwc";

export default class ChildSecond extends LightningElement {
  @api message;
  @api myGreeting;
  @api myNumber;
  @api isVisible;
}

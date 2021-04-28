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
import { LightningElement, api } from "lwc";

export default class NonReactiveChild extends LightningElement {
  @api message;
  @api userName;
  @api isVisible;
  @api title;
  @api full_Name;
}

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
import { api, LightningElement } from "lwc";

export default class ChildComp extends LightningElement {
  @api message;
  @api userName;
  @api salary;
  @api isVisible;
}

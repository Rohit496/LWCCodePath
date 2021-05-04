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
import { LightningElement, api } from "lwc";

export default class YourCommonComp extends LightningElement {
  @api
  message;
  @api
  isVisible;
  @api
  salary;
  @api
  userList;
  @api
  empObj;
  @api
  carsoulData;
  @api
  val;

  @api resetSlider() {
    this.val = 50;
  }
}

/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 01-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   01-05-2021   Rohit Kumar   Initial Version
 **/
import { api, LightningElement } from "lwc";

export default class AlertComp extends LightningElement {
  @api message;
  @api isVisible;
  @api salary;

  @api userList;

  @api myDetail;
}

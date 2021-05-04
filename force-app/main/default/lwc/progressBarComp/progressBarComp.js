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
import { api, LightningElement } from "lwc";

export default class ProgressBarComp extends LightningElement {
  @api percentageValue;
}

/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 03-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   03-05-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  isShow = false;

  handleClick() {
    this.isShow = true;
  }
  closeModal() {
    this.isShow = false;
  }
}

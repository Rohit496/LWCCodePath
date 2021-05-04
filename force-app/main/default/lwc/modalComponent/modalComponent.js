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
import { LightningElement } from "lwc";

export default class ModalComponent extends LightningElement {
  closeHandler() {
    const myEvent = new CustomEvent("close", {
      detail: {
        msg: "Modal Closed Successfully!!"
      }
    });
    this.dispatchEvent(myEvent);
  }
}

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

export default class SetterParentComp extends LightningElement {
  userDetails = {
    id: 100,
    name: "Rohit",
    age: 28
  };
}

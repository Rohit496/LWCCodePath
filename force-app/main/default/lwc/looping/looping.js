/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 22-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   22-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, track } from "lwc";

export default class Looping extends LightningElement {
  userList = ["Rohit", "Deepak", "Sumit"];

  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar"
    },
    {
      id: 2,
      company: "Microsoft",
      name: "Bill Gates"
    },
    {
      id: 3,
      company: "Facebook",
      name: "Mark"
    }
  ];
}

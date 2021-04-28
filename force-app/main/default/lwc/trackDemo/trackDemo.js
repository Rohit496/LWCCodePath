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
import { LightningElement, track } from "lwc";

export default class TrackDemo extends LightningElement {
  greeting;

  @track
  address = ["Meerut", "Delhi"];
  // @track
  // address = {
  //     name: 'Meerut',
  //     age: 30
  // }

  employee = [
    { id: 1, name: "Rohit", age: 30 },
    { id: 2, name: "Sumit", age: 20 }
  ];

  myBinding(event) {
    //this.address.name = event.target.value;
    this.address[0] = event.target.value;
  }
}

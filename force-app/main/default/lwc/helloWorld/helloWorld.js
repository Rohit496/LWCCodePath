/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 21-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   21-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  //! Data Binding example
  fullName = "Rohit Kumar";
  title = "salesforce developer";

  //! Track binding example
  //@track
  address = {
    name: "Meerut",
    pincode: 3253454,
    city: "Delhi"
  };

  textHandler(event) {
    this.title = event.target.value;
    console.log("🚀 ~ this.title", this.title);
  }

  cityHandler(event) {
    // this.address.city = event.target.value;
    this.address = { ...this.address, city: event.target.value };
  }

  //! Getter example

  myArr = ["Aman", "Suman", "Rohit"];

  get myData() {
    return this.myArr[0].toUpperCase();
  }

  num1 = 10;
  num2 = 20;

  get myAdditions() {
    return this.num1 + this.num2;
  }

  firstName = "Rohit";
  lastName = "Kumar";
  get myFullNames() {
    return this.firstName + this.lastName;
  }
}

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
import { LightningElement } from "lwc";

export default class AccessingElement extends LightningElement {
  userList = ["Amit", "Sumit", "Ankit", "Ajay"];

  handleClick() {
    const element = this.template.querySelector("h1");
    console.log("🚀 ~ element", element.innerText);
    element.style.cssText = "color:white;background-color:red";
    const ele = this.template.querySelectorAll(".name");
    Array.from(ele).forEach((element) => {
      console.log(element.innerText);
      element.setAttribute("title", element.innerText);
    });
  }
}

/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 23-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   23-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  userDetails = ["Rohit", "Mohit", "Sumit", "Amit"];

  handleClick() {
    const data = this.template.querySelector("h1");
    console.log("🚀 ~ data", data.innerHTML);
    data.style.cssText =
      "color:white;border:2px solid black;background-color:blue";

    const data1 = this.template.querySelectorAll(".head");
    Array.from(data1).forEach((element) => {
      console.log(element.innerHTML);
      element.setAttribute("title", element.innerHTML);
    });
  }
}

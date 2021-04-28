/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 26-04-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   26-04-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import renderTemplate from "./renderMethod.html";
export default class RenderMethod extends LightningElement {
  selectedBtn = "";
  render() {
    return this.selectedBtn === "Signup"
      ? signupTemplate
      : this.selectedBtn === "Signin"
      ? signinTemplate
      : renderTemplate;
  }

  handleClick(event) {
    this.selectedBtn = event.target.label;
  }
  submitHandler(event) {
    console.log(`${event.target.label} Successfully!!`);
  }
}

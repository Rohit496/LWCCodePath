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

export default class MyParentComponent extends LightningElement {
  userDetail = ["Amit", "Sumit", "Vishal"];

  empDetails = {
    id: 101,
    name: "Sumit",
    salary: 5346456
  };

  myData = [
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header: "First Card",
      description: "First card description."
    },
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header: "Second Card",
      description: "Second card description."
    },
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header: "Third Card",
      description: "Third card description."
    }
  ];

  percentage = 20;

  changeHandler(event) {
    this.percentage = event.target.value;
  }

  handleClick() {
    this.template.querySelector("c-my-alert-component").defaultValue();
  }
}

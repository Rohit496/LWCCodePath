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
import { LightningElement, track } from "lwc";

export default class YourParentComp extends LightningElement {
  yourMessage = "I am from parent-1";
  msg;
  userData = ["Amit", "Rohit", "Vishal"];

  employeeDetails = {
    id: 100,
    name: "Sumit",
    sal: 2234
  };

  yourData = [
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

  progressVal = 20;
  progressHandler(event) {
    this.progressVal = event.target.value;
  }

  @track
  myVal;

  handleClick() {
    this.template.querySelector("c-your-common-comp").resetSlider();
    this.myVal = this.template.querySelector("c-your-common-comp").val;
    console.log("🚀 ~ sos", sos);
  }

  isShow = false;

  openModal() {
    this.isShow = true;
  }

  showModal = false;
  msg;
  clickHandler() {
    this.showModal = true;
  }
  closeHandler(event) {
    this.msg = event.detail.msg;
    this.showModal = false;
  }
}

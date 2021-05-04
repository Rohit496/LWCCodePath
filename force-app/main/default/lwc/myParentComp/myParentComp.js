/**
 * @description       :
 * @author            : Rohit Kumar
 * @group             :
 * @last modified on  : 02-05-2021
 * @last modified by  : Rohit Kumar
 * Modifications Log
 * Ver   Date         Author        Modification
 * 1.0   01-05-2021   Rohit Kumar   Initial Version
 **/
import { LightningElement } from "lwc";

export default class MyParentComp extends LightningElement {
  childData = "This is parent component";
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

  myPercents = 10;
  dataHandler(event) {
    this.myPercents = event.target.value;
  }

  handleClick() {
    this.template.querySelector("c-slider-comp").resetSlider();
  }
}

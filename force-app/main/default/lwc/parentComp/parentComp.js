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

export default class ParentComp extends LightningElement {
  userList = ["Amit", "Sumit", "Rohit"];

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
}

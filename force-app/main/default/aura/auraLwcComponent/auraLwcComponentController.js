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
({
  handler: function (component, event, helper) {
    alert(1);
    var evt = event.getParam("msg");
    component.set("v.message", evt);
  }
});

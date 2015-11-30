/*global Actor*/
/*global moment*/

const SORT_NAME = "sortName";
Session.setDefault(SORT_NAME, "id");

const ORDER_TYPE = "orderType";
Session.setDefault(ORDER_TYPE, 1);

Template.listsShow.onRendered(function() {
  console.log("listsShow onRenderd"); 
});

Template.listsShow.helpers({
  actors: function() {
    return Actor.find({});
  },
  sortName: function() {
    return Session.get(SORT_NAME);
  },
  orderType: function() {
    return Session.get(ORDER_TYPE);
  }
});

Template.listsShow.events({

});

Template.registerHelper("formatDate", function(date) {
  return moment(date).format("YYYY-MM-DD");
});
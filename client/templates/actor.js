/*global Actor*/
Template.actor.onRendered(function() {
  console.log("actor rendered");
});

Template.actor.helpers({
  
});

Template.actor.events({
  "click .glyphicon-search": function(event) {
    console.log("search");
    console.log(event);
    console.log(this);
  },
  "click .glyphicon-trash": function(event) {
    console.log("trash");
    console.log(this);
    Actor.remove(this._id);
  }
});
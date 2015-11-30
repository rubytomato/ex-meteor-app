Meteor.startup(function () {
  console.log("client startup");
  
});

Template.appBody.onRendered(function() {
  console.log("app-body rendered");
});

Template.appBody.helpers({
});

Template.appBody.events({
});
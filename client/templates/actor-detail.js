/*global Router*/
Template.detailShow.onRendered(function() {
  console.log("detailShow onRenderd"); 
});

Template.detailShow.events({
  "click .back": function() {
    console.log("back");
    Router.go("listsShow");
  }
});

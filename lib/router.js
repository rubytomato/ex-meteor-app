/*global Router*/
/*global Actor*/
Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: "appBody",

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: "appNotFound",

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: "appLoading",

});

Router.route("listsShow", {
  path: "/lists",
  template: "listsShow",
  onBeforeAction: function() {
    console.log("list");
    this.next();
  },
  action: function() {
    this.render();
  }
});

Router.route("detailShow", {
  path: "/detail/:_id",
  template: "detailShow",
  onBeforeAction: function() {
    console.log("detail");
    this.next();
  },
  data: function() {
    return Actor.findOne(this.params._id);
  },
  action: function() {
    this.render();
  }
});

Router.route("home", {
  path: "/",
  template: "listsShow",
  action: function() {
    this.render();
  }
});

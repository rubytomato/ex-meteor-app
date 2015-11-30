/*global Actor*/
Meteor.startup(function () {
  console.log("server startup");
  Actor.remove({}, function(error) {
    if (error) {
      console.log(error);
      return;
    }
    Assets.getText("actor.json", function(error, result) {
      if (error) {
        console.log(error);
        return;
      }
      let actors = JSON.parse(result);
      console.log(actors);
      console.log(actors.data.length);
      for (let actor of actors.data) {
        console.log(actor);
        Actor.insert(actor, function(error, id) {
          if (error) {
            console.log(error);
            return;
          }
          console.log(id);
        });
      }
    });
  });
});

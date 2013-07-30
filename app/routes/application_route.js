define(['ember'], function(Ember) {

  return Ember.Route.extend({
    model: function() {
      return [{name: 'Ryan'}, {name: 'Aaron'}];
    }
  });

});


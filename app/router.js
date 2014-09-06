import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FireTempleENV.locationType
});

Router.map(function() {
  this.route('widgets');
});

export default Router;

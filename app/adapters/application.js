import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  firebase: new window.Firebase('https://boiling-fire-930.firebaseio.com/')
});

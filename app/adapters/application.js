import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://boiling-fire-930.firebaseio.com/')
});

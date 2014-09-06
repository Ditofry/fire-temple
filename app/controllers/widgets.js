import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function() {
    this.set('widget', Ember.Object.create());
    this._super();
  },
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    createWidget: function() {
      var newWidget = this.store.createRecord('widget', {
        name: this.get('widget.name')
      });
      newWidget.save();
    }
  }
});

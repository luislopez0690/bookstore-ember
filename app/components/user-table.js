import Component from '@ember/component';

export default Component.extend({

  store: Ember.inject.service('store'),

  actions: {
    setSelection: function(selectedBook) {
      let record = this.get('store').peekRecord('book', selectedBook)
      this.get('model.user.books').addObject(record)
      console.log(this.get('model.user.books'))
    },
    addToUserLibrary: function(selected) {

      this.sendAction('addToUserLibrary', selected)
    }
  }
});
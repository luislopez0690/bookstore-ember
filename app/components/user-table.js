import Component from '@ember/component';

export default Component.extend({

  store: Ember.inject.service('store'),

  actions: {
    setSelection: function(selectedBook) {
      let book = this.get('store').peekRecord('book', selectedBook)
      let transaction = this.get('store').createRecord('transaction', {
        user: this.get('model.user'),
      })
      transaction.get('books').addObject(book)
      this.set('transaction', transaction);
    },
    addToUserLibrary: function() {
      let currentTransaction = this.get('transaction')
      this.sendAction('addToUserLibrary', currentTransaction)
    }
  }
});
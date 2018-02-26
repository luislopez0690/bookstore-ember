import Component from '@ember/component';

export default Component.extend({

  store: Ember.inject.service('store'),

  actions: {
    setSelection: function(selectedBook) {
      let book = this.get('store').peekRecord('book', selectedBook)
      let transaction = this.get('store').createRecord('transaction', {
        user: this.get('model.user'),
        book: this.set('book', book)
      })
      this.set('transaction', transaction);
    },
    addToUserLibrary: function() {
      let currentTransaction = this.get('transaction')
      this.sendAction('addToUserLibrary', currentTransaction)
    },
    deleteFromUserLibrary: function(book) {
      let currentTransaction = this.get('store').peekRecord('transaction', {
        user: this.get('model.user'),
        book: book
      })
      console.log(this.get('store').peekRecord('transaction', {
        user: this.get('model.user'),
        book: book
      }))
      this.sendAction('deleteFromUserLibrary', currentTransaction.deleteRecord());
    }
  }
});

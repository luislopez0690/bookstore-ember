import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    setModalBook: function(currentBook) {
      this.set('currentBook', currentBook);
      let transaction = this.get('store').createRecord('transaction', {
        user: this.get('user'),
        book: currentBook
      });
      this.set('transaction', transaction);
    },
    addToUserLibrary: function() {
      let currentTransaction = this.get('transaction')
      this.sendAction('addToUserLibrary', currentTransaction);
    },
    //currently under development
    deleteFromUserLibrary: function(book) {
      let currentTransaction = this.get('store').peekRecord('transaction', {
        user: this.get('model.user'),
        book: book
      });
      this.sendAction('deleteFromUserLibrary', currentTransaction.deleteRecord());
    }
    ///
  }
});
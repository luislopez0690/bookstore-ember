import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    setModalBook(currentBook) {
      this.set('currentBook', currentBook);
      const transaction = this.get('store').createRecord('transaction', {
        user: this.get('user'),
        book: currentBook
      });
      this.set('transaction', transaction);
    },
    addToUserLibrary() {
      const currentTransaction = this.get('transaction');
      this.sendAction('addToUserLibrary', currentTransaction);
    },
    //currently under development
    deleteFromUserLibrary(book) {
      const currentTransaction = this.get('store').peekRecord('transaction', {
        user: this.get('model.user'),
        book: book
      });
      this.sendAction('deleteFromUserLibrary', currentTransaction.deleteRecord());
    },
    filterBy(param) {
      let filterParam = this.get('filterParam');
      if (param !== '') {
        if (filterParam == "name") {
          return this.get('store')
            .query('book', { name: param }).then((results) => {
              return { query: param, results: results };
            });
        } else {
          return this.get('store')
            .query('book', { author: param }).then((results) => {
              return { query: param, results: results };
            });
        }
      } else {
        return this.get('store')
          .findAll('book').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
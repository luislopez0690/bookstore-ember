import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  filterValue: "name",

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
    nextPage() {
      this.sendAction('nextPage');
    },

    prevPage() {
      this.sendAction('prevPage');
    },
    filterBy(param) {
      console.log('current Model: ', this.model, param);
      console.log('current MetaData: ', this.model.meta);
      let filterParam = this.get('filterValue');
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
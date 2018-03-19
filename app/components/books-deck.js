import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  filterValue: "name",

  actions: {
    setModalBook(currentBook) {
      console.log('the book', currentBook.get('meta'))
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
      this.sendAction('filterBy', param);
    },
    handleFilterEntry(filterInputValue, filterAction) {
      this.sendAction('handleFilterEntry', filterInputValue, filterAction);
    },
    filterParam(filterProperty) {
      this.sendAction('filterParam', filterProperty);

    }
  }
});
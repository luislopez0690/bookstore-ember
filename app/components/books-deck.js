import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  filterValue: "Title",
  totalQuantity: 0,
  quantityDefault: 1,
  prevDisabled: computed('model.query.page', function() {
    return (this.get('model.query.page') - 1) < 0;
  }),
  nextDisabled: computed('metaData', function() {
    return (this.get('model.query.page') + 1) > (this.get('metaData.total-pages') - 1);
  }),
  currentPage: computed('model.query.page', function() {
    return (this.get('model.query.page') + 1);
  }),
  currentFilterValue: computed('model.query.filterValue', function() {
    if (this.get('model.query.filterValue') === "name") {
      return "Title";
    } else {
      return "Author";
    }
  }),

  actions: {
    setModalBook(currentBook) {
      this.set('currentBook', currentBook);
      const transaction = this.get('store').createRecord('transaction', {
        user: this.get('user'),
        book: currentBook,
        quantity: 1
      });
      this.set('transaction', transaction);
    },
    addToUserLibrary() {
      const currentTransaction = this.get('transaction');
      const totalQuantity = this.get('totalQuantity');
      if (totalQuantity !== 0) {
        currentTransaction.set('quantity', totalQuantity);
      }
      this.sendAction('addToUserLibrary', currentTransaction);
    },
    changePage(action) {
      console.log(action);
      this.sendAction('changePage', action);
    },
    filterBy(param) {
      this.sendAction('filterBy', param);
    },

    filterParam(filterProperty) {
      this.sendAction('filterParam', filterProperty);

    },
    setQuantity(amount) {
      this.set('quantityDefault', amount);
      this.set('totalQuantity', amount);
    }
  }
});
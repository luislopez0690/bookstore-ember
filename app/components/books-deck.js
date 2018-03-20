import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  filterValue: "Title",

  prevDisabled: computed('model.query.page', function() {
    return ((this.get('model.query.page') - 1) < 0);
  }),
  nextDisabled: computed('metaData', function() {
    return ((this.get('model.query.page') + 1) > (this.get('metaData.total-pages') - 1));
  }),
  currentPage: computed('model.query.page', function() {
    return (this.get('model.query.page') + 1);
  }),
  currentFilterValue: computed('model.query.filterValue', function() {
    if (this.get('model.query.filterValue') == "name") {
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

    filterParam(filterProperty) {
      this.sendAction('filterParam', filterProperty);

    }
  }
});
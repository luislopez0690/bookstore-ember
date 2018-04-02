import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({

  availableBooks: computed('book', function() {
    let totalTransactions = this.get('book.transactions.content.length');
    if (totalTransactions === 0) {
      return 10;
    } else {
      return (this.get('book.amount') - totalTransactions);
    }
  }),
  actions: {
    pickCurrentBook: function(book) {
      this.sendAction('pickCurrentBook', book);
    }
  }
});
///
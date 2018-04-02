import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  areIdsEqual: computed('currentTransaction', function() {
    let currentBookFromTransaction = this.get('currentTransaction.book_id');
    let currentBook = this.get('book.id');
    if (currentBookFromTransaction === currentBook) {
      return true;
    }
  }),
  showCorrectBook: computed('isBookShowing', 'choosedBook', function() {
    let isBookShowing = this.get('isBookShowing');
    let currentBook = this.get('book.id');
    let choosedBook = this.get('choosedBook');
    if (isBookShowing && choosedBook == currentBook) {
      return true;
    }
  }),
  actions: {
    showBook: function(bookId) {
      if (this.get('isBookShowing')) {
        this.set('choosedBook', '');
        this.set('isBookShowing', false);
      } else {
        this.set('choosedBook', bookId);
        this.set('isBookShowing', true);
      }
    }

  }

});
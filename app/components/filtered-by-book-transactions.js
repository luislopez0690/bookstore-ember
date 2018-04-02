import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  classNames: ['detailedTransactions'],
    areIdsEqual: computed('currentTransaction', function() {
      let currentBookFromTransaction = this.get('currentTransaction.book_id');
      let currentBook = this.get('book.id');
      if (currentBookFromTransaction === currentBook ){
        return true;
      }
    }),
    showCorrectBook: computed('isBookShowing','choosedBook', function(){
      let isBookShowing = this.get('isBookShowing');
      let currentBook = this.get('book.id');
      let choosedBook = this.get('choosedBook');
      if (isBookShowing && choosedBook == currentBook){
        return true;
      }
    })

});

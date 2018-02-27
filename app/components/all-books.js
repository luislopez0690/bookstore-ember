import Component from '@ember/component';

export default Component.extend({
  actions: {
    pickCurrentBook: function(book) {
      console.log('book', book);
      this.sendAction('pickCurrentBook', book);
    }
  }
});
///
import Component from '@ember/component';



export default Component.extend({

  actions: {
    pickCurrentBook: function(book) {
      this.sendAction('pickCurrentBook', book);
    }
  }
});
///
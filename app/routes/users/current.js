import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      user: this.get('store').findRecord('user', params.user_id),
      allB: this.get('store').findAll('book')
    });
  },
  actions: {
    addToUserLibrary(transaction) {
      transaction.save().then((data) => {
        let book = this.get('store').peekRecord('book', data.get('book.id'))
        let user = this.get('store').peekRecord('user', data.get('user.id'))
        user.get('books').pushObject(book);
      })
    },
    //currently under development
    deleteFromUserLibrary(transaction) {
      transaction.save();
    }
    ////
  }
});
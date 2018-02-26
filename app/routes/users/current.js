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
      // after succesfully saving the information to the backend
      // i should promise my route the information hes going to get
      // it should be something like this
      // transaction.save().then(() => {
      // render the relationship with user_id and book_id
      //
      //}})
      console.log(transaction.user)//only shows the relationship
      console.log(transaction.book)
      transaction.save(). then(() => {
        this.transitionTo('users.current');
      })
    },
    deleteFromUserLibrary(transaction){

      transaction.save();
    }
  }
});

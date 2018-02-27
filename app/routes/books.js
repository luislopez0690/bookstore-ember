import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('book');
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('user', this.modelFor('application'));
  },
  actions: {
    addToUserLibrary(transaction) {
      transaction.save().then((data) => {
        let book = this.get('store').peekRecord('book', data.get('book.id'))
        let user = this.get('store').peekRecord('user', data.get('user.id'))
        user.get('books').pushObject(book);
        this.transitionTo('users.current', user.get('id'));
      })
    },
    //currently under development
    deleteFromUserLibrary(transaction) {
      transaction.save();
    }
  }
});
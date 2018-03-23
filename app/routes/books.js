import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    totalPages: {
      refreshModel: true
    },
    currentSearch: {
      refreshModel: true
    },
    filterValue: {
      refreshModel: true
    },
    categoryState: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('book', params);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('user', this.modelFor('application').get('user'));
    this.modelFor('application').set('loginHref', false);

  },
  actions: {
    addToUserLibrary(transaction) {
      transaction.save().then((data) => {
        let book = this.get('store').peekRecord('book', data.get('book.id'))
        let user = this.get('store').peekRecord('user', data.get('user.id'))
        user.get('books').pushObject(book);
        this.transitionTo('users.current', user.get('id'));
      })
    }
  }
});
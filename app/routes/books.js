import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    totalPages: {
      refreshModel: true
    }
  },

  model(params) {
    console.log('the params are: ', params)
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
    },
    //currently under development
    deleteFromUserLibrary(transaction) {
      transaction.save();
    },
    //
    // handleFilterEntry(filterInputValue, filterAction) {
    //   console.log('filterInput', filterInputValue, filterAction, this.get('value'), this.get('filter'));
    //   filterAction(filterInputValue).then((filterResults) => {
    //     if (filterResults.query === this.get('value')) {
    //       this.set('results', filterResults.results);
    //     }
    //   });
    // },
    // filterParam(filterProperty) {
    //   this.set('filterValue', filterProperty);
    // }
  }
});
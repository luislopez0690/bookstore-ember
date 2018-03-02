import Route from '@ember/routing/route';


export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('user', this.modelFor('application').get('user'));
    this.modelFor('application').set('loginHref', true);
  },
  actions: {
    signUp(user) {
      user.save().then((data) => {
        this.modelFor('application').set('user', user);
        this.transitionTo('books');
      }).catch((error) => {
        user.rollbackAttributes();
        console.log(error);
        console.log(user);
        this.controller.set('responseMessage', error.errors[0]);
      })
    }
  }
});
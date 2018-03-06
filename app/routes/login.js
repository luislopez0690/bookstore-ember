import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  request: service('request'),
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('user', this.modelFor('application').get('user'));
    this.modelFor('application').set('loginHref', true);
  },
  actions: {
    signUp(user) {
      const component = this;
      console.log(user);
      this.get('request').request({
        method: 'POST',
        url: `/users/signup`,
        data: {
          name: user.get('name'),
          password: user.get('password')
        },
        cb: function(data) {
          console.log(this);
          component.modelFor('application').set('user', user);
          component.transitionTo('books');
        },
        errorCb: function(error) {
          user.rollbackAttributes();
          component.controller.set('responseMessage', error);
        }
      });
    }
  }
});
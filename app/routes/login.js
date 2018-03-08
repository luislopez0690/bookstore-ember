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
      component.get('request').request({
        method: 'POST',
        url: `/users/signup`,
        data: {
          name: user.get('name'),
          email: user.get('email'),
          password: user.get('password')
        },
        cb: function(data) {
          user.rollbackAttributes();
          component.get('store').pushPayload(data);
          const userCurrent = component.get('store').peekRecord('user', data.data.id);
          component.modelFor('application').set('user', userCurrent);
          component.transitionTo('books');
        },
        errorCb: function(error) {
          user.rollbackAttributes();
          component.controller.set('responseMessage', error.responseJSON.errors[0]);
        }
      });
    },
    login(user) {
      const component = this;
      component.get('request').request({
        method: 'POST',
        url: `/users/login`,
        data: {
          name: user.get('name'),
          email: user.get('email'),
          password: user.get('password')
        },
        cb: function(data) {
          user.rollbackAttributes();
          component.get('store').pushPayload(data);
          const userCurrent = component.get('store').peekRecord('user', data.data.id);
          component.modelFor('application').set('user', userCurrent);
          component.transitionTo('books');
        },
        errorCb: function(error) {
          user.rollbackAttributes();
          component.controller.set('responseMessage', error.responseJSON.errors[0]);
        }
      });
    }
  }
});
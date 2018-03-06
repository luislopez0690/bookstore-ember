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
      console.log('SIGNUP');
      component.get('request').request({
        method: 'POST',
        url: `/users/signup`,
        data: {
          name: user.get('name'),
          password: user.get('password')
        },
        cb: function(data) {
          user.rollbackAttributes();
          component.get('store').pushPayload(data);
          console.log(data);
          const userCurrent = component.get('store').peekRecord('user', data.data.id);
          component.modelFor('application').set('user', userCurrent);
          component.transitionTo('books');
        },
        errorCb: function(error) {

          component.controller.set('responseMessage', "Choose a different username");
        }
      });
    },
    login(user) {
      const component = this;
      console.log('LOGIN');
      component.get('request').request({
        method: 'POST',
        url: `/users/login`,
        data: {
          name: user.get('name'),
          password: user.get('password')
        },
        cb: function(data) {

          component.modelFor('application').set('user', user);
          component.get('store').pushPayload(data);
          component.transitionTo('books');
        },
        errorCb: function(error) {

          component.controller.set('responseMessage', "Username or Password are incorrect");
        }
      });
    }
  }
});
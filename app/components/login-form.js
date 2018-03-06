import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject, { computed, observer } from '@ember/object';
import { gte, match, not } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  name: '',
  signupEmail: '',

  nameValid: match('name', /^.+@.+\..+$/),
  signupNameValid: match('signupEmail', /^.+@.+\..+$/),

  isValid: computed('nameValid', 'password', function() {
    return !(this.get('nameValid') && this.get('password'));
  }),
  isValidSignup: computed('signupNameValid', 'signupPassword', function() {
    return !(this.get('signupNameValid') && this.get('signupPassword'));
  }),

  actions: {
    login: function(username, password) {
      let currentUser = this.get('store').createRecord('user', {
        name: username,
        password: password
      });
      console.log('CurrentUser: ', currentUser);
      this.sendAction('login', currentUser);
    },
    signUp: function(username, password) {
      let newUser = this.get('store').createRecord('user', {
        name: username,
        password: password
      });
      this.sendAction('signUp', newUser);
    },
    reloadAlert: function() {
      this.set('responseMessage', '');
    }
  }
});
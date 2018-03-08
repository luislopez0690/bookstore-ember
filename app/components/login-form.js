import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { match } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  loginEmail: '',
  signupEmail: '',

  loginNameValid: match('loginEmail', /^.+@.+\..+$/),
  signupNameValid: match('signupEmail', /^.+@.+\..+$/),

  isValidLogin: computed('loginNameValid', 'loginPassword', function() {
    return !(this.get('loginNameValid') && this.get('loginPassword'));
  }),
  isValidSignup: computed('signupNameValid', 'signupPassword', function() {
    return !(this.get('signupNameValid') && this.get('signupPassword'));
  }),

  actions: {
    login: function(username, password) {
      let currentUser = this.get('store').createRecord('user', {
        email: username,
        password: password
      });
      this.sendAction('login', currentUser);
    },
    signUp: function(name, username, password) {
      let newUser = this.get('store').createRecord('user', {
        name: name,
        email: username,
        password: password
      });
      this.sendAction('signUp', newUser);
    },
    reloadAlert: function() {
      this.set('responseMessage', '');
    }
  }
});
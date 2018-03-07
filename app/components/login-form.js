import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  loginEmail: '',
  signupEmail: '',

  nameValid: match('loginEmail', /^.+@.+\..+$/),
  signupNameValid: match('signupEmail', /^.+@.+\..+$/),

  isValid: computed('nameValid', 'loginPassword', function() {
    return !(this.get('nameValid') && this.get('loginPassword'));
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
import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
  store: service(),

  actions: {
    logIn: function(username, password) {
      this.get('store').queryRecord('user', {
        name: username,
        password: password
      })
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
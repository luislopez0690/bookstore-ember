import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      user: this.get('store').findRecord('user', params.user_id),
      allB: this.get('store').findAll('book')
    });
  },
  actions: {
    addToUserLibrary(currentUser) {
      currentUser.save()

    }
  }
});
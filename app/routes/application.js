import Route from '@ember/routing/route';

const href = window.location.pathname.split('/');
const loginHref = href[href.length - 1] === 'login';

export default Route.extend({
  model() {
    return {
      user: this.get('store').findRecord('user', 1),
      loginHref: loginHref
    }
  }
});
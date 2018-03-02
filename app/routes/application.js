import Route from '@ember/routing/route';
import Object from '@ember/object';

const href = window.location.pathname.split('/');
const loginHref = href[href.length - 1] === 'login';

export default Route.extend({
  model() {
    let modelHash = {
      loginHref: loginHref,
      user: null
    }
    return Object.create(modelHash);
  }
});
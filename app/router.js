import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('current', { path: 'current/:user_id' });
  });
  this.route('books', { path: '/' });
  this.route('transactions');
});

export default Router;
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('books', { path: '/books' });
  this.route('login', { path: '/login' });
  this.route('users', function() {
    this.route('current', { path: '/:user_id' });
  });
  //this.route('transactions');
  this.route('support');
});

export default Router;
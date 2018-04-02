import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  tagName: 'nav',
  elementId: 'top-navbar',
  classNames: ['navbar navbar-dark bg-dark navbar-expand-xl']
});
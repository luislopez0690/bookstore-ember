import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['page'],
  page: 1,

  metaData: computed('model', function() {
    let meta = this.get('model.meta');
    return meta;
  }),
  actions: {
    nextPage() {
      if (this.get('page') < this.get('metaData.total-pages')) {
        let page = this.get('page');
        this.set('page', page + 1);
      }
    },
    prevPage() {
      if (this.get('page') > 1) {
        this.set('page', this.get('page') - 1);
      }
    }
  }
});
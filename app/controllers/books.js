import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['page', 'totalPages'],
  page: 0,

  metaData: computed('model', function() {
    let meta = this.get('model.meta');
    return meta;
  }),
  actions: {
    nextPage() {
      console.log('this page is: ', this.page);
      console.log('metaData totalPages is: ', this.get('metaData.total-pages'));
      if (this.get('page') < this.get('metaData.total-pages')) {
        let page = this.get('page');
        this.set('page', page + 1);
        console.log('this page after is: ', this.page);
      }
    },
    prevPage() {
      if (this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
    }
  }
});
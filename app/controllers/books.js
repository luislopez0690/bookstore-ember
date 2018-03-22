import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['page', 'currentSearch', 'filterValue'],
  page: 0,
  lastPage: 0,
  filterValue: null,
  currentSearch: '',
  categoryState: false,


  metaData: computed('model', function() {
    return this.get('model.meta');
  }),

  actions: {
    changePage(action) {
      if (action === '+') {
        if (this.get('page') < this.get('metaData.total-pages') - 1) {
          let page = this.get('page');
          this.set('page', page + 1);
        }
      } else {
        if (this.get('page') > 0) {
          this.set('page', this.get('page') - 1);
        }
      }
    },
    filterParam(filterProperty) {
      this.set('categoryState', filterProperty.state);
      this.set('filterValue', filterProperty.label);
    }
  }
});
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['page', 'currentSearch', 'filterValue'],
  page: 0,
  lastPage: 0,
  filterValue: null,
  currentSearch: '',


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
    // filterBy(param) {
    //   param = param.trim();
    //   let filterParam = this.get('filterValue');
    //   let currentPage = this.get('model.query.page');
    //   let lastPage = this.get('lastPage');
    //   if (currentPage != 0) {
    //     this.set('lastPage', currentPage);
    //   }
    //   if (param !== '') {
    //     if (filterParam === 'name') {
    //       this.set('page', 0);
    //       this.set('author', null);
    //       this.set('name', param);
    //     } else {
    //       this.set('page', 0);
    //       this.set('name', null);
    //       this.set('author', param);
    //     }
    //   } else {
    //     this.set('page', lastPage);
    //     this.set('name', null);
    //     this.set('author', null);
    //   }
    // },
    filterParam(filterProperty) {

      this.set('filterValue', filterProperty);
    }
  }
});
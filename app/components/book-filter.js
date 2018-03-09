import Component from '@ember/component';

export default Component.extend({
  classNames: ['book-filter'],
  value: '',
  filterValue: 'name',
  init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.get('value')) {
          this.set('results', filterResults.results);
        }
      });
    },
    filterParam(filterProperty) {
      console.log('filterProperty inside book-filter.js: ', filterProperty);
      this.set('filterValue', filterProperty);
    }
  }

});
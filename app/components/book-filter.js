import Component from '@ember/component';

export default Component.extend({
  classNames: ['book-filter'],
  value: '',
  init() {
    this._super(...arguments);

    this.get('filter')('').then((allResults) => {
      console.log('hello');
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
      this.set('filterValue', filterProperty);
    }
    // handleFilterEntry() {
    //   let filterInputValue = this.get('value');
    //   let filterAction = this.get('filter');
    //   console.log('hola', this.get('filter'), this.get('value'));
    //   this.sendAction('handleFilterEntry', filterInputValue, filterAction);
    // },
    // filterParam(filterProperty) {
    //   this.sendAction('filterParam', filterProperty);
    //
    // }
  }

});
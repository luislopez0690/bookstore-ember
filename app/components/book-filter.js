import Component from '@ember/component';

export default Component.extend({
  classNames: ['book-filter'],

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      this.sendAction('handleFilterEntry', filterInputValue, filterAction);
    },
    filterParam(filterProperty) {
      this.set('filterValue', filterProperty);
      this.sendAction('filterParam', filterProperty);

    }
  }

});
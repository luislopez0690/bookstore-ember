import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  classNames: ['book-filter'],

  actions: {
    filterParam(filterProperty) {
      if (filterProperty === 'name') {
        this.set('currentFilterValue', 'Title');
      } else {
        this.set('currentFilterValue', 'Author');
      }
      this.sendAction('filterParam', filterProperty);
    }
  }

});
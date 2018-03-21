import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  classNames: ['book-filter'],
  isActive: true,

  actions: {
    filterParam(filterProperty) {
      console.log(this.get('filterValue'));
      if (this.get('filterValue') === filterProperty) {
        this.sendAction('filterParam', null);
      } else {
        this.sendAction('filterParam', filterProperty);
      }
    }
  }

});
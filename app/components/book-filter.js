import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { set } from '@ember/object';

export default Component.extend({
  willRender() {
    this.set('filterCategories', [{ label: 'drama', state: false },
      { label: 'romance', state: false },
      { label: 'fantasy', state: false },
      { label: 'adventure', state: false },
      { label: 'mistery', state: false }
    ]);
  },
  classNames: ['book-filter'],

  ifFilterActive: computed('filterCategories.@each', function() {
    return this.get('filterCategories');
  }),

  actions: {
    filterParam(filterProperty) {
      console.log(this.get('filterCategories'));
      if (this.get('filterValue') === filterProperty.label) {
        set(filterProperty, 'state', false);
        set(filterProperty, 'label', null);
        //  console.log(filterProperty);
        this.sendAction('filterParam', filterProperty);
      } else {
        set(filterProperty, 'state', true);
        console.log(filterProperty);
        this.sendAction('filterParam', filterProperty);
      }
    }
  }

});
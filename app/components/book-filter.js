// import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { set } from '@ember/object';
import { A } from '@ember/array';
export default Component.extend({

  classNames: ['book-filter'],
  filterCategories: computed('filterValue', function() {
    const categories = A([{ label: 'drama', state: false },
      { label: 'romance', state: false },
      { label: 'fantasy', state: false },
      { label: 'adventure', state: false },
      { label: 'mistery', state: false }
    ])
    if (this.get('filterValue')) {
      return categories.map((category) => {
        if (category.label === this.get('filterValue') || category.state === true) {
          set(category, 'state', true);
        } else {
          set(category, 'state', false);
        }
        return category;
      });
    } else {
      return categories;
    }
  }),
  actions: {
    filterParam(filterCategory, filterLabel) {
      if (this.get('filterValue') === filterLabel) {
        set(filterCategory, 'state', false);
        this.sendAction('filterParam', null);
      } else {
        console.log(filterLabel);
        set(filterCategory, 'state', true);
        this.sendAction('filterParam', filterLabel);
      }
    }
  }

});
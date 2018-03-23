import Service from '@ember/service';

export default Service.extend({
  filterCategories: null,
  init() {
    this._super(...arguments);
    this.set('filterCategories', [{ label: 'drama', state: false },
      { label: 'romance', state: false },
      { label: 'fantasy', state: false },
      { label: 'adventure', state: false },
      { label: 'mistery', state: false }
    ]);
  }
});
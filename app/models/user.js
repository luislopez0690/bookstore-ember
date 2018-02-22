import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  userType: DS.attr(),
  books: DS.hasMany('books', { async: true })
});
import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  books: DS.hasMany('books', { async: true }),
  orderNumber: DS.attr(),
  quantity: DS.attr()
});
import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  book: DS.belongsTo('book', { async: true }),
  quantity: DS.attr()
});

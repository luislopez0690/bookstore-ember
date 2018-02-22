import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  bookId: DS.attr(),
  tStamp: DS.attr(),
  tType: DS.attr(),
  orderNumber: DS.attr(),
  quantity: DS.attr()
});
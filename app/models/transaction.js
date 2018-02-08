import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('bigint'),
  bookId: DS.attr('bigint'),
  tStamp: DS.attr('date'),
  tType: DS.attr('string'),
  orderNumber: DS.attr('integer'),
  quantity: DS.attr('integer')
});

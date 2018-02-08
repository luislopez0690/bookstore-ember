import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('bigint'),
  bookId: DS.attr('bigint'),
  amount: DS.attr('integer')
});

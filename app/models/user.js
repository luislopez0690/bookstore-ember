import DS from 'ember-data';
export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  userType: DS.attr(),
  books: DS.hasMany('book', { async: true }),
  transactions: DS.hasMany('transactions', { async: true }),
  groupTransactions: DS.attr(),
  orderTransactions: DS.attr()

});
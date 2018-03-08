import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  summary: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  amount: DS.attr(),
  users: DS.hasMany('user'),
  transactions: DS.hasMany('transactions')


});
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  shortDescription: DS.attr(),
  longDescription: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  amount: DS.attr(),
  users: DS.hasMany('user', { async: true }),
  transactions: DS.hasMany('transactions', { async: true })


});
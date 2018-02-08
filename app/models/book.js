import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  sDescription: DS.attr('string'),
  lDescription: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('decimal'),
  amount: DS.attr('integer')
});
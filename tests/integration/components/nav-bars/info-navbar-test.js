import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bars/info-navbar', 'Integration | Component | nav bars/info navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-bars/info-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-bars/info-navbar}}
      template block text
    {{/nav-bars/info-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

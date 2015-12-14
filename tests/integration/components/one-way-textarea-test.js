import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('one-way-textarea', 'Integration | Component | {{one-way-textarea}}', {
  integration: true
});

test('It renders a textarea', function(assert) {
  this.render(hbs`{{one-way-textarea}}`);
  assert.equal(this.$('textarea').length, 1, 'a textarea was rendered');
});

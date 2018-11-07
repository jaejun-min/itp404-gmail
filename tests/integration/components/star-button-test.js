import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);
  test('test starred button', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // this.set('starred', function(val) { ... });

  //  let isStarred = false;
  //server.createList('email', 1)


    //assert.expect(1);
    this.set('starred', false);
    await render(hbs`<StarButton
        @on={{starred}}
      />`);
    assert.equal(this.element.querySelector('[data-test="testStarred"]').value,"false");


    this.set('starred', true);
    await render(hbs`<StarButton
        @on={{starred}}
      />`);
    assert.equal(this.element.querySelector('[data-test="testStarred"]').value,"true");


  //  assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    // await render(hbs`
    //   {{#star-button}}
    //     template block text
    //   {{/star-button}}
    // `);

  //  assert.equal(this.element.value(), 'template block text');
  });
});

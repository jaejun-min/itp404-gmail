import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
   setupMirage(hooks);
   hooks.afterEach(function() {
  reset();
});
  test('testing 2 filled star and 3 ', async function(assert) {
    server.create('email', {
      starred: true
    });
    server.create('email', {
      starred: true
    });

   server.createList('email', 3)

    await visit('/');
    assert.dom('[data-test="starFilled"]').exists({count:2})
    assert.dom('[data-test="starUnfilled"]').exists({count:3})
  });
  test('test viewing a single email', async function(assert){
    server.create('email', {
      from: 'jaejunmi@usc.edu',
      to: 'abc@usc.edu',
      subject: 'email',
      message: 'hello world'
    })
    await visit('/emails/1');

  assert.dom('[data-test="testTo"]').hasText('To: abc@usc.edu');
  assert.dom('[data-test="testFrom"]').hasText('From: jaejunmi@usc.edu');
  assert.dom('[data-test="testSubject"]').hasText('Subject: email');
  assert.dom('[data-test="testMessage"]').hasText('hello world');
  });
  test('Deleting emails', async function(assert){
  server.createList('email', 2);
  window.confirm = () => true;

  await visit('/emails/1');
  await click('[data-test="delete-email"]');
  assert.dom('[data-test="starUnfilled"]').exists({ count: 1 });
});
test('writing a email', async function(assert) {
  await visit('/compose');
  await fillIn('#to', 'jaejun@usc.edu');
  await fillIn('#from', '@usc.edu');
  await fillIn('#subject', 'hello');
  await fillIn('#message', 'hello world')
  await click('[data-test="compose"]');

  await visit('/emails/1');

assert.dom('[data-test="testTo"]').hasText('To: jaejun@usc.edu');
assert.dom('[data-test="testFrom"]').hasText('From: @usc.edu');
assert.dom('[data-test="testSubject"]').hasText('Subject: hello');
assert.dom('[data-test="testMessage"]').hasText('hello world');
});


});

'use strict';

QUnit.module("chatter");

QUnit.test("can add messages to chatter", function (assert) {
  var chatter = createMessages('hello world', 'yeah');
  assertItems(chatter.messages(), [
    'hello world',
    'yeah'
  ], "messages added to the chatter model");

  function createMessages() {
    var chatter = new Chatter();
    [].forEach.call(arguments, function(item) { chatter.add(item); });
    return chatter;
  };

  function assertItems(items, expected, message) {
    assert.equal(JSON.stringify(items), JSON.stringify(expected), message);
  };
});


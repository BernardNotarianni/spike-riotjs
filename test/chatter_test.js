'use strict';

QUnit.test("can add messages to chatter", function (assert) {
  var chatter = createMessages('hello world', 'yeah');
  assertItems(chatter.messages(), [
    'hello world',
    'yeah'
  ]);

  function createMessages() {
    var chatter = new Chatter();
    [].forEach.call(arguments, function(item) { chatter.add(item); });
    return chatter;
  };

  function assertItems(items, expected) {
    assert.equal(JSON.stringify(items), JSON.stringify(expected));
  };
});


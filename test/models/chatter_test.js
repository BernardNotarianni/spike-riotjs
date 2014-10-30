'use strict';

describe('spike riots', function() {
    describe('#add', function() {
        it('adds message to the chatter list', function () {
            var chatter = createMessages('hello world', 'yeah');
            assertItems(chatter.messages(), [
                'hello world',
                'yeah'
            ]);
        });
    });


  function createMessages() {
    var chatter = new Chatter();
    [].forEach.call(arguments, function(item) { chatter.add(item); });
    return chatter;
  }

  function assertItems(items, expected) {
    assert.equal(JSON.stringify(items), JSON.stringify(expected));
  }
});

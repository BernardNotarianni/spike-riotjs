'use strict';

QUnit.module("message_presenter");

QUnit.test("detect 'enter' key to add a new item", function (assert) {
  var added;
  var model = new Chatter();
  model.on('add', function (message) {
    added = message;
  });
  var options = {
    model: model,
    message_template: template['message-template']
  };
  var app_element = $(template['chatapp']);
  chatterPresenter(app_element, options);

  var key =13;
  var e = $.Event('keyup');
  e.keyCode = 13; // enter
  e.which = 13;
  app_element.find('#new-message').val('I type this message').trigger(e);

  assert.equal('I type this message',added);


});




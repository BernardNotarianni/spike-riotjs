'use strict';

QUnit.module("message_presenter");

QUnit.test("detect 'enter' key to add a new item", function (assert) {
  var added,
      form = $(template['chatapp']),
      model = new Chatter();

  model.on('add', function (message) {
    added = message;
  });

  chatterPresenter(form, model);

  enterValueInForm(form, '#new-message', 'I type this message');

  // Added to the model
  assert.equal('I type this message', added);

  // Added to the DOM as list item element
  assert.equal(1, findLiContaining(form, 'I type this message').length);
});

function findLiContaining(element, text) {
  return element.find(":contains('" + text + "')").find("li");
}

function enterValueInForm(formRoot, inputFieldId, value) {
  var enterKey =13;
  var e = $.Event('keyup');
  e.keyCode = enterKey;
  e.which = enterKey;

  formRoot.find(inputFieldId).val(value).trigger(e);  
}




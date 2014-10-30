'use strict';

function chatterPresenter(element, options) {
  element = $(element);

  var message_template = options.message_template,
      chatter = options.model,
      $messagesListElement = element.find('#messages-list');

  element.on('keyup', '#new-message', function (e) {
    var val = $.trim(this.value);
    if (val && e.which === 13) {
      add(val);
      this.value = '';
    }
  });

  // Listen to model events
  chatter.on("add", add);

  // Private functions
  function add(message) {
    var messageElement = $(riot.render(message_template, {id: 1, message: message}));
    $messagesListElement.append(messageElement);
  }

};

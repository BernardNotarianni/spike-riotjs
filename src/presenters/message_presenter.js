'use strict';

function chatterPresenter(element, model) {
  element = $(element);

  var message_template = template['message-template'],
      chatter = model,
      $messagesListElement = element.find('#messages-list');

  element.on('keyup', '#new-message', function (e) {
    var val = $.trim(this.value);
    if (val && e.which === 13) {
      add(val);
      this.value = '';
    }
  });

  // Private functions
  function add(message) {
    chatter.add(message);
    var messageElement = $(riot.render(message_template, {id: 1, message: message}));
    $messagesListElement.append(messageElement);
  }

};

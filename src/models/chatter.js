'use strict';

function Chatter() {
  var self = riot.observable(this),
      messages = [];

  self.messages = function () {
    return messages;
  };

  self.add = function(message) {
    messages.push(message);
  };


  self.on('add', function (message) {
    console.log("chatter add triggered " + message);
  });
};


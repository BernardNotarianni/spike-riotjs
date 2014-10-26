'use strict';

function Chatter() {
  var self = riot.observable(this);

  self.on('add', function (message) {
    console.log("chatter add triggered " + message);
  });

};

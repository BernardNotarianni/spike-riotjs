'use strict';

var chatter = new Chatter();


(function ($) {
  routes({chatter: chatter});
  
  // Binds the Chatter Presenter
  chatterPresenter($("#chatapp"), {
    model: chatter,
    message_template: $('#message-template').html()
  });
})(jQuery);

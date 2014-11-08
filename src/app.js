'use strict';

var chatter = new Chatter();


(function ($) {
  routes({chatter: chatter});
  $('#chatapp').html(template['chatapp']);

  // Binds the Chatter Presenter
  chatterPresenter($("#chatapp"), chatter);

})(jQuery);

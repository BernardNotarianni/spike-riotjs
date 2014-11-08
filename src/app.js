'use strict';

var chatter = new Chatter();


(function ($) {
  routes({chatter: chatter});
  
  // Binds the Chatter Presenter
  chatterPresenter($("#chatapp"), chatter);

})(jQuery);

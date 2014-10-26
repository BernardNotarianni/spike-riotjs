'use strict';

function routes(models) {
    riot.route(function(hash) {
        models.chatter.trigger('load', hash.slice(2));
    });
}

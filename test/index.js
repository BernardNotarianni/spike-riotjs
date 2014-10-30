require("../bower_components/riotjs/bdd.js");

require("../dist/spike.js");
require("./models/chatter_test.js");

// $ utility functions used by the API (from lodash)
var _ = require("lodash");

_.each(['map', 'isFunction', 'extend'], function(name) {
  $[name] = _[name];
});

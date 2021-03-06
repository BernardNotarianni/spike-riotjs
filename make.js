#!/usr/bin/env node

// grunt is messy, shelljs is not (https://github.com/arturadib/shelljs)

require('shelljs/make');

var gaze = require('gaze'),
  header = ";(function(top) {",
  footer = '})(typeof top == "object" ? window : exports);';


// Initialize repository
function init() {
  mkdir("-p", "dist");
}

// Create template hash-map from html files found in 'templates' subdir
function templates ()
{
  var templateFiles = ls("templates");
 
  var templates = templateFiles.map(function(fileName) {
    var html = cat('templates/'+fileName).replace(/(\r\n|\n|\r)/gm,"");
    var templateName = fileName.split('.').shift();
    return "template['" + templateName + "'] = '" + html + "';";
  });

  var concatenedTemplates = header + 'template = {};';
  templates.forEach(function(template) {
    concatenedTemplates += template;
  });
  concatenedTemplates += footer;
  concatenedTemplates.to("dist/templates.js");
}

// Make a single file out of everything
function concat() {

  init();
 
  var js = cat("bower_components/riotjs/riot.js");

  js += header;
  js += cat("src/models/*.js");
  js += cat("src/presenters/*.js");
  js += cat("src/*.js");
  js += footer;

  js.to("dist/spike.js");

  templates();
}

// concat target
target.concat = concat;

// generate application
target.gen = function() {
  concat();
  cp("-rf", "bower_components/bootstrap/dist/css", "dist");
  cp("-rf", "bower_components/bootstrap/dist/js", "dist");
  cp("-rf", "bower_components/bootstrap/dist/fonts", "dist");
  cp("-f", "bower_components/jquery/dist/jquery.min.js", "dist");
};


// watch for changes: ./make.js watch
target.watch = function() {
  var exec = require('child_process').exec;

  // scripts
  gaze(["src/**/*.js","test/**/*.js"], function() {
    this.on('all', function(e, file) {
      concat();
      //exec("refresh_firefox.sh"); 
      refresh_chrome();
    });
  });

  // styles
  gaze("style/*.styl", function() {
    this.on('changed', function(e, file) {
      styl("style/index.styl", "dist/style.css");
    });
  });

};


//
// To enable auto-refresh of chrome, start with following command,
// and open the QUnit test page.
//
// $ google-chrome --remote-debugging-port=9222 &
//
function refresh_chrome() {
  var Chrome = require('chrome-remote-interface');
  Chrome(function (chrome) {
    with (chrome) {
      on('Page.loadEventFired', close);
      Network.enable();
      Page.enable();
      Page.reload({ignoreCache: true});
    }
  }).on('error', function () {
    console.error('Cannot connect to Chrome');
  });  
};

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-members", "q"],
  function($, Handlebars, bootstrap, members, q) {
    console.log("first line");
    members.loadMembers()
    .then(function(memberArray) {
      require(['hbs!../templates/profile'], function(memberTpl) {
        console.log("inside require");
        $("#profiles").html(memberTpl({ members:memberArray }));
      });
    });

});

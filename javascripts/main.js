requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {exports: 'Firebase'}
  }
});
console.log("main.js running")
requirejs(
  ["jquery", "hbs", "bootstrap", "get-members", "q", "login", "firebase"],
  function($, Handlebars, bootstrap, members, q, login, firebase) {
    console.log("first line");

    // need to move this code to trigger after successful authentication
    

    });


    $('#login-button').click(function() {

      // change the order of these; toggle if authenticated
      
      login.authenticate()
      .then(function(authData){
        $('.login-page').toggle();
        $('#member-page').toggle();
        $('#loginMessage').html("<p></p>");
        console.log("logged in successfully");
        console.log("User ID: ", authData.uid);
        members.loadMembers()
        .then(function(memberArray) {
          require(['hbs!../templates/profile'], function(memberTpl) {
            console.log("inside require");
            $("#profiles").html(memberTpl({ members:memberArray }));
          });
      })
      .fail(function(error){
        $('#loginMessage').show().html("<p>" + error + "</p>");
      });
    });

    $('#member-nav').click(function() {
      $('#member-page').toggle();
    });

    $('#profile-nav').click(function() {
      $('#profile-page').toggle();
    });
});




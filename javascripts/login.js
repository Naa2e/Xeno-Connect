define(function(require) {
  // var Firebase = require("firebase");
  var q = require("q");

  return {
    authenticate: function(){
      var deferred = q.defer();
      var ref = new Firebase("https://zeno-connect.firebaseio.com/");
      ref.authWithPassword({
        email    : $('#usr').val(), //"mdsmart36@gmail.com",
        password : $('#pwd').val() //"xenoconnect"
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
          deferred.reject(error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          deferred.resolve(authData);
        }
      });
    // .fail(function(xhr, status, error){
    //   deferred.reject(error);
    //   console.log("failed to authenticate user");
    // });
    return deferred.promise;
    }
  };
});

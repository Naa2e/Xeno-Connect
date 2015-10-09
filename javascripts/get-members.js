define(function(require) {
  var _ = require("lodash");
  var q = require("q");

  return {
    loadMembers: function(){
      var deferred = q.defer();
      $.ajax("https://xeno-connect.firebaseio.com/members.json").done(function(members) {
        console.log("members", members);
        deferred.resolve(members);
      })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });
    return deferred.promise;
    }
  };
});
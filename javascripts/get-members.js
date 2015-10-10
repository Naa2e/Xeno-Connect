define(function(require) {
  var _ = require("lodash");
  var q = require("q");

  return {
    loadMembers: function(){
      var deferred = q.defer();
      $.ajax("https://zeno-connect.firebaseio.com/members.json").done(function(members) {
        console.log("members", members);
        deferred.resolve(members);
      })
    .fail(function(xhr, status, error){
      deferred.reject(error);
      console.log("failure to pull members data")
    });
    return deferred.promise;
    }
  };
});

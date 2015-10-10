define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
      // This XHR does belong here
      $.ajax("https://nss-book-store.firebaseio.com/book.json").done(function(books) {
        fn(books);

      });

    }
  };
});


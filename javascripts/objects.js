'use strict';

var nss = {};
$(document).ready(function() {

    $.ajax({
        url: 'https://zeno-connect.firebaseio.com/members.json',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
            addItem(data);
        }
    });

    var items = $('#items')

    function addItem(object) {

        for (var i = 0; i < object.length; i++) {
            var now = new Date($.now());
            var end = new Date(object[i].endDate)
            var diff = Math.floor((end - now) / (3600000 * 24));

            items.append('<div class="col-sm-6 col-md-3"><div class="thumbnail"><img  class = "squareImg" src=" ' + object[i].photo + '  " alt=""><div class="caption"><p>' + object[i].name + ' $' + object[i].classification + '</p><p>' + object[i].atmospheric_requirements + ' ' + diff + ' ' + 'days' + '</p></div></div></div>');
        }

    };
    nss.outputUpdate = function(price, id) {
        $('#js-' + id).val(price);
    }
});

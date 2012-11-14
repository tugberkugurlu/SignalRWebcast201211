﻿/// <reference path="../Scripts/jquery-1.6.4-vsdoc.js" />
/// <reference path="../Scripts/jquery.signalR-1.0.0-alpha1.min.js" />
/// <reference path="../Scripts/jquery-ui-1.9.0.js" />

$(function () {
    var hub = $.connection.moveShape,
        $shape = $('#shape');

    $.connection.hub.logging = true;

    hub.client.shapeMoved = function (x, y) {

        $shape.css({ left: x, top: y });
    };

    $.connection.hub.start().done(function () {
        $shape.draggable({
            drag: function () {

                hub.server.moveShape(this.offsetLeft, this.offsetTop || 0);
            }
        });
    });
}());
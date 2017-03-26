"use strict";
var Client = (function () {
    function Client(utils) {
        this.utils = utils;
    }
    Client.prototype.isNode = function () {
        return (typeof document === "undefined");
    };
    Client.prototype.hello = function () {
        var msg = "Hello there! Random: " + this.utils.randomInt(0, 100);
        if (this.isNode()) {
            console.log(msg);
        }
        else {
            window.onload = function () {
                document.body.innerHTML = msg;
            };
        }
    };
    return Client;
}());
exports.Client = Client;

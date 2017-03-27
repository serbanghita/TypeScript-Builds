"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            this.utils.ready(function () {
                document.body.innerHTML = msg;
            });
        }
    };
    return Client;
}());
exports.Client = Client;

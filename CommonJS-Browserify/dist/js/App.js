"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App(utils) {
        this.utils = utils;
    }
    App.prototype.hello = function () {
        var msg = "Hello there! Random: " + this.utils.randomInt(0, 100);
        this.utils.ready(function () {
            document.body.innerHTML = msg;
        });
    };
    return App;
}());
exports.default = App;

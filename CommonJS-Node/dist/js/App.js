"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App(utils) {
        this.utils = utils;
    }
    App.prototype.hello = function () {
        console.log("Hello there! Random: " + this.utils.randomInt(0, 100));
    };
    return App;
}());
exports.default = App;

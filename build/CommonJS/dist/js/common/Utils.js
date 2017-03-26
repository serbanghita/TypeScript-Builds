"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Utils;
}());
exports.Utils = Utils;

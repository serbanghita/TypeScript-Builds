(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
            window.onload = function () {
                document.body.innerHTML = msg;
            };
        }
    };
    return Client;
}());
exports.Client = Client;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Utils;
}());
exports.Utils = Utils;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./client/Client");
var Utils_1 = require("./common/Utils");
var u = new Utils_1.Utils();
var c = new Client_1.Client(u);
c.hello();

},{"./client/Client":1,"./common/Utils":2}]},{},[3]);

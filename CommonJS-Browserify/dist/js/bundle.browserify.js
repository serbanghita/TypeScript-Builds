(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
// interface Window {
//     attachEvent(event: string, listener: EventListener): boolean;
//     detachEvent(event: string, listener: EventListener): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.prototype.ready = function (fn) {
        if (document.addEventListener) {
            // Use the handy event callback
            // document.addEventListener( "DOMContentLoaded", fn, false );
            // A fallback to window.onload, that will always work
            window.addEventListener("load", fn, false);
            // If IE event model is used
        }
        else {
            // Ensure firing before onload, maybe late but safe also for iframes
            // document.attachEvent( "onreadystatechange", fn );
            // A fallback to window.onload, that will always work
            window.attachEvent("onload", fn);
        }
    };
    return Utils;
}());
exports.default = Utils;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var App_1 = require("./App");
var u = new Utils_1.default();
var c = new App_1.default(u);
c.hello();

},{"./App":1,"./Utils":2}]},{},[3]);

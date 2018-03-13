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
},{"./client/Client":1,"./common/Utils":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi9zcmMvY2xpZW50L0NsaWVudC50cyIsIi4uLy4uL3NyYy9jb21tb24vVXRpbHMudHMiLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBO0lBQ0ksZ0JBQXNCLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBRWxDLENBQUM7SUFFTyx1QkFBTSxHQUFkO1FBQ0ksTUFBTSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFDSSxJQUFJLEdBQUcsR0FBRywwQkFBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsTUFBTSxHQUFHO2dCQUNaLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNsQyxDQUFDLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHdCQUFNOzs7O0FDRm5CO0lBQUE7SUFJQSxDQUFDO0lBSFUseUJBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEdBQVc7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsWUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksc0JBQUs7Ozs7QUNBbEIsMENBQXVDO0FBQ3ZDLHdDQUFxQztBQUVyQyxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vY29tbW9uL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1dGlsczogVXRpbHMpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZWxsbygpIHtcclxuICAgICAgICBsZXQgbXNnID0gYEhlbGxvIHRoZXJlISBSYW5kb206ICR7dGhpcy51dGlscy5yYW5kb21JbnQoMCwgMTAwKX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTm9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gbXNnO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBwdWJsaWMgcmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NsaWVudH0gZnJvbSBcIi4vY2xpZW50L0NsaWVudFwiO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi9jb21tb24vVXRpbHNcIjtcclxuXHJcbmxldCB1ID0gbmV3IFV0aWxzKCk7XHJcbmxldCBjID0gbmV3IENsaWVudCh1KTtcclxuYy5oZWxsbygpO1xyXG4iXX0=

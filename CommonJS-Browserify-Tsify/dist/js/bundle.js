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

},{"./App":1,"./Utils":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwLnRzIiwic3JjL1V0aWxzLnRzIiwic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUNJLGFBQXNCLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBRWxDLENBQUM7SUFFTSxtQkFBSyxHQUFaO1FBQ0UsSUFBSSxHQUFHLEdBQUcsMEJBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUcsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7Ozs7O0FDYkQscUJBQXFCO0FBQ3JCLG9FQUFvRTtBQUNwRSxpRUFBaUU7QUFDakUsSUFBSTs7QUFFSjtJQUFBO0lBeUJBLENBQUM7SUF4QlUseUJBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEdBQVc7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRU0scUJBQUssR0FBWixVQUFhLEVBQU87UUFFcEIsRUFBRSxDQUFDLENBQUUsUUFBUSxDQUFDLGdCQUFpQixDQUFDLENBQUEsQ0FBQztZQUM3QiwrQkFBK0I7WUFDL0IsOERBQThEO1lBRTlELHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUUzQyw0QkFBNEI7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRUosb0VBQW9FO1lBQ3BFLG9EQUFvRDtZQUVwRCxxREFBcUQ7WUFDL0MsTUFBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztJQUVMLENBQUM7SUFDRCxZQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTs7Ozs7O0FDOUJELGlDQUE0QjtBQUM1Qiw2QkFBd0I7QUFFeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQztBQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLGFBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1dGlsczogVXRpbHMpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoZWxsbygpIHtcbiAgICAgIGxldCBtc2cgPSBgSGVsbG8gdGhlcmUhIFJhbmRvbTogJHt0aGlzLnV0aWxzLnJhbmRvbUludCgwLCAxMDApfWA7XG4gICAgICB0aGlzLnV0aWxzLnJlYWR5KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBtc2c7XG4gICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBpbnRlcmZhY2UgV2luZG93IHtcbi8vICAgICBhdHRhY2hFdmVudChldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcik6IGJvb2xlYW47XG4vLyAgICAgZGV0YWNoRXZlbnQoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpOiB2b2lkO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgcHVibGljIHJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZHkoZm46IGFueSkge1xuXG4gICAgaWYgKCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICl7XG4gICAgICAgIC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGZuLCBmYWxzZSApO1xuXG4gICAgICAgIC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIElmIElFIGV2ZW50IG1vZGVsIGlzIHVzZWRcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIEVuc3VyZSBmaXJpbmcgYmVmb3JlIG9ubG9hZCwgbWF5YmUgbGF0ZSBidXQgc2FmZSBhbHNvIGZvciBpZnJhbWVzXG4gICAgICAgIC8vIGRvY3VtZW50LmF0dGFjaEV2ZW50KCBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLCBmbiApO1xuXG4gICAgICAgIC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG4gICAgICAgICg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIiwgZm4pO1xuICAgIH1cblxufVxufVxuIiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5sZXQgdSA9IG5ldyBVdGlscygpO1xubGV0IGMgPSBuZXcgQXBwKHUpO1xuYy5oZWxsbygpO1xuIl19

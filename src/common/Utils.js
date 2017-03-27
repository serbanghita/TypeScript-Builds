// interface Window {
//     attachEvent(event: string, listener: EventListener): boolean;
//     detachEvent(event: string, listener: EventListener): void;
// }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
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
exports.Utils = Utils;

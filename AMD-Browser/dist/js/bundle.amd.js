// interface Window {
//     attachEvent(event: string, listener: EventListener): boolean;
//     detachEvent(event: string, listener: EventListener): void;
// }
define("Utils", ["require", "exports"], function (require, exports) {
    "use strict";
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
});
define("App", ["require", "exports"], function (require, exports) {
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
});
define("index", ["require", "exports", "Utils", "App"], function (require, exports, Utils_1, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var u = new Utils_1.default();
    var c = new App_1.default(u);
    c.hello();
});

// interface Window {
//     attachEvent(event: string, listener: EventListener): boolean;
//     detachEvent(event: string, listener: EventListener): void;
// }
System.register("Utils", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utils;
    return {
        setters: [],
        execute: function () {// interface Window {
            //     attachEvent(event: string, listener: EventListener): boolean;
            //     detachEvent(event: string, listener: EventListener): void;
            // }
            Utils = /** @class */ (function () {
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
            exports_1("default", Utils);
        }
    };
});
System.register("App", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var App;
    return {
        setters: [],
        execute: function () {
            App = /** @class */ (function () {
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
            exports_2("default", App);
        }
    };
});
System.register("index", ["Utils", "App"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Utils_1, App_1, u, c;
    return {
        setters: [
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            u = new Utils_1.default();
            c = new App_1.default(u);
            c.hello();
        }
    };
});

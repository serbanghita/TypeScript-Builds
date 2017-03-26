System.register("common/Utils", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utils;
    return {
        setters: [],
        execute: function () {
            Utils = (function () {
                function Utils() {
                }
                Utils.prototype.randomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                return Utils;
            }());
            exports_1("Utils", Utils);
        }
    };
});
System.register("client/Client", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Client;
    return {
        setters: [],
        execute: function () {
            Client = (function () {
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
            exports_2("Client", Client);
        }
    };
});
System.register("index", ["client/Client", "common/Utils"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Client_1, Utils_1, u, c;
    return {
        setters: [
            function (Client_1_1) {
                Client_1 = Client_1_1;
            },
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            }
        ],
        execute: function () {
            u = new Utils_1.Utils();
            c = new Client_1.Client(u);
            c.hello();
        }
    };
});

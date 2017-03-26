define("common/Utils", ["require", "exports"], function (require, exports) {
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
});
define("client/Client", ["require", "exports"], function (require, exports) {
    "use strict";
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
});
define("index", ["require", "exports", "client/Client", "common/Utils"], function (require, exports, Client_1, Utils_1) {
    "use strict";
    var u = new Utils_1.Utils();
    var c = new Client_1.Client(u);
    c.hello();
});

!function(e){var c={};function n(t){if(c[t])return c[t].exports;var I=c[t]={i:t,l:!1,exports:{}};return e[t].call(I.exports,I,I.exports,n),I.l=!0,I.exports}n.m=e,n.c=c,n.d=function(e,c,t){n.o(e,c)||Object.defineProperty(e,c,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,"a",c),c},n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},n.p="/js/",n(n.s=5)}([function(module,exports){eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCI/YzQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar Utils = /** @class */ (function () {\n    function Utils() {\n    }\n    Utils.prototype.randomInt = function (min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    };\n    return Utils;\n}());\nexports.default = Utils;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcDEvc3JjL1V0aWxzLnRzP2MyNjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXRpbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgfVxuICAgIFV0aWxzLnByb3RvdHlwZS5yYW5kb21JbnQgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcbiAgICByZXR1cm4gVXRpbHM7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVXRpbHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar ClientApp = /** @class */ (function () {\n    function ClientApp(util) {\n        this.util = util;\n        this.util = util;\n    }\n    ClientApp.prototype.getStuff = function () {\n        return this.util.randomInt(0, 1000);\n    };\n    return ClientApp;\n}());\nexports.default = ClientApp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcDEvc3JjL0NsaWVudEFwcC50cz9mZjc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENsaWVudEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGllbnRBcHAodXRpbCkge1xuICAgICAgICB0aGlzLnV0aWwgPSB1dGlsO1xuICAgICAgICB0aGlzLnV0aWwgPSB1dGlsO1xuICAgIH1cbiAgICBDbGllbnRBcHAucHJvdG90eXBlLmdldFN0dWZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGlsLnJhbmRvbUludCgwLCAxMDAwKTtcbiAgICB9O1xuICAgIHJldHVybiBDbGllbnRBcHA7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2xpZW50QXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, "__esModule", { value: true });\nvar React = __webpack_require__(0);\nvar ClientApp_1 = __webpack_require__(2);\nvar Utils_1 = __webpack_require__(1);\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App() {\n        var _this = _super.call(this) || this;\n        _this.client = new ClientApp_1.default(new Utils_1.default());\n        return _this;\n    }\n    App.prototype.render = function () {\n        return (React.createElement("div", { className: "app" },\n            React.createElement("div", null,\n                "React App ",\n                this.client.getStuff())));\n    };\n    return App;\n}(React.Component));\nexports.default = App;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcDIvc3JjL0FwcC50c3g/N2Q2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIENsaWVudEFwcF8xID0gcmVxdWlyZShcIi4uLy4uL2FwcDEvc3JjL0NsaWVudEFwcFwiKTtcbnZhciBVdGlsc18xID0gcmVxdWlyZShcIi4uLy4uL2FwcDEvc3JjL1V0aWxzXCIpO1xudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXBwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2xpZW50ID0gbmV3IENsaWVudEFwcF8xLmRlZmF1bHQobmV3IFV0aWxzXzEuZGVmYXVsdCgpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFwcFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJSZWFjdCBBcHAgXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZ2V0U3R1ZmYoKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHA7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')},function(module,exports){eval("module.exports = ReactDOM;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCI/NGIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n")},function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar React = __webpack_require__(0);\nvar ReactDOM = __webpack_require__(4);\nvar App_1 = __webpack_require__(3);\nReactDOM.render(React.createElement(App_1.default, null), document.getElementById("app"));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcDIvc3JjL2luZGV4LnRzeD9iMTVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbnZhciBBcHBfMSA9IHJlcXVpcmUoXCIuL0FwcFwiKTtcblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcF8xLmRlZmF1bHQsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n')}]);
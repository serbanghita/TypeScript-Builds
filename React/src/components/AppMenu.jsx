"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AppMenu = (function (_super) {
    __extends(AppMenu, _super);
    function AppMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [
                { label: "Intro", link: "#page/intro" },
                { label: "Granite", link: "#page/granite" },
                { label: "SuperComponents", link: "#page/supercomponents" },
                { label: "Variations", link: "#page/variations" },
                { label: "Targets", link: "#page/targets" },
            ],
        };
        return _this;
    }
    AppMenu.prototype.render = function () {
        return (<div>
                {this.state.items[0].label}
            </div>);
    };
    return AppMenu;
}(React.Component));
exports.AppMenu = AppMenu;

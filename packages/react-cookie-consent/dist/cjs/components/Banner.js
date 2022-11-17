"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function Banner(_a) {
    var _b = _a.content, content = _b === void 0 ? "empty string" : _b;
    return (react_1["default"].createElement("div", { className: 'App' },
        react_1["default"].createElement("header", { className: 'App-header' },
            react_1["default"].createElement("h1", null,
                "COOKIE CONSENT - ",
                content))));
}
exports["default"] = Banner;
//# sourceMappingURL=Banner.js.map
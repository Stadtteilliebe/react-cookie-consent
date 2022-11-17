"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/prefer-as-const */
var react_1 = tslib_1.__importDefault(require("react"));
var STYLES = {
    container: {
        // somehow ts troughs an error here
        position: "fixed",
        boxSizing: "border-box",
        overflowY: "auto",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto auto",
        width: "min(90vw, 400px)",
        height: "min(600px, 80vh)",
        background: "white",
        boxShadow: "0px 0px 2.2px rgba(0, 0, 0, 0.02),  0px 0px 5.3px rgba(0, 0, 0, 0.028),  0px 0px 10px rgba(0, 0, 0, 0.035),  0px 0px 17.9px rgba(0, 0, 0, 0.042),  0px 0px 33.4px rgba(0, 0, 0, 0.05),  0px 0px 80px rgba(0, 0, 0, 0.07)",
        borderRadius: "5px",
        padding: "10px 20px"
    }
};
function Banner(_a) {
    var closeBanner = _a.closeBanner, title = _a.title, content = _a.content, services = _a.services;
    // const [consent, setConsent] = React.useState()
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("submit");
    };
    var handleChange = function (e) {
        console.group(e);
    };
    return (react_1["default"].createElement("div", { style: STYLES.container },
        react_1["default"].createElement("h2", null, title),
        react_1["default"].createElement("p", null, content),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            services.map(function (serv, index) { return (react_1["default"].createElement("div", { key: index },
                react_1["default"].createElement("h3", null, serv.title),
                react_1["default"].createElement("details", null,
                    react_1["default"].createElement("summary", null, "Mehr erfahren"),
                    serv.description),
                react_1["default"].createElement("input", { type: 'checkbox', "data-id": serv.id, onChange: handleChange }))); }),
            react_1["default"].createElement("button", { type: 'submit' }, "Speichern"),
            react_1["default"].createElement("button", { onClick: function () { return closeBanner(false); } }, "Schlie\u00DFen"))));
}
exports["default"] = Banner;
//# sourceMappingURL=Banner.js.map
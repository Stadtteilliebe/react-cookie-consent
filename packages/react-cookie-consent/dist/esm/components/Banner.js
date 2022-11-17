import React from "react";
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
    var title = _a.title, content = _a.content, services = _a.services;
    // const [consent, setConsent] = React.useState()
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("submit");
    };
    var handleChange = function (e) {
        console.group(e);
    };
    return (React.createElement("div", { style: STYLES.container },
        React.createElement("h2", null, title),
        React.createElement("p", null, content),
        React.createElement("form", { onSubmit: handleSubmit },
            services.map(function (serv) { return (React.createElement(React.Fragment, null,
                React.createElement("h3", null, serv.title),
                React.createElement("details", null,
                    React.createElement("summary", null, "Mehr erfahren"),
                    serv.description),
                React.createElement("input", { type: 'checkbox', "data-id": serv.id, onChange: handleChange }))); }),
            React.createElement("button", { type: 'submit' }, "Speichern"))));
}
export default Banner;
//# sourceMappingURL=Banner.js.map
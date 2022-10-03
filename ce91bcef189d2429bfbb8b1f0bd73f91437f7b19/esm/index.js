"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactAccordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function ReactAccordion(props) {
    const { items } = props;
    return ((0, jsx_runtime_1.jsx)("ul", { children: items.map((item) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("details", { "aria-label": item.name, open: item.open, children: [(0, jsx_runtime_1.jsx)("summary", { children: item.heading }), item.child] }) }, item.name))) }));
}
exports.ReactAccordion = ReactAccordion;
exports.default = ReactAccordion;
module.exports = ReactAccordion;
//# sourceMappingURL=index.js.map
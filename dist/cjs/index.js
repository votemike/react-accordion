"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ReactAccordion = (props) => {
    return ((0, jsx_runtime_1.jsx)("ul", { children: props.items.map(item => {
            return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("details", Object.assign({ "aria-label": item.name, open: item.open }, { children: [(0, jsx_runtime_1.jsx)("summary", { children: item.heading }), item.child] })) }, item.name));
        }) }));
};
exports.default = ReactAccordion;
//# sourceMappingURL=index.js.map
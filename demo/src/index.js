"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const react_accordion_1 = __importDefault(require("react-accordion"));
const data = [
    {
        name: 'Privacy',
        heading: (0, jsx_runtime_1.jsx)("span", { children: "Privacy" }),
        child: (0, jsx_runtime_1.jsxs)("div", { children: ["Privacy is ", (0, jsx_runtime_1.jsx)("a", { href: "https://apple.com/privacy", children: "very" }), " important to Apple."] })
    },
    {
        name: 'A Table',
        heading: 'A Table',
        child: (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { children: "Hello" }) }) }),
        open: true
    }
];
const DemoPage = () => {
    return ((0, jsx_runtime_1.jsx)(react_accordion_1.default, { items: data }));
};
const main = () => {
    const appNode = document.querySelector('app');
    if (!appNode) {
        console.error('Could not find the <app> element on the DOM');
        return;
    }
    const root = client_1.default.createRoot(appNode);
    root.render((0, jsx_runtime_1.jsx)(DemoPage, {}));
};
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=index.js.map
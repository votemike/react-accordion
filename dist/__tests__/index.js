"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
const index_1 = __importDefault(require("../index"));
const data = [
    {
        name: 'Privacy',
        heading: (0, jsx_runtime_1.jsx)("span", { children: "Privacy" }),
        child: (0, jsx_runtime_1.jsx)("div", { children: "Privacy is very important to Apple." })
    },
    {
        name: 'A Picture',
        heading: 'A Picture',
        child: (0, jsx_runtime_1.jsx)("img", { src: "./images/applesOrange.jpeg" })
    }
];
test('a two item accordion renders two summaries', () => {
    const { queryAllByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { items: data }));
    const summaries = queryAllByRole('group');
    expect(summaries.length).toBe(2);
    expect(summaries[0]).toHaveTextContent('Privacy');
    expect(summaries[1]).toHaveTextContent('A Picture');
});
test('an accordion item details has an aria-name', () => {
    const { queryAllByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { items: data }));
    const summaries = queryAllByRole('group');
    expect(summaries[0]).toHaveAttribute('aria-label', 'Privacy');
    expect(summaries[1]).toHaveAttribute('aria-label', 'A Picture');
});
test('the open prop is passed to the item', () => {
    const { queryAllByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { items: data }));
    const summaries = queryAllByRole('group');
    expect(summaries[0]).toHaveAttribute('aria-label', 'Privacy');
    expect(summaries[1]).toHaveAttribute('aria-label', 'A Picture');
});
//# sourceMappingURL=index.js.map
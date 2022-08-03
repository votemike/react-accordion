import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ReactAccordion(props) {
    const { items } = props;
    return (_jsx("ul", { children: items.map((item) => (_jsx("li", { children: _jsxs("details", { "aria-label": item.name, open: item.open, children: [_jsx("summary", { children: item.heading }), item.child] }) }, item.name))) }));
}
export default ReactAccordion;
//# sourceMappingURL=index.js.map
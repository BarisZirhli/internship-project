"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var page_module_css_1 = require("./page.module.css");
function Home() {
    var _a = react_1.useState(Array(10).fill("")), squares = _a[0], setSquares = _a[1];
    var _b = react_1.useState([]), stack = _b[0], setStack = _b[1];
    var _c = react_1.useState(Array.from({ length: stack.length })), numbers = _c[0], setNumbers = _c[1];
    var onBackButtonClick = function () {
        var lastAction = stack.pop();
        if (!lastAction) {
            return alert("no action");
        }
        var newSquares = __spreadArrays(squares);
        newSquares[lastAction.index] = lastAction.previousValue;
        if (lastAction.index > -1) {
            numbers.splice(lastAction.index, 1); // 2nd parameter means remove one item only
        }
        var newNumbers = stack.map(function (action) { return action.index; });
        setSquares(newSquares);
        setNumbers(newNumbers);
    };
    var onSquareClick = function (index) {
        var newSquares = __spreadArrays(squares);
        var newStack = __spreadArrays(stack);
        if (newSquares[index] === "x") {
            newSquares[index] = "";
            newStack.push({ type: "toggle", index: index, previousValue: "x" });
        }
        else {
            newSquares[index] = "x";
            newStack.push({ type: "toggle", index: index, previousValue: "" });
        }
        numbers.push(index);
        setSquares(newSquares);
        setStack(newStack);
        setNumbers(numbers);
    };
    return (React.createElement("main", { className: page_module_css_1["default"].main },
        React.createElement("button", { className: page_module_css_1["default"].backButton, onClick: onBackButtonClick }, "GER\u0130 AL"),
        React.createElement("div", { className: page_module_css_1["default"].squareContainer }, squares.map(function (value, index) { return (React.createElement("div", { key: index, className: page_module_css_1["default"].square, onClick: function () { return onSquareClick(index); } }, value)); })),
        React.createElement("div", null, numbers.map(function (index) { return (React.createElement("div", { onClick: function () { return onSquareClick; } }, Number(index) + 1)); }))));
}
exports["default"] = Home;

webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var _CountryDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountryDetails */ \"./components/CountryDetails.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/CountrySelector.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: center;\\n    align-items:center;\\n    flex-direction: column\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar CountrySelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = CountrySelectorContainer;\n\nfunction CountrySelector() {\n  _s();\n\n  var countries = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://covid19.mathdro.id/api/countries');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('PT'),\n      selectedCountry = _useState[0],\n      setSelectedCountry = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Portugal'),\n      selectedCountryText = _useState2[0],\n      setSelectedCountryText = _useState2[1];\n\n  if (!countries) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 27\n    }\n  }, \"Loading...\");\n  return __jsx(CountrySelectorContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"select\", {\n    onChange: function onChange(e) {\n      setSelectedCountryText(e.target.options[e.target.selectedIndex].text);\n      setSelectedCountry(e.target.value);\n    },\n    value: selectedCountry,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 8\n    }\n  }, countries.countries.map(function (country) {\n    return __jsx(\"option\", {\n      key: country.iso2,\n      value: country.iso2,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, country.name);\n  })), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 8\n    }\n  }, selectedCountryText), __jsx(\"img\", {\n    src: \"https://www.countryflags.io/\".concat(selectedCountry, \"/flat/64.png\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 8\n    }\n  }), __jsx(_CountryDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    country: selectedCountry,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 8\n    }\n  }));\n}\n\n_s(CountrySelector, \"Ex06AWUl2YwvDzKAUSs5njplYTA=\", false, function () {\n  return [_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c2 = CountrySelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountrySelector);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CountrySelectorContainer\");\n$RefreshReg$(_c2, \"CountrySelector\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50cnlTZWxlY3Rvci5qcz82ZDZjIl0sIm5hbWVzIjpbIkNvdW50cnlTZWxlY3RvckNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNvdW50cnlTZWxlY3RvciIsImNvdW50cmllcyIsInVzZVN0YXRzIiwidXNlU3RhdGUiLCJzZWxlY3RlZENvdW50cnkiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJzZWxlY3RlZENvdW50cnlUZXh0Iiwic2V0U2VsZWN0ZWRDb3VudHJ5VGV4dCIsImUiLCJ0YXJnZXQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsIm1hcCIsImNvdW50cnkiLCJpc28yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQTlCO0tBQU1GLHdCOztBQVFOLFNBQVNHLGVBQVQsR0FBMkI7QUFBQTs7QUFDdkIsTUFBTUMsU0FBUyxHQUFHQyxrRUFBUSxDQUFDLDBDQUFELENBQTFCOztBQUR1QixrQkFFdUJDLHNEQUFRLENBQUMsSUFBRCxDQUYvQjtBQUFBLE1BRWhCQyxlQUZnQjtBQUFBLE1BRUNDLGtCQUZEOztBQUFBLG1CQUcrQkYsc0RBQVEsQ0FBQyxVQUFELENBSHZDO0FBQUEsTUFHaEJHLG1CQUhnQjtBQUFBLE1BR0tDLHNCQUhMOztBQUl2QixNQUFHLENBQUNOLFNBQUosRUFBZSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDZixTQUNBLE1BQUMsd0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHO0FBQ0MsWUFBUSxFQUFFLGtCQUFBTyxDQUFDLEVBQUk7QUFDWEQsNEJBQXNCLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUFULENBQWlCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsYUFBMUIsRUFBeUNDLElBQTFDLENBQXRCO0FBQ0FQLHdCQUFrQixDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0ksS0FBVixDQUFsQjtBQUNILEtBSkY7QUFLQyxTQUFLLEVBQUlULGVBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9DSCxTQUFTLENBQUNBLFNBQVYsQ0FBb0JhLEdBQXBCLENBQXdCLFVBQVNDLE9BQVQsRUFBaUI7QUFDdEMsV0FDQztBQUNJLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxJQURqQjtBQUVJLFdBQUssRUFBRUQsT0FBTyxDQUFDQyxJQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUtELE9BQU8sQ0FBQ0UsSUFKYixDQUREO0FBUUYsR0FURCxDQVBELENBRkgsRUFvQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLWCxtQkFBTCxDQXBCSCxFQXFCRztBQUFLLE9BQUcsd0NBQWlDRixlQUFqQyxpQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJILEVBc0JHLE1BQUMsdURBQUQ7QUFBZ0IsV0FBTyxFQUFJQSxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJILENBREE7QUE0Qkg7O0dBakNRSixlO1VBQ2FFLDBEOzs7TUFEYkYsZTtBQW1DTUEsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50cnlTZWxlY3Rvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0YXRzIGZyb20gXCIuLi91dGlscy91c2VTdGF0cy5qc1wiXG5pbXBvcnQgQ291bnRyeURldGFpbHMgZnJvbSBcIi4vQ291bnRyeURldGFpbHNcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBDb3VudHJ5U2VsZWN0b3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuYDtcblxuZnVuY3Rpb24gQ291bnRyeVNlbGVjdG9yKCkge1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHVzZVN0YXRzKCdodHRwczovL2NvdmlkMTkubWF0aGRyby5pZC9hcGkvY291bnRyaWVzJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ291bnRyeSwgc2V0U2VsZWN0ZWRDb3VudHJ5XSA9IHVzZVN0YXRlKCdQVCcpO1xuICAgIGNvbnN0IFtzZWxlY3RlZENvdW50cnlUZXh0LCBzZXRTZWxlY3RlZENvdW50cnlUZXh0XSA9IHVzZVN0YXRlKCdQb3J0dWdhbCcpO1xuICAgIGlmKCFjb3VudHJpZXMpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIHJldHVybiAoXG4gICAgPENvdW50cnlTZWxlY3RvckNvbnRhaW5lcj5cbiAgICAgICAgXG4gICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvdW50cnlUZXh0KGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF0udGV4dCk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZSA9IHtzZWxlY3RlZENvdW50cnl9XG4gICAgICAgID5cbiAgICAgICB7Y291bnRyaWVzLmNvdW50cmllcy5tYXAoZnVuY3Rpb24oY291bnRyeSl7XG4gICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2NvdW50cnkuaXNvMn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnRyeS5pc28yfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VudHJ5Lm5hbWV9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICA8L3NlbGVjdD5cbiAgICAgICA8aDE+e3NlbGVjdGVkQ291bnRyeVRleHR9PC9oMT5cbiAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke3NlbGVjdGVkQ291bnRyeX0vZmxhdC82NC5wbmdgfT48L2ltZz5cbiAgICAgICA8Q291bnRyeURldGFpbHMgY291bnRyeSA9IHtzZWxlY3RlZENvdW50cnl9PjwvQ291bnRyeURldGFpbHM+XG4gICAgPC9Db3VudHJ5U2VsZWN0b3JDb250YWluZXI+XG4gICAgXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CountrySelector.js\n");

/***/ })

})
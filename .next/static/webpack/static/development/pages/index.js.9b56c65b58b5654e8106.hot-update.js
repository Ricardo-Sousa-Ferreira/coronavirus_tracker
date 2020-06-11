webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/Stats.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items:center;\\n    font-size: 2em;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: center;\\n    align-items:center;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StatContainer;\nvar StatBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StatBox;\n\nfunction Stats() {\n  _s();\n\n  var stats = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('http://covid19.mathdro.id/api/');\n  if (!stats) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(StatContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, \"Confirmed\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, stats.confirmed.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Deaths\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, stats.deaths.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Recovered\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, stats.recovered.value)));\n}\n\n_s(Stats, \"s+Z56IfX4wiafbK0Bc4N0iptpVY=\", false, function () {\n  return [_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c3 = Stats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StatContainer\");\n$RefreshReg$(_c2, \"StatBox\");\n$RefreshReg$(_c3, \"Stats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRzLmpzPzhlNzAiXSwibmFtZXMiOlsiU3RhdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0YXRCb3giLCJTdGF0cyIsInN0YXRzIiwidXNlU3RhdHMiLCJjb25maXJtZWQiLCJ2YWx1ZSIsImRlYXRocyIsInJlY292ZXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0tBQU1GLGE7QUFNTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUMsTzs7QUFPTixTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQ2IsTUFBTUMsS0FBSyxHQUFHQyxrRUFBUSxDQUFDLGdDQUFELENBQXRCO0FBQ0EsTUFBRyxDQUFDRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsU0FDQSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxLQUF2QixDQUZKLENBREosRUFLSSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0gsS0FBSyxDQUFDSSxNQUFOLENBQWFELEtBQXBCLENBRkosQ0FMSixFQVNJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0gsS0FBSyxDQUFDSyxTQUFOLENBQWdCRixLQUF2QixDQUZKLENBVEosQ0FEQTtBQWdCSDs7R0FuQlFKLEs7VUFDU0UsMEQ7OztNQURURixLO0FBcUJNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RhdHMgZnJvbSBcIi4uL3V0aWxzL3VzZVN0YXRzLmpzXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgU3RhdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5cbmA7XG5jb25zdCBTdGF0Qm94ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbmA7XG5mdW5jdGlvbiBTdGF0cygpIHtcbiAgICBjb25zdCBzdGF0cyA9IHVzZVN0YXRzKCdodHRwOi8vY292aWQxOS5tYXRoZHJvLmlkL2FwaS8nKTtcbiAgICBpZighc3RhdHMpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIHJldHVybiAoXG4gICAgPFN0YXRDb250YWluZXI+XG4gICAgICAgIDxTdGF0Qm94PlxuICAgICAgICAgICAgPGgzPkNvbmZpcm1lZDwvaDM+XG4gICAgICAgICAgICA8c3Bhbj57c3RhdHMuY29uZmlybWVkLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgPC9TdGF0Qm94PlxuICAgICAgICA8U3RhdEJveD5cbiAgICAgICAgICAgIDxoMz5EZWF0aHM8L2gzPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmRlYXRocy52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvU3RhdEJveD5cbiAgICAgICAgPFN0YXRCb3g+XG4gICAgICAgICAgICA8aDM+UmVjb3ZlcmVkPC9oMz5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5yZWNvdmVyZWQudmFsdWV9PC9zcGFuPlxuICAgICAgICA8L1N0YXRCb3g+XG4gICAgPC9TdGF0Q29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Stats.js\n");

/***/ })

})
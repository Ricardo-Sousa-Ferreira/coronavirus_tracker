webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountryDetails.js":
/*!**************************************!*\
  !*** ./components/CountryDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/CountryDetails.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 20px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items:center;\\n    font-size: 2rem;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nmargin: 20px;\\n    display: flex;\\n    justify-content: center;\\n    align-items:center;\\n    font-size: 1.2em;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar CountryDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = CountryDetailsContainer;\nvar StatBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StatBox;\nvar Boxtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3(_templateObject3());\n_c3 = Boxtitle;\n\nfunction CountryDetails(props) {\n  _s();\n\n  var stats = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://covid19.mathdro.id/api/countries/\" + props.country);\n  if (!stats) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(CountryDetailsContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Confirmed\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, stats.confirmed.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"Deaths\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, stats.deaths.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Recovered\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, stats.recovered.value)));\n}\n\n_s(CountryDetails, \"s+Z56IfX4wiafbK0Bc4N0iptpVY=\", false, function () {\n  return [_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c4 = CountryDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryDetails);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"CountryDetailsContainer\");\n$RefreshReg$(_c2, \"StatBox\");\n$RefreshReg$(_c3, \"Boxtitle\");\n$RefreshReg$(_c4, \"CountryDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50cnlEZXRhaWxzLmpzPzEyMTUiXSwibmFtZXMiOlsiQ291bnRyeURldGFpbHNDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTdGF0Qm94IiwiQm94dGl0bGUiLCJoMyIsIkNvdW50cnlEZXRhaWxzIiwicHJvcHMiLCJzdGF0cyIsInVzZVN0YXRzIiwiY291bnRyeSIsImNvbmZpcm1lZCIsInZhbHVlIiwiZGVhdGhzIiwicmVjb3ZlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBN0I7S0FBTUYsdUI7QUFRTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUMsTztBQVFOLElBQU1DLFFBQVEsR0FBR0gseURBQU0sQ0FBQ0ksRUFBVixvQkFBZDtNQUFNRCxROztBQUlOLFNBQVNFLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzNCLE1BQU1DLEtBQUssR0FBR0Msa0VBQVEsQ0FBQyw2Q0FBNkNGLEtBQUssQ0FBQ0csT0FBcEQsQ0FBdEI7QUFDQSxNQUFHLENBQUNGLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDWCxTQUNBLE1BQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUUsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsS0FBdkIsQ0FGSixDQURKLEVBS0ksTUFBRSxPQUFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSixLQUFLLENBQUNLLE1BQU4sQ0FBYUQsS0FBcEIsQ0FGSixDQUxKLEVBU0ksTUFBRSxPQUFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0osS0FBSyxDQUFDTSxTQUFOLENBQWdCRixLQUF2QixDQUZKLENBVEosQ0FEQTtBQWdCSDs7R0FuQlFOLGM7VUFDU0csMEQ7OztNQURUSCxjO0FBb0JNQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ291bnRyeURldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RhdHMgZnJvbSBcIi4uL3V0aWxzL3VzZVN0YXRzLmpzXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgQ291bnRyeURldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxubWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG5gO1xuXG5jb25zdCBTdGF0Qm94ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG5gO1xuXG5jb25zdCBCb3h0aXRsZSA9IHN0eWxlZC5oM2BcbiAgICBtYXJnaW46IDIwcHg7XG5gO1xuXG5mdW5jdGlvbiBDb3VudHJ5RGV0YWlscyhwcm9wcykge1xuICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoXCJodHRwOi8vY292aWQxOS5tYXRoZHJvLmlkL2FwaS9jb3VudHJpZXMvXCIgKyBwcm9wcy5jb3VudHJ5KTtcbiAgICBpZighc3RhdHMpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIHJldHVybiAoXG4gICAgPENvdW50cnlEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgICA8IFN0YXRCb3g+XG4gICAgICAgICAgICA8Qm94dGl0bGU+Q29uZmlybWVkPC9Cb3h0aXRsZT5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5jb25maXJtZWQudmFsdWV9PC9zcGFuPlxuICAgICAgICA8LyBTdGF0Qm94PlxuICAgICAgICA8IFN0YXRCb3g+XG4gICAgICAgICAgICA8Qm94dGl0bGU+RGVhdGhzPC9Cb3h0aXRsZT5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5kZWF0aHMudmFsdWV9PC9zcGFuPlxuICAgICAgICA8LyBTdGF0Qm94PlxuICAgICAgICA8IFN0YXRCb3g+XG4gICAgICAgICAgICA8Qm94dGl0bGU+UmVjb3ZlcmVkPC9Cb3h0aXRsZT5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5yZWNvdmVyZWQudmFsdWV9PC9zcGFuPlxuICAgICAgICA8LyBTdGF0Qm94PlxuICAgIDwvQ291bnRyeURldGFpbHNDb250YWluZXI+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeURldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CountryDetails.js\n");

/***/ })

})
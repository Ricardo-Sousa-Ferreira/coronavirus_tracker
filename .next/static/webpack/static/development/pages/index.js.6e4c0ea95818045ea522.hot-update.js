webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/Stats.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 20px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: 2rem;\\n    \\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: center;\\n    align-items:center;\\n    border: 2px solid ;\\n    border-radius: 10px;\\n    padding: 10px;\\n    margin-top: 40px;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StatContainer;\nvar StatBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StatBox;\nvar Boxtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h3(_templateObject3());\n_c3 = Boxtitle;\n\nfunction Stats() {\n  _s();\n\n  var stats = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('http://covid19.mathdro.id/api/');\n  if (!stats) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(StatContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"Confirmed\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, stats.confirmed.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Deaths\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, stats.deaths.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"Recovered\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, stats.recovered.value)));\n}\n\n_s(Stats, \"s+Z56IfX4wiafbK0Bc4N0iptpVY=\", false, function () {\n  return [_utils_useStats_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c4 = Stats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"StatContainer\");\n$RefreshReg$(_c2, \"StatBox\");\n$RefreshReg$(_c3, \"Boxtitle\");\n$RefreshReg$(_c4, \"Stats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRzLmpzPzhlNzAiXSwibmFtZXMiOlsiU3RhdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0YXRCb3giLCJCb3h0aXRsZSIsImgzIiwiU3RhdHMiLCJzdGF0cyIsInVzZVN0YXRzIiwiY29uZmlybWVkIiwidmFsdWUiLCJkZWF0aHMiLCJyZWNvdmVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQVVOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNQyxPO0FBU04sSUFBTUMsUUFBUSxHQUFHSCx5REFBTSxDQUFDSSxFQUFWLG9CQUFkO01BQU1ELFE7O0FBSU4sU0FBU0UsS0FBVCxHQUFpQjtBQUFBOztBQUNiLE1BQU1DLEtBQUssR0FBR0Msa0VBQVEsQ0FBQyxnQ0FBRCxDQUF0QjtBQUNBLE1BQUcsQ0FBQ0QsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNYLFNBQ0EsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLEtBQXZCLENBSEosQ0FESixFQU1JLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUQsS0FBcEIsQ0FGSixDQU5KLEVBVUksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JGLEtBQXZCLENBRkosQ0FWSixDQURBO0FBaUJIOztHQXBCUUosSztVQUNTRSwwRDs7O01BRFRGLEs7QUFzQk1BLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TdGF0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdGF0cyBmcm9tIFwiLi4vdXRpbHMvdXNlU3RhdHMuanNcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBTdGF0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbmA7XG5jb25zdCBTdGF0Qm94ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIFxuYDtcblxuY29uc3QgQm94dGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOiAyMHB4O1xuYDtcblxuZnVuY3Rpb24gU3RhdHMoKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB1c2VTdGF0cygnaHR0cDovL2NvdmlkMTkubWF0aGRyby5pZC9hcGkvJyk7XG4gICAgaWYoIXN0YXRzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICByZXR1cm4gKCAgICBcbiAgICA8U3RhdENvbnRhaW5lcj5cbiAgICAgICAgPFN0YXRCb3g+XG4gICAgICAgIFxuICAgICAgICAgICAgPEJveHRpdGxlPkNvbmZpcm1lZDwvQm94dGl0bGU+XG4gICAgICAgICAgICA8c3Bhbj57c3RhdHMuY29uZmlybWVkLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgPC9TdGF0Qm94PlxuICAgICAgICA8U3RhdEJveD5cbiAgICAgICAgICAgIDxoMz5EZWF0aHM8L2gzPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmRlYXRocy52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvU3RhdEJveD5cbiAgICAgICAgPFN0YXRCb3g+XG4gICAgICAgICAgICA8aDM+UmVjb3ZlcmVkPC9oMz5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5yZWNvdmVyZWQudmFsdWV9PC9zcGFuPlxuICAgICAgICA8L1N0YXRCb3g+XG4gICAgPC9TdGF0Q29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Stats.js\n");

/***/ })

})
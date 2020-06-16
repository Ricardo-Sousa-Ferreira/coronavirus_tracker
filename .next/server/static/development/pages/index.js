module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CountryDetails.js":
/*!**************************************!*\
  !*** ./components/CountryDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/CountryDetails.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CountryDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\nmargin: 10px;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    font-size: 1.2em;\n`;\nconst StatBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    font-size: 2rem;\n`;\nconst Boxtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3`\n    margin: 20px;\n`;\n\nfunction CountryDetails(props) {\n  const stats = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://covid19.mathdro.id/api/countries/\" + props.country);\n  if (!stats) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(CountryDetailsContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Confirmed\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, stats.confirmed.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"Deaths\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, stats.deaths.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Recovered\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, stats.recovered.value)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50cnlEZXRhaWxzLmpzPzEyMTUiXSwibmFtZXMiOlsiQ291bnRyeURldGFpbHNDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTdGF0Qm94IiwiQm94dGl0bGUiLCJoMyIsIkNvdW50cnlEZXRhaWxzIiwicHJvcHMiLCJzdGF0cyIsInVzZVN0YXRzIiwiY291bnRyeSIsImNvbmZpcm1lZCIsInZhbHVlIiwiZGVhdGhzIiwicmVjb3ZlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUEzQztBQVFBLE1BQU1DLE9BQU8sR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7O0NBQTNCO0FBUUEsTUFBTUUsUUFBUSxHQUFHSCx3REFBTSxDQUFDSSxFQUFHOztDQUEzQjs7QUFJQSxTQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUMzQixRQUFNQyxLQUFLLEdBQUdDLGtFQUFRLENBQUMsNkNBQTZDRixLQUFLLENBQUNHLE9BQXBELENBQXRCO0FBQ0EsTUFBRyxDQUFDRixLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsU0FDQSxNQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFFLE9BQUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEtBQXZCLENBRkosQ0FESixFQUtJLE1BQUUsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0osS0FBSyxDQUFDSyxNQUFOLENBQWFELEtBQXBCLENBRkosQ0FMSixFQVNJLE1BQUUsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9KLEtBQUssQ0FBQ00sU0FBTixDQUFnQkYsS0FBdkIsQ0FGSixDQVRKLENBREE7QUFnQkg7O0FBQ2NOLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3VudHJ5RGV0YWlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdGF0cyBmcm9tIFwiLi4vdXRpbHMvdXNlU3RhdHMuanNcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBDb3VudHJ5RGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbmA7XG5cbmNvbnN0IFN0YXRCb3ggPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbmA7XG5cbmNvbnN0IEJveHRpdGxlID0gc3R5bGVkLmgzYFxuICAgIG1hcmdpbjogMjBweDtcbmA7XG5cbmZ1bmN0aW9uIENvdW50cnlEZXRhaWxzKHByb3BzKSB7XG4gICAgY29uc3Qgc3RhdHMgPSB1c2VTdGF0cyhcImh0dHA6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpL2NvdW50cmllcy9cIiArIHByb3BzLmNvdW50cnkpO1xuICAgIGlmKCFzdGF0cykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgcmV0dXJuIChcbiAgICA8Q291bnRyeURldGFpbHNDb250YWluZXI+XG4gICAgICAgIDwgU3RhdEJveD5cbiAgICAgICAgICAgIDxCb3h0aXRsZT5Db25maXJtZWQ8L0JveHRpdGxlPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmNvbmZpcm1lZC52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvIFN0YXRCb3g+XG4gICAgICAgIDwgU3RhdEJveD5cbiAgICAgICAgICAgIDxCb3h0aXRsZT5EZWF0aHM8L0JveHRpdGxlPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmRlYXRocy52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvIFN0YXRCb3g+XG4gICAgICAgIDwgU3RhdEJveD5cbiAgICAgICAgICAgIDxCb3h0aXRsZT5SZWNvdmVyZWQ8L0JveHRpdGxlPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLnJlY292ZXJlZC52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvIFN0YXRCb3g+XG4gICAgPC9Db3VudHJ5RGV0YWlsc0NvbnRhaW5lcj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5RGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CountryDetails.js\n");

/***/ }),

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var _CountryDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountryDetails */ \"./components/CountryDetails.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/CountrySelector.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CountrySelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    flex-direction: column;\n    font-size: 1.2em;\n    margin-top:30px;\n    border: 2px solid ;\n    border-radius: 10px;\n\n`;\nconst SelectInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.select`\n    margin-top: 20px;\n    font-size: 1.1em;\n    width: 280px;\n    padding-left:5px;\n`;\n\nfunction CountrySelector() {\n  const countries = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('https://covid19.mathdro.id/api/countries');\n  const {\n    0: selectedCountry,\n    1: setSelectedCountry\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('PT');\n  const {\n    0: selectedCountryText,\n    1: setSelectedCountryText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('Portugal');\n  if (!countries) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 27\n    }\n  }, \"Loading...\");\n  return __jsx(CountrySelectorContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(SelectInput, {\n    onChange: e => {\n      setSelectedCountryText(e.target.options[e.target.selectedIndex].text);\n      setSelectedCountry(e.target.value);\n    },\n    value: selectedCountry,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 8\n    }\n  }, countries.countries.map(function (country) {\n    return __jsx(\"option\", {\n      key: country.iso2,\n      value: country.iso2,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, country.name);\n  })), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 8\n    }\n  }, selectedCountryText), __jsx(\"img\", {\n    src: `https://www.countryflags.io/${selectedCountry}/flat/64.png`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 8\n    }\n  }), __jsx(_CountryDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    country: selectedCountry,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 8\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountrySelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50cnlTZWxlY3Rvci5qcz82ZDZjIl0sIm5hbWVzIjpbIkNvdW50cnlTZWxlY3RvckNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlNlbGVjdElucHV0Iiwic2VsZWN0IiwiQ291bnRyeVNlbGVjdG9yIiwiY291bnRyaWVzIiwidXNlU3RhdHMiLCJzZWxlY3RlZENvdW50cnkiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ291bnRyeVRleHQiLCJzZXRTZWxlY3RlZENvdW50cnlUZXh0IiwiZSIsInRhcmdldCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwibWFwIiwiY291bnRyeSIsImlzbzIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSx3QkFBd0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7OztDQUE1QztBQVlBLE1BQU1DLFdBQVcsR0FBR0Ysd0RBQU0sQ0FBQ0csTUFBTzs7Ozs7Q0FBbEM7O0FBT0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixRQUFNQyxTQUFTLEdBQUdDLGtFQUFRLENBQUMsMENBQUQsQ0FBMUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Msc0RBQVEsQ0FBQyxJQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQWdERixzREFBUSxDQUFDLFVBQUQsQ0FBOUQ7QUFDQSxNQUFHLENBQUNKLFNBQUosRUFBZSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDZixTQUNBLE1BQUMsd0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHLE1BQUMsV0FBRDtBQUNDLFlBQVEsRUFBRU8sQ0FBQyxJQUFJO0FBQ1hELDRCQUFzQixDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLGFBQTFCLEVBQXlDQyxJQUExQyxDQUF0QjtBQUNBUix3QkFBa0IsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNJLEtBQVYsQ0FBbEI7QUFDSCxLQUpGO0FBS0MsU0FBSyxFQUFJVixlQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQ0YsU0FBUyxDQUFDQSxTQUFWLENBQW9CYSxHQUFwQixDQUF3QixVQUFTQyxPQUFULEVBQWlCO0FBQ3RDLFdBQ0M7QUFDSSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsSUFEakI7QUFFSSxXQUFLLEVBQUVELE9BQU8sQ0FBQ0MsSUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlLRCxPQUFPLENBQUNFLElBSmIsQ0FERDtBQVFGLEdBVEQsQ0FQRCxDQUZILEVBb0JHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1gsbUJBQUwsQ0FwQkgsRUFxQkc7QUFBSyxPQUFHLEVBQUcsK0JBQThCSCxlQUFnQixjQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJILEVBc0JHLE1BQUMsdURBQUQ7QUFBZ0IsV0FBTyxFQUFJQSxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJILENBREE7QUE0Qkg7O0FBRWNILDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdGF0cyBmcm9tIFwiLi4vdXRpbHMvdXNlU3RhdHMuanNcIlxuaW1wb3J0IENvdW50cnlEZXRhaWxzIGZyb20gXCIuL0NvdW50cnlEZXRhaWxzXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgQ291bnRyeVNlbGVjdG9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5gO1xuXG5jb25zdCBTZWxlY3RJbnB1dCA9IHN0eWxlZC5zZWxlY3RgXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuYDtcblxuZnVuY3Rpb24gQ291bnRyeVNlbGVjdG9yKCkge1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHVzZVN0YXRzKCdodHRwczovL2NvdmlkMTkubWF0aGRyby5pZC9hcGkvY291bnRyaWVzJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQ291bnRyeSwgc2V0U2VsZWN0ZWRDb3VudHJ5XSA9IHVzZVN0YXRlKCdQVCcpO1xuICAgIGNvbnN0IFtzZWxlY3RlZENvdW50cnlUZXh0LCBzZXRTZWxlY3RlZENvdW50cnlUZXh0XSA9IHVzZVN0YXRlKCdQb3J0dWdhbCcpO1xuICAgIGlmKCFjb3VudHJpZXMpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIHJldHVybiAoXG4gICAgPENvdW50cnlTZWxlY3RvckNvbnRhaW5lcj5cbiAgICAgICAgXG4gICAgICAgPFNlbGVjdElucHV0XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ291bnRyeVRleHQoZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5zZWxlY3RlZEluZGV4XS50ZXh0KTtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ291bnRyeShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlID0ge3NlbGVjdGVkQ291bnRyeX1cbiAgICAgICAgPlxuICAgICAgIHtjb3VudHJpZXMuY291bnRyaWVzLm1hcChmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17Y291bnRyeS5pc28yfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5LmlzbzJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvdW50cnkubmFtZX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgIDwvU2VsZWN0SW5wdXQ+XG4gICAgICAgPGgxPntzZWxlY3RlZENvdW50cnlUZXh0fTwvaDE+XG4gICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtzZWxlY3RlZENvdW50cnl9L2ZsYXQvNjQucG5nYH0+PC9pbWc+XG4gICAgICAgPENvdW50cnlEZXRhaWxzIGNvdW50cnkgPSB7c2VsZWN0ZWRDb3VudHJ5fT48L0NvdW50cnlEZXRhaWxzPlxuICAgIDwvQ291bnRyeVNlbGVjdG9yQ29udGFpbmVyPlxuICAgIFxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CountrySelector.js\n");

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useStats.js */ \"./utils/useStats.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/components/Stats.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    border: 2px solid ;\n    border-radius: 10px;\n    padding: 10px;\n    margin-top: 40px;\n\n\n`;\nconst StatBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 2rem;\n`;\nconst Boxtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3`\n    margin: 20px;\n  \n`;\n\nfunction Stats() {\n  const stats = Object(_utils_useStats_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('http://covid19.mathdro.id/api/');\n  if (!stats) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(StatContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Confirmed\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, stats.confirmed.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Deaths\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, stats.deaths.value)), __jsx(StatBox, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(Boxtitle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Recovered\"), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, stats.recovered.value)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRzLmpzPzhlNzAiXSwibmFtZXMiOlsiU3RhdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0YXRCb3giLCJCb3h0aXRsZSIsImgzIiwiU3RhdHMiLCJzdGF0cyIsInVzZVN0YXRzIiwiY29uZmlybWVkIiwidmFsdWUiLCJkZWF0aHMiLCJyZWNvdmVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Q0FBakM7QUFXQSxNQUFNQyxPQUFPLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUEzQjtBQVFBLE1BQU1FLFFBQVEsR0FBR0gsd0RBQU0sQ0FBQ0ksRUFBRzs7O0NBQTNCOztBQUtBLFNBQVNDLEtBQVQsR0FBaUI7QUFDYixRQUFNQyxLQUFLLEdBQUdDLGtFQUFRLENBQUMsZ0NBQUQsQ0FBdEI7QUFDQSxNQUFHLENBQUNELEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDWCxTQUNBLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxLQUF2QixDQUhKLENBREosRUFNSSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ILEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxLQUFwQixDQUZKLENBTkosRUFVSSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JGLEtBQXZCLENBRkosQ0FWSixDQURBO0FBaUJIOztBQUVjSixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RhdHMgZnJvbSBcIi4uL3V0aWxzL3VzZVN0YXRzLmpzXCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuY29uc3QgU3RhdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG5cbmA7XG5jb25zdCBTdGF0Qm94ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuYDtcblxuY29uc3QgQm94dGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOiAyMHB4O1xuICBcbmA7XG5cbmZ1bmN0aW9uIFN0YXRzKCkge1xuICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoJ2h0dHA6Ly9jb3ZpZDE5Lm1hdGhkcm8uaWQvYXBpLycpO1xuICAgIGlmKCFzdGF0cykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgcmV0dXJuICggICAgXG4gICAgPFN0YXRDb250YWluZXI+XG4gICAgICAgIDxTdGF0Qm94PlxuICAgICAgICBcbiAgICAgICAgICAgIDxCb3h0aXRsZT5Db25maXJtZWQ8L0JveHRpdGxlPlxuICAgICAgICAgICAgPHNwYW4+e3N0YXRzLmNvbmZpcm1lZC52YWx1ZX08L3NwYW4+XG4gICAgICAgIDwvU3RhdEJveD5cbiAgICAgICAgPFN0YXRCb3g+XG4gICAgICAgICAgICA8Qm94dGl0bGU+RGVhdGhzPC9Cb3h0aXRsZT5cbiAgICAgICAgICAgIDxzcGFuPntzdGF0cy5kZWF0aHMudmFsdWV9PC9zcGFuPlxuICAgICAgICA8L1N0YXRCb3g+XG4gICAgICAgIDxTdGF0Qm94PlxuICAgICAgICAgICAgPEJveHRpdGxlPlJlY292ZXJlZDwvQm94dGl0bGU+XG4gICAgICAgICAgICA8c3Bhbj57c3RhdHMucmVjb3ZlcmVkLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgPC9TdGF0Qm94PlxuICAgIDwvU3RhdENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Stats.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Stats.js */ \"./components/Stats.js\");\n/* harmony import */ var _components_CountrySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CountrySelector.js */ \"./components/CountrySelector.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/lepracone/personal-projects/coronavirus_tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;  \n    font-family: 'Roboto', sans-serif;\n    \n   \n\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1`\nfont-size: 3em;\nmargin-bottom: 0px\n`;\nfunction IndexPage() {\n  return __jsx(MainContainer, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \"Covid-19 Tracker\"), __jsx(_components_Stats_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }), __jsx(_components_CountrySelector_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaXRsZSIsImgxIiwiSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7O0NBQWpDO0FBV0EsTUFBTUMsS0FBSyxHQUFHRix3REFBTSxDQUFDRyxFQUFHOzs7Q0FBeEI7QUFLZSxTQUFTQyxTQUFULEdBQXFCO0FBQ2hDLFNBQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQU9IIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RhdHMuanNcIlxuaW1wb3J0IENvdW50cnlTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3IuanNcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBcbiAgIFxuXG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbmZvbnQtc2l6ZTogM2VtO1xubWFyZ2luLWJvdHRvbTogMHB4XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGU+Q292aWQtMTkgVHJhY2tlcjwvVGl0bGU+XG4gICAgICAgICAgICA8U3RhdHM+PC9TdGF0cz5cbiAgICAgICAgICAgIDxDb3VudHJ5U2VsZWN0b3I+PC9Db3VudHJ5U2VsZWN0b3I+XG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useStats(url) {\n  const {\n    0: stats,\n    1: setStats\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function fetchData() {\n      console.log('Fetching Data');\n      const data = await fetch(url).then(res => res.json());\n      setStats(data);\n    }\n\n    fetchData();\n  }, [url]);\n  return stats;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStats);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91c2VTdGF0cy5qcz80ZGE0Il0sIm5hbWVzIjpbInVzZVN0YXRzIiwidXJsIiwic3RhdHMiLCJzZXRTdGF0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUFzQjtBQUNsQixRQUFLO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLEVBQWpDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaLG1CQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1QsR0FBRCxDQUFMLENBQVdVLElBQVgsQ0FDbEJDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRFcsQ0FBbkI7QUFFQVYsY0FBUSxDQUFDTSxJQUFELENBQVI7QUFDSDs7QUFDREgsYUFBUztBQUNaLEdBUlEsRUFRTixDQUFDTCxHQUFELENBUk0sQ0FBVDtBQVNBLFNBQU9DLEtBQVA7QUFDSDs7QUFFY0YsdUVBQWYiLCJmaWxlIjoiLi91dGlscy91c2VTdGF0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIHVzZVN0YXRzKHVybCl7XG4gICAgY29uc3Rbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIERhdGEnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwpLnRoZW5cbiAgICAgICAgICAgIChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgICAgICAgICBzZXRTdGF0cyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTsgICAgICAgXG4gICAgfSwgW3VybF0pO1xuICAgIHJldHVybiBzdGF0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3RhdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/useStats.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lepracone/personal-projects/coronavirus_tracker/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./fixtures/icon-test.svg");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fixtures/icon-test.svg":
/*!********************************!*\
  !*** ./fixtures/icon-test.svg ***!
  \********************************/
/*! exports provided: url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"url\", function() { return url; });\n\nconst url = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMTQuOTg4IDEuMzk2Yy0uMDU5LS4yNzUtLjMxLS40NDYtLjU2Mi0uMzgzbC0yLjQ0Mi42MThhLjQ4OC40ODggMCAwMC0uMzQzLjM1My41NDUuNTQ1IDAgMDAuMTEyLjVsLjUzMy42MDEtMi44NDcgMi43NzJMNy45NiA0LjMzYS40NDEuNDQxIDAgMDAtLjY2LjAxOWwtMy4xNzIgMy42M2MwIC4yNDcuMzUuNjE2LjY5NS42ODVsMi44MzItMy4yNDEgMS40NTIgMS41YS40NC40NCAwIDAwLjYzNC4wMWwzLjE5Ni0zLjExLjYwNy42ODZjLjExNy4xMzIuMjkuMTg1LjQ1NC4xNGEuNDkxLjQ5MSAwIDAwLjMzNS0uMzYzbC42NS0yLjY0MmEuNTU0LjU1NCAwIDAwLjAwNS0uMjQ3eiIKICAgICAgICAgICAgZmlsbC1ydWxlPSJub256ZXJvIgogICAgICAgIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iNC41IiBjeT0iOC4yIiByPSIxLjUiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE0LjUgNy4wMzhhLjUuNSAwIDAwLS41LjVWMTEuNWEuNS41IDAgMDEtLjUuNWgtMTJhLjUuNSAwIDAxLS41LS41di0xMGEuNS41IDAgMDEuNS0uNWg4LjI5MWEuNS41IDAgMTAwLTFIMS41QTEuNSAxLjUgMCAwMDAgMS41djEwQTEuNSAxLjUgMCAwMDEuNSAxM2gxMmExLjUgMS41IDAgMDAxLjUtMS41VjcuNTM4YS41LjUgMCAwMC0uNS0uNXpNMTQuNzY5IDE1SC43M2EuNDkxLjQ5MSAwIDAwLS40ODEuNWMwIC4yNzYuMjE2LjUuNDgxLjVoMTQuMDRhLjQ5MS40OTEgMCAwMC40ODEtLjVjMC0uMjc2LS4yMTYtLjUtLjQ4MS0uNXoiCiAgICAgICAgICAgIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICAvPgogICAgPC9nPgo8L3N2Zz4K\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (url);\n\n//# sourceURL=webpack:///./fixtures/icon-test.svg?");

/***/ })

/******/ });
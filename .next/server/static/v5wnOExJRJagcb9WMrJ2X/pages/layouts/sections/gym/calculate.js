module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WwQd");


/***/ }),

/***/ "WwQd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Calculate = () => __jsx("section", {
  className: "gym format bg-location p-0",
  id: "bmi"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  fluid: true
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  className: "BGImgLocation p-0",
  style: {
    backgroundImage: "url('/assets/images/OTF/home/locationbg.jpg')"
  }
}, __jsx("div", {
  className: "p-5 mx-5 mb-4"
}, __jsx("h3", {
  className: "text-left oftHeading"
}, "Our Locations"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "locationDiv mb-3"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 8
}, __jsx("h4", {
  className: "locationHeading"
}, "Orangetheory Fitness mercato mall - Level 1"), __jsx("p", {
  className: "locationsubHeading"
}, "Jumeirah Beach Road, Dubai United Arab Emirates ", __jsx("br", null), "Contact No: ", __jsx("a", {
  href: "tel:9714 340 1040"
}, "+9714 340 1040"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 4,
  className: "d-flex justify-content-center align-items-center"
}, __jsx("a", {
  href: "tel:9714 340 1040"
}, __jsx("i", {
  className: "fa fa-phone iconstyelLocation"
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "locationDiv"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 8
}, __jsx("h4", {
  className: "locationHeading"
}, "times square center - Ground Floor"), __jsx("p", {
  className: "locationsubHeading"
}, "Sheikh Zayed Road, Dubai United Arab Emirates ", __jsx("br", null), "Contact No: ", __jsx("a", {
  href: "tel:+9714 324 4424"
}, "+9714 324 4424"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 4,
  className: "d-flex justify-content-center align-items-center"
}, __jsx("a", {
  href: "tel:+9714 324 4424"
}, __jsx("i", {
  className: "fa fa-phone iconstyelLocation"
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  className: "p-0"
}, __jsx("iframe", {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6032486928893!2d55.25071151432762!3d25.216599037102654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362916220b1%3A0x175f64a16111cae7!2sOrangetheory%20Fitness%20at%20Mercato%20Mall!5e0!3m2!1sen!2s!4v1649050081764!5m2!1sen!2s",
  width: "100%",
  height: "100%",
  style: {
    border: "0"
  },
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade"
})))));

/* harmony default export */ __webpack_exports__["default"] = (Calculate);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
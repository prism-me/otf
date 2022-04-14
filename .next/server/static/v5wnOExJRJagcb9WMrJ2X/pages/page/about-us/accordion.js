module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 255);
/******/ })
/************************************************************************/
/******/ ({

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ef90");


/***/ }),

/***/ "Ef90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xaIC");
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wevc");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AccordionSection = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.querySelector(".accordion .accordion-item").classList.add("active");
    return () => {
      document.querySelector(".accordion .accordion-item").classList.remove("active");
    };
  }, []);

  const DummyContent1 = () => __jsx("p", null, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup.No one cares about products. People care about ideas. Is a product an idea? Noup.");

  return __jsx("section", {
    className: "saas1 faq testimonial-bg inner-container"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12"
  }, __jsx("div", {
    className: "title title2 title-inner"
  }, __jsx("div", {
    className: "main-title"
  }, __jsx("h2", {
    className: "font-primary borders text-center main-text m-b-0"
  }, __jsx("span", {
    className: "text-uppercase"
  }, "accordion with image"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, __jsx("div", {
    className: "faq-block"
  }, __jsx("div", {
    className: "w-100"
  }, __jsx("div", {
    className: "accordion faq m-0",
    id: "accordionExample11"
  }, __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    atomic: true
  }, __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, null))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4"
  }, __jsx("div", {
    className: "faq-img-block"
  }, __jsx("img", {
    alt: "faq-person",
    className: "img-fluid",
    src: "../assets/images/saas1/faq-img.png"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionSection);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "wevc":
/***/ (function(module, exports) {



/***/ }),

/***/ "xaIC":
/***/ (function(module, exports) {

module.exports = require("react-light-accordion");

/***/ })

/******/ });
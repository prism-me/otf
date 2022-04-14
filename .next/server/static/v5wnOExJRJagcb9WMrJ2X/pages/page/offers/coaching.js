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
/******/ 	return __webpack_require__(__webpack_require__.s = 276);
/******/ })
/************************************************************************/
/******/ ({

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("S+6n");


/***/ }),

/***/ "S+6n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Coaching = () => {
  return __jsx("section", {
    className: "coaching p-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h2", {
    className: "oftHeading text-center"
  }, "MORE COACHING. MORE SUPPORT. MORE MOTIVATION."), __jsx("p", {
    className: "p-light oftsubHeading text-center"
  }, "Orangetheory Live delivers an energy-packed, full-body group personal training experience in an easy-to-use platform that makes you feel like you\u2019re back in the studio. Get connected with a local coach who provides real-time feedback, motivation, and inspiration, and an intimate group setting that allows you to connect with the studio community before and after your workout.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "coach-container",
    style: {
      backgroundImage: `url("/assets/images/OTF/offer/sciencebakedbg.jpg")`
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6
  }, __jsx("img", {
    src: "/assets/images/OTF/offer/sciencebaked.png",
    className: "img-fluid",
    alt: "img"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "d-flex flex-column justify-content-center align-items-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h4", {
    className: "oftHeading"
  }, "Science-Backed"), __jsx("p", {
    className: "p-light oftsubHeading text-white"
  }, "Backed by the science of Excess Post Exercise Oxygen Consumption (or EPOC), our interval training is designed for seasoned pros and beginners. Our integrated heart-rate technology will provide you with immediate feedback so that you can get the results you need! Set your own pace, and watch as your heart rate monitor tells you your level of exertion. Take it slow - or test your limits. The choice is always up to you.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "coach-container",
    style: {
      backgroundImage: `url("/assets/images/OTF/offer/techtrakbg.jpg")`
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: "d-flex flex-column justify-content-center align-items-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h4", {
    className: "oftHeading text-center"
  }, "Technology-Tracked"), __jsx("p", {
    className: "p-light oftsubHeading text-white text-center"
  }, "Our heart-rate monitored training is designed to maintain a target zone that stimulates metabolism and increases energy. We call it the afterburn. Our members burn an estimated 500 to 1,000 calories in one workout, no matter their fitness level, and keep burning calories for up to 36 hours.**")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "coach-container",
    style: {
      backgroundImage: `url("/assets/images/OTF/offer/coachinspirebg.jpg")`
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "d-flex flex-column justify-content-center align-items-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h4", {
    className: "oftHeading"
  }, "Coach-Inspired"), __jsx("p", {
    className: "p-light oftsubHeading text-white"
  }, "At Orangetheory, you\u2019ll get the energy of a group workout with all the benefits of an experienced personal trainer like: motivation, attention, and technique tips. Our coaches are knowledgeable, encouraging, and committed to helping you reach your fitness goals."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6
  }, __jsx("img", {
    src: "/assets/images/OTF/offer/coachinsp.png",
    className: "img-fluid",
    alt: "img"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Coaching);

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
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
/******/ 	return __webpack_require__(__webpack_require__.s = 175);
/******/ })
/************************************************************************/
/******/ ({

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Iywh");


/***/ }),

/***/ "Iywh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("footer", {
  className: "gym footer2"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  className: "set-first"
}, __jsx("div", {
  className: "logo-sec"
}, __jsx("div", {
  className: "footer-contant"
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/OTF/logo/footer_logo.png"
}), __jsx("ul", {
  className: "d-flex footer-social social"
}, __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "https://www.instagram.com/orangetheory/",
  target: "_blank"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "https://www.facebook.com/OrangetheoryFitness/",
  target: "_blank"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook-f"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHB6rwn1JfoIwAAAYADKMRIRbmDSr01qAQt0NDCj3xmyxOni_Oals07utfzDUhFAPsFqL1Uo6pXz5uaI_6j7n11OuWi6OI229bWFL4oQbuTC8F8tvpELsBNAgd2UFDtJi4LsY0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Forangetheory-fitness",
  target: "_blank"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-linkedin"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "https://twitter.com/orangetheory",
  target: "_blank"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter"
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-contant"
}, __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Select You Locations")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Our Mission, Vision, & Values")), __jsx("li", null, __jsx("a", {
  href: "/page/press"
}, "Press")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Jobs")), __jsx("li", null, __jsx("a", {
  href: "/page/articles",
  className: "active"
}, "Articles")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-contant"
}, __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Promotion Terms")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Do not sell my information")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-para"
}, __jsx("p", {
  className: "para-address"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker mr-2"
}), __jsx("strong", null, "Orangetheory Fitness Mercato Mall - Level 1"), __jsx("br", null), __jsx("span", {
  style: {
    fontWeight: "300"
  }
}, "Jumeirah Beach Road, Dubai United Arab Emirates")), __jsx("p", {
  className: "para-address mt-2"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone mr-2"
}), __jsx("a", {
  href: "tel:+9714 340 1040"
}, "+9714 340 1040")), __jsx("p", {
  className: "para-address mt-3"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker mr-2"
}), __jsx("strong", null, "Times Square Centre - Ground Floor"), __jsx("br", null), __jsx("span", {
  style: {
    fontWeight: "300"
  }
}, "Sheikh Zayed Road, Dubai United Arab Emirates")), __jsx("p", {
  className: "para-address mt-2"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone mr-2"
}), __jsx("a", {
  href: "tel:+9714 340 1040"
}, "+9714 340 1040"))))))), __jsx("div", {
  className: "gym copyright text-center"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, "\xA9", __jsx("a", {
  className: "copyright-text",
  href: "/"
}, "Orangetheoryfitness"), " | ", __jsx("a", {
  className: "copyright-text ",
  href: "#"
}, "Terms of use "), " | ", __jsx("a", {
  className: "copyright-text",
  href: "#"
}, "Privacy Policy"), " | Designed and Managed by ", __jsx("a", {
  className: "copyright-text",
  href: "https://www.prism-me.com/",
  target: "_blank"
}, "Prism Digital."))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
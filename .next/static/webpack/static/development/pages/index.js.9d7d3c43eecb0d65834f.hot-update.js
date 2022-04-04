webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/layouts/sections/gym/pricing.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/gym/pricing.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_price_element_price5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../elements/price/element/price5 */ "./pages/elements/price/element/price5.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _settings,
    _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\pricing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var settings = (_settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "arrows", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "slidesToShow", 3), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "autoplay", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "centerMode", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "centerPadding", '0'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "slidesToScroll", 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_settings, "responsive", [{
  breakpoint: 992,
  settings: {
    slidesToShow: 1
  }
}]), _settings);
var PricingResume2 = [{
  icon: "assets/images/OTF/icons/Premier.png",
  iconW: "assets/images/OTF/icons/PremierW.png",
  title: "Orange Premier",
  feature1: "Unlimited classes",
  feature2: 'Reduced rate for families'
}, {
  icon: "assets/images/OTF/icons/Orange-elite.png",
  iconW: "assets/images/OTF/icons/eliteW.png",
  title: "Orange Elite",
  feature1: "8 classes/month",
  feature2: 'Extra classes at reduced rate'
}, {
  icon: "assets/images/OTF/icons/Basic.png",
  iconW: "assets/images/OTF/icons/BasicW.png",
  title: "Orange Basic",
  feature1: "4 classes/month",
  feature2: 'Extra classes at reduced rate'
}];

var Pricing = function Pricing() {
  return __jsx("section", {
    className: "gym pricing set-relative",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "10",
    className: "offset-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "oftHeading text-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Let\u2019s talk memberships")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "12",
    md: "8",
    className: "offset-md-2 offset-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(Slider, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "pricing-slider price-margin"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), PricingResume2.map(function (item, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "price-container hover-overlay shadows bg-white text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "price-feature-container set-relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "feature-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }
    }, __jsx("center", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 49
      }
    }, __jsx("img", {
      src: item.icon,
      className: "feature-icon1 mb-4",
      alt: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 53
      }
    }), __jsx("img", {
      src: item.iconW,
      className: "feature-icon2 d-none mb-4",
      alt: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 53
      }
    })), __jsx("h4", {
      className: "feature-text-heading text-center bold text-uppercase font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 49
      }
    }, item.title), __jsx("hr", {
      className: "set-border",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "price-features font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 45
      }
    }, __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 49
      }
    }, item.feature1), __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 49
      }
    }, item.feature2)), __jsx("a", {
      className: "otfBtn2",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 45
      }
    }, "join now"))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=index.js.9d7d3c43eecb0d65834f.hot-update.js.map
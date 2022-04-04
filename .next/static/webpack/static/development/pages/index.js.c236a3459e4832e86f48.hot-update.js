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

var Pricing = function Pricing() {
  return __jsx("section", {
    className: "gym pricing set-relative",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "10",
    className: "offset-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "oftHeading text-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Let\u2019s talk memberships")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "12",
    md: "8",
    className: "offset-md-2 offset-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(Slider, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "pricing-slider price-margin"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), PricingData.map(function (item, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "price-container shadows text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "service-feature ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "feature-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "",
      className: "image-top",
      src: item.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 49
      }
    }), __jsx("h3", {
      className: "text-white feature-text-heading",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 49
      }
    }, item.heading))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "price-feature-container ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "price-features",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 49
      }
    }, __jsx("h5", {
      className: "price-feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 53
      }
    }, item.feature1), __jsx("h5", {
      className: "price-feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 53
      }
    }, item.feature2, " "), __jsx("h5", {
      className: "price-feature",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 53
      }
    }, item.feature3, " ")), __jsx("div", {
      className: "price-value",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 49
      }
    }, __jsx("h6", {
      className: "price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 78
      }
    }, "$", __jsx("span", {
      className: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 101
      }
    }, item.price), "/month")), __jsx("a", {
      className: "btn btn-default btn-gradient",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 49
      }
    }, "more")))));
  }))), __jsx(_elements_price_element_price5__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=index.js.c236a3459e4832e86f48.hot-update.js.map
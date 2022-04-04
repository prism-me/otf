webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/elements/price/element/price5.js":
/*!************************************************!*\
  !*** ./pages/elements/price/element/price5.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\elements\\price\\element\\price5.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Slider from "react-slick";

 // import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      centerPadding: "160px",
      padding: "20px",
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      dots: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }]
};

var PricingFive = function PricingFive() {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrapper-full",
    id: "monthly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme pricing-slider price-margin"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }), PricingResume2.map(function (item, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "price-container hover-overlay shadows bg-white text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "price-feature-container set-relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 53
      }
    }, __jsx("div", {
      className: "feature-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 57
      }
    }, __jsx("img", {
      src: item.icon,
      className: "feature-icon mb-4",
      alt: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 61
      }
    }), __jsx("img", {
      src: item.iconW,
      className: "feature-icon2 d-none mb-4",
      alt: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 61
      }
    }), __jsx("h4", {
      className: "feature-text-heading text-center bold text-uppercase font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 61
      }
    }, item.title), __jsx("hr", {
      className: "set-border",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 61
      }
    })), __jsx("div", {
      className: "price-features font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 57
      }
    }, __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 61
      }
    }, item.feature1), __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 61
      }
    }, item.feature2)), __jsx("a", {
      className: "otfBtn2",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 57
      }
    }, "join now"))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingFive);

/***/ })

})
//# sourceMappingURL=index.js.9d34d9aa8d5e4ec4d620.hot-update.js.map
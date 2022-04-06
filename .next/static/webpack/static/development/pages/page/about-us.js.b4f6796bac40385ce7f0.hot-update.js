webpackHotUpdate("static\\development\\pages\\page\\about-us.js",{

/***/ "./database/pages/aboutus/database.js":
false,

/***/ "./node_modules/countup.js/dist/countUp.min.js":
false,

/***/ "./node_modules/react-countup/build/index.js":
false,

/***/ "./pages/page/about-us/counter.js":
/*!****************************************!*\
  !*** ./pages/page/about-us/counter.js ***!
  \****************************************/
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
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\about-us\\counter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
var otfData = [{
  img: "/assets/images/OTF/about/otbbg.jpg",
  title: "Orange Theory Beat - OTBEAT",
  detail1: "OTbeat is our exclusive heart rate monitoring technology. Members have the unique experience of seeing real time data during their workout, enabling them to push themselves to new limits. After class, they can then monitor their improvements through emailed results and by using the OTbeat APP.",
  detail2: "Risus in facilisi sem nulla vitae sagittis eget tellus.Adipiscing cursus duis accumsan, id tellus et blandit lectus.Nibh magna augue tellus, est!"
}];

var Counter = function Counter() {
  return __jsx("section", {
    className: "resume counter bg-pink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "default-dots gym-slider",
    id: "gym-slider"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), otfData.map(function (x, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "gym-header bg",
      style: {
        backgroundImage: "url(".concat(x.img, ")")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: "10",
      className: "offset-md-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "center-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "header-text bold-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 53
      }
    }, x.title)), __jsx("div", {
      className: "header-sub-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 49
      }
    }, __jsx("p", {
      className: "text-white p-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 53
      }
    }, x.detail1), __jsx("p", {
      className: "text-white p-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 53
      }
    }, x.detail2)), __jsx("div", {
      className: "link-horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 49
      }
    }, __jsx("ul", {
      className: "justify-content-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 53
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 57
      }
    }, __jsx("a", {
      className: " btn btn-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 61
      }
    }, x.btn1)), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 57
      }
    }, __jsx("a", {
      className: " btn btn-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 61
      }
    }, x.btn2)))))))))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ })

})
//# sourceMappingURL=about-us.js.b4f6796bac40385ce7f0.hot-update.js.map
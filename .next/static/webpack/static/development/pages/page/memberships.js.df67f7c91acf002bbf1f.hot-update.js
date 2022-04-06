webpackHotUpdate("static\\development\\pages\\page\\memberships.js",{

/***/ "./pages/page/membership/benefits.js":
/*!*******************************************!*\
  !*** ./pages/page/membership/benefits.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\membership\\benefits.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Benefits = function Benefits(_ref) {
  var benefitList = _ref.benefitList;
  return __jsx("section", {
    className: "gym benefit ",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "oftHeading text-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Membership Benefits"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, benefitList.map(function (x, i) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "4",
      md: "4",
      className: "offset-md-2 offset-lg-0",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 29
      }
    }, __jsx("center", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: x.img,
      alt: "img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 37
      }
    }))), __jsx("p", {
      className: "p-light oftsubHeading text-center mt-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    }, x.title));
  })), __jsx("center", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "otfBtn1 mt-5 px-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, btnText))));
};

/* harmony default export */ __webpack_exports__["default"] = (Benefits);

/***/ })

})
//# sourceMappingURL=memberships.js.df67f7c91acf002bbf1f.hot-update.js.map
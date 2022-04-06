webpackHotUpdate("static\\development\\pages\\page\\about-us.js",{

/***/ "./pages/page/about-us/counter.js":
/*!****************************************!*\
  !*** ./pages/page/about-us/counter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_pages_aboutus_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/pages/aboutus/database */ "./database/pages/aboutus/database.js");
/* harmony import */ var _database_pages_aboutus_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_pages_aboutus_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\about-us\\counter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Counter = function Counter() {
  return __jsx("section", {
    className: "resume counter bg-pink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, _database_pages_aboutus_database__WEBPACK_IMPORTED_MODULE_2__["CounterData"].map(function (item, i) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xl: "3",
      xs: "6",
      className: "counter-container",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "counters",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid counter-img",
      src: item.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "counter-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "count-text counts",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 37
      }
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      end: item.count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 41
      }
    })), __jsx("h5", {
      className: "count-desc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }
    }, item.desc))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ })

})
//# sourceMappingURL=about-us.js.73ee9de9c5b1d3e3f3cd.hot-update.js.map
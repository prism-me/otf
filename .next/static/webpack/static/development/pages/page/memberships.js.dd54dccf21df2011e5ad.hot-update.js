webpackHotUpdate("static\\development\\pages\\page\\memberships.js",{

/***/ "./pages/layouts/sections/gym/schedule.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/gym/schedule.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\schedule.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Schedule = function Schedule(_ref) {
  var titleM = _ref.titleM,
      title = _ref.title,
      detail = _ref.detail,
      list = _ref.list,
      listImg = _ref.listImg,
      btnText = _ref.btnText,
      bgImg = _ref.bgImg;
  return __jsx("section", {
    className: "gym format rightAnimation bg-schedule",
    id: "schedule",
    style: {
      backgroundImage: "url(\"".concat(bgImg, "\")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "animated-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 38
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 45
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 52
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title && __jsx("h3", {
    className: "oftHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "center-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, titleM && __jsx("h3", {
    className: "oftHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, titleM), __jsx("div", {
    className: "format-sub-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "p-light oftsubHeading text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, detail)), listImg && __jsx("ul", {
    className: "icon-collection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, listImg.map(function (x, i) {
    return __jsx("li", {
      className: "about-icongym",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "center-content",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid icons",
      src: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 49
      }
    })));
  })), list && __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, list.map(function (x, i) {
    return __jsx("li", {
      className: "about-icongym",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "",
      src: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 49
      }
    })));
  })), btnText && __jsx("button", {
    className: "otfbtn1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, btnText)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-center center-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid format-img",
    src: "/assets/images/OTF/home/health-safty.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=memberships.js.dd54dccf21df2011e5ad.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\page\\workout.js",{

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
      bgImg = _ref.bgImg,
      subtitle = _ref.subtitle;
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
    className: "oftHeading text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, titleM), subtitle && __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, subtitle), __jsx("div", {
    className: "format-sub-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "p-light oftsubHeading text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, detail)), listImg && __jsx("ul", {
    className: "icon-collection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, listImg.map(function (x, i) {
    return __jsx("li", {
      className: "about-icongym",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "center-content",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid icons",
      src: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    })));
  })), list && __jsx("ul", {
    className: "text-white pl-4",
    style: {
      listStyle: "circle"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, list.map(function (x, i) {
    return __jsx("li", {
      key: i,
      style: {
        fontSize: "16px",
        fontWeight: "300",
        textAlign: "left"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, x);
  })), btnText && __jsx("button", {
    className: "otfBtn1 mt-5 px-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, btnText)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-center center-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid format-img",
    src: "/assets/images/OTF/home/health-safty.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=workout.js.a6a557566ac3c80b1a3b.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\page\\articles.js",{

/***/ "./containers/blog/card/list-wrapper.js":
/*!**********************************************!*\
  !*** ./containers/blog/card/list-wrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\blog\\card\\list-wrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CardGridWrapper = function CardGridWrapper(_ref) {
  var className = _ref.className,
      image = _ref.image,
      blogDate = _ref.blogDate,
      place = _ref.place,
      title = _ref.title,
      description = _ref.description,
      readUrl = _ref.readUrl;
  var MAX_LENGTH = 130;
  return __jsx("div", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "blog-agency",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "blog-contain pl-0 pr-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "3",
    lg: "4",
    md: "6",
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: " text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid blog-img",
    src: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "9",
    lg: "8",
    md: "6",
    className: "p-0",
    style: {
      borderRadius: "0px 30px 30px 0px",
      borderTop: "1px solid orange",
      borderBottom: "1px solid orange",
      borderRight: "1px solid orange"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "img-container center-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "center-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "blog-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "center-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, blogDate && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-clock-o m-r-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 49
    }
  }), __jsx("h6", {
    className: "m-r-25 font-blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 49
    }
  }, blogDate), " "), place && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-map-marker m-r-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 49
    }
  }), __jsx("h6", {
    className: "font-blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 49
    }
  }, place), " "))), __jsx("h5", {
    className: "blog-head font-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, title), description.length > MAX_LENGTH ? __jsx("p", {
    className: "para2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  }, "".concat(description.substring(0, MAX_LENGTH), " .....")) : __jsx("p", {
    className: "para2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, description), __jsx("div", {
    className: "btn-bottom m-t-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: readUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }, __jsx("button", {
    style: {
      background: "transparent",
      border: "0",
      borderBottom: "1px solid #F58220",
      color: "#F58220",
      textTransform: "uppercase",
      fontWeight: "700",
      outline: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 45
    }
  }, "read more"))))))))));
};

CardGridWrapper.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  blogDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  readUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardGridWrapper);

/***/ })

})
//# sourceMappingURL=articles.js.22cc9a7b3ad6f4f682d6.hot-update.js.map
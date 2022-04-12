webpackHotUpdate("static\\development\\pages\\page\\press.js",{

/***/ "./pages/page/press/pressgrid.js":
/*!***************************************!*\
  !*** ./pages/page/press/pressgrid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/blog/database */ "./database/blog/database.js");
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_blog_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.es5.js");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_blog_card_grid_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/blog/card/grid-wrapper */ "./containers/blog/card/grid-wrapper.js");
/* harmony import */ var _containers_blog_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../containers/blog/categories */ "./containers/blog/categories/index.js");
/* harmony import */ var _containers_blog_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../containers/blog/posts */ "./containers/blog/posts/index.js");
/* harmony import */ var _containers_blog_newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../containers/blog/newsletter */ "./containers/blog/newsletter/index.js");
/* harmony import */ var _containers_blog_instagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../containers/blog/instagram */ "./containers/blog/instagram/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\press\\pressgrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Pressgrid = function Pressgrid() {
  return __jsx("section", {
    className: "agency blog blog-sec blog-sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "animated-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("i", {
    style: {
      background: "#f5822091",
      boxShadow: "0 15px 30px 0 #f5822091"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 38
    }
  }), __jsx("i", {
    style: {
      background: "#f5822091",
      boxShadow: "0 15px 30px 0 #f5822091"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("i", {
    style: {
      background: "#f5822091",
      boxShadow: "0 15px 30px 0 #f5822091"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "9",
    className: "order-lg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_3___default.a, {
    breakpointCols: 2,
    className: "my-masonry-grid masonry-with-dec row",
    columnClassName: "col-md-6 col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, _database_blog_database__WEBPACK_IMPORTED_MODULE_2__["MesonryData"].length > 0 ? _database_blog_database__WEBPACK_IMPORTED_MODULE_2__["MesonryData"].map(function (item, index) {
    return __jsx(_containers_blog_card_grid_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "grid-no-sidebar-".concat(index),
      className: "",
      image: item.image,
      blogDate: item.createdAt,
      place: item.place,
      title: item.title,
      description: item.description,
      readUrl: item.readUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 37
      }
    });
  }) : '!! No Blogs Found'))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "blog-side",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_containers_blog_categories__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx(_containers_blog_posts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx(_containers_blog_newsletter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx(_containers_blog_instagram__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pressgrid);

/***/ })

})
//# sourceMappingURL=press.js.66f1e24e69f62f3a89af.hot-update.js.map
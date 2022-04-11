webpackHotUpdate("static\\development\\pages\\page\\articles.js",{

/***/ "./pages/page/articles/articlesgrid.js":
/*!*********************************************!*\
  !*** ./pages/page/articles/articlesgrid.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var _containers_blog_card_grid_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/blog/card/grid-wrapper */ "./containers/blog/card/grid-wrapper.js");
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../database/blog/database */ "./database/blog/database.js");
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_database_blog_database__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\articles\\articlesgrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Custom Components





var Articlesgrid = function Articlesgrid(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "agency blog blog-sec",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "no-side",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, _database_blog_database__WEBPACK_IMPORTED_MODULE_5__["BlogsData"].length > 0 ? _database_blog_database__WEBPACK_IMPORTED_MODULE_5__["BlogsData"].map(function (item, index) {
    return __jsx(_containers_blog_card_grid_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "grid-no-sidebar-".concat(index),
      className: "col-xl-4 col-md-6",
      image: item.image,
      blogDate: item.createdAt,
      place: item.place,
      title: item.title,
      description: item.description,
      readUrl: item.readUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    });
  }) : '!! No Blogs Found'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Articlesgrid);

/***/ })

})
//# sourceMappingURL=articles.js.98d611d585498064a413.hot-update.js.map
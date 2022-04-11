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
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/blog/database */ "./database/blog/database.js");
/* harmony import */ var _database_blog_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_blog_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_blog_card_list_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/blog/card/list-wrapper */ "./containers/blog/card/list-wrapper.js");


var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\articles\\articlesgrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import Custom Components



var Articlesgrid = function Articlesgrid(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx("section", {
    className: "agency blog blog-sec blog-no-sidebar blog-split pt-0",
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
    className: "pl-0 pr-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "split m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, _database_blog_database__WEBPACK_IMPORTED_MODULE_2__["BlogsList"].length > 0 ? _database_blog_database__WEBPACK_IMPORTED_MODULE_2__["BlogsList"].map(function (item, index) {
    return __jsx(_containers_blog_card_list_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: "grid-no-sidebar-".concat(index),
      className: "col-12 blog-sec blog-list ",
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
        columnNumber: 33
      }
    });
  }) : '!! No Blogs Found')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Articlesgrid);

/***/ })

})
//# sourceMappingURL=articles.js.5190b56a6dea6ce10643.hot-update.js.map
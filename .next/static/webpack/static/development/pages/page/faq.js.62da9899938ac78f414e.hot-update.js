webpackHotUpdate("static\\development\\pages\\page\\faq.js",{

/***/ "./containers/common/common-layout.js":
/*!********************************************!*\
  !*** ./containers/common/common-layout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb */ "./containers/common/breadcrumb.js");
/* harmony import */ var _pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/footer */ "./pages/layouts/sections/gym/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\common\\common-layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CommonLayout = function CommonLayout(_ref) {
  var children = _ref.children,
      btntext = _ref.btntext,
      title = _ref.title,
      subtitle = _ref.subtitle,
      bannerImg = _ref.bannerImg,
      metaTitle = _ref.metaTitle,
      promtext = _ref.promtext;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, metaTitle)), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "gym nav-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: subtitle,
    title: title,
    bannerImg: bannerImg,
    btntext: btntext,
    promtext: promtext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children), __jsx(_pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonLayout);

/***/ })

})
//# sourceMappingURL=faq.js.62da9899938ac78f414e.hot-update.js.map
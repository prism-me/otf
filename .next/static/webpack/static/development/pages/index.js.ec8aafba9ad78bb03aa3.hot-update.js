webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/navMenu */ "./constant/navMenu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\common\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Nav = function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_navMenu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]),
      mainmenu = _useState[0],
      setMainMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sidebar = _useState2[0],
      setSidebar = _useState2[1];

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  } // useEffect(() => {
  //     const currentUrl = location.pathname;
  //     mainmenu.filter(items => {
  //         if (items.path === currentUrl)
  //             setNavActive(items)
  //         if (!items.children) return false
  //         items.children.filter(subItems => {
  //             if (subItems.path === currentUrl)
  //                 setNavActive(subItems)
  //             if (!subItems.children) return false
  //             subItems.children.filter(subSubItems => {
  //                 if (subSubItems.path === currentUrl)
  //                     setNavActive(subSubItems)
  //             })
  //         })
  //     })
  // }, [])
  // const setNavActive = (item) => {
  //     MENUITEMS.filter(menuItem => {
  //         if (menuItem != item)
  //             menuItem.active = false
  //         if (menuItem.children && menuItem.children.includes(item))
  //             menuItem.active = true
  //         if (menuItem.children) {
  //             menuItem.children.filter(submenuItems => {
  //                 if (submenuItems.children && submenuItems.children.includes(item)) {
  //                     menuItem.active = true
  //                     submenuItems.active = true
  //                 }
  //             })
  //         }
  //     })
  //     item.active = !item.active
  //     setMainMenu({ mainmenu: MENUITEMS })
  // }
  // // Click Toggle menu
  // const toggletNavActive = (item) => {
  //     if (!item.active) {
  //         MENUITEMS.forEach(a => {
  //             if (MENUITEMS.includes(item))
  //                 a.active = false
  //             if (!a.children) return false
  //             a.children.forEach(b => {
  //                 if (a.children.includes(item)) {
  //                     b.active = false
  //                 }
  //                 if (!b.children) return false
  //                 b.children.forEach(c => {
  //                     if (b.children.includes(item)) {
  //                         c.active = false
  //                     }
  //                 })
  //             })
  //         });
  //     }
  //     item.active = !item.active
  //     setMainMenu({ mainmenu: MENUITEMS })
  // }


  return __jsx("div", {
    className: "navbar",
    id: "togglebtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "close"))), __jsx("ul", {
    className: "main-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "  ", __jsx("button", {
    className: "otfBtn1 ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "Free Class"), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/process/browser.js":
false

})
//# sourceMappingURL=index.js.ec8aafba9ad78bb03aa3.hot-update.js.map
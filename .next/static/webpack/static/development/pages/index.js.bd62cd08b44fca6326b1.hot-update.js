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
  // Click Toggle menu


  var toggletNavActive = function toggletNavActive(item) {
    if (!item.active) {
      _constant_navMenu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(function (a) {
        if (_constant_navMenu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(function (b) {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(function (c) {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_navMenu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

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
  }, _constant_navMenu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].map(function (menuItem, i) {
    return __jsx("li", {
      key: i,
      className: "navItemStyle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#",
      onClick: function onClick() {
        return toggletNavActive(menuItem);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      }
    }, menuItem.title)) : '', menuItem.type === 'link' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: menuItem.path,
      className: "".concat(menuItem.active ? 'active' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 33
      }
    }, menuItem.title), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "".concat(menuItem.active ? 'menu-open activeSubmenu' : ''),
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 33
      }
    }, menuItem.children.map(function (childrenItem, index) {
      return __jsx("li", {
        key: index,
        className: "".concat(childrenItem.children ? 'sub-menu ' : ''),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 41
        }
      }, childrenItem.type === 'sub' ? __jsx("a", {
        href: "#javascript",
        onClick: function onClick() {
          return toggletNavActive(childrenItem);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 49
        }
      }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "".concat(childrenItem.path),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 49
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 53
        }
      }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
        className: "".concat(childrenItem.active ? 'menu-open' : 'active'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 49
        }
      }, childrenItem.children.map(function (childrenSubItem, key) {
        return __jsx("li", {
          key: key,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 57
          }
        }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "".concat(childrenSubItem.path),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 65
          }
        }, __jsx("a", {
          className: "sub-menu-title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 69
          }
        }, childrenSubItem.title)) : '');
      })) : '');
    })) : '');
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, "  ", __jsx("button", {
    className: "otfBtn1 ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, "Free Class"), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.bd62cd08b44fca6326b1.hot-update.js.map
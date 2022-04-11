webpackHotUpdate("static\\development\\pages\\page\\memberships.js",{

/***/ "./pages/page/memberships.js":
/*!***********************************!*\
  !*** ./pages/page/memberships.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _pages_layouts_sections_gym_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/banner */ "./pages/layouts/sections/gym/banner.js");
/* harmony import */ var _pages_layouts_sections_gym_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/counter */ "./pages/layouts/sections/gym/counter.js");
/* harmony import */ var _pages_layouts_sections_gym_pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/pricing */ "./pages/layouts/sections/gym/pricing.js");
/* harmony import */ var _pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/footer */ "./pages/layouts/sections/gym/footer.js");
/* harmony import */ var _layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/sections/modern-sass/faq */ "./pages/layouts/sections/modern-sass/faq.js");
/* harmony import */ var _membership_location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./membership/location */ "./pages/page/membership/location.js");
/* harmony import */ var _pages_layouts_sections_gym_schedule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/layouts/sections/gym/schedule */ "./pages/layouts/sections/gym/schedule.js");
/* harmony import */ var _membership_benefits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./membership/benefits */ "./pages/page/membership/benefits.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\memberships.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components











var Memberships = function Memberships() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#000');
    document.body.style.setProperty('--dark', '#000');
  });
  var sliderData = [{
    bannerImg: "/assets/images/OTF/banner/membershipbanner.jpg",
    title: "Let’s talk membership",
    detail: "No matter what your fitness level is, 2 to 4 workout a week is all you need to maximize your results at Orangetheory. Let’s find the membership option that works best for you.",
    btnm: "Avail one of our membership now",
    viewbtn: "View membership details"
  }, {
    bannerImg: "/assets/images/OTF/banner/membershipbanner.jpg",
    title: "Let’s talk membership",
    detail: "No matter what your fitness level is, 2 to 4 workout a week is all you need to maximize your results at Orangetheory. Let’s find the membership option that works best for you.",
    btnm: "Avail one of our membership now",
    viewbtn: "View membership details"
  }];
  var list = ["Free Lunch & Burn intro class", "Free Team-Building Workout", "Preferred Membership Pricing for all employees"];
  var benefitList = [{
    img: "/assets/images/OTF/membership/Dumbells.png",
    title: "Easy online booking"
  }, {
    img: "/assets/images/OTF/membership/LAT.png",
    title: "Nationwide studio access*"
  }, {
    img: "/assets/images/OTF/membership/Threadmill.png",
    title: "Month-to-month memberships"
  }];
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Memberships")), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "gym nav-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx(_pages_layouts_sections_gym_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sliderData: sliderData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(_membership_location__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(_pages_layouts_sections_gym_pricing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx(_pages_layouts_sections_gym_schedule__WEBPACK_IMPORTED_MODULE_9__["default"], {
    titleM: "Corporate Memberships",
    detail: "Orangetheory Fitness is more than just a workout. It's an employee-engaging, productivity-elevating experience designed to give your company More Bottom Line and give your employees More Life, one class at a time.",
    list: list,
    btnText: "Avail now",
    bgImg: "/assets/images/OTF/membership/corporateBg.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(_membership_benefits__WEBPACK_IMPORTED_MODULE_10__["default"], {
    benefitList: benefitList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(_pages_layouts_sections_gym_counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Get 10% off during this festive season!",
    subtitle: "Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa.",
    btntext: "Book a class now",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx(_pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Memberships);

/***/ })

})
//# sourceMappingURL=memberships.js.ebb5df920420f05656c5.hot-update.js.map
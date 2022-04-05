webpackHotUpdate("static\\development\\pages\\page\\about-us.js",{

/***/ "./pages/layouts/sections/modern-sass/testimonial.js":
/*!***********************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/testimonial.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\modern-sass\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

var Testimonial = function Testimonial() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      modal = _useState[0],
      setModal = _useState[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  var videoData = [{
    title: "",
    detail1: "",
    detail2: ""
  }];
  return __jsx("section", {
    className: "saas1 testimonial videos testimonial-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "oftHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "a little about orange theory"), __jsx("p", {
    className: "p-light oftsubHeading text-center p-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Blandit neque fringilla eget faucibus fringilla euismod. Varius ullamcorper massa tortor, pretium massa justo enim tincidunt praesent. Iaculis lectus lectus ut ac. Cum eu velit venenatis tellus porttitor in. Vitae quis tortor massa dolor porttitor. Nec aliquet urna ut blandit vitae porttitor. Vel sed."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6",
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "center-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "video w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "button center-content",
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "video",
    className: "img-fluid",
    src: "/assets/images/saas1/testimonial-video-icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    className: "iframe-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, __jsx("iframe", {
    className: "mfp-iframe",
    frameborder: "0",
    allowfullscreen: "",
    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "testimonial-slider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "More than a gym"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, "Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, " MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn\u2019t live to exercise. You should exercise to live.")), __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "testimonial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonial-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  }), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  }, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "Generic placeholder image",
    src: "/assets/images/saas1/testi-profile.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, __jsx("h5", {
    className: "mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  }, "Elmer Harvy"), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 49
    }
  }, "Graphics Designer"))))), __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "testimonial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "testimonial-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  }), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "profile",
    src: "/assets/images/saas1/testi-profile.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "media-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }, __jsx("h5", {
    className: "mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 49
    }
  }, "Elmer Harvy"), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 49
    }
  }, "Graphics Designer")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ })

})
//# sourceMappingURL=about-us.js.2aa8184c1342a26e9f73.hot-update.js.map
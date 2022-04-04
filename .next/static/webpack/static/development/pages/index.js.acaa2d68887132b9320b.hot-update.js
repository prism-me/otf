webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/layouts/sections/gym/trainer.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/gym/trainer.js ***!
  \***********************************************/
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
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\trainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 420,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }]
};
var testimonial = [{
  img: "/assets/images/OTF/testimonial/testimonial1.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial2.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial3.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial4.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial5.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial6.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}, {
  img: "/assets/images/OTF/testimonial/testimonial7.png",
  title: "Client name example",
  subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
}];

var Trainer = function Trainer() {
  return __jsx("section", {
    className: "gym trainers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "overflow-hide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "oftHeading text-dark mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Testimonials"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "trainers-slider",
    id: "trainers-slider"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), ExpertData.map(function (data, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: data.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "text-center trainers-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, __jsx("h4", {
      className: " m-b-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, data.heading), __jsx("div", {
      className: "socials-lists",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 33
      }
    }, __jsx("ul", {
      className: "socials-horizontal justify-content-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 45
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-facebook center-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 57
      }
    }))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-twitter center-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 57
      }
    }))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 45
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-google center-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 57
      }
    }))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 41
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 45
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-instagram center-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 57
      }
    })))))));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme trainers-slider",
    id: "trainers-slider"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), testimonial.map(function (x, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 33
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: x.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "text-center trainers-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 37
      }
    }, __jsx("h4", {
      className: " mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 41
      }
    }, x.title), __jsx("p", {
      className: "p-light text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }, x.subtitle)));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Trainer);

/***/ })

})
//# sourceMappingURL=index.js.acaa2d68887132b9320b.hot-update.js.map
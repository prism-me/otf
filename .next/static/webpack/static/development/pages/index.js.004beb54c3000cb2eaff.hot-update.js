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
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 5,
  responsive: [{
    breakpoint: 359,
    settings: {
      slidesToShow: 1,
      centerPadding: '65px'
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1025,
    settings: {
      slidesToShow: 4
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
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "overflow-hide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "oftHeading text-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Testimonials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme trainers-slider",
    id: "trainers-slider"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), testimonial.map(function (x, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 33
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: x.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 37
      }
    }), __jsx("div", {
      className: "text-center trainers-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: " m-b-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 41
      }
    }, x.title), __jsx("p", {
      className: "p-light oftsubHeading text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    }, x.subtitle)));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Trainer);

/***/ })

})
//# sourceMappingURL=index.js.004beb54c3000cb2eaff.hot-update.js.map
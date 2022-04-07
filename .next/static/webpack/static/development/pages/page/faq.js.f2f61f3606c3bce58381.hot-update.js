webpackHotUpdate("static\\development\\pages\\page\\faq.js",{

/***/ "./pages/page/faq.js":
/*!***************************!*\
  !*** ./pages/page/faq.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-light-accordion */ "./node_modules/react-light-accordion/build/index.js");
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-light-accordion/demo/css/index.css */ "./node_modules/react-light-accordion/demo/css/index.css");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var _faq_faqform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faqform */ "./pages/page/faq/faqform.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Custom Components




var FAQ = function FAQ() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector(".accordion .accordion-item").classList.add("active");
    return function () {
      document.querySelector(".accordion .accordion-item").classList.remove("active");
    };
  }, []);

  var DummyContent1 = function DummyContent1(props) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, props.answer);
  };

  var faqData = [{
    question: "How early should I arrive for my first Orangetheory class?",
    answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
  }, {
    question: "I haven't worked out in a long time? Can I still do the workout?",
    answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
  }, {
    question: "I have issues with (part of the body). Can I still do your workout?",
    answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
  }, {
    question: "What do the 5 zones mean, and why is the Orange zone so important?",
    answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
  }, {
    question: "What equipment do you use at Orangetheory?",
    answer: "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."
  }];
  return __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Try Us For Free.Yes, Free!",
    btntext: "book a free class now",
    promtext: "*Promotion Terms. Limited Time Offer.",
    bannerImg: "/assets/images/OTF/banner/faqbanner.jpg",
    metaTitle: "FAQ's",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "saas1 faq testimonial-bg inner-container rightAnimation",
    id: "faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animated-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 46
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 60
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "faq-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "frequent-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "Frequently Asked Questions"), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    atomic: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, faqData.map(function (x, i) {
    return __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      className: "card-header bg-primary",
      title: x.question,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 41
      }
    }, __jsx(DummyContent1, {
      answer: x.answer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 45
      }
    }));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./pages/page/faq/faqform.js":
/*!***********************************!*\
  !*** ./pages/page/faq/faqform.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\faq\\faqform.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Faqform = function Faqform() {
  return __jsx("section", {
    className: "gym format bg-location p-0",
    id: "bmi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "BGImgLocation p-0",
    style: {
      backgroundImage: "url('/assets/images/OTF/home/locationbg.jpg')"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "p-5 mx-5 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "text-left oftHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, "Our Locations"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "locationDiv mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "locationHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 37
    }
  }, "Orangetheory Fitness mercato mall - Level 1"), __jsx("p", {
    className: "locationsubHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, "Jumeirah Beach Road, Dubai United Arab Emirates ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 62
    }
  }), "Contact No: ", __jsx("a", {
    href: "tel:9714 340 1040",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 53
    }
  }, "+9714 340 1040"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tel:9714 340 1040",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-phone iconstyelLocation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "locationDiv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "locationHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, "times square center - Ground Floor"), __jsx("p", {
    className: "locationsubHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, "Sheikh Zayed Road, Dubai United Arab Emirates ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 62
    }
  }), "Contact No: ", __jsx("a", {
    href: "tel:+9714 324 4424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 53
    }
  }, "+9714 324 4424"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tel:+9714 324 4424",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-phone iconstyelLocation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6032486928893!2d55.25071151432762!3d25.216599037102654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362916220b1%3A0x175f64a16111cae7!2sOrangetheory%20Fitness%20at%20Mercato%20Mall!5e0!3m2!1sen!2s!4v1649050081764!5m2!1sen!2s",
    width: "100%",
    height: "100%",
    style: {
      border: "0"
    },
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faqform);

/***/ })

})
//# sourceMappingURL=faq.js.f2f61f3606c3bce58381.hot-update.js.map
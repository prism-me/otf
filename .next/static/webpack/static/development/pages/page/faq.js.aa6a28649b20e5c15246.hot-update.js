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
  })))))), __jsx(_faq_faqform__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ })

})
//# sourceMappingURL=faq.js.aa6a28649b20e5c15246.hot-update.js.map
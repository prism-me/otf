webpackHotUpdate("static\\development\\pages\\page\\offers.js",{

/***/ "./pages/page/offers/offerbanner.js":
/*!******************************************!*\
  !*** ./pages/page/offers/offerbanner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\page\\offers\\offerbanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var location = ["Mercato Mall", "Times Square Centre"];

var Offerbanner = function Offerbanner() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  return __jsx("section", {
    className: "agency offer breadcrumb-section ",
    style: {
      background: "url(\"/assets/images/OTF/banner/offerbanner.jpg\")"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 6,
    lg: 6,
    className: "d-flex flex-column justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "offer-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "WORK 1 HOUR. BURN FOR 36"), __jsx("p", {
    className: "offer-detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Orangetheory Fitness is a one-of-a-kind, group high-intensity interval training workout. The result is more energy, visible toning, and extra calorie burn for up to 36 hours."), __jsx("h3", {
    className: "offer-subtext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Buy 2 Months Membership and get the 3rd Month for 10dhs only.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 6,
    lg: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("center", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "offerBtn px-5",
    show: modalShow,
    onHide: function onHide() {
      return setModalShow(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, "Start Burning")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "offer-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "offer-subtext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, "Start Burning"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Full name",
    className: "inputStyle",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    form: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email address",
    className: "inputStyle",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "phone",
    id: "phone",
    placeholder: "Phone number",
    className: "inputStyle",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "select",
    name: "select",
    id: "exampleSelect",
    className: "inputStyle",
    required: true,
    style: {
      color: "#c6c6c9"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("option", {
    style: {
      color: "#495057"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, "Select Location"), location && location.length > 0 && location.map(function (x) {
    return __jsx("option", {
      style: {
        color: "#495057"
      },
      key: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 45
      }
    }, x);
  }))), __jsx("button", {
    className: "breadcrumb-btn px-5 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Offerbanner);

/***/ })

})
//# sourceMappingURL=offers.js.51cc276908903268063a.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constant/menu.js":
/*!**************************!*\
  !*** ./constant/menu.js ***!
  \**************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [// {
//    path: '/page/about-us',
//    title: 'About us',
//    type: 'link'
// },
{
  title: 'About us',
  type: 'sub',
  children: [{
    path: '/layouts/agency',
    title: 'Agency',
    type: 'link'
  }, {
    path: '/layouts/app1',
    title: 'App Landing1',
    type: 'link'
  }, {
    path: '/layouts/app2',
    title: 'App Landing2',
    type: 'link'
  }, {
    path: '/layouts/event',
    title: 'Event',
    type: 'link'
  }, {
    path: '/layouts/gym',
    title: 'Gym',
    type: 'link'
  }, {
    path: '/layouts/music',
    title: 'Music',
    type: 'link'
  }, {
    path: '/layouts/resume',
    title: 'Resume',
    type: 'link'
  }, {
    path: '/layouts/modern-sass',
    title: 'Sass1',
    type: 'link'
  }, {
    path: '/layouts/enterprice-sass',
    title: 'Sass2',
    type: 'link'
  }, {
    path: '/layouts/wedding',
    title: 'Wedding',
    type: 'link'
  }, {
    path: '/layouts/yoga',
    title: 'Yoga',
    type: 'link'
  }, {
    path: '/layouts/portfolioLayouts',
    title: 'Portfolio',
    type: 'link'
  }]
}, {
  title: 'Memberships',
  type: 'sub',
  children: [{
    title: 'Blog Grid View',
    type: 'sub',
    children: [{
      path: '/blog/blog-grid/column-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-no-sidebar',
      title: 'Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-right-sidebar',
      title: 'Full Width Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-left-sidebar',
      title: 'Full Width Left Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List',
    type: 'sub',
    children: [{
      path: '/blog/blog-list/list-no-sidebar',
      title: 'List No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-left-sidebar',
      title: 'List Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-right-sidebar',
      title: 'List Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List Creative',
    type: 'sub',
    children: [{
      path: '/blog/blog-list-creative/split-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Mix Layout',
    type: 'sub',
    children: [{
      path: '/blog/blog-mix-layout/bigpost-list',
      title: 'List Mix With Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split',
      title: 'List Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split-no-sidebar',
      title: 'List Mix With No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-list-no-sidebar',
      title: 'List Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column',
      title: 'Grid Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column-no-sidebar',
      title: 'Grid Mix With No Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Details',
    type: 'sub',
    children: [{
      path: '/blog/blog-detail/detail-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-gallery',
      title: 'Detail Page With Gallery',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-video',
      title: 'Detail Page With Video',
      type: 'link'
    }]
  }, {
    title: 'Blog Masonary',
    type: 'sub',
    children: [{
      path: '/blog/blog-masonary/fullwidth-2',
      title: 'Full Width 2',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-3',
      title: 'Full Width 3',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-4',
      title: 'Full Width 4',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }]
  }]
}, {
  title: 'The Workout',
  type: 'sub',
  children: [{
    path: '/page/404',
    title: '404',
    type: 'link'
  }, {
    path: '/page/faq',
    title: 'FAQ',
    type: 'link'
  }, {
    path: '/page/typography',
    title: 'Typography',
    type: 'link'
  }, {
    path: '/page/maintenance',
    title: 'Maintenance',
    type: 'link'
  }, {
    path: '/page/about-us',
    title: 'About us',
    type: 'link'
  }, {
    title: 'Team',
    type: 'sub',
    children: [{
      path: '/page/team',
      title: 'Team',
      type: 'link'
    }, {
      path: '/page/team-grid',
      title: 'Team Grid',
      type: 'link'
    }, {
      path: '/page/team-list',
      title: 'Team List',
      type: 'link'
    }]
  }, {
    title: 'Comming Soon',
    type: 'sub',
    children: [{
      path: '/page/commingsoon1',
      title: 'Comming Soon1',
      type: 'link'
    }, {
      path: '/page/commingsoon2',
      title: 'Comming Soon2',
      type: 'link'
    }]
  }]
}, {
  title: 'Offers',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'Elements1',
    type: 'sub',
    children: [{
      path: '/elements/alerts',
      title: 'Alerts',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/elements/accordion',
      title: 'Accordion',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/elements/boxshadow',
      title: 'Box Shadow',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/elements/button',
      title: 'Buttons',
      type: 'link',
      icon: 'write'
    }, {
      path: '/elements/contact',
      title: 'Contact',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'Elements2',
    type: 'sub',
    children: [{
      path: '/elements/event-schedule',
      title: 'Event-Schedule',
      type: 'link',
      icon: 'list'
    }, {
      path: '/elements/gallery',
      title: 'Gallery',
      type: 'link',
      icon: 'gallery'
    }, {
      path: '/elements/pricing',
      title: 'Pricing',
      type: 'link',
      icon: 'money'
    }, {
      path: '/elements/counter',
      title: 'Counter',
      type: 'link',
      icon: 'time'
    }, {
      path: '/elements/count-down',
      title: 'Countdown',
      type: 'link',
      icon: 'alarm-clock'
    }]
  }, {
    title: 'Elements3',
    type: 'sub',
    children: [{
      path: '/elements/progressbar',
      title: 'Progress Bar',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/elements/testimonial',
      title: 'Testimonial',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/elements/video',
      title: 'Video',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/elements/service',
      title: 'Service',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/elements/subscribe',
      title: 'Subscribe',
      type: 'link',
      icon: 'share-alt'
    }]
  }]
}, {
  title: 'Locations',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Portfolio-Basic',
    type: 'link',
    children: [{
      path: '/portfolio/basic-2-grid',
      title: 'Basic – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-3-grid',
      title: 'Basic – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-4-grid',
      title: 'Basic – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-2-col',
      title: 'Basic W Tittle – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-3-col',
      title: 'Basic W Tittle – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-4-col',
      title: 'Basic W Tittle – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-parallex',
      title: 'Parallex',
      type: 'link'
    }, {
      path: '/portfolio/centered-slide',
      title: 'Centered Slides',
      type: 'link'
    }, {
      path: '/portfolio/vertical-slide',
      title: 'Vertical Slides',
      type: 'link'
    }, {
      path: '/portfolio/multiple-carousel',
      title: '4 Slide With Center Slider',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Details',
    type: 'link',
    children: [{
      path: '/portfolio/portfolio-detail-1',
      title: 'Container Layout',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-2',
      title: 'Full Width',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-3',
      title: 'With Bg Bredcrumb',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-4',
      title: 'Details With Slider',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-5',
      title: 'Video Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-6',
      title: 'Two Image Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-7',
      title: 'Left Side Image Portfolio',
      type: 'link'
    }]
  }, {
    title: 'Trending Layout',
    type: 'link',
    children: [{
      path: '/portfolio/creative-1',
      title: 'Trending Layout 1',
      type: 'link'
    }, {
      path: '/portfolio/creative-2',
      title: 'Trending Layout 2',
      type: 'link'
    }, {
      path: '/portfolio/creative-3',
      title: 'Trending Layout 3',
      type: 'link'
    }, {
      path: '/portfolio/creative-4',
      title: 'Trending Layout 4',
      type: 'link'
    }, {
      path: '/portfolio/modern-4',
      title: 'Trending Layout 5',
      type: 'link'
    }, {
      path: '/portfolio/modern-3',
      title: 'Trending Layout 6',
      type: 'link'
    }, {
      path: '/portfolio/modern-2',
      title: 'Trending Layout 7',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Masonary',
    type: 'link',
    children: [{
      path: '/portfolio/full-width-2-grid',
      title: 'Full-Width – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-3-grid',
      title: 'Full-Width – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-4-grid',
      title: 'Full-Width – 4 Grid',
      type: 'link'
    }]
  }]
}, {
  title: 'Support',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Header Style',
    type: 'link',
    children: [{
      path: '/features/header-light',
      title: 'Light Header',
      type: 'link'
    }, {
      path: '/features/header-dark',
      title: 'Dark Header',
      type: 'link'
    }, {
      path: '/features/header-transparent',
      title: 'Glass Header',
      type: 'link'
    }, {
      path: '/features/header-right-navigation',
      title: 'Header Right Navigation',
      type: 'link'
    }, {
      path: '/features/header-center-logo',
      title: 'Header Center Logo',
      type: 'link'
    }]
  }, {
    title: 'Breadcrumb Style',
    type: 'link',
    children: [{
      path: '/features/breadcrumb-big-typography',
      title: 'Classic Type',
      type: 'link'
    }, {
      path: '/features/breadcrumb-left',
      title: 'Breadcrumb Left',
      type: 'link'
    }, {
      path: '/features/breadcrumb-right',
      title: 'Breadcrumb Right',
      type: 'link'
    }, {
      path: '/features/breadcrumb-center',
      title: 'Breadcrumb Center',
      type: 'link'
    }, {
      path: '/features/breadcrumb-dark',
      title: 'Breadcrumb Dark',
      type: 'link'
    }, {
      path: '/features/breadcrumb-parallex-bg',
      title: 'Breadcrumb Parallex-Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-bg',
      title: 'Breadcrumb Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-gallery',
      title: 'Breadcrumb Gallery',
      type: 'link'
    }, {
      path: '/features/breadcrumb-video',
      title: 'Breadcrumb Video',
      type: 'link'
    }]
  }, {
    title: 'Footer Style',
    type: 'link',
    children: [{
      path: '/features/footer-default',
      title: 'Footer-Default',
      type: 'link'
    }, {
      path: '/features/footer-light',
      title: 'Footer-Light',
      type: 'link'
    }, {
      path: '/features/footer-dark',
      title: 'Footer-Dark',
      type: 'link'
    }, {
      path: '/features/footer-light2',
      title: 'Footer Dark Light',
      type: 'link'
    }, {
      path: '/features/footer-dark2',
      title: 'Footer Dark Gradient',
      type: 'link'
    }, {
      path: '/features/footer-dark3',
      title: 'Footer Creative',
      type: 'link'
    }]
  }, {
    title: 'Gallery',
    type: 'link',
    children: [{
      path: '/features/zoom-gallery',
      title: 'Zoom Gallery',
      type: 'link'
    }, {
      path: '/features/form-popup',
      title: 'Form Popup',
      type: 'link'
    }, {
      path: '/features/modal-popup',
      title: 'Modal Popup',
      type: 'link'
    }, {
      path: '/features/youtube-popup',
      title: 'Youtube Popup',
      type: 'link'
    }, {
      path: '/features/map-popup',
      title: 'Map Popup',
      type: 'link'
    }]
  }]
}];

/***/ }),

/***/ "./containers/common/TopHeader.js":
/*!****************************************!*\
  !*** ./containers/common/TopHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\common\\TopHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TopHeader = props => {
  return __jsx("div", {
    className: "topheader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "tel:+971 526582020",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "+971 526582020")));
};

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./containers/common/header.js":
/*!*************************************!*\
  !*** ./containers/common/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./containers/common/nav.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopHeader */ "./containers/common/TopHeader.js");
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\common\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = props => {
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("header", {
    className: `${props.className || 'app2'} loding-header nav-abs custom-scroll  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "m-r-auto",
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/OTF/logo/ot_logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\containers\\common\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    mainmenu.filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "close"))), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/elements/price/element/price5.js":
/*!************************************************!*\
  !*** ./pages/elements/price/element/price5.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\elements\\price\\element\\price5.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Slider from "react-slick";

 // import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      centerPadding: "160px",
      padding: "20px",
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      dots: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }]
};

const PricingFive = () => {
  const PricingResume2 = [{
    icon: "assets/images/OTF/icons/Premier.png",
    iconW: "assets/images/OTF/icons/PremierW.png",
    title: "Orange Premier",
    feature1: "Unlimited classes",
    feature2: 'Reduced rate for families'
  }, {
    icon: "assets/images/OTF/icons/Orange-elite.png",
    iconW: "assets/images/OTF/icons/eliteW.png",
    title: "Orange Elite",
    feature1: "8 classes/month",
    feature2: 'Extra classes at reduced rate'
  }, {
    icon: "assets/images/OTF/icons/Basic.png",
    iconW: "assets/images/OTF/icons/BasicW.png",
    title: "Orange Basic",
    feature1: "4 classes/month",
    feature2: 'Extra classes at reduced rate'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrapper-full",
    id: "monthly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme pricing-slider price-margin"
  }, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }), PricingResume2.map((item, i) => {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "price-container hover-overlay shadows bg-white text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "price-feature-container set-relative",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 53
      }
    }, __jsx("div", {
      className: "feature-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 57
      }
    }, __jsx("center", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 61
      }
    }, __jsx("img", {
      src: item.icon,
      className: "feature-icon1 mb-4",
      alt: "icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 65
      }
    }), __jsx("img", {
      src: item.iconW,
      className: "feature-icon2 d-none mb-4",
      alt: "icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 65
      }
    })), __jsx("h4", {
      className: "feature-text-heading text-center bold text-uppercase font-primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 61
      }
    }, item.title), __jsx("hr", {
      className: "set-border",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 61
      }
    })), __jsx("div", {
      className: "price-features font-primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 57
      }
    }, __jsx("h5", {
      className: "price-feature text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 61
      }
    }, item.feature1), __jsx("h5", {
      className: "price-feature text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 61
      }
    }, item.feature2)), __jsx("a", {
      className: "otfBtn2",
      href: "#",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 57
      }
    }, "join now"))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingFive);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _pages_layouts_sections_gym_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/layouts/sections/gym/banner */ "./pages/layouts/sections/gym/banner.js");
/* harmony import */ var _pages_layouts_sections_gym_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/layouts/sections/gym/format */ "./pages/layouts/sections/gym/format.js");
/* harmony import */ var _pages_layouts_sections_gym_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/layouts/sections/gym/about */ "./pages/layouts/sections/gym/about.js");
/* harmony import */ var _pages_layouts_sections_gym_schedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/layouts/sections/gym/schedule */ "./pages/layouts/sections/gym/schedule.js");
/* harmony import */ var _pages_layouts_sections_gym_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/layouts/sections/gym/counter */ "./pages/layouts/sections/gym/counter.js");
/* harmony import */ var _pages_layouts_sections_gym_trainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/layouts/sections/gym/trainer */ "./pages/layouts/sections/gym/trainer.js");
/* harmony import */ var _pages_layouts_sections_gym_pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/layouts/sections/gym/pricing */ "./pages/layouts/sections/gym/pricing.js");
/* harmony import */ var _pages_layouts_sections_gym_calculate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/layouts/sections/gym/calculate */ "./pages/layouts/sections/gym/calculate.js");
/* harmony import */ var _pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/layouts/sections/gym/footer */ "./pages/layouts/sections/gym/footer.js");
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components







 // import TestimonialSection from '../pages/layouts/sections/gym/testimonial'


 // import BrandSection from '../pages/layouts/sections/gym/brand'



const Gym = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#000');
    document.body.style.setProperty('--dark', '#000');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Orange Theory")), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "gym nav-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_schedule__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_pricing__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_counter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_trainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_calculate__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_pages_layouts_sections_gym_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Gym);

/***/ }),

/***/ "./pages/layouts/sections/gym/about.js":
/*!*********************************************!*\
  !*** ./pages/layouts/sections/gym/about.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => __jsx("section", {
  className: "gym format",
  id: "about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("h3", {
  className: "oftHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, "What happens in class doesn\u2019t stay in class?"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "text-center center-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid format-img",
  src: "/assets/images/OTF/home/warrior-2-pose.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 21
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "format-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "p-light oftsubHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 33
  }
}, "Orangetheory is a heart-rate based HIIT total-body group workout that combines science, coaching and technology to guarantee maximum results from the inside out. It\u2019s designed to charge your metabolism for MORE caloric afterburn, MORE results, and MORE confidence, all to deliver you MORE LIFE.  Orangetheory is more than a gym because the work you do here in our studio will make all the difference out there in your world.")), __jsx("a", {
  className: "otfBtn",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 29
  }
}, "learn more")))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/layouts/sections/gym/banner.js":
/*!**********************************************!*\
  !*** ./pages/layouts/sections/gym/banner.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
const sliderData = [{
  bannerImg: "assets/images/OTF/banner/homeBannerSlider.jpg",
  title: "The Smartest Workout for More Results",
  detail: "Aliquet nullam cursus mollis donec imperdiet enim viverra. A ac tincidunt mollis sit sed placerat diam bibendum porta. Egestas nisl viverra arcu faucibus.",
  btn1: "book class now",
  btn2: "view membership details"
}, {
  bannerImg: "assets/images/OTF/banner/homeBannerSlider.jpg",
  title: "The Smartest Workout for More Results",
  detail: "Aliquet nullam cursus mollis donec imperdiet enim viverra. A ac tincidunt mollis sit sed placerat diam bibendum porta. Egestas nisl viverra arcu faucibus.",
  btn1: "book class now",
  btn2: "view membership details"
}];

const Banner = () => __jsx("section", {
  className: "gym header",
  id: "home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "header5-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "default-dots gym-slider",
  id: "gym-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}), sliderData.map((x, i) => __jsx("div", {
  className: "item",
  key: i,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "gym-header bg",
  style: {
    backgroundImage: `url(${x.bannerImg})`
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 37
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 41
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 49
  }
}, __jsx("div", {
  className: "header-text bold-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 53
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 57
  }
}, x.title)), __jsx("div", {
  className: "header-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 53
  }
}, __jsx("p", {
  className: "text-white p-light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 57
  }
}, x.detail)), __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 53
  }
}, __jsx("ul", {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 57
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 61
  }
}, __jsx("a", {
  className: " btn btn-default",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 65
  }
}, x.btn1)), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 61
  }
}, __jsx("a", {
  className: " btn btn-default",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 65
  }
}, x.btn2)))))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/gym/calculate.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/gym/calculate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\calculate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Calculate = () => __jsx("section", {
  className: "gym format bg-location p-0",
  id: "bmi",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  className: "BGImgLocation p-0",
  style: {
    backgroundImage: "url('assets/images/OTF/home/locationbg.jpg')"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "p-5 mx-5 mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "text-left oftHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, "Our Locations"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "locationDiv mb-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 8,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 33
  }
}, __jsx("h4", {
  className: "locationHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 37
  }
}, "Orangetheory Fitness mercato mall - Level 1"), __jsx("p", {
  className: "locationsubHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 37
  }
}, "Jumeirah Beach Road, Dubai United Arab Emirates ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 62
  }
}), "Contact No: ", __jsx("a", {
  href: "tel:9714 340 1040",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 53
  }
}, "+9714 340 1040"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 4,
  className: "d-flex justify-content-center align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "tel:9714 340 1040",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}, __jsx("i", {
  className: "fa fa-phone iconstyelLocation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 41
  }
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "locationDiv",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 8,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 33
  }
}, __jsx("h4", {
  className: "locationHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 37
  }
}, "times square center - Ground Floor"), __jsx("p", {
  className: "locationsubHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 37
  }
}, "Sheikh Zayed Road, Dubai United Arab Emirates ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 62
  }
}), "Contact No: ", __jsx("a", {
  href: "tel:+9714 324 4424",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 53
  }
}, "+9714 324 4424"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 4,
  className: "d-flex justify-content-center align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "tel:+9714 324 4424",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 37
  }
}, __jsx("i", {
  className: "fa fa-phone iconstyelLocation",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 41
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  className: "p-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 21
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Calculate);

/***/ }),

/***/ "./pages/layouts/sections/gym/counter.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/gym/counter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\counter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Counter = () => __jsx("section", {
  className: "gym counter  bg-img3 bg1",
  style: {
    backgroundImage: "url('assets/images/OTF/home/get-off.jpg')"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, __jsx("h3", {
  className: "text-white oftHeading mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 17
  }
}, "Get 10% off during this festive season!"), __jsx("p", {
  className: "p-light text-white text-center mb-5 oftsubHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, "Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."), __jsx("a", {
  className: "otfBtn1",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 17
  }
}, "BOOK YOUR SESSIONS NOW!"))));

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./pages/layouts/sections/gym/footer.js":
/*!**********************************************!*\
  !*** ./pages/layouts/sections/gym/footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("footer", {
  className: "gym footer2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  className: "set-first",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "logo-sec",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/OTF/logo/footer_logo.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}), __jsx("ul", {
  className: "d-flex footer-social social",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 33
  }
}, __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 45
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook-f",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 45
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-linkedin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 45
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 45
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 33
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 41
  }
}, "Select You Locations")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 41
  }
}, "Our Mission, Vision, & Values")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 41
  }
}, "Press")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 41
  }
}, "Franchisees")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 41
  }
}, "International Opportunities")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 41
  }
}, "Jobs")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 41
  }
}, "Articles")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 25
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 29
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 33
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 41
  }
}, "Shop")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 41
  }
}, "Customer Service")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 41
  }
}, "Real Estate")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 41
  }
}, "Promotion Terms")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 41
  }
}, "Do not sell my information")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 41
  }
}, "Global Studios")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "footer-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 33
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 33
  }
}, "Orangetheory Fitness Mercato Mall - Level 1"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 33
  }
}), __jsx("span", {
  style: {
    fontWeight: "300"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 33
  }
}, "Jumeirah Beach Road, Dubai United Arab Emirates")), __jsx("p", {
  className: "para-address mt-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 33
  }
}), __jsx("a", {
  href: "tel:+9714 340 1040",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 33
  }
}, "+9714 340 1040")), __jsx("p", {
  className: "para-address mt-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 33
  }
}), __jsx("strong", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 33
  }
}, "Times Square Centre - Ground Floor"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 33
  }
}), __jsx("span", {
  style: {
    fontWeight: "300"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 33
  }
}, "Sheikh Zayed Road, Dubai United Arab Emirates")), __jsx("p", {
  className: "para-address mt-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 33
  }
}), __jsx("a", {
  href: "tel:+9714 340 1040",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 33
  }
}, "+9714 340 1040"))))))), __jsx("div", {
  className: "gym copyright text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 13
  }
}, "\xA9", __jsx("a", {
  className: "copyright-text",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 18
  }
}, "Orangetheoryfitness"), " | ", __jsx("a", {
  className: "copyright-text ",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 83
  }
}, "Terms of use "), " | ", __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 143
  }
}, "Privacy Policy"), " | Designed and Managed by ", __jsx("a", {
  className: "copyright-text",
  href: "https://www.prism-me.com/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 227
  }
}, "Prism Digital."))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/gym/format.js":
/*!**********************************************!*\
  !*** ./pages/layouts/sections/gym/format.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\format.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const featureData = [{
  img: "/assets/images/OTF/icons/f1.png",
  title: "Free classes per month",
  subtitle: "In nulla tristique consequat mattis. Netus aliquet."
}, {
  img: "/assets/images/OTF/icons/f2.png",
  title: "Largest & most affordable",
  subtitle: "In faucibus volutpat fringilla dictumst blandit scelerisque."
}, {
  img: "/assets/images/OTF/icons/f3.png",
  title: "Gender based workout spaces",
  subtitle: "Parturient vitae arcu mollis nulla. Velit ligula amet quis eget."
}, {
  img: "/assets/images/OTF/icons/f4.png",
  title: "Latest piece of equipments",
  subtitle: "Sit maecenas metus odio purus. Adipiscing donec in orci."
}, {
  img: "/assets/images/OTF/icons/f5.png",
  title: "Covered car parking",
  subtitle: "Cras lobortis mattis sed faucibus tempus."
}, {
  img: "/assets/images/OTF/icons/f6.png",
  title: "open anytime 24/7",
  subtitle: "Vulputate dolor eu mattis condimentum. "
}];

const Format = () => __jsx("section", {
  className: "gym formatBG",
  style: {
    backgroundImage: "url('assets/images/OTF/home/features.jpg')"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "bgFeature",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 17
  }
}, featureData.map((x, i) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  key: i,
  className: "mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 37
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: x.img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 41
  }
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 10,
  className: "d-flex flex-column justify-content-center align-items-start",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 37
  }
}, __jsx("h4", {
  className: "formatHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 41
  }
}, x.title), __jsx("p", {
  className: "p-light formatsubHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 41
  }
}, x.subtitle)))))))));

/* harmony default export */ __webpack_exports__["default"] = (Format);

/***/ }),

/***/ "./pages/layouts/sections/gym/pricing.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/gym/pricing.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_price_element_price5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../elements/price/element/price5 */ "./pages/elements/price/element/price5.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\pricing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Pricing = () => __jsx("section", {
  className: "gym pricing set-relative",
  id: "plan",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("h2", {
  className: "oftHeading text-dark",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, "Let\u2019s talk memberships")), __jsx(_elements_price_element_price5__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./pages/layouts/sections/gym/schedule.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/gym/schedule.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\schedule.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Schedule = () => __jsx("section", {
  className: "gym format bg-schedule",
  id: "schedule",
  style: {
    backgroundImage: "url('assets/images/OTF/home/health-safetybg.jpg')"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("h3", {
  className: "oftHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, "Health and Safety (It's not either/or)"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 21
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "format-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "p-light oftsubHeading text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 33
  }
}, "Orangetheory is a heart-rate based HIIT total-body group workout that combines science, coaching and technology to guarantee maximum results from the inside out. It\u2019s designed to charge your metabolism for MORE caloric afterburn, MORE results, and MORE confidence, all to deliver you MORE LIFE.  Orangetheory is more than a gym because the work you do here in our studio will make all the difference out there in your world.")), __jsx("ul", {
  className: "icon-collection",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 29
  }
}, __jsx("li", {
  className: "about-icongym",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "center-content",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 37
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid icons",
  src: "/assets/images/OTF/icons/heatl1.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 41
  }
}))), __jsx("li", {
  className: "about-icongym",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "center-content",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid icons",
  src: "/assets/images/OTF/icons/heatl2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 41
  }
}))), __jsx("li", {
  className: "about-icongym",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "center-content",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 37
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid icons",
  src: "/assets/images/OTF/icons/heatl3.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 41
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "text-center center-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid format-img",
  src: "/assets/images/OTF/home/health-safty.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 25
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./pages/layouts/sections/gym/trainer.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/gym/trainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "I:\\Prism Projects\\OTF\\otf\\pages\\layouts\\sections\\gym\\trainer.js";
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
    breakpoint: 420,
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
const testimonial = [{
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

const Trainer = () => __jsx("section", {
  className: "gym trainers",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  className: "overflow-hide",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }
}, __jsx("h3", {
  className: "oftHeading text-dark mb-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 13
  }
}, "Testimonials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme trainers-slider",
  id: "trainers-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 21
  }
}), testimonial.map((x, i) => __jsx("div", {
  className: "item",
  key: i,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 33
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: x.img,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 37
  }
}), __jsx("div", {
  className: "text-center trainers-info",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 37
  }
}, __jsx("h4", {
  className: " mb-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 41
  }
}, x.title), __jsx("p", {
  className: "p-light text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 41
  }
}, x.subtitle)))))))));

/* harmony default export */ __webpack_exports__["default"] = (Trainer);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\Prism Projects\OTF\otf\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
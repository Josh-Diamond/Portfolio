webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Transition */ "./components/Transition.jsx");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-card-flip */ "./node_modules/react-card-flip/lib/react-card-flip.js");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon/ActiveCard */ "./components/icon/ActiveCard.jsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // import { Document, Page } from 'react-pdf';

function Section(_ref) {
  var title = _ref.title,
      id = _ref.id,
      image = _ref.image,
      classNameProp = _ref.classNameProp,
      dark = _ref.dark,
      skills = _ref.skills,
      portfolio = _ref.portfolio,
      resume = _ref.resume,
      contact = _ref.contact;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFlipped = _useState[0],
      setIsFlipped = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFlipped2 = _useState2[0],
      setIsFlipped2 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFlipped3 = _useState3[0],
      setIsFlipped3 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      backend = _useState4[0],
      setBackend = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      frontend = _useState5[0],
      setFrontend = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      devops = _useState6[0],
      setDevops = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeSkill = _useState7[0],
      setActiveSkill = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      resumeView = _useState8[0],
      setResumeView = _useState8[1]; // const scrollToTop = () => {
  //     scroll.scrollToTop()
  // }


  var clickMeFront = function clickMeFront() {
    setFrontend(true);
    setIsFlipped(true);
  };

  var clickMeFrontBack = function clickMeFrontBack() {
    setFrontend(false);
    setIsFlipped(false);
    setActiveSkill(null);
  };

  var clickMeBack = function clickMeBack() {
    setBackend(true);
    setIsFlipped2(true);
  };

  var clickMeBackFront = function clickMeBackFront() {
    setBackend(false);
    setIsFlipped2(false);
    setActiveSkill(null);
  };

  var clickMeDev = function clickMeDev() {
    setDevops(true);
    setIsFlipped3(true);
  };

  var clickMeDevBack = function clickMeDevBack() {
    setDevops(false);
    setIsFlipped3(false);
    setActiveSkill(null);
  };

  var scrollToTop = function scrollToTop() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1808770755" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-1808770755" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-1808770755" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1808770755" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-1808770755" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1808770755" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeFINAL.png",
    alt: "Tree Canopy Image",
    key: frontend ? null : 'front',
    onClick: clickMeFront,
    className: "jsx-1808770755" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-1808770755" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'canopy-header margin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1808770755" + " " + "skills-title opacity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-1808770755" + " " + 'x opacity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-1808770755" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-icons card-icons-canopy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, icons.frontend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiHtml5" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiHtml5"], {
      style: {
        fontSize: '6rem',
        color: '#E54D26'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), " ") : icon.icon === "DiCss3" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiCss3"], {
      style: {
        fontSize: '6rem',
        color: '#3D8FC6'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), " ") : icon.icon === "DiLess" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiLess"], {
      style: {
        fontSize: '6rem',
        color: '#2A4D80'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), " ") : icon.icon === "DiSass" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiSass"], {
      style: {
        fontSize: '6rem',
        color: '#CC6699'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), " ") : icon.icon === "DiBootstrap" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiBootstrap"], {
      style: {
        fontSize: '6rem',
        color: '#5B4282'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), " ") : icon.icon === "DiJavascript1" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiJavascript1"], {
      style: {
        fontSize: '6rem',
        color: '#F0DB4F'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), " ") : icon.icon === "DiReact" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiReact"], {
      style: {
        fontSize: '6rem',
        color: '#61DAFB'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), " ") : icon.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
      src: "../static/redux.png",
      alt: "Redux Icon",
      style: {
        width: '75px',
        maxHeight: '70px',
        margin: '1%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }) : icon.icon === "img src='../static/next-text.png' alt='Next Icon'" ? __jsx("img", {
      src: "../static/next-text.png",
      alt: "Next Icon",
      style: {
        width: '75px',
        maxHeight: '75px',
        marginRight: '5%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      className: "jsx-1808770755" + " " + 'icon-hover front',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'devOps',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped3,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("img", {
    src: "../static/devops.png",
    alt: "Tree Canopy Image",
    key: devops ? null : 'front',
    onClick: clickMeDev,
    className: "jsx-1808770755" + " " + 'devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-1808770755" + " " + 'view dev-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-back-dev card-back-devops',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'dev-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1808770755" + " " + "skills-title-dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "DevOps"), __jsx("div", {
    className: "jsx-1808770755" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeDevBack,
    className: "jsx-1808770755" + " " + 'close-button-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-icons-dev',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, icons.devops.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
      style: {
        fontSize: '6rem',
        color: '#F34F29'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
      style: {
        fontSize: '6rem',
        color: '#181616'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), " ") : icon.icon === "Netlify" ? __jsx("img", {
      src: "../static/netlify.png",
      alt: "Netlify Icon",
      style: {
        width: '75px',
        height: '75px',
        marginTop: '2.25%',
        paddingLeft: '2%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }) : icon.icon === "Heroku" ? __jsx("img", {
      src: "../static/herokuu.png",
      alt: "Heroku Icon",
      style: {
        width: '90px',
        height: '90px',
        marginTop: '1%',
        paddingLeft: '2%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-1808770755" + " " + 'heroku icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("img", {
    src: "../static/roots.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-1808770755" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-1808770755" + " " + 'view canopy-view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-back card-back-canopy ',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'canopy-header margin-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1808770755" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-1808770755" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-1808770755" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "X"))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, icons.backend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
      style: {
        fontSize: '6rem',
        color: '#F34F29'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), " ") : icon.icon === "DiGithubBadge" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
      style: {
        fontSize: '6rem',
        color: '#181616'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), " ") : icon.icon === "iNodejsSmall" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiNodejsSmall"], {
      style: {
        fontSize: '6rem',
        color: '#83CD29'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }), " ") : icon.icon === "img src='../static/expressFinal.png' alt='Express Icon'" ? __jsx("img", {
      src: "../static/expressFinal.png",
      alt: "Express Icon",
      style: {
        width: '75px',
        height: '75px',
        marginTop: '2%',
        paddingLeft: '2%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }) : icon.icon === "img src='../static/knexjs.png' alt='Knex.js Icon'" ? __jsx("img", {
      src: "../static/knexjs.png",
      alt: "Knex.js Icon",
      style: {
        width: '75px',
        height: '75px',
        marginTop: '2%',
        paddingLeft: '2%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }) : icon.icon === "DiMysql" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiMysql"], {
      style: {
        fontSize: '6rem',
        color: '#00618A',
        marginLeft: '14%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), " ") : icon.icon === "DiPostgresql" ? __jsx("div", {
      className: "jsx-1808770755" + " " + 'icon-hover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiPostgresql"], {
      style: {
        fontSize: '6rem',
        color: '#336791',
        marginRight: '12%'
      },
      onClick: function onClick() {
        return setActiveSkill(icon);
      },
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), " ") : null);
  }))))))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, frontend || backend || devops ? __jsx("h6", {
    className: "jsx-1808770755" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-1808770755" + " " + 'select-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Select an Image"), activeSkill && __jsx(_icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeSkill: activeSkill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChartLine"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaGlobeAmericas"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. "))))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1808770755" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'resume-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("a", {
    href: "../static/resume.pdf",
    download: true,
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiDownload"], {
    style: {
      fontSize: '2.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), __jsx("details", {
    style: {
      marginTop: '2%'
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("summary", {
    onClick: function onClick() {
      return setResumeView(!resumeView);
    },
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, resumeView ? __jsx("div", {
    className: "jsx-1808770755" + " " + 'resume-imgs',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeTop.png",
    alt: "resume-bottom",
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx("img", {
    src: "../static/resumeBottom.png",
    alt: "resume-top",
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: "../static/resume-header.png",
    alt: "resume-header",
    className: "jsx-1808770755" + " " + 'resume-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }))))))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1808770755" + " " + 'form',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx("form", {
    action: "https://formcarry.com/s/bN9Y1F-wrzW",
    method: "POST",
    "accept-charset": "UTF-8",
    className: "jsx-1808770755" + " " + 'form-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "name",
    required: true,
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    name: "email",
    required: true,
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "message",
    required: true,
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_gotcha",
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-1808770755",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Submit")))), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-1808770755" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1808770755",
    __self: this
  }, ".light.jsx-1808770755{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-1808770755{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-1808770755,.roots.jsx-1808770755,.devops.jsx-1808770755{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-1808770755 2s,shapeShiftOut-jsx-1808770755 2s;animation:colorFadeOut-jsx-1808770755 2s,shapeShiftOut-jsx-1808770755 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-1808770755:hover,.roots.jsx-1808770755:hover,.devops.jsx-1808770755:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-1808770755 2s,shapeShiftIn-jsx-1808770755 2s;animation:colorFadeIn-jsx-1808770755 2s,shapeShiftIn-jsx-1808770755 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-1808770755{width:33%;height:420px;}.frontend.jsx-1808770755,.backend.jsx-1808770755{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-1808770755{font-size:2.1rem;}.skills-title.jsx-1808770755:hover{cursor:pointer;}.view.jsx-1808770755{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2% 4%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.canopy-view.jsx-1808770755{width:680px;height:350px;}.dev-view.jsx-1808770755{width:680px;height:75px;}.roots-view.jsx-1808770755{width:670px;height:350px;}.card-back.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-back-canopy.jsx-1808770755{max-width:100%;max-height:100%;color:black;border-radius:12px;}.card-back-devops.jsx-1808770755{color:#e5e7e6;max-width:100%;max-height:100%;width:680px;height:75px;border-radius:12px;}.card-back-roots.jsx-1808770755{color:#e5e7e6;max-width:100%;max-height:100%;width:670px;height:350px;border-radius:12px;}.card-icons.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:100%;}.card-icons-canopy.jsx-1808770755{padding:2%;}.icon-hover.jsx-1808770755{opacity:.5;}.icon-hover.jsx-1808770755:hover{opacity:1;}.card-icons-dev.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;max-width:100%;margin:-6% 5%;}.dev-header.jsx-1808770755{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-weight:bolder;}.canopy-header.jsx-1808770755{color:#000c1f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:680px;margin-top:-65px;}.skills-title-dev.jsx-1808770755{color:#000c1f;}.close-button-dev.jsx-1808770755{color:#000c1f;margin:none;padding:none;}h2.jsx-1808770755{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-1808770755{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-1808770755{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-1808770755{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-1808770755:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-1808770755{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-1808770755{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-1808770755{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-1808770755{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-1808770755{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-1808770755{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-1808770755{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-1808770755{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-1808770755{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1808770755{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1808770755{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-1808770755{from{opacity:1;}to{opacity:0;}}.animate.jsx-1808770755{opacity:1;}.gauges.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-1808770755{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-1808770755{margin-top:55px;}.light-text.jsx-1808770755{color:#000c1f;}.title-skills.jsx-1808770755{margin-top:1%;}.section-content.jsx-1808770755{margin-bottom:2%;}.modal.jsx-1808770755{width:450px;max-height:270px;margin-top:17%;max-width:100%;border-radius:12px;padding:2%;}.images-modal.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.close-button.jsx-1808770755{font-size:2.1rem;font-weight:bolder;}.icon-selected.jsx-1808770755{display:none;}.select-icon.jsx-1808770755{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-1808770755 2s;animation:fadeIn-jsx-1808770755 2s;}.select-image.jsx-1808770755{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;-webkit-animation:fadeIn-jsx-1808770755 2s;animation:fadeIn-jsx-1808770755 2s;}.front.jsx-1808770755{margin:0 2%;}.margin.jsx-1808770755{margin:2% 0;}.margin-back.jsx-1808770755{margin-top:-25px;margin-bottom:2%;}.resume-container.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.resume-imgs.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.resume-header.jsx-1808770755{-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}summary.jsx-1808770755{outline:none;cursor:pointer;}summary.jsx-1808770755::-webkit-details-marker{display:none;}a.jsx-1808770755{color:#b7b5b3;}a.jsx-1808770755:hover{border-bottom:2px solid #4ad5ff;cursor:pointer;color:#000c1f;}.form.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:35%;border:2px solid red;margin:0 auto;}.form-container.jsx-1808770755{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:2px solid white;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1VvQixBQUc4QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JFLEFBSUEsQUFJQSxBQUlDLEFBV0UsQUFPRCxBQVNBLEFBUUQsQUFVRixBQUdBLEFBR0QsQUFHRyxBQU9DLEFBU0EsQUFVQSxBQUdBLEFBS0MsQUFRQyxBQUtILEFBSUMsQUFLRSxBQUtILEFBUUUsQUFVWSxBQUk1QixBQUkwQixBQUkxQixBQUl1QixBQUdDLEFBS0EsQUFHRCxBQUtSLEFBR0EsQUFLQSxBQUdBLEFBd0JKLEFBR0csQUFTQSxBQU91QyxBQVVwQyxBQUdGLEFBR0EsQUFHRyxBQUdMLEFBWUMsQUFXSSxBQUlKLEFBR0ssQUFRQSxBQWNOLEFBR0EsQUFHSyxBQUlKLEFBT0EsQUFRNkMsQUFLN0MsQUFNbEIsQUFFbUIsQUFJa0IsQUFLbkIsQUFNQSxVQXpaQSxBQWtDQSxBQWlGakIsQUFrSEksQUFHQSxBQUtBLEFBR0EsQUF3QkosQ0FwUmdCLEFBeUhoQixBQUdBLENBNURpQixBQUlELEFBSUMsQUFxUEksQUFvRHJCLEFBR0EsQ0E1QkEsQUF1RG1CLEFBS25CLENBdFRtQixBQVNBLEFBa0NGLEFBU0EsQUFVakIsQUFHZ0IsQUFzQkksQUErSHBCLEFBR0EsQUFpR0EsQ0FuYTJCLEFBaUNWLEFBb0JqQixBQTZDb0IsQUE2RUQsQUFtQ25CLENBM0JvQixBQWNGLEFBdUhsQixDQTNRQSxBQW9SQSxBQTBCdUIsQUFtQ0YsQ0F0SmpCLEFBV0EsQUErR3NCLEFBUUEsQ0EvSHRCLEFBS0EsSUF4T2UsQUFjbkIsQ0FzREEsQ0FsSG9CLEFBWUEsQUFrR3BCLEFBUUEsQ0F1RmlCLEVBaVBqQixDQWxUb0IsQUFTQSxBQXNORCxDQXpKRyxBQWlCSixBQUtBLENBbkdGLENBcUZHLEFBOE9BLEVBbkNuQixFQW5DQSxFQW5WOEMsQ0ErSjlDLENBMkxtQixBQVFBLENBaFptQixBQVlwQixFQXlISyxDQThGdkIsQUFLQSxBQW1JbUIsQ0EvTkgsQUFTQSxFQXFFaEIsQUE4T2tCLENBdFBLLEVBOENuQixBQUtBLEVBOEVzQixFQXRGdEIsQUFXQSxDQTNQa0MsQUE0WG5CLEFBUUEsRUFwUUgsQUFTQyxDQWdTMEMsQ0F6RXBDLEVBNEZ2QixDQW5VQSxPQXBHZ0QsQUE0R3pCLENBU0EsQUFtUEwsQUFRQSxJQS9ZVyxBQW9CSCxBQWlETyxBQWdEUCxBQW1DSCxBQW1CSixBQStDUSxBQWNBLEFBd0ZKLEFBU1UsQUFRZCxBQWlDYyxBQWtEUCxBQU9BLEFBOEJSLEFBTVEsSUFwR1gsTUFuUkksQUFnVEssQUFRQSxJQXBZSyxBQWdJN0IsQUF1Q3VCLEFBU0EsQUE4UUUsQ0ExWUMsQUFxRjFCLEFBNkxnQixBQTZCaEIsVUE5VzBCLEVBa1ZULFFBd0hDLElBOWJRLEFBdWE0QixDQWhHckMsT0FsVlEsRUEwY3pCLFFBaFNpQyxJQTlKUixNQTJFRixBQXVISCxDQTdNSSxDQXNKTCxBQXdLQSxTQTVTSSxBQWlHSSxBQStTSixBQVF1QyxBQW1DbkMsSUFqY0gsQ0FxS0QsQUFTQSxBQW9CdkIsS0E3TXFCLEFBcVlyQixBQVFBLENBb0NBLElBcFh1QixNQTBKdkIsQUFja0IsRUF3T0gsQ0FqY00sVUFrY3JCLENBeE9vQixDQTlMSyxBQXlTRSxTQS9RRixBQW9RQyxBQXlDMUIsR0F6TmtDLEFBd0tuQixFQXZGTyxRQWpKWSxBQW9WeUIsQ0EzRzFCLE9BMVBsQyxFQW1LZSxHQTVNUSxNQXlDdEIsQ0FvS0EsUUFoTXVCLEdBWHVDLElBWC9DLEFBK1lZLEVBamEzQixHQWdMa0MsQUFTQSxDQXZFWCxHQXNESixFQXJKQSxDQXVCMkMsR0FtQjlELENBakRBLElBOFpzRCxJQWpRcEMsRUFySmxCLElBa1RvQixRQTVKcEIsSUF1S3VCLElBVHZCLFFBMVMyRCxnQkFhQSxBQTJHNUMsQUFxUmYsVUFyVm1CLENBaUVBLFFBd0tJLE1BeE9BLENBbUV2QixHQXJDbUIsQUE2U25CLFVBbllzRCxLQXlEL0IsQUE4QkgsTUE0REcsQUFRUCxLQTlJc0MsS0EyRXRELEVBcUVxQixDQW5HSCxFQXlQbEIsSUEvSkEsUUF4Rm1CLEVBa0duQixVQTdKQSxHQTREOEQsYUEvQzlELE9BbVJrQixjQUNsQix3QkFwTzJELHVEQUNMLGtEQUd0RCIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zaXRpb24nXHJcbmltcG9ydCB7IFRpQXJyb3dVcFRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tICdyZWFjdC1jYXJkLWZsaXAnO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaUphdmFzY3JpcHQxLCBEaUJvb3RzdHJhcCwgRGlTYXNzLCBEaUxlc3MsIERpQ3NzMywgRGlIdG1sNSwgRGlHaXRodWJCYWRnZSwgRGlHaXQsIERpTm9kZWpzU21hbGwsIERpTXlzcWwsIERpUG9zdGdyZXNxbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBGYUNoYXJ0TGluZSwgRmFHbG9iZUFtZXJpY2FzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kUGhvbmVsaW5rLCBNZExpZ2h0YnVsYk91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IEFjdGl2ZUNhcmQgZnJvbSAnLi9pY29uL0FjdGl2ZUNhcmQnXHJcbmltcG9ydCB7IEZpRG93bmxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuLy8gaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tICdyZWFjdC1wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGlkLCBpbWFnZSwgY2xhc3NOYW1lUHJvcCwgZGFyaywgc2tpbGxzLCBwb3J0Zm9saW8sIHJlc3VtZSwgY29udGFjdH0pIHtcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQsIHNldElzRmxpcHBlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc0ZsaXBwZWQyLCBzZXRJc0ZsaXBwZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzRmxpcHBlZDMsIHNldElzRmxpcHBlZDNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYmFja2VuZCwgc2V0QmFja2VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmcm9udGVuZCwgc2V0RnJvbnRlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGV2b3BzLCBzZXREZXZvcHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYWN0aXZlU2tpbGwsIHNldEFjdGl2ZVNraWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbcmVzdW1lVmlldywgc2V0UmVzdW1lVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrTWVGcm9udCA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZCh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udGVuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQoZmFsc2UpXHJcbiAgICAgICAgc2V0QWN0aXZlU2tpbGwobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQodHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lQmFja0Zyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJhY2tlbmQoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMihmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZURldiA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHModHJ1ZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQzKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lRGV2QmFjayA9ICgpID0+IHtcclxuICAgICAgICBzZXREZXZvcHMoZmFsc2UpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkMyhmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZVByb3B9PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e1wic2VjdGlvblwiICsgKGRhcmsgPyBcIiBzZWN0aW9uLWRhcmtcIiA6IFwiXCIpfT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHtza2lsbHMgPyA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrIHRpdGxlLXNraWxscycgOiAndGl0bGUgdGl0bGUtc2tpbGxzJ30+e3RpdGxlfTwvc3Bhbj48L2gyPiA6IDxoMiBjbGFzc05hbWU9J3RpdGxlLWNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPXtkYXJrID8gJ3RpdGxlLWRhcmsnIDogJ3RpdGxlJ30+e3RpdGxlfTwvc3Bhbj48L2gyPn1cclxuXHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pYyBTZWN0aW9ucyAqL31cclxuXHJcbiAgICAgICAgICAgIHtza2lsbHMgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzLW1vZGFsJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9udGVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENhcmRGbGlwIGlzRmxpcHBlZD17aXNGbGlwcGVkfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXsnc3VuZmxvd2VyJ30gc3JjPScuLi9zdGF0aWMvdHJlZUZJTkFMLnBuZycgYWx0PSdUcmVlIENhbm9weSBJbWFnZScga2V5PXtmcm9udGVuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lRnJvbnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDIga2V5PSdmcm9udCcgc3R5bGU9e3sgY29sb3I6ICdwaW5rJywgekluZGV4OiA4MH19PkZyb250IEVuZDwvaDI+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGNhbm9weS12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmFjayBjYXJkLWJhY2stY2Fub3B5ICc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhbm9weS1oZWFkZXIgbWFyZ2luJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2tpbGxzLXRpdGxlIG9wYWNpdHlcIj5Gcm9udCBFbmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4IG9wYWNpdHknPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJyBvbkNsaWNrPXtjbGlja01lRnJvbnRCYWNrfT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWljb25zIGNhcmQtaWNvbnMtY2Fub3B5Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5mcm9udGVuZC5tYXAoaWNvbiA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUh0bWw1XCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpSHRtbDUgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRTU0RDI2J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlDc3MzXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCc+PERpQ3NzMyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMzRDhGQzYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUxlc3NcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlMZXNzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzJBNEQ4MCd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpU2Fzc1wiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaVNhc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjQ0M2Njk5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlCb290c3RyYXBcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlCb290c3RyYXAgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjNUI0MjgyJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlKYXZhc2NyaXB0MVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXIgZnJvbnQnPjxEaUphdmFzY3JpcHQxIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YwREI0Rid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpUmVhY3RcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250Jz48RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM2MURBRkInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzcwcHgnLCBtYXJnaW46ICcxJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3ZlciBmcm9udCcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIG1heEhlaWdodDogJzc1cHgnLCBtYXJnaW5SaWdodDogJzUlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSAvPiAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2T3BzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWQzfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT17J2Rldm9wcyd9IHNyYz0nLi4vc3RhdGljL2Rldm9wcy5wbmcnIGFsdD0nVHJlZSBDYW5vcHkgSW1hZ2UnIGtleT17ZGV2b3BzID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVEZXZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyBkZXYtdmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2stZGV2IGNhcmQtYmFjay1kZXZvcHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2LWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNraWxscy10aXRsZS1kZXZcIj5EZXZPcHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbi1kZXYnIG9uQ2xpY2s9e2NsaWNrTWVEZXZCYWNrfT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMtZGV2Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ucy5kZXZvcHMubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb24gPT09IFwiRGlHaXRcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlHaXQgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRjM0RjI5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlHaXRodWJCYWRnZVwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzE4MTYxNid9fSAgb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJOZXRsaWZ5XCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvbmV0bGlmeS5wbmcnIGFsdD0nTmV0bGlmeSBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBoZWlnaHQ6ICc3NXB4JywgbWFyZ2luVG9wOiAnMi4yNSUnLCBwYWRkaW5nTGVmdDogJzIlJyB9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkhlcm9rdVwiID8gPGltZyBjbGFzc05hbWU9J2hlcm9rdSBpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9oZXJva3V1LnBuZycgYWx0PSdIZXJva3UgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc5MHB4JywgaGVpZ2h0OiAnOTBweCcsIG1hcmdpblRvcDogJzElJywgcGFkZGluZ0xlZnQ6ICcyJSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q2FyZEZsaXAgaXNGbGlwcGVkPXtpc0ZsaXBwZWQyfSBmbGlwRGlyZWN0aW9uPSdob3Jpem9udGFsJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncm9vdHMnIHNyYz0nLi4vc3RhdGljL3Jvb3RzLnBuZycgYWx0PSdSb290cyBJbWFnZScga2V5PXtiYWNrZW5kID8gbnVsbCA6ICdmcm9udCd9IG9uQ2xpY2s9e2NsaWNrTWVCYWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd2aWV3IGNhbm9weS12aWV3J30ga2V5PSdiYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2sgY2FyZC1iYWNrLWNhbm9weSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYW5vcHktaGVhZGVyIG1hcmdpbi1iYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2tpbGxzLXRpdGxlJz5CYWNrIEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbicgb25DbGljaz17Y2xpY2tNZUJhY2tGcm9udH0+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmJhY2tlbmQubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUdpdFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUdpdGh1YkJhZGdlXCIgPyA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ob3Zlcic+PERpR2l0aHViQmFkZ2Ugc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjMTgxNjE2J319ICBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImlOb2RlanNTbWFsbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaU5vZGVqc1NtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzgzQ0QyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcImltZyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbidcIiA/IDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIgPyA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNzVweCcsIGhlaWdodDogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlNeXNxbFwiID8gPGRpdiBjbGFzc05hbWU9J2ljb24taG92ZXInPjxEaU15c3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzAwNjE4QScsIG1hcmdpbkxlZnQ6ICcxNCUnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gPC9kaXY+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVBvc3RncmVzcWxcIiA/IDxkaXYgY2xhc3NOYW1lPSdpY29uLWhvdmVyJz48RGlQb3N0Z3Jlc3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzMzNjc5MScsIG1hcmdpblJpZ2h0OiAnMTIlJ319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDYXJkRmxpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAge2Zyb250ZW5kIHx8IGJhY2tlbmQgfHwgZGV2b3BzID8gPGg2IGNsYXNzTmFtZT17YWN0aXZlU2tpbGwgPyBcImljb24tc2VsZWN0ZWRcIiA6IFwic2VsZWN0LWljb25cIn0+U2VsZWN0IGFuIEljb248L2g2PiA6IDxoNiBjbGFzc05hbWU9J3NlbGVjdC1pbWFnZSc+U2VsZWN0IGFuIEltYWdlPC9oNj59XHJcbiAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTa2lsbCAmJiA8QWN0aXZlQ2FyZCBhY3RpdmVTa2lsbD17YWN0aXZlU2tpbGx9IC8+IH1cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlcyc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGVmZmljaWVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nLi4vc3RhdGljL0RhcmtCYWRnZS5wbmcnIHdpZHRoPXsxNzV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGFydExpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkVmZmljaWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5tYXhpbXVtIHByb2R1Y3Rpdml0eTsgd2VsbC1vcmdhbml6ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmVzcG9uc2l2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBob25lbGluayBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PlJlc3BvbnNpdmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5vcHRpbWl6ZWQgbGF5b3V0cyBmb3IgYWxsIGRldmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogY3JlYXRpdmUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2Utc3R5bGVzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRMaWdodGJ1bGJPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5DcmVhdGl2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319PmhpZ2hlc3QgcXVhbGl0eSBzb2x1dGlvbnMgcHJvdmlkZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZHluYW1pYyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMgZHluYW1pYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhR2xvYmVBbWVyaWNhcyBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjMDAwYzFmJywgZm9udFdlaWdodDogJ2JvbGRlcid9fT5EeW5hbWljPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+cmVmbGVjdHMgcmVhbC10aW1lIGNoYW5nZXMgaW4gdmFsdWVzIHdpdGggYWN0aXZpdHkuICBCdWlsdCB3aXRoIERSWSwgcmV1c2FibGUgY29tcG9uZW50cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3BvcnRmb2xpbyAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlBPUlRGT0xJTyBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtyZXN1bWUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLi4vc3RhdGljL3Jlc3VtZS5wZGYnIGRvd25sb2FkPjxGaURvd25sb2FkIHN0eWxlPXt7IGZvbnRTaXplOiAnMi41cmVtJ319IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZXRhaWxzIHN0eWxlPXt7IG1hcmdpblRvcDogJzIlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeSBvbkNsaWNrPXsoKT0+IHNldFJlc3VtZVZpZXcoIXJlc3VtZVZpZXcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cmVzdW1lVmlldyA/IDxoNT5DbGljayB0byBIaWRlPC9oNT4gOiA8aDU+Q2xpY2sgRm9yIE1vcmUgSW5mbzwvaDU+fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bWVWaWV3ID8gPGRpdiBjbGFzc05hbWU9J3Jlc3VtZS1pbWdzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcmVzdW1lLWhlYWRlci5wbmcnIGFsdD0ncmVzdW1lLWhlYWRlcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9yZXN1bWVUb3AucG5nJyBhbHQ9J3Jlc3VtZS1ib3R0b20nLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvcmVzdW1lQm90dG9tLnBuZycgYWx0PSdyZXN1bWUtdG9wJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyZXN1bWUtaGVhZGVyJyBzcmM9Jy4uL3N0YXRpYy9yZXN1bWUtaGVhZGVyLnBuZycgYWx0PSdyZXN1bWUtaGVhZGVyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+UkVTVU1FIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtjb250YWN0ICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBhY3Rpb249XCJodHRwczovL2Zvcm1jYXJyeS5jb20vcy9iTjlZMUYtd3J6V1wiIG1ldGhvZD1cIlBPU1RcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9nb3RjaGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+Q09OVEFDVCBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8aDUgb25DbGljaz17c2Nyb2xsVG9Ub3B9IGNsYXNzTmFtZT17J2Fycm93LXVwLWljb24tZGFyayd9PjxUaUFycm93VXBUaGljayAvPjwvaDU+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRyYW5zaXRpb24gaW1hZ2U9e2ltYWdlfSBkYXJrPXtkYXJrfSBjb250YWN0PXtjb250YWN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5saWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogSUUgMTAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlciwgLnJvb3RzLCAuZGV2b3BzIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbG9yRmFkZU91dCAycywgc2hhcGVTaGlmdE91dCAycztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzE0MTMwMVxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN1bmZsb3dlcjpob3ZlciwgLnJvb3RzOmhvdmVyLCAuZGV2b3BzOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlSW4gMnMsIHNoYXBlU2hpZnRJbiAycztcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjgwYzA5XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZyb250ZW5kLCAuYmFja2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogLTIwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiUgNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2Fub3B5LXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2ODBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldi12aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvb3RzLXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWNhbm9weSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvY2Fub3B5VHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZC1iYWNrLWRldm9wcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvZGV2b3BzVHJhbnNwYXJlbnQucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmFjay1yb290cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogVVJMKCcuLi9zdGF0aWMvcm9vdHNUcmFuc3BhcmVudC5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtY2Fub3B5IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLWhvdmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMtZGV2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtNiUgNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGV2LWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAyJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbm9weS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNraWxscy10aXRsZS1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbi1kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0U1RTdFNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNWU3ZTY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtIDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcnJvdy11cC1pY29uLWRhcms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5hcnJvdy11cC1pY29uIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogNDklO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yRmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2hhcGVTaGlmdEluIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0T3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEBrZXlmcmFtZXMgY2lyY2xlSW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVPdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRvIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LXdpZHRoOiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Utc3R5bGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmdhdWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9EYXJrQmx1ZUJhZGdlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5keW5hbWljIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLXNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZiZmJmODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMtbW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAueCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAuc2VsZWN0b3I6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjJhNDQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMiU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIlIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnJlc3VtZS1pbWdzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXN1bWUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjdiNWIzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0YWQ1ZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBpY29ucyA9IHtcclxuICAgIFwiZnJvbnRlbmRcIjogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRcIixcclxuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwiR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAvLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdCBpcyBhIGRpc3RyaWJ1dGVkIHZlcnNpb24tY29udHJvbCBzeXN0ZW0gZm9yIHRyYWNraW5nIGNoYW5nZXMgaW4gc291cmNlIGNvZGUgZHVyaW5nIHNvZnR3YXJlIGRldmVsb3BtZW50LiBJdCBpcyBkZXNpZ25lZCBmb3IgY29vcmRpbmF0aW5nIHdvcmsgYW1vbmcgcHJvZ3JhbW1lcnMsIGJ1dCBpdCBjYW4gYmUgdXNlZCB0byB0cmFjayBjaGFuZ2VzIGluIGFueSBzZXQgb2YgZmlsZXMuIEl0cyBnb2FscyBpbmNsdWRlIHNwZWVkLCBkYXRhIGludGVncml0eSwgYW5kIHN1cHBvcnQgZm9yIGRpc3RyaWJ1dGVkLCBub24tbGluZWFyIHdvcmtmbG93cy5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImljb25cIjogXCJEaUdpdGh1YkJhZGdlXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXRIdWIgaXMgYW4gQW1lcmljYW4gY29tcGFueSB0aGF0IHByb3ZpZGVzIGhvc3RpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IHZlcnNpb24gY29udHJvbCB1c2luZyBHaXQuIEl0IGlzIGEgc3Vic2lkaWFyeSBvZiBNaWNyb3NvZnQsIHdoaWNoIGFjcXVpcmVkIHRoZSBjb21wYW55IGluIDIwMTggZm9yICQ3LjUgYmlsbGlvbi5cIixcclxuICAgICAgICAvLyAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUh0bWw1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhUTUw1XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSFRNTDUgaXMgYSBzb2Z0d2FyZSBzb2x1dGlvbiBzdGFjayB0aGF0IGRlZmluZXMgdGhlIHByb3BlcnRpZXMgYW5kIGJlaGF2aW9ycyBvZiB3ZWIgcGFnZSBjb250ZW50IGJ5IGltcGxlbWVudGluZyBhIG1hcmt1cCBiYXNlZCBwYXR0ZXJuIHRvIGl0LiBIVE1MNSBpcyB0aGUgZmlmdGggYW5kIGN1cnJlbnQgbWFqb3IgdmVyc2lvbiBvZiBIVE1MLCBhbmQgc3Vic3VtZXMgWEhUTUwuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlDc3MzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNTUzNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDU1MzIGlzIHRoZSBsYXRlc3QgZXZvbHV0aW9uIG9mIHRoZSBDYXNjYWRpbmcgU3R5bGUgU2hlZXRzIGxhbmd1YWdlIGFuZCBhaW1zIGF0IGV4dGVuZGluZyBDU1MyLjEuIEl0IGJyaW5ncyBhIGxvdCBvZiBsb25nLWF3YWl0ZWQgbm92ZWx0aWVzLCBsaWtlIHJvdW5kZWQgY29ybmVycywgc2hhZG93cywgZ3JhZGllbnRzLCB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLCBhcyB3ZWxsIGFzIG5ldyBsYXlvdXRzIGxpa2UgbXVsdGktY29sdW1ucywgZmxleGlibGUgYm94IG9yIGdyaWQgbGF5b3V0cy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUxlc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlc3MgaXMgYSBkeW5hbWljIHByZXByb2Nlc3NvciBzdHlsZSBzaGVldCBsYW5ndWFnZSB0aGF0IGNhbiBiZSBjb21waWxlZCBpbnRvIENhc2NhZGluZyBTdHlsZSBTaGVldHMgYW5kIHJ1biBvbiB0aGUgY2xpZW50IHNpZGUgb3Igc2VydmVyIHNpZGUuIERlc2lnbmVkIGJ5IEFsZXhpcyBTZWxsaWVyLCBMZXNzIGlzIGluZmx1ZW5jZWQgYnkgU2FzcyBhbmQgaGFzIGluZmx1ZW5jZWQgdGhlIG5ld2VyIFxcXCJTQ1NTXFxcIiBzeW50YXggb2YgU2Fzcywgd2hpY2ggYWRhcHRlZCBpdHMgQ1NTLWxpa2UgYmxvY2sgZm9ybWF0dGluZyBzeW50YXguXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlTYXNzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhc3NcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTYXNzIGlzIGEgc3R5bGUgc2hlZXQgbGFuZ3VhZ2UgaW5pdGlhbGx5IGRlc2lnbmVkIGJ5IEhhbXB0b24gQ2F0bGluIGFuZCBkZXZlbG9wZWQgYnkgTmF0YWxpZSBXZWl6ZW5iYXVtLiBBZnRlciBpdHMgaW5pdGlhbCB2ZXJzaW9ucywgV2VpemVuYmF1bSBhbmQgQ2hyaXMgRXBwc3RlaW4gaGF2ZSBjb250aW51ZWQgdG8gZXh0ZW5kIFNhc3Mgd2l0aCBTYXNzU2NyaXB0LCBhIHNpbXBsZSBzY3JpcHRpbmcgbGFuZ3VhZ2UgdXNlZCBpbiBTYXNzIGZpbGVzLiBcIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCb290c3RyYXBcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkZyb250LWVuZCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkJvb3RzdHJhcCBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIENTUyBmcmFtZXdvcmsgZGlyZWN0ZWQgYXQgcmVzcG9uc2l2ZSwgbW9iaWxlLWZpcnN0IGZyb250LWVuZCB3ZWIgZGV2ZWxvcG1lbnQuIEl0IGNvbnRhaW5zIENTUy0gYW5kIEphdmFTY3JpcHQtYmFzZWQgZGVzaWduIHRlbXBsYXRlcyBmb3IgdHlwb2dyYXBoeSwgZm9ybXMsIGJ1dHRvbnMsIG5hdmlnYXRpb24gYW5kIG90aGVyIGludGVyZmFjZSBjb21wb25lbnRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSmF2YXNjcmlwdDFcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSGlnaC1sZXZlbCBQcm9ncmFtbWluZyBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSmF2YVNjcmlwdCwgb2Z0ZW4gYWJicmV2aWF0ZWQgYXMgSlMsIGlzIGEgaGlnaC1sZXZlbCwgaW50ZXJwcmV0ZWQgc2NyaXB0aW5nIGxhbmd1YWdlIHRoYXQgY29uZm9ybXMgdG8gdGhlIEVDTUFTY3JpcHQgc3BlY2lmaWNhdGlvbi4gSmF2YVNjcmlwdCBoYXMgY3VybHktYnJhY2tldCBzeW50YXgsIGR5bmFtaWMgdHlwaW5nLCBwcm90b3R5cGUtYmFzZWQgb2JqZWN0LW9yaWVudGF0aW9uLCBhbmQgZmlyc3QtY2xhc3MgZnVuY3Rpb25zLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpUmVhY3RcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVhY3QuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWN0IGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuIEl0IGlzIG1haW50YWluZWQgYnkgRmFjZWJvb2sgYW5kIGEgY29tbXVuaXR5IG9mIGluZGl2aWR1YWwgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzLiBSZWFjdCBjYW4gYmUgdXNlZCBhcyBhIGJhc2UgaW4gdGhlIGRldmVsb3BtZW50IG9mIHNpbmdsZS1wYWdlIG9yIG1vYmlsZSBhcHBsaWNhdGlvbnMsIGFzIGl0IGlzIG9wdGltYWwgZm9yIGZldGNoaW5nIHJhcGlkbHkgY2hhbmdpbmcgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHJlY29yZGVkLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZHV4XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IExpYnJhcnlcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlZHV4IGlzIGFuIG9wZW4tc291cmNlIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgbWFuYWdpbmcgYXBwbGljYXRpb24gc3RhdGUuIEl0IGlzIG1vc3QgY29tbW9ubHkgdXNlZCB3aXRoIGxpYnJhcmllcyBzdWNoIGFzIFJlYWN0IG9yIEFuZ3VsYXIgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gU2ltaWxhciB0byBGYWNlYm9vaydzIEZsdXggYXJjaGl0ZWN0dXJlLCBpdCB3YXMgY3JlYXRlZCBieSBEYW4gQWJyYW1vdiBhbmQgQW5kcmV3IENsYXJrLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkZlYnJ1YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvbmV4dC10ZXh0LnBuZycgYWx0PSdOZXh0IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5leHQuanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIldlYiBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5leHQuanMgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIGJhc2VkIG9uIFJlYWN0LmpzLCBOb2RlLmpzLCBXZWJwYWNrIGFuZCBCYWJlbC5qcy4gVGhlIGZyYW1ld29yayBpcyBhZHZlcnRpc2VkIGFzIFxcXCJtZXRhLWZyYW1ld29yayBmb3IgdW5pdmVyc2FsIGFwcGxpY2F0aW9uc1xcXCIuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiQXVndXN0IDIwMTlcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImRldm9wc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBEZXZlbG9wZXIgUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIk5ldGxpZnlcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV0bGlmeVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ldGxpZnkgaXMgYSBTYW4gRnJhbmNpc2NvLWJhc2VkIGNsb3VkIGNvbXB1dGluZyBjb21wYW55IHRoYXQgb2ZmZXJzIGhvc3RpbmcgYW5kIHNlcnZlcmxlc3MgYmFja2VuZCBzZXJ2aWNlcyBmb3Igc3RhdGljIHdlYnNpdGVzLiBJdCBmZWF0dXJlcyBjb250aW51b3VzIGRlcGxveW1lbnQgZnJvbSBHaXQgYWNyb3NzIGEgZ2xvYmFsIGFwcGxpY2F0aW9uIGRlbGl2ZXJ5IG5ldHdvcmssIHNlcnZlcmxlc3MgZm9ybSBoYW5kbGluZywgc3VwcG9ydCBmb3IgQVdTIExhbWJkYSBmdW5jdGlvbnMsIGFuZCBmdWxsIGludGVncmF0aW9uIHdpdGggTGV0J3MgRW5jcnlwdC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJGZWJydWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiSGVyb2t1XCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcm9rdVwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUGxhdGZvcm1cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhlcm9rdSBpcyBhIGNsb3VkIHBsYXRmb3JtIGFzIGEgc2VydmljZSBzdXBwb3J0aW5nIHNldmVyYWwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzLiBPbmUgb2YgdGhlIGZpcnN0IGNsb3VkIHBsYXRmb3JtcywgSGVyb2t1IGhhcyBiZWVuIGluIGRldmVsb3BtZW50IHNpbmNlIEp1bmUgMjAwNywgd2hlbiBpdCBzdXBwb3J0ZWQgb25seSB0aGUgUnVieSBwcm9ncmFtbWluZyBsYW5ndWFnZSwgYnV0IG5vdyBzdXBwb3J0cyBKYXZhLCBOb2RlLmpzLCBTY2FsYSwgQ2xvanVyZSwgUHl0aG9uLCBQSFAsIGFuZCBHby5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJiYWNrZW5kXCI6IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiaWNvblwiOiBcIkRpR2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVzXCI6IHsgXCJmb250U2l6ZVwiOiBcIjZyZW1cIiwgXCJjb2xvclwiOiBcIiNGMzRGMjlcIn0sXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkdpdFwiLFxyXG4gICAgICAgIC8vICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJHaXQgaXMgYSBkaXN0cmlidXRlZCB2ZXJzaW9uLWNvbnRyb2wgc3lzdGVtIGZvciB0cmFja2luZyBjaGFuZ2VzIGluIHNvdXJjZSBjb2RlIGR1cmluZyBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gSXQgaXMgZGVzaWduZWQgZm9yIGNvb3JkaW5hdGluZyB3b3JrIGFtb25nIHByb2dyYW1tZXJzLCBidXQgaXQgY2FuIGJlIHVzZWQgdG8gdHJhY2sgY2hhbmdlcyBpbiBhbnkgc2V0IG9mIGZpbGVzLiBJdHMgZ29hbHMgaW5jbHVkZSBzcGVlZCwgZGF0YSBpbnRlZ3JpdHksIGFuZCBzdXBwb3J0IGZvciBkaXN0cmlidXRlZCwgbm9uLWxpbmVhciB3b3JrZmxvd3MuXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlc1wiOiBcImdpdEh1YlN0eWxlc1wiLFxyXG4gICAgICAgIC8vICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAvLyAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIERldmVsb3BlclwiLFxyXG4gICAgICAgIC8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaU5vZGVqc1NtYWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwibm9kZVN0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJKYXZhU2NyaXB0IFJ1bi10aW1lIEVudmlyb25tZW50XCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb2RlLmpzIGlzIGFuIG9wZW4tc291cmNlLCBjcm9zcy1wbGF0Zm9ybSwgSmF2YVNjcmlwdCBydW4tdGltZSBlbnZpcm9ubWVudCB0aGF0IGV4ZWN1dGVzIEphdmFTY3JpcHQgY29kZSBvdXRzaWRlIG9mIGEgYnJvd3Nlci5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nRXhwcmVzcyBJY29uJ1wiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcImV4cHJlc3NTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXhwcmVzcy5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXhwcmVzcy5qcywgb3Igc2ltcGx5IEV4cHJlc3MsIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZyYW1ld29yayBmb3IgTm9kZS5qcywgcmVsZWFzZWQgYXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBJdCBpcyBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgd2ViIGFwcGxpY2F0aW9ucyBhbmQgQVBJcy4gSXQgaGFzIGJlZW4gY2FsbGVkIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBzZXJ2ZXIgZnJhbWV3b3JrIGZvciBOb2RlLmpzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMva25leGpzLnBuZycgYWx0PSdLbmV4LmpzIEljb24nXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktuZXguanNcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgUXVlcnkgQnVpbGRlclwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiIEtuZXguanMgaXMgYSBKYXZhU2NyaXB0IHF1ZXJ5IGJ1aWxkZXIgZm9yIHJlbGF0aW9uYWwgZGF0YWJhc2VzIGluY2x1ZGluZyBQb3N0Z3JlU1FMLCBNeVNRTCwgU1FMaXRlMywgYW5kIE9yYWNsZS4gSXQgY2FuIGJlIHVzZWQgd2l0aCBjYWxsYmFja3MgYW5kIHByb21pc2VzLiBJdCBzdXBwb3J0cyB0cmFuc2FjdGlvbnMgYW5kIGNvbm5lY3Rpb24gcG9vbGluZy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlNeXNxbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcIm15U3FsU3R5bGVzXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk15U1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk15U1FMIGlzIGFuIG9wZW4tc291cmNlIHJlbGF0aW9uYWwgZGF0YWJhc2UgbWFuYWdlbWVudCBzeXN0ZW0uIEl0cyBuYW1lIGlzIGEgY29tYmluYXRpb24gb2YgXFxcIk15XFxcIiwgdGhlIG5hbWUgb2YgY28tZm91bmRlciBNaWNoYWVsIFdpZGVuaXVzJ3MgZGF1Z2h0ZXIsIGFuZCBcXFwiU1FMXFxcIiwgdGhlIGFiYnJldmlhdGlvbiBmb3IgU3RydWN0dXJlZFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVBvc3RncmVzcWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJwb3N0Z3Jlc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gU29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvc3RncmVTUUwsIGFsc28ga25vd24gYXMgUG9zdGdyZXMsIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSBlbXBoYXNpemluZyBleHRlbnNpYmlsaXR5IGFuZCB0ZWNobmljYWwgc3RhbmRhcmRzIGNvbXBsaWFuY2UuIEl0IGlzIGRlc2lnbmVkIHRvIGhhbmRsZSBhIHJhbmdlIG9mIHdvcmtsb2FkcywgZnJvbSBzaW5nbGUgbWFjaGluZXMgdG8gZGF0YSB3YXJlaG91c2VzIG9yIFdlYiBzZXJ2aWNlcyB3aXRoIG1hbnkgY29uY3VycmVudCB1c2Vycy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
}
var icons = {
  "frontend": [// {
  //     "icon": "DiGit",
  //     "name": "Git",
  //     "subtitle": "System Software",
  //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
  //     "date_learned": "January 2019"
  // },
  // {
  //     "icon": "DiGithubBadge",
  //     "name": "GitHub",
  //     "subtitle": "Software Developer",
  //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
  //     "date_learned": "January 2019"
  // },
  {
    "icon": "DiHtml5",
    "name": "HTML5",
    "subtitle": "Programming Language",
    "description": "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML5 is the fifth and current major version of HTML, and subsumes XHTML.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiCss3",
    "name": "CSS3",
    "subtitle": "Programming Language",
    "description": "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiLess",
    "name": "Less",
    "subtitle": "Programming Language",
    "description": "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer \"SCSS\" syntax of Sass, which adapted its CSS-like block formatting syntax.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiSass",
    "name": "Sass",
    "subtitle": "Programming Language",
    "description": "Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files. ",
    "date_learned": "January 2019"
  }, {
    "icon": "DiBootstrap",
    "name": "Bootstrap",
    "subtitle": "Front-end Framework",
    "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiJavascript1",
    "name": "JavaScript",
    "subtitle": "High-level Programming Language",
    "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiReact",
    "name": "React.js",
    "subtitle": "Web Framework",
    "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/redux.png' alt='Redux Icon'",
    "name": "Redux",
    "subtitle": "JavaScript Library",
    "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/next-text.png' alt='Next Icon'",
    "name": "Next.js",
    "subtitle": "Web Framework",
    "description": "Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as \"meta-framework for universal applications\".",
    "date_learned": "August 2019"
  }],
  "devops": [{
    "icon": "DiGit",
    "name": "Git",
    "subtitle": "System Software",
    "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiGithubBadge",
    "name": "GitHub",
    "subtitle": "Software Developer Platform",
    "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
    "date_learned": "January 2019"
  }, {
    "icon": "Netlify",
    "name": "Netlify",
    "subtitle": "Platform",
    "description": "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt.",
    "date_learned": "February 2019"
  }, {
    "icon": "Heroku",
    "name": "Heroku",
    "subtitle": "Platform",
    "description": "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
    "date_learned": "March 2019"
  }],
  "backend": [// {
  //     "icon": "DiGit",
  //     "styles": { "fontSize": "6rem", "color": "#F34F29"},
  //     "name": "Git",
  //     "subtitle": "System Software",
  //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
  //     "date_learned": "January 2019"
  // },
  // {
  //     "icon": "DiGithubBadge",
  //     "styles": "gitHubStyles",
  //     "name": "GitHub",
  //     "subtitle": "Software Developer",
  //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
  //     "date_learned": "January 2019"
  // },
  {
    "icon": "iNodejsSmall",
    "styles": "nodeStyles",
    "name": "Node.js",
    "subtitle": "JavaScript Run-time Environment",
    "description": "Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.",
    "date_learned": "March 2019"
  }, {
    "icon": "img src='../static/expressFinal.png' alt='Express Icon'",
    "styles": "expressStyles",
    "name": "Express.js",
    "subtitle": "Web Framework",
    "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    "date_learned": "March 2019"
  }, {
    "icon": "img src='../static/knexjs.png' alt='Knex.js Icon'",
    "name": "Knex.js",
    "subtitle": "JavaScript Query Builder",
    "description": " Knex.js is a JavaScript query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle. It can be used with callbacks and promises. It supports transactions and connection pooling.",
    "date_learned": "March 2019"
  }, {
    "icon": "DiMysql",
    "styles": "mySqlStyles",
    "name": "MySQL",
    "subtitle": "System Software",
    "description": "MySQL is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured",
    "date_learned": "March 2019"
  }, {
    "icon": "DiPostgresql",
    "styles": "postgresStyles",
    "name": "PostgreSQL",
    "subtitle": "System Software",
    "description": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
    "date_learned": "March 2019"
  }]
};

/***/ })

})
//# sourceMappingURL=index.js.be89fec86ef437843259.hot-update.js.map
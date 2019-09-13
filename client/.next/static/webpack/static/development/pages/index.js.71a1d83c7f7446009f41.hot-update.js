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
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










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
      backend = _useState3[0],
      setBackend = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      frontend = _useState4[0],
      setFrontend = _useState4[1]; // Icon Selectors
  // const [git, setGit] = useState(false)
  // const [gitHub, setGitHub] = useState(false)
  // const [html5, setHtml5] = useState(false)
  // const [css3, setCss3] = useState(false)
  // const [less, setLess] = useState(false)
  // const [sass, setSass] = useState(false)
  // const [bootstrap, setBootstrap] = useState(false)
  // const [javaScript, setJavaScript] = useState(false)
  // const [react, setReact] = useState(false)
  // const [redux, setRedux] = useState(false)
  // const [next, setNext] = useState(false)
  // const [node, setNode] = useState(false)
  // const [express, setExpress] = useState(false)
  // const [mySQL, setMySQL] = useState(false)
  // const [postgres, setPostgres] = useState(false)


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeSkill = _useState5[0],
      setActiveSkill = _useState5[1]; // const scrollToTop = () => {
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

  var scrollToTop = function scrollToTop() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1392688864" + " " + (classNameProp || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    id: id,
    className: "jsx-1392688864" + " " + "section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, skills ? __jsx("h2", {
    className: "jsx-1392688864" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1392688864" + " " + ((dark ? 'title-dark title-skills' : 'title title-skills') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, title)) : __jsx("h2", {
    className: "jsx-1392688864" + " " + 'title-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1392688864" + " " + ((dark ? 'title-dark' : 'title') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, title))), skills && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'images-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'images',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'frontend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeTopFinally.png",
    alt: "Tree Image",
    key: frontend ? null : 'front',
    onClick: clickMeFront,
    className: "jsx-1392688864" + " " + 'sunflower',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-1392688864" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeFrontBack,
    className: "jsx-1392688864" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "X")), __jsx("h3", {
    className: "jsx-1392688864" + " " + "skills-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Front End"), __jsx("div", {
    className: "jsx-1392688864" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, icons.frontend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
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
        lineNumber: 92
      },
      __self: this
    }) : icon.icon === "GiGithubBadge" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
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
        lineNumber: 93
      },
      __self: this
    }) : icon.icon === "DiHtml5" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiHtml5"], {
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
        lineNumber: 94
      },
      __self: this
    }) : icon.icon === "DiCss3" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiCss3"], {
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
        lineNumber: 95
      },
      __self: this
    }) : icon.icon === "DiLess" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiLess"], {
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
        lineNumber: 96
      },
      __self: this
    }) : icon.icon === "DiSass" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiSass"], {
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
        lineNumber: 97
      },
      __self: this
    }) : icon.icon === "DiBootstrap" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiBootstrap"], {
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
        lineNumber: 98
      },
      __self: this
    }) : icon.icon === "DiJavascript1" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiJavascript1"], {
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
        lineNumber: 99
      },
      __self: this
    }) : icon.icon === "DiReact" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiReact"], {
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
        lineNumber: 100
      },
      __self: this
    }) : icon.icon === "img src='../static/redux.png' alt='Redux Icon'" ? __jsx("img", {
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
      className: "jsx-1392688864",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
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
      className: "jsx-1392688864",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }) : null);
  })))))), __jsx("div", {
    className: "jsx-1392688864" + " " + 'backend',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_card_flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isFlipped: isFlipped2,
    flipDirection: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("img", {
    src: "../static/treeRootsFinally.png",
    alt: "Roots Image",
    key: backend ? null : 'front',
    onClick: clickMeBack,
    className: "jsx-1392688864" + " " + 'roots',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("div", {
    key: "back",
    className: "jsx-1392688864" + " " + 'view',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'card-back',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("p", {
    onClick: clickMeBackFront,
    className: "jsx-1392688864" + " " + 'close-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "X")), __jsx("h3", {
    className: "jsx-1392688864" + " " + 'skills-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Back End"), __jsx("div", {
    className: "jsx-1392688864" + " " + 'card-icons',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, icons.backend.map(function (icon) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, icon.icon === "DiGit" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGit"], {
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
        lineNumber: 123
      },
      __self: this
    }) : icon.icon === "GiGithubBadge" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiGithubBadge"], {
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
        lineNumber: 124
      },
      __self: this
    }) : icon.icon === "iNodejsSmall" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiNodejsSmall"], {
      style: {
        fontSize: '6rem',
        color: '#83CD29'
      },
      onClick: function onClick() {
        return setNode(!node);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }) : icon.icon === "img src='../static/expressFinal.png' alt='Next Icon'" ? __jsx("img", {
      src: "../static/expressFinal.png",
      alt: "Express Icon",
      style: {
        width: '75px',
        height: '75px',
        marginTop: '2%',
        paddingLeft: '2%'
      },
      onClick: function onClick() {
        return setExpress(!express);
      },
      className: "jsx-1392688864",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }) : icon.icon === "DiMysql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiMysql"], {
      style: {
        fontSize: '6rem',
        color: '#00618A',
        marginLeft: '14%'
      },
      onClick: function onClick() {
        return setMySQL(!mySQL);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }) : icon.icon === "DiPostgresql" ? __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_7__["DiPostgresql"], {
      style: {
        fontSize: '6rem',
        color: '#336791',
        marginRight: '12%'
      },
      onClick: function onClick() {
        return setPostgres(!postgres);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }) : null);
  }))))))), __jsx("div", {
    className: "jsx-1392688864" + " " + 'modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, frontend || backend ? __jsx("h6", {
    className: "jsx-1392688864" + " " + ((activeSkill ? "icon-selected" : "select-icon") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Select an Icon") : __jsx("h6", {
    className: "jsx-1392688864" + " " + 'select-image',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Select an Image"), activeSkill && __jsx(_icon_ActiveCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeSkill: activeSkill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauges',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaChartLine"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Efficient"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "maximum productivity; well-organized")), __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPhonelink"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Responsive"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "optimized layouts for all devices")), __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge-styles',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdLightbulbOutline"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Creative"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "highest quality solutions provided")), __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge-styles dynamic',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1392688864" + " " + 'gauge',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaGlobeAmericas"], {
    style: {
      color: '#E5E7E6',
      fontSize: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx("h4", {
    style: {
      color: '#000c1f',
      fontWeight: 'bolder'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Dynamic"), __jsx("p", {
    style: {
      color: '#141301'
    },
    className: "jsx-1392688864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "reflects real-time changes in values with activity.  Built with DRY, reusable components. "))))), portfolio && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1392688864" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), resume && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1392688864" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "RESUME CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!"))), contact && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "fadeIn",
    duration: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1392688864" + " " + ((dark ? null : 'light-text') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "CONTACT CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus! Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti? Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis! Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis! Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur? Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere. Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum. Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci. Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur! Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio. Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est! Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas! Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident. Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum. Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque? Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste. Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!")), __jsx("h5", {
    onClick: scrollToTop,
    className: "jsx-1392688864" + " " + 'arrow-up-icon-dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_4__["TiArrowUpThick"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  })))), __jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    dark: dark,
    contact: contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1392688864",
    __self: this
  }, ".light.jsx-1392688864{background-color:#e5e7e6;margin-top:-5px;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dark.jsx-1392688864{background-color:#000c1f;margin-top:-5px;color:#e5e7e6;font-family:'Raleway',sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.images.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1%;padding-top:2%;}.sunflower.jsx-1392688864,.roots.jsx-1392688864{max-width:100%;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-animation:colorFadeOut-jsx-1392688864 2s,shapeShiftOut-jsx-1392688864 2s;animation:colorFadeOut-jsx-1392688864 2s,shapeShiftOut-jsx-1392688864 2s;border-radius:50%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.sunflower.jsx-1392688864:hover,.roots.jsx-1392688864:hover{width:100%;height:100%;cursor:pointer;-webkit-animation:colorFadeIn-jsx-1392688864 2s,shapeShiftIn-jsx-1392688864 2s;animation:colorFadeIn-jsx-1392688864 2s,shapeShiftIn-jsx-1392688864 2s;-webkit-filter:grayscale(0%);filter:grayscale(0%);border-radius:12px;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.skills-card.jsx-1392688864{width:33%;height:420px;}.frontend.jsx-1392688864,.backend.jsx-1392688864{max-width:100%;width:450px;height:450px;margin-top:1%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.titles.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;border:1px solid red;padding:2%;}.skills-title.jsx-1392688864{font-size:2.1rem;margin-bottom:5%;margin-top:-20%;}.skills-title.jsx-1392688864:hover{cursor:pointer;}.view.jsx-1392688864{opacity:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2%;cursor:pointer;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);width:420px;height:420px;}.card-back.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;max-height:100%;}.card-icons.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;}h2.jsx-1392688864{font-size:4rem;padding-top:2%;padding-bottom:2%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding-left:2%;}p.jsx-1392688864{padding-left:2%;line-height:1.8;padding-top:2%;}.title-center.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title.jsx-1392688864{color:#000c1f;margin-right:2%;margin-top:6%;}.title-dark.jsx-1392688864{margin-right:2%;color:#E5E7E6;margin-top:6%;}.arrow-up-icon-dark.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#e5e7e6;font-size:4rem;position:relative;top:300px;}.arrow-up-icon-dark.jsx-1392688864:hover{cursor:pointer;}@-webkit-keyframes colorFadeIn-jsx-1392688864{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@keyframes colorFadeIn-jsx-1392688864{from{-webkit-filter:grayscale(100%);filter:grayscale(100%);}to{-webkit-filter:grayscale(0%);filter:grayscale(0%);}}@-webkit-keyframes colorFadeOut-jsx-1392688864{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@keyframes colorFadeOut-jsx-1392688864{from{-webkit-filter:grayscale(0%);filter:grayscale(0%);}to{-webkit-filter:grayscale(100%);filter:grayscale(100%);}}@-webkit-keyframes shapeShiftIn-jsx-1392688864{from{border-radius:50%;}to{border-radius:12px;}}@keyframes shapeShiftIn-jsx-1392688864{from{border-radius:50%;}to{border-radius:12px;}}@-webkit-keyframes shapeShiftOut-jsx-1392688864{from{border-radius:12px;}to{border-radius:50%;}}@keyframes shapeShiftOut-jsx-1392688864{from{border-radius:12px;}to{border-radius:50%;}}@-webkit-keyframes fadeIn-jsx-1392688864{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn-jsx-1392688864{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1392688864{from{opacity:1;}to{opacity:0;}}@keyframes fadeOut-jsx-1392688864{from{opacity:1;}to{opacity:0;}}.animate.jsx-1392688864{opacity:1;}.gauges.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5%;}.gauge-styles.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:200px;}.gauge.jsx-1392688864{background-image:url('../static/DarkBlueBadge.png');background-size:cover;max-width:100%;width:200px;height:175px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dynamic.jsx-1392688864{margin-top:55px;}.light-text.jsx-1392688864{color:#000c1f;}.title-skills.jsx-1392688864{margin-top:1%;}.section-content.jsx-1392688864{margin-bottom:2%;}.modal.jsx-1392688864{width:450px;max-height:270px;margin-top:21%;max-width:100%;background:#fbfbf8;border-radius:12px;padding:2%;-webkit-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);-moz-box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);box-shadow:10px 10px 21px -2px rgba(20,19,1,0.75);}.images-modal.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.x.jsx-1392688864{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.close-button.jsx-1392688864{margin-right:10%;margin-bottom:20%;font-size:1.5rem;font-weight:bolder;}.icon-selected.jsx-1392688864{display:none;}.select-icon.jsx-1392688864{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}.select-image.jsx-1392688864{text-align:center;vertical-align:center;margin-top:25%;font-size:2rem;color:#000c1f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVFvQixBQUc4QyxBQVlBLEFBWVosQUFVRSxBQVdKLEFBWUQsQUFNSyxBQVVGLEFBT0ksQUFNRixBQUtMLEFBa0JHLEFBVUEsQUFVRSxBQVFDLEFBS0gsQUFJQyxBQUtFLEFBS0gsQUFRRSxBQVVZLEFBSTVCLEFBSTBCLEFBSTFCLEFBSXVCLEFBR0MsQUFLQSxBQUdELEFBS1IsQUFHQSxBQUtBLEFBR0EsQUF3QkosQUFHRyxBQVNBLEFBT3VDLEFBVXBDLEFBR0YsQUFHQSxBQUdHLEFBR0wsQUFZQyxBQUlBLEFBS0ksQUFNSixBQUdLLEFBT0EsVUFyUUwsQUFrQ0EsQUFtSGIsQUFHQSxBQUtBLEFBR0EsQUF3QkosQ0FwTWdCLENBNk9LLENBMkJyQixDQW5Lb0IsQUErSHBCLEFBR0EsQ0FsUDJCLEFBNkJYLEFBd0JoQixBQTBDbUIsQUFtQ25CLENBM0JvQixBQWNGLEFBdUhsQixDQTlMcUIsQUF1TXJCLEFBd0JzQixDQWpIbEIsQUFXQSxBQStHc0IsQUFPQSxDQTlIdEIsQUFLQSxJQXhKZSxBQWNuQixFQTVEb0IsQUFZQSxFQW9ESCxFQTJORSxDQXpKRyxBQWlCSixBQUtBLEVBZEMsRUF6REMsQ0ErTkMsR0FqUXlCLEVBa0I1QixBQXdQQyxBQU9BLENBL1RtQixBQVlwQixHQXVJbEIsQUFLQSxBQW1JbUIsR0FqSm5CLENBUnVCLEVBaER2QixBQThGSSxBQUtBLEVBOEVzQixBQTZDSCxFQTlPTixBQTJHYixBQVdBLENBM0trQyxBQTRTbkIsQUFPQSxJQXBDSSxVQTFQeUIsQ0F3UjlCLEFBT0EsQ0FoQmxCLEdBOVM2QixBQW9CSCxBQWlETyxBQW9DUCxBQVVILEFBdUJJLEFBY0EsQUF3RkosQUFTVSxBQVFkLEFBaUNjLEFBSWxCLElBWlEsTUFsTUosQUFnT25CLEFBT0EsQ0F4QjZCLEdBM1JBLENBc1BiLFFBeUJELEVBMVJXLEVBa1FULE9BeUI2QyxLQS9RcEMsQ0F1UFQsT0FsUVEsT0E4REMsT0FsREQsTUEyRUYsQUF1Q0gsQ0E3SEksQ0FpSEwsQUE2SEEsU0E1TkksQUFxRkksSUEzRkgsQ0FrSHhCLEtBN0hxQixJQXlSc0MsT0FsSjNELEFBY2tCLEdBeklHLE1Bd1JyQixLQTlJb0IsQ0E5R0ssQUF5TkUsU0EvTEYsQUFvTEMsQUF5QzFCLEdBOUtrQyxBQTZIbkIsRUF2Rk8sSUExRkMsSUF5QlcsQ0F5SkQsT0ExS2xDLEVBbUZlLENBa0l3QyxFQTlQaEMsTUF5Q3RCLENBb0ZBLFFBaEh1QixHQVh1QyxJQVgvQyxFQWxCZixJQXNHdUIsS0FuRkosQ0F1QjJDLElBOUI5RCxVQVFBLEFBc1FBLElBcENvQixZQVdHLElBVHZCLFFBMU4yRCxBQStCM0QsZ0JBbEIyRCxBQXVFeEMsVUE1QkEsS0ErQm5CLElBMEh1QixNQXhKQSxJQWtCSixVQTFFbUMsS0F5RC9CLEFBa0JILFdBOURrQyxLQStEdEQsR0FsQmUsRUF5S2YsU0F2S21CLGVBM0RuQixBQTREOEQsZ0JBL0M5RCxPQW1Na0IsY0FDbEIscUJBcEoyRCx1REFDTCxrREFDdEMsWUFDQyxhQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGRpYW1vXFxEZXNrdG9wXFxHaXRGaWxlc1xcUG9ydGZvbGlvXFxjbGllbnRcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zaXRpb24nXHJcbmltcG9ydCB7IFRpQXJyb3dVcFRoaWNrIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgUmVhY3RDYXJkRmxpcCBmcm9tICdyZWFjdC1jYXJkLWZsaXAnO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaUphdmFzY3JpcHQxLCBEaUJvb3RzdHJhcCwgRGlTYXNzLCBEaUxlc3MsIERpQ3NzMywgRGlIdG1sNSwgRGlHaXRodWJCYWRnZSwgRGlHaXQsIERpTm9kZWpzU21hbGwsIERpTXlzcWwsIERpUG9zdGdyZXNxbCB9IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xyXG5pbXBvcnQgeyBGYUNoYXJ0TGluZSwgRmFHbG9iZUFtZXJpY2FzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kUGhvbmVsaW5rLCBNZExpZ2h0YnVsYk91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IEFjdGl2ZUNhcmQgZnJvbSAnLi9pY29uL0FjdGl2ZUNhcmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uKHt0aXRsZSwgaWQsIGltYWdlLCBjbGFzc05hbWVQcm9wLCBkYXJrLCBza2lsbHMsIHBvcnRmb2xpbywgcmVzdW1lLCBjb250YWN0fSkge1xyXG4gICAgY29uc3QgW2lzRmxpcHBlZCwgc2V0SXNGbGlwcGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzRmxpcHBlZDIsIHNldElzRmxpcHBlZDJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbYmFja2VuZCwgc2V0QmFja2VuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmcm9udGVuZCwgc2V0RnJvbnRlbmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gSWNvbiBTZWxlY3RvcnNcclxuICAgIC8vIGNvbnN0IFtnaXQsIHNldEdpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtnaXRIdWIsIHNldEdpdEh1Yl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtodG1sNSwgc2V0SHRtbDVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbY3NzMywgc2V0Q3NzM10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtsZXNzLCBzZXRMZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW3Nhc3MsIHNldFNhc3NdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbYm9vdHN0cmFwLCBzZXRCb290c3RyYXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbamF2YVNjcmlwdCwgc2V0SmF2YVNjcmlwdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtyZWFjdCwgc2V0UmVhY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbcmVkdXgsIHNldFJlZHV4XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW25leHQsIHNldE5leHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbbm9kZSwgc2V0Tm9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtleHByZXNzLCBzZXRFeHByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW215U1FMLCBzZXRNeVNRTF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IFtwb3N0Z3Jlcywgc2V0UG9zdGdyZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZVNraWxsLCBzZXRBY3RpdmVTa2lsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIC8vIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tNZUZyb250ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEZyb250ZW5kKHRydWUpXHJcbiAgICAgICAgc2V0SXNGbGlwcGVkKHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja01lRnJvbnRCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEZyb250ZW5kKGZhbHNlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZChmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVTa2lsbChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tNZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QmFja2VuZCh0cnVlKVxyXG4gICAgICAgIHNldElzRmxpcHBlZDIodHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrTWVCYWNrRnJvbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QmFja2VuZChmYWxzZSlcclxuICAgICAgICBzZXRJc0ZsaXBwZWQyKGZhbHNlKVxyXG4gICAgICAgIHNldEFjdGl2ZVNraWxsKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKClcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVQcm9wfT5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtcInNlY3Rpb25cIiArIChkYXJrID8gXCIgc2VjdGlvbi1kYXJrXCIgOiBcIlwiKX0+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCIgaWQ9e2lkfT5cclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49J2ZhZGVJbicgZHVyYXRpb249ezJ9PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB7c2tpbGxzID8gPGgyIGNsYXNzTmFtZT0ndGl0bGUtY2VudGVyJz48c3BhbiBjbGFzc05hbWU9e2RhcmsgPyAndGl0bGUtZGFyayB0aXRsZS1za2lsbHMnIDogJ3RpdGxlIHRpdGxlLXNraWxscyd9Pnt0aXRsZX08L3NwYW4+PC9oMj4gOiA8aDIgY2xhc3NOYW1lPSd0aXRsZS1jZW50ZXInPjxzcGFuIGNsYXNzTmFtZT17ZGFyayA/ICd0aXRsZS1kYXJrJyA6ICd0aXRsZSd9Pnt0aXRsZX08L3NwYW4+PC9oMj59XHJcblxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgey8qIER5bmFtaWMgU2VjdGlvbnMgKi99XHJcblxyXG4gICAgICAgICAgICB7c2tpbGxzICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlcy1tb2RhbCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbnRlbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZH0gZmxpcERpcmVjdGlvbj0naG9yaXpvbnRhbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9eydzdW5mbG93ZXInfSBzcmM9Jy4uL3N0YXRpYy90cmVlVG9wRmluYWxseS5wbmcnIGFsdD0nVHJlZSBJbWFnZScga2V5PXtmcm9udGVuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lRnJvbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJhY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3gnPjxwIGNsYXNzTmFtZT0nY2xvc2UtYnV0dG9uJyBvbkNsaWNrPXtjbGlja01lRnJvbnRCYWNrfT5YPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNraWxscy10aXRsZVwiPkZyb250IEVuZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmZyb250ZW5kLm1hcChpY29uID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uLmljb24gPT09IFwiRGlHaXRcIiA/IDxEaUdpdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMzRGMjknfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJHaUdpdGh1YkJhZGdlXCIgPyA8RGlHaXRodWJCYWRnZSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMxODE2MTYnfX0gIG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlIdG1sNVwiID8gPERpSHRtbDUgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjRTU0RDI2J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlDc3MzXCIgPyA8RGlDc3MzIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzNEOEZDNid9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpTGVzc1wiID8gPERpTGVzcyBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyMyQTREODAnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVNhc3NcIiA/IDxEaVNhc3Mgc3R5bGU9e3sgZm9udFNpemU6ICc2cmVtJywgY29sb3I6ICcjQ0M2Njk5J319IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlCb290c3RyYXBcIiA/IDxEaUJvb3RzdHJhcCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM1QjQyODInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaUphdmFzY3JpcHQxXCIgPyA8RGlKYXZhc2NyaXB0MSBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyNGMERCNEYnfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJEaVJlYWN0XCIgPyA8RGlSZWFjdCBzdHlsZT17eyBmb250U2l6ZTogJzZyZW0nLCBjb2xvcjogJyM2MURBRkInfX0gb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpbWcgc3JjPScuLi9zdGF0aWMvcmVkdXgucG5nJyBhbHQ9J1JlZHV4IEljb24nXCIgPyA8aW1nIHNyYz0nLi4vc3RhdGljL3JlZHV4LnBuZycgYWx0PSdSZWR1eCBJY29uJyBzdHlsZT17eyB3aWR0aDogJzc1cHgnLCBtYXhIZWlnaHQ6ICc3MHB4JywgbWFyZ2luOiAnMSUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IGljb249e2ljb259IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL25leHQtdGV4dC5wbmcnIGFsdD0nTmV4dCBJY29uJ1wiID8gPGltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgbWF4SGVpZ2h0OiAnNzVweCcsIG1hcmdpblJpZ2h0OiAnNSUnIH19IG9uQ2xpY2s9eygpPT4gc2V0QWN0aXZlU2tpbGwoaWNvbil9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q2FyZEZsaXA+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tlbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDYXJkRmxpcCBpc0ZsaXBwZWQ9e2lzRmxpcHBlZDJ9IGZsaXBEaXJlY3Rpb249J2hvcml6b250YWwnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyb290cycgc3JjPScuLi9zdGF0aWMvdHJlZVJvb3RzRmluYWxseS5wbmcnIGFsdD0nUm9vdHMgSW1hZ2UnIGtleT17YmFja2VuZCA/IG51bGwgOiAnZnJvbnQnfSBvbkNsaWNrPXtjbGlja01lQmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndmlldyd9IGtleT0nYmFjayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1iYWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd4Jz48cCBjbGFzc05hbWU9J2Nsb3NlLWJ1dHRvbicgb25DbGljaz17Y2xpY2tNZUJhY2tGcm9udH0+WDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdza2lsbHMtdGl0bGUnPkJhY2sgRW5kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaWNvbnMnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25zLmJhY2tlbmQubWFwKGljb24gPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24uaWNvbiA9PT0gXCJEaUdpdFwiID8gPERpR2l0IHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnI0YzNEYyOSd9fSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZVNraWxsKGljb24pfSBpY29uPXtpY29ufSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkdpR2l0aHViQmFkZ2VcIiA/IDxEaUdpdGh1YkJhZGdlIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzE4MTYxNid9fSAgb25DbGljaz17KCk9PiBzZXRBY3RpdmVTa2lsbChpY29uKX0gaWNvbj17aWNvbn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uaWNvbiA9PT0gXCJpTm9kZWpzU21hbGxcIiA/IDxEaU5vZGVqc1NtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzgzQ0QyOSd9fSBvbkNsaWNrPXsoKT0+c2V0Tm9kZSghbm9kZSl9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiaW1nIHNyYz0nLi4vc3RhdGljL2V4cHJlc3NGaW5hbC5wbmcnIGFsdD0nTmV4dCBJY29uJ1wiID8gPGltZyBzcmM9Jy4uL3N0YXRpYy9leHByZXNzRmluYWwucG5nJyBhbHQ9J0V4cHJlc3MgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc3NXB4JywgaGVpZ2h0OiAnNzVweCcsIG1hcmdpblRvcDogJzIlJywgcGFkZGluZ0xlZnQ6ICcyJScgfX0gb25DbGljaz17KCk9PnNldEV4cHJlc3MoIWV4cHJlc3MpfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5pY29uID09PSBcIkRpTXlzcWxcIiA/IDxEaU15c3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzAwNjE4QScsIG1hcmdpbkxlZnQ6ICcxNCUnfX0gb25DbGljaz17KCk9PnNldE15U1FMKCFteVNRTCl9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uLmljb24gPT09IFwiRGlQb3N0Z3Jlc3FsXCIgPyA8RGlQb3N0Z3Jlc3FsIHN0eWxlPXt7IGZvbnRTaXplOiAnNnJlbScsIGNvbG9yOiAnIzMzNjc5MScsIG1hcmdpblJpZ2h0OiAnMTIlJ319IG9uQ2xpY2s9eygpPT5zZXRQb3N0Z3JlcyghcG9zdGdyZXMpfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENhcmRGbGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICB7ZnJvbnRlbmQgfHwgYmFja2VuZCA/IDxoNiBjbGFzc05hbWU9e2FjdGl2ZVNraWxsID8gXCJpY29uLXNlbGVjdGVkXCIgOiBcInNlbGVjdC1pY29uXCJ9PlNlbGVjdCBhbiBJY29uPC9oNj4gOiA8aDYgY2xhc3NOYW1lPSdzZWxlY3QtaW1hZ2UnPlNlbGVjdCBhbiBJbWFnZTwvaDY+fVxyXG4gICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU2tpbGwgJiYgPEFjdGl2ZUNhcmQgYWN0aXZlU2tpbGw9e2FjdGl2ZVNraWxsfSAvPiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2VzJz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogZWZmaWNpZW50ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlLXN0eWxlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPScuLi9zdGF0aWMvRGFya0JhZGdlLnBuZycgd2lkdGg9ezE3NX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoYXJ0TGluZSBzdHlsZT17eyBjb2xvcjogJyNFNUU3RTYnLCBmb250U2l6ZTogJzZyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnIzAwMGMxZicsIGZvbnRXZWlnaHQ6ICdib2xkZXInfX0+RWZmaWNpZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319Pm1heGltdW0gcHJvZHVjdGl2aXR5OyB3ZWxsLW9yZ2FuaXplZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiByZXNwb25zaXZlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlLXN0eWxlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kUGhvbmVsaW5rIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnIzAwMGMxZicsIGZvbnRXZWlnaHQ6ICdib2xkZXInfX0+UmVzcG9uc2l2ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMTQxMzAxJ319Pm9wdGltaXplZCBsYXlvdXRzIGZvciBhbGwgZGV2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBjcmVhdGl2ZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZS1zdHlsZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYXVnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZExpZ2h0YnVsYk91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjRTVFN0U2JywgZm9udFNpemU6ICc2cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkNyZWF0aXZlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMxNDEzMDEnfX0+aGlnaGVzdCBxdWFsaXR5IHNvbHV0aW9ucyBwcm92aWRlZDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBkeW5hbWljICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhdWdlLXN0eWxlcyBkeW5hbWljJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2F1Z2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFHbG9iZUFtZXJpY2FzIHN0eWxlPXt7IGNvbG9yOiAnI0U1RTdFNicsIGZvbnRTaXplOiAnNnJlbScgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJyMwMDBjMWYnLCBmb250V2VpZ2h0OiAnYm9sZGVyJ319PkR5bmFtaWM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzE0MTMwMSd9fT5yZWZsZWN0cyByZWFsLXRpbWUgY2hhbmdlcyBpbiB2YWx1ZXMgd2l0aCBhY3Rpdml0eS4gIEJ1aWx0IHdpdGggRFJZLCByZXVzYWJsZSBjb21wb25lbnRzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICB7cG9ydGZvbGlvICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+UE9SVEZPTElPIENPTlRFTlQgVEVTVCAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcnVtIHF1aWJ1c2RhbSBxdWlkZW0gbW9kaSwgY29tbW9kaSBhbGlxdWFtIGZ1Z2EgcXVhZXJhdCwgaXBzdW0gb3B0aW8gbW9sZXN0aWFzIGRvbG9yZXMsIGF1dCBhY2N1c2FudGl1bSBjb25zZXF1YXR1ciBleHBlZGl0YS4gVmVyaXRhdGlzLCByZWN1c2FuZGFlIGRvbG9yZS4gQWNjdXNhbXVzLCBlcnJvciBkZWxlY3R1cyFcclxuICAgICAgICAgICAgQ29tbW9kaSBtYWduaSB2b2x1cHRhcyBuZW1vIGVhcnVtIHBlcmZlcmVuZGlzIHZvbHVwdGF0dW0gb2RpbyBkaWduaXNzaW1vcyBtb2xlc3RpYWUgZXNzZSBhdXQuIE5hbSBxdWFlIGJlYXRhZSBtYWduYW0gZWEsIHZvbHVwdGF0aWJ1cyBtaW51cyBlbmltIHZpdGFlIGN1bHBhLCBjdW0gZXhwZWRpdGEgZnVnYSBuZXNjaXVudCBudWxsYSwgdXQgc2ltaWxpcXVlIGNvcnJ1cHRpP1xyXG4gICAgICAgICAgICBDdW1xdWUgcXVpcyBpbGxvIGVpdXMgZG9sb3JlbXF1ZSBhY2N1c2FtdXMgYWxpcXVpZCBhcmNoaXRlY3RvISBQYXJpYXR1ciBwcm92aWRlbnQgY3VtcXVlIG1pbmltYSBjb3Jwb3JpcyBtYWlvcmVzLiBBc3BlcmlvcmVzLCBkZWJpdGlzIGV2ZW5pZXQuIFF1YWVyYXQsIHBvcnJvIHRlbmV0dXIgcXVhbSByYXRpb25lIHN1c2NpcGl0IG5vbiB2b2x1cHRhdGVzIGN1cGlkaXRhdGUgdG90YW0gcXVpcyBjb3JydXB0aSBvZmZpY2lpcyFcclxuICAgICAgICAgICAgQWxpcXVhbSBkaWN0YSBhdCBtb2xlc3RpYXMgZGlnbmlzc2ltb3MsIGlsbHVtIGFjY3VzYW11cywgdml0YWUgcXVhZXJhdCBjb3JydXB0aSBwZXJmZXJlbmRpcyBhZCBvYmNhZWNhdGkgaGljIGN1bHBhIGl1c3RvIHRlbXBvcmEgbWFnbmkgc2l0IGluY2lkdW50IG1pbmltYSB0ZW1wb3JlIGF0cXVlIGR1Y2ltdXMgbmVxdWUgcXVhZS4gTmlzaSBleGVyY2l0YXRpb25lbSBwcm92aWRlbnQgYmxhbmRpdGlpcyFcclxuICAgICAgICAgICAgRXJyb3IgYXV0ZW0gb2ZmaWNpYSB0ZW5ldHVyIHNvbHV0YSBudWxsYSBpbGx1bSwgdmVybyBjb21tb2RpIHJlY3VzYW5kYWUsIGZ1Z2Egbm9iaXMgbmFtIGZhY2VyZSBpdGFxdWUgaGFydW0gb2ZmaWNpaXMhIFBlcmZlcmVuZGlzIGlwc2FtIGVzc2UgbGFib3Jpb3NhbSBuZXF1ZSBlbmltIHF1b2Qgc2l0LiBDb25zZXF1dW50dXIgbWFpb3JlcyBzb2x1dGEgb2JjYWVjYXRpIGFzcGVybmF0dXI/XHJcbiAgICAgICAgICAgIEFzcGVybmF0dXIsIG5paGlsIG9mZmljaWEhIEV4cGVkaXRhIGRvbG9yIG5lbW8gaXRhcXVlIHJhdGlvbmUgYWNjdXNhbnRpdW0gdW5kZSB2ZWwgYXJjaGl0ZWN0byBxdW9kIGFjY3VzYW11cywgdGVuZXR1ciBibGFuZGl0aWlzIGVzc2UgbGliZXJvIGxhYm9ydW0gYW1ldCwgZnVnYSBhZGlwaXNjaS4gUmVpY2llbmRpcyBsYWJvcnVtIG5hbSBlYXF1ZSBub24gZWFydW0gcXVpcyBmYWNlcmUuXHJcbiAgICAgICAgICAgIEZ1Z2l0IGFjY3VzYW11cyBhcGVyaWFtIGxhYm9yZSBxdWlzcXVhbSBhdXQuIERvbG9yIHJlaWNpZW5kaXMgYWxpcXVhbSBxdW9kIGZ1Z2l0IHBvc3NpbXVzIGVhcnVtIG5lcXVlLCBpdXN0byByYXRpb25lIGV4cGVkaXRhPyBSZWljaWVuZGlzIHF1aSBzYXBpZW50ZSBwb3NzaW11cyBub3N0cnVtIHNhZXBlIHNpdCBkaXN0aW5jdGlvIHBhcmlhdHVyIGF1dGVtLCBjb21tb2RpIGlwc2EgZWFydW0uXHJcbiAgICAgICAgICAgIE9kaXQgcmVwZWxsYXQgaW4gbW9kaSB0ZW1wb3JhISBRdWlhIHF1aXNxdWFtIHJlcGVsbGVuZHVzIHNlZCBxdWFzaSBzaXQgc29sdXRhIHNpbnQgbWFnbmFtIHF1YWUgbW9kaSByZWljaWVuZGlzIHBhcmlhdHVyIG5pc2kgZnVnYSBjdWxwYSwgc2FwaWVudGUgdmVsIHRlbXBvcmEgc2ltaWxpcXVlPyBRdW9zIG9mZmljaWlzIHBvc3NpbXVzIGRpZ25pc3NpbW9zIGFkaXBpc2NpLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGV4cGxpY2FibyB2b2x1cHRhdGUgZWxpZ2VuZGkgZG9sb3JlbXF1ZSBldCBzdXNjaXBpdCwgcmVydW0sIG9mZmljaWlzIG5lc2NpdW50IHNhcGllbnRlIGlwc2EgbWFnbmkgbnVtcXVhbSBxdWFtIGFiIHJlY3VzYW5kYWUgaGFydW0gaW5jaWR1bnQgY3VtcXVlIGVycm9yIHZvbHVwdGF0ZW0gdGVtcG9yaWJ1cyBxdWFlIG1vZGksIG51bGxhIGV4PyBSYXRpb25lLCBtb2RpIGNvbnNlcXV1bnR1ciFcclxuICAgICAgICAgICAgSXRhcXVlIGV4cGVkaXRhIHZlbCBkb2xvcmUgZXhlcmNpdGF0aW9uZW0gb2RpbyBvZmZpY2lhLCBlb3MgZnVnaWF0IG9iY2FlY2F0aSBpbXBlZGl0IGFkaXBpc2NpIHNpbnQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgcG9zc2ltdXMgY29uc2VjdGV0dXIgc3VudCBuaXNpIHJlcGVsbGF0IHZvbHVwdGF0ZXMgcmVwZWxsZW5kdXMgcXVpc3F1YW0gZXNzZSBhc3BlcmlvcmVzIG1pbnVzIGVhLiBGYWNpbGlzLCBiZWF0YWUgb3B0aW8uXHJcbiAgICAgICAgICAgIENvcnBvcmlzIGVzc2UgbW9kaSBsYWJvcnVtIGRvbG9ydW0sIG5pc2kgYXV0ZW0gcGFyaWF0dXIgbW9sbGl0aWEuIElsbG8sIGFjY3VzYW11cyBzZWQgcHJhZXNlbnRpdW0gYXRxdWUgZW9zIG1hZ25pLiBIYXJ1bSBhdXQgcmVwZWxsZW5kdXMgY29uc2VxdWF0dXIgbGFib3J1bSwgcHJhZXNlbnRpdW0gY29uc2VxdXVudHVyIHZvbHVwdGF0ZXMgZG9sb3JlbXF1ZSBwcm92aWRlbnQgbmloaWwgZWFydW0gdGVtcG9yZSBlc3QhXHJcbiAgICAgICAgICAgIEl1c3RvIHBvcnJvIHVsbGFtIG5lY2Vzc2l0YXRpYnVzIGRlbGVuaXRpIG9mZmljaWEgcmVydW0gaWQgZGlzdGluY3RpbyEgTm9uLCB2ZXJpdGF0aXMgaXBzYSBjb25zZWN0ZXR1ciBhcmNoaXRlY3RvIGlsbG8gcGxhY2VhdCBldCBlcnJvciB2ZWwgaW52ZW50b3JlPyBNb2xsaXRpYSBkZXNlcnVudCBtaW51cyB2b2x1cHRhdGVzIHByYWVzZW50aXVtIGFuaW1pLiBSZXJ1bSBwcm92aWRlbnQgc3VudCBxdWFzIVxyXG4gICAgICAgICAgICBMYWJvcnVtIHF1aWJ1c2RhbSBpdXJlIHRvdGFtIGV4cGxpY2FibyBjdWxwYSB0ZW1wb3JpYnVzLCBvcHRpbyB2b2x1cHRhdGVtIG5lbW8gYXQgZW9zIHZvbHVwdGFzIG5lY2Vzc2l0YXRpYnVzIGR1Y2ltdXMgcXVpIGNvbnNlcXVhdHVyIHF1YW0gbmF0dXMgZG9sb3IgZXgsIG5hbSBjdW1xdWUuIE1vZGkgb3B0aW8gYXV0ZW0gYWRpcGlzY2kgaWxsbywgY29uc2VjdGV0dXIgcHJvdmlkZW50LlxyXG4gICAgICAgICAgICBFbmltIHN1c2NpcGl0IGN1bXF1ZSBhbWV0IGJsYW5kaXRpaXMgdmVyaXRhdGlzIHNlZCB2ZW5pYW0gZWFydW0gY29uc2VjdGV0dXIgbmVxdWUgbWluaW1hIHF1aXNxdWFtIGRlbGVuaXRpIGN1bHBhIHV0IGl1cmUgaXBzYSwgbmVjZXNzaXRhdGlidXMgZGlzdGluY3RpbyByZWN1c2FuZGFlIGNvbW1vZGkgdWxsYW0hIExhYm9yaW9zYW0gbWF4aW1lIHN1c2NpcGl0IGhpYyBpbmNpZHVudCB0ZW1wb3JhIGhhcnVtLlxyXG4gICAgICAgICAgICBNaW51cyBhcmNoaXRlY3RvIHZlcml0YXRpcyBpcHN1bSBpbiBlb3MgcmVtIHZlbGl0IHNlcXVpPyBJbGxvIGNvcnBvcmlzIGRpc3RpbmN0aW8gcXVpc3F1YW0gaXBzYSB2ZWxpdCBtYWduYW0sIGV0IG1heGltZSBhZCB0ZW1wb3JlIHNvbHV0YSBwYXJpYXR1ciBpbnZlbnRvcmUgdm9sdXB0YXMgaWxsdW0gdG90YW0gcmVydW0gdm9sdXB0YXRpYnVzIHF1aWEgYXRxdWU/XHJcbiAgICAgICAgICAgIFF1aSBjdXBpZGl0YXRlIGVhIG1vbGVzdGlhcyBpZCBxdWlzcXVhbSBudWxsYSBhISBVbGxhbSBudWxsYSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gYW5pbWkgb3B0aW8gaW4gZG9sb3J1bSBvYmNhZWNhdGksIHBlcmZlcmVuZGlzIGJlYXRhZSBkb2xvcmVzIGVzdCBjdWxwYSBkb2xvcmVtcXVlIHVuZGUgaXVzdG8gbmVtbyBzYWVwZSBuZXF1ZSByZXB1ZGlhbmRhZSBpc3RlLlxyXG4gICAgICAgICAgICBFdmVuaWV0IGRvbG9ydW0gaW5jaWR1bnQgb2JjYWVjYXRpIGlwc2EgdmVybyBlcnJvciBvZmZpY2lpcyBkb2xvcmVtcXVlIGRpc3RpbmN0aW8sIHZvbHVwdGFzIGF0cXVlIHRvdGFtIG9mZmljaWEgbGFib3JlIHZlcml0YXRpcyBtb2xsaXRpYSBub3N0cnVtIHV0IHRlbXBvcmlidXMgdm9sdXB0YXRlcyBwbGFjZWF0IHNvbHV0YSwgdW5kZSBoaWMgY29ycnVwdGkgbmF0dXMgcGFyaWF0dXIgcXVhcy4gQW1ldCFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAge3Jlc3VtZSAmJlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj0nZmFkZUluJyBkdXJhdGlvbj17Mn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZGFyayA/IG51bGwgOiAnbGlnaHQtdGV4dCd9PlJFU1VNRSBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgIHtjb250YWN0ICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPSdmYWRlSW4nIGR1cmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtkYXJrID8gbnVsbCA6ICdsaWdodC10ZXh0J30+Q09OVEFDVCBDT05URU5UIFRFU1QgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bSBxdWlidXNkYW0gcXVpZGVtIG1vZGksIGNvbW1vZGkgYWxpcXVhbSBmdWdhIHF1YWVyYXQsIGlwc3VtIG9wdGlvIG1vbGVzdGlhcyBkb2xvcmVzLCBhdXQgYWNjdXNhbnRpdW0gY29uc2VxdWF0dXIgZXhwZWRpdGEuIFZlcml0YXRpcywgcmVjdXNhbmRhZSBkb2xvcmUuIEFjY3VzYW11cywgZXJyb3IgZGVsZWN0dXMhXHJcbiAgICAgICAgICAgIENvbW1vZGkgbWFnbmkgdm9sdXB0YXMgbmVtbyBlYXJ1bSBwZXJmZXJlbmRpcyB2b2x1cHRhdHVtIG9kaW8gZGlnbmlzc2ltb3MgbW9sZXN0aWFlIGVzc2UgYXV0LiBOYW0gcXVhZSBiZWF0YWUgbWFnbmFtIGVhLCB2b2x1cHRhdGlidXMgbWludXMgZW5pbSB2aXRhZSBjdWxwYSwgY3VtIGV4cGVkaXRhIGZ1Z2EgbmVzY2l1bnQgbnVsbGEsIHV0IHNpbWlsaXF1ZSBjb3JydXB0aT9cclxuICAgICAgICAgICAgQ3VtcXVlIHF1aXMgaWxsbyBlaXVzIGRvbG9yZW1xdWUgYWNjdXNhbXVzIGFsaXF1aWQgYXJjaGl0ZWN0byEgUGFyaWF0dXIgcHJvdmlkZW50IGN1bXF1ZSBtaW5pbWEgY29ycG9yaXMgbWFpb3Jlcy4gQXNwZXJpb3JlcywgZGViaXRpcyBldmVuaWV0LiBRdWFlcmF0LCBwb3JybyB0ZW5ldHVyIHF1YW0gcmF0aW9uZSBzdXNjaXBpdCBub24gdm9sdXB0YXRlcyBjdXBpZGl0YXRlIHRvdGFtIHF1aXMgY29ycnVwdGkgb2ZmaWNpaXMhXHJcbiAgICAgICAgICAgIEFsaXF1YW0gZGljdGEgYXQgbW9sZXN0aWFzIGRpZ25pc3NpbW9zLCBpbGx1bSBhY2N1c2FtdXMsIHZpdGFlIHF1YWVyYXQgY29ycnVwdGkgcGVyZmVyZW5kaXMgYWQgb2JjYWVjYXRpIGhpYyBjdWxwYSBpdXN0byB0ZW1wb3JhIG1hZ25pIHNpdCBpbmNpZHVudCBtaW5pbWEgdGVtcG9yZSBhdHF1ZSBkdWNpbXVzIG5lcXVlIHF1YWUuIE5pc2kgZXhlcmNpdGF0aW9uZW0gcHJvdmlkZW50IGJsYW5kaXRpaXMhXHJcbiAgICAgICAgICAgIEVycm9yIGF1dGVtIG9mZmljaWEgdGVuZXR1ciBzb2x1dGEgbnVsbGEgaWxsdW0sIHZlcm8gY29tbW9kaSByZWN1c2FuZGFlLCBmdWdhIG5vYmlzIG5hbSBmYWNlcmUgaXRhcXVlIGhhcnVtIG9mZmljaWlzISBQZXJmZXJlbmRpcyBpcHNhbSBlc3NlIGxhYm9yaW9zYW0gbmVxdWUgZW5pbSBxdW9kIHNpdC4gQ29uc2VxdXVudHVyIG1haW9yZXMgc29sdXRhIG9iY2FlY2F0aSBhc3Blcm5hdHVyP1xyXG4gICAgICAgICAgICBBc3Blcm5hdHVyLCBuaWhpbCBvZmZpY2lhISBFeHBlZGl0YSBkb2xvciBuZW1vIGl0YXF1ZSByYXRpb25lIGFjY3VzYW50aXVtIHVuZGUgdmVsIGFyY2hpdGVjdG8gcXVvZCBhY2N1c2FtdXMsIHRlbmV0dXIgYmxhbmRpdGlpcyBlc3NlIGxpYmVybyBsYWJvcnVtIGFtZXQsIGZ1Z2EgYWRpcGlzY2kuIFJlaWNpZW5kaXMgbGFib3J1bSBuYW0gZWFxdWUgbm9uIGVhcnVtIHF1aXMgZmFjZXJlLlxyXG4gICAgICAgICAgICBGdWdpdCBhY2N1c2FtdXMgYXBlcmlhbSBsYWJvcmUgcXVpc3F1YW0gYXV0LiBEb2xvciByZWljaWVuZGlzIGFsaXF1YW0gcXVvZCBmdWdpdCBwb3NzaW11cyBlYXJ1bSBuZXF1ZSwgaXVzdG8gcmF0aW9uZSBleHBlZGl0YT8gUmVpY2llbmRpcyBxdWkgc2FwaWVudGUgcG9zc2ltdXMgbm9zdHJ1bSBzYWVwZSBzaXQgZGlzdGluY3RpbyBwYXJpYXR1ciBhdXRlbSwgY29tbW9kaSBpcHNhIGVhcnVtLlxyXG4gICAgICAgICAgICBPZGl0IHJlcGVsbGF0IGluIG1vZGkgdGVtcG9yYSEgUXVpYSBxdWlzcXVhbSByZXBlbGxlbmR1cyBzZWQgcXVhc2kgc2l0IHNvbHV0YSBzaW50IG1hZ25hbSBxdWFlIG1vZGkgcmVpY2llbmRpcyBwYXJpYXR1ciBuaXNpIGZ1Z2EgY3VscGEsIHNhcGllbnRlIHZlbCB0ZW1wb3JhIHNpbWlsaXF1ZT8gUXVvcyBvZmZpY2lpcyBwb3NzaW11cyBkaWduaXNzaW1vcyBhZGlwaXNjaS5cclxuICAgICAgICAgICAgRXZlbmlldCBleHBsaWNhYm8gdm9sdXB0YXRlIGVsaWdlbmRpIGRvbG9yZW1xdWUgZXQgc3VzY2lwaXQsIHJlcnVtLCBvZmZpY2lpcyBuZXNjaXVudCBzYXBpZW50ZSBpcHNhIG1hZ25pIG51bXF1YW0gcXVhbSBhYiByZWN1c2FuZGFlIGhhcnVtIGluY2lkdW50IGN1bXF1ZSBlcnJvciB2b2x1cHRhdGVtIHRlbXBvcmlidXMgcXVhZSBtb2RpLCBudWxsYSBleD8gUmF0aW9uZSwgbW9kaSBjb25zZXF1dW50dXIhXHJcbiAgICAgICAgICAgIEl0YXF1ZSBleHBlZGl0YSB2ZWwgZG9sb3JlIGV4ZXJjaXRhdGlvbmVtIG9kaW8gb2ZmaWNpYSwgZW9zIGZ1Z2lhdCBvYmNhZWNhdGkgaW1wZWRpdCBhZGlwaXNjaSBzaW50IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIHBvc3NpbXVzIGNvbnNlY3RldHVyIHN1bnQgbmlzaSByZXBlbGxhdCB2b2x1cHRhdGVzIHJlcGVsbGVuZHVzIHF1aXNxdWFtIGVzc2UgYXNwZXJpb3JlcyBtaW51cyBlYS4gRmFjaWxpcywgYmVhdGFlIG9wdGlvLlxyXG4gICAgICAgICAgICBDb3Jwb3JpcyBlc3NlIG1vZGkgbGFib3J1bSBkb2xvcnVtLCBuaXNpIGF1dGVtIHBhcmlhdHVyIG1vbGxpdGlhLiBJbGxvLCBhY2N1c2FtdXMgc2VkIHByYWVzZW50aXVtIGF0cXVlIGVvcyBtYWduaS4gSGFydW0gYXV0IHJlcGVsbGVuZHVzIGNvbnNlcXVhdHVyIGxhYm9ydW0sIHByYWVzZW50aXVtIGNvbnNlcXV1bnR1ciB2b2x1cHRhdGVzIGRvbG9yZW1xdWUgcHJvdmlkZW50IG5paGlsIGVhcnVtIHRlbXBvcmUgZXN0IVxyXG4gICAgICAgICAgICBJdXN0byBwb3JybyB1bGxhbSBuZWNlc3NpdGF0aWJ1cyBkZWxlbml0aSBvZmZpY2lhIHJlcnVtIGlkIGRpc3RpbmN0aW8hIE5vbiwgdmVyaXRhdGlzIGlwc2EgY29uc2VjdGV0dXIgYXJjaGl0ZWN0byBpbGxvIHBsYWNlYXQgZXQgZXJyb3IgdmVsIGludmVudG9yZT8gTW9sbGl0aWEgZGVzZXJ1bnQgbWludXMgdm9sdXB0YXRlcyBwcmFlc2VudGl1bSBhbmltaS4gUmVydW0gcHJvdmlkZW50IHN1bnQgcXVhcyFcclxuICAgICAgICAgICAgTGFib3J1bSBxdWlidXNkYW0gaXVyZSB0b3RhbSBleHBsaWNhYm8gY3VscGEgdGVtcG9yaWJ1cywgb3B0aW8gdm9sdXB0YXRlbSBuZW1vIGF0IGVvcyB2b2x1cHRhcyBuZWNlc3NpdGF0aWJ1cyBkdWNpbXVzIHF1aSBjb25zZXF1YXR1ciBxdWFtIG5hdHVzIGRvbG9yIGV4LCBuYW0gY3VtcXVlLiBNb2RpIG9wdGlvIGF1dGVtIGFkaXBpc2NpIGlsbG8sIGNvbnNlY3RldHVyIHByb3ZpZGVudC5cclxuICAgICAgICAgICAgRW5pbSBzdXNjaXBpdCBjdW1xdWUgYW1ldCBibGFuZGl0aWlzIHZlcml0YXRpcyBzZWQgdmVuaWFtIGVhcnVtIGNvbnNlY3RldHVyIG5lcXVlIG1pbmltYSBxdWlzcXVhbSBkZWxlbml0aSBjdWxwYSB1dCBpdXJlIGlwc2EsIG5lY2Vzc2l0YXRpYnVzIGRpc3RpbmN0aW8gcmVjdXNhbmRhZSBjb21tb2RpIHVsbGFtISBMYWJvcmlvc2FtIG1heGltZSBzdXNjaXBpdCBoaWMgaW5jaWR1bnQgdGVtcG9yYSBoYXJ1bS5cclxuICAgICAgICAgICAgTWludXMgYXJjaGl0ZWN0byB2ZXJpdGF0aXMgaXBzdW0gaW4gZW9zIHJlbSB2ZWxpdCBzZXF1aT8gSWxsbyBjb3Jwb3JpcyBkaXN0aW5jdGlvIHF1aXNxdWFtIGlwc2EgdmVsaXQgbWFnbmFtLCBldCBtYXhpbWUgYWQgdGVtcG9yZSBzb2x1dGEgcGFyaWF0dXIgaW52ZW50b3JlIHZvbHVwdGFzIGlsbHVtIHRvdGFtIHJlcnVtIHZvbHVwdGF0aWJ1cyBxdWlhIGF0cXVlP1xyXG4gICAgICAgICAgICBRdWkgY3VwaWRpdGF0ZSBlYSBtb2xlc3RpYXMgaWQgcXVpc3F1YW0gbnVsbGEgYSEgVWxsYW0gbnVsbGEgbW9sZXN0aWFlIGFjY3VzYW50aXVtIGFuaW1pIG9wdGlvIGluIGRvbG9ydW0gb2JjYWVjYXRpLCBwZXJmZXJlbmRpcyBiZWF0YWUgZG9sb3JlcyBlc3QgY3VscGEgZG9sb3JlbXF1ZSB1bmRlIGl1c3RvIG5lbW8gc2FlcGUgbmVxdWUgcmVwdWRpYW5kYWUgaXN0ZS5cclxuICAgICAgICAgICAgRXZlbmlldCBkb2xvcnVtIGluY2lkdW50IG9iY2FlY2F0aSBpcHNhIHZlcm8gZXJyb3Igb2ZmaWNpaXMgZG9sb3JlbXF1ZSBkaXN0aW5jdGlvLCB2b2x1cHRhcyBhdHF1ZSB0b3RhbSBvZmZpY2lhIGxhYm9yZSB2ZXJpdGF0aXMgbW9sbGl0aWEgbm9zdHJ1bSB1dCB0ZW1wb3JpYnVzIHZvbHVwdGF0ZXMgcGxhY2VhdCBzb2x1dGEsIHVuZGUgaGljIGNvcnJ1cHRpIG5hdHVzIHBhcmlhdHVyIHF1YXMuIEFtZXQhXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDxoNSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXsnYXJyb3ctdXAtaWNvbi1kYXJrJ30+PFRpQXJyb3dVcFRoaWNrIC8+PC9oNT5cclxuICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvbiBpbWFnZT17aW1hZ2V9IGRhcms9e2Rhcmt9IGNvbnRhY3Q9e2NvbnRhY3R9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTVlN2U2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBJRSAxMCAgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyLCAucm9vdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29sb3JGYWRlT3V0IDJzLCBzaGFwZVNoaWZ0T3V0IDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMTQxMzAxXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3VuZmxvd2VyOmhvdmVyLCAucm9vdHM6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvckZhZGVJbiAycywgc2hhcGVTaGlmdEluIDJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICNiODBjMDlcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZnJvbnRlbmQsIC5iYWNrZW5kIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2tpbGxzLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDIxcHggLTJweCByZ2JhKDIwLDE5LDEsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRTVFN0U2O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1ZTdlNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW0gO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFycm93LXVwLWljb24tZGFyazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gLmFycm93LXVwLWljb24ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb2xvckZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDAlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3JGYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGFwZVNoaWZ0SW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYXBlU2hpZnRPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQGtleWZyYW1lcyBjaXJjbGVJbiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogNDk4cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC1oZWlnaHQ6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBAa2V5ZnJhbWVzIGNpcmNsZU91dCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDQ5OHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXgtaGVpZ2h0OiA0OThweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5nYXVnZS1zdHlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2F1Z2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3RhdGljL0RhcmtCbHVlQmFkZ2UucG5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmR5bmFtaWMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlnaHQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDBjMWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUtc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjElO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtMnB4IHJnYmEoMjAsMTksMSwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC0ycHggcmdiYSgyMCwxOSwxLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlcy1tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC54IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pY29uLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwYzFmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMGMxZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGljb25zID0ge1xyXG4gICAgXCJmcm9udGVuZFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBzb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpR2l0aHViQmFkZ2VcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdpdEh1YiBpcyBhbiBBbWVyaWNhbiBjb21wYW55IHRoYXQgcHJvdmlkZXMgaG9zdGluZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgdmVyc2lvbiBjb250cm9sIHVzaW5nIEdpdC4gSXQgaXMgYSBzdWJzaWRpYXJ5IG9mIE1pY3Jvc29mdCwgd2hpY2ggYWNxdWlyZWQgdGhlIGNvbXBhbnkgaW4gMjAxOCBmb3IgJDcuNSBiaWxsaW9uLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpSHRtbDVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTDVcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIGxhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIVE1MNSBpcyBhIHNvZnR3YXJlIHNvbHV0aW9uIHN0YWNrIHRoYXQgZGVmaW5lcyB0aGUgcHJvcGVydGllcyBhbmQgYmVoYXZpb3JzIG9mIHdlYiBwYWdlIGNvbnRlbnQgYnkgaW1wbGVtZW50aW5nIGEgbWFya3VwIGJhc2VkIHBhdHRlcm4gdG8gaXQuIEhUTUw1IGlzIHRoZSBmaWZ0aCBhbmQgY3VycmVudCBtYWpvciB2ZXJzaW9uIG9mIEhUTUwsIGFuZCBzdWJzdW1lcyBYSFRNTC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUNzczNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ1NTM1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNTUzMgaXMgdGhlIGxhdGVzdCBldm9sdXRpb24gb2YgdGhlIENhc2NhZGluZyBTdHlsZSBTaGVldHMgbGFuZ3VhZ2UgYW5kIGFpbXMgYXQgZXh0ZW5kaW5nIENTUzIuMS4gSXQgYnJpbmdzIGEgbG90IG9mIGxvbmctYXdhaXRlZCBub3ZlbHRpZXMsIGxpa2Ugcm91bmRlZCBjb3JuZXJzLCBzaGFkb3dzLCBncmFkaWVudHMsIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMsIGFzIHdlbGwgYXMgbmV3IGxheW91dHMgbGlrZSBtdWx0aS1jb2x1bW5zLCBmbGV4aWJsZSBib3ggb3IgZ3JpZCBsYXlvdXRzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpTGVzc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMZXNzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJQcm9ncmFtbWluZyBsYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVzcyBpcyBhIGR5bmFtaWMgcHJlcHJvY2Vzc29yIHN0eWxlIHNoZWV0IGxhbmd1YWdlIHRoYXQgY2FuIGJlIGNvbXBpbGVkIGludG8gQ2FzY2FkaW5nIFN0eWxlIFNoZWV0cyBhbmQgcnVuIG9uIHRoZSBjbGllbnQgc2lkZSBvciBzZXJ2ZXIgc2lkZS4gRGVzaWduZWQgYnkgQWxleGlzIFNlbGxpZXIsIExlc3MgaXMgaW5mbHVlbmNlZCBieSBTYXNzIGFuZCBoYXMgaW5mbHVlbmNlZCB0aGUgbmV3ZXIgXFxcIlNDU1NcXFwiIHN5bnRheCBvZiBTYXNzLCB3aGljaCBhZGFwdGVkIGl0cyBDU1MtbGlrZSBibG9jayBmb3JtYXR0aW5nIHN5bnRheC5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJKYW51YXJ5IDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVNhc3NcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2Fzc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNhc3MgaXMgYSBzdHlsZSBzaGVldCBsYW5ndWFnZSBpbml0aWFsbHkgZGVzaWduZWQgYnkgSGFtcHRvbiBDYXRsaW4gYW5kIGRldmVsb3BlZCBieSBOYXRhbGllIFdlaXplbmJhdW0uIEFmdGVyIGl0cyBpbml0aWFsIHZlcnNpb25zLCBXZWl6ZW5iYXVtIGFuZCBDaHJpcyBFcHBzdGVpbiBoYXZlIGNvbnRpbnVlZCB0byBleHRlbmQgU2FzcyB3aXRoIFNhc3NTY3JpcHQsIGEgc2ltcGxlIHNjcmlwdGluZyBsYW5ndWFnZSB1c2VkIGluIFNhc3MgZmlsZXMuIFwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIkphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpQm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiRnJvbnQtZW5kIGZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9vdHN0cmFwIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgQ1NTIGZyYW1ld29yayBkaXJlY3RlZCBhdCByZXNwb25zaXZlLCBtb2JpbGUtZmlyc3QgZnJvbnQtZW5kIHdlYiBkZXZlbG9wbWVudC4gSXQgY29udGFpbnMgQ1NTLSBhbmQgSmF2YVNjcmlwdC1iYXNlZCBkZXNpZ24gdGVtcGxhdGVzIGZvciB0eXBvZ3JhcGh5LCBmb3JtcywgYnV0dG9ucywgbmF2aWdhdGlvbiBhbmQgb3RoZXIgaW50ZXJmYWNlIGNvbXBvbmVudHMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlKYXZhc2NyaXB0MVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJIaWdoLWxldmVsIHByb2dyYW1taW5nIGxhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJKYXZhU2NyaXB0LCBvZnRlbiBhYmJyZXZpYXRlZCBhcyBKUywgaXMgYSBoaWdoLWxldmVsLCBpbnRlcnByZXRlZCBzY3JpcHRpbmcgbGFuZ3VhZ2UgdGhhdCBjb25mb3JtcyB0byB0aGUgRUNNQVNjcmlwdCBzcGVjaWZpY2F0aW9uLiBKYXZhU2NyaXB0IGhhcyBjdXJseS1icmFja2V0IHN5bnRheCwgZHluYW1pYyB0eXBpbmcsIHByb3RvdHlwZS1iYXNlZCBvYmplY3Qtb3JpZW50YXRpb24sIGFuZCBmaXJzdC1jbGFzcyBmdW5jdGlvbnMuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlSZWFjdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSZWFjdC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIGZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhY3QgaXMgYSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy4gSXQgaXMgbWFpbnRhaW5lZCBieSBGYWNlYm9vayBhbmQgYSBjb21tdW5pdHkgb2YgaW5kaXZpZHVhbCBkZXZlbG9wZXJzIGFuZCBjb21wYW5pZXMuIFJlYWN0IGNhbiBiZSB1c2VkIGFzIGEgYmFzZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2Ygc2luZ2xlLXBhZ2Ugb3IgbW9iaWxlIGFwcGxpY2F0aW9ucywgYXMgaXQgaXMgb3B0aW1hbCBmb3IgZmV0Y2hpbmcgcmFwaWRseSBjaGFuZ2luZyBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgcmVjb3JkZWQuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9yZWR1eC5wbmcnIGFsdD0nUmVkdXggSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVkdXhcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIkphdmFTY3JpcHQgbGlicmFyeVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmVkdXggaXMgYW4gb3Blbi1zb3VyY2UgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBtYW5hZ2luZyBhcHBsaWNhdGlvbiBzdGF0ZS4gSXQgaXMgbW9zdCBjb21tb25seSB1c2VkIHdpdGggbGlicmFyaWVzIHN1Y2ggYXMgUmVhY3Qgb3IgQW5ndWxhciBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLiBTaW1pbGFyIHRvIEZhY2Vib29rJ3MgRmx1eCBhcmNoaXRlY3R1cmUsIGl0IHdhcyBjcmVhdGVkIGJ5IERhbiBBYnJhbW92IGFuZCBBbmRyZXcgQ2xhcmsuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiRmVicnVhcnkgMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImltZyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbidcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiV2ViIGZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmV4dC5qcyBpcyBhIGZyZWUgYW5kIG9wZW4gc291cmNlIHdlYiBhcHBsaWNhdGlvbiBmcmFtZXdvcmsgYmFzZWQgb24gUmVhY3QuanMsIE5vZGUuanMsIFdlYnBhY2sgYW5kIEJhYmVsLmpzLiBUaGUgZnJhbWV3b3JrIGlzIGFkdmVydGlzZWQgYXMgXFxcIm1ldGEtZnJhbWV3b3JrIGZvciB1bml2ZXJzYWwgYXBwbGljYXRpb25zXFxcIi5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJBdWd1c3QgMjAxOVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYmFja2VuZFwiOiB7XHJcbiAgICAgICAgXCJnaXRcIjoge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaUdpdFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiB7IFwiZm9udFNpemVcIjogXCI2cmVtXCIsIFwiY29sb3JcIjogXCIjRjM0RjI5XCJ9LFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlN5c3RlbSBzb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0IGlzIGEgZGlzdHJpYnV0ZWQgdmVyc2lvbi1jb250cm9sIHN5c3RlbSBmb3IgdHJhY2tpbmcgY2hhbmdlcyBpbiBzb3VyY2UgY29kZSBkdXJpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEl0IGlzIGRlc2lnbmVkIGZvciBjb29yZGluYXRpbmcgd29yayBhbW9uZyBwcm9ncmFtbWVycywgYnV0IGl0IGNhbiBiZSB1c2VkIHRvIHRyYWNrIGNoYW5nZXMgaW4gYW55IHNldCBvZiBmaWxlcy4gSXRzIGdvYWxzIGluY2x1ZGUgc3BlZWQsIGRhdGEgaW50ZWdyaXR5LCBhbmQgc3VwcG9ydCBmb3IgZGlzdHJpYnV0ZWQsIG5vbi1saW5lYXIgd29ya2Zsb3dzLlwiLFxyXG4gICAgICAgICAgICBcImF1dGhvclwiOiBcIkxpbnVzIFRvcnZhbGRzXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2l0aHViXCI6IHtcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiRGlHaXRodWJCYWRnZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcImdpdEh1YlN0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOiBcIlNvZnR3YXJlIGRldmVsb3BlclwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0SHViIGlzIGFuIEFtZXJpY2FuIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBob3N0aW5nIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudCB2ZXJzaW9uIGNvbnRyb2wgdXNpbmcgR2l0LiBJdCBpcyBhIHN1YnNpZGlhcnkgb2YgTWljcm9zb2Z0LCB3aGljaCBhY3F1aXJlZCB0aGUgY29tcGFueSBpbiAyMDE4IGZvciAkNy41IGJpbGxpb24uXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiSmFudWFyeSAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImlOb2RlanNTbWFsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlc1wiOiBcIm5vZGVTdHlsZXNcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9kZS5qc1wiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiSmF2YVNjcmlwdCBydW4tdGltZSBlbnZpcm9ubWVudFwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTm9kZS5qcyBpcyBhbiBvcGVuLXNvdXJjZSwgY3Jvc3MtcGxhdGZvcm0sIEphdmFTY3JpcHQgcnVuLXRpbWUgZW52aXJvbm1lbnQgdGhhdCBleGVjdXRlcyBKYXZhU2NyaXB0IGNvZGUgb3V0c2lkZSBvZiBhIGJyb3dzZXIuXCIsXHJcbiAgICAgICAgICAgIFwiZGF0ZV9sZWFybmVkXCI6IFwiTWFyY2ggMjAxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImV4cHJlc3NcIjoge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJpbWcgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdOZXh0IEljb24nXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVzXCI6IFwiZXhwcmVzc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFeHByZXNzLmpzXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRXhwcmVzcy5qcywgb3Igc2ltcGx5IEV4cHJlc3MsIGlzIGEgd2ViIGFwcGxpY2F0aW9uIGZyYW1ld29yayBmb3IgTm9kZS5qcywgcmVsZWFzZWQgYXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBJdCBpcyBkZXNpZ25lZCBmb3IgYnVpbGRpbmcgd2ViIGFwcGxpY2F0aW9ucyBhbmQgQVBJcy4gSXQgaGFzIGJlZW4gY2FsbGVkIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBzZXJ2ZXIgZnJhbWV3b3JrIGZvciBOb2RlLmpzLlwiLFxyXG4gICAgICAgICAgICBcImRhdGVfbGVhcm5lZFwiOiBcIk1hcmNoIDIwMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJteXNxbFwiOiB7XHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIkRpTXlzcWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJteVNxbFN0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNeVNRTFwiLFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU3lzdGVtIHNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNeVNRTCBpcyBhbiBvcGVuLXNvdXJjZSByZWxhdGlvbmFsIGRhdGFiYXNlIG1hbmFnZW1lbnQgc3lzdGVtLiBJdHMgbmFtZSBpcyBhIGNvbWJpbmF0aW9uIG9mIFxcXCJNeVxcXCIsIHRoZSBuYW1lIG9mIGNvLWZvdW5kZXIgTWljaGFlbCBXaWRlbml1cydzIGRhdWdodGVyLCBhbmQgXFxcIlNRTFxcXCIsIHRoZSBhYmJyZXZpYXRpb24gZm9yIFN0cnVjdHVyZWRcIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicG9zdGdyZXNcIjoge1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJEaVBvc3RncmVzcWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXNcIjogXCJwb3N0Z3Jlc1N0eWxlc1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTeXN0ZW0gc29mdHdhcmVcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvc3RncmVTUUwsIGFsc28ga25vd24gYXMgUG9zdGdyZXMsIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgcmVsYXRpb25hbCBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSBlbXBoYXNpemluZyBleHRlbnNpYmlsaXR5IGFuZCB0ZWNobmljYWwgc3RhbmRhcmRzIGNvbXBsaWFuY2UuIEl0IGlzIGRlc2lnbmVkIHRvIGhhbmRsZSBhIHJhbmdlIG9mIHdvcmtsb2FkcywgZnJvbSBzaW5nbGUgbWFjaGluZXMgdG8gZGF0YSB3YXJlaG91c2VzIG9yIFdlYiBzZXJ2aWNlcyB3aXRoIG1hbnkgY29uY3VycmVudCB1c2Vycy5cIixcclxuICAgICAgICAgICAgXCJkYXRlX2xlYXJuZWRcIjogXCJNYXJjaCAyMDE5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\Section.jsx */"));
}
var icons = {
  "frontend": [{
    "icon": "DiGit",
    "name": "Git",
    "subtitle": "System software",
    "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiGithubBadge",
    "name": "GitHub",
    "subtitle": "Software developer",
    "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiHtml5",
    "name": "HTML5",
    "subtitle": "Programming language",
    "description": "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML5 is the fifth and current major version of HTML, and subsumes XHTML.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiCss3",
    "name": "CSS3",
    "subtitle": "Programming language",
    "description": "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiLess",
    "name": "Less",
    "subtitle": "Programming language",
    "description": "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer \"SCSS\" syntax of Sass, which adapted its CSS-like block formatting syntax.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiSass",
    "name": "Sass",
    "subtitle": "Programming language",
    "description": "Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files. ",
    "date_learned": "January 2019"
  }, {
    "icon": "DiBootstrap",
    "name": "Bootstrap",
    "subtitle": "Front-end framework",
    "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiJavascript1",
    "name": "JavaScript",
    "subtitle": "High-level programming language",
    "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "date_learned": "January 2019"
  }, {
    "icon": "DiReact",
    "name": "React.js",
    "subtitle": "Web framework",
    "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/redux.png' alt='Redux Icon'",
    "name": "Redux",
    "subtitle": "JavaScript library",
    "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    "date_learned": "February 2019"
  }, {
    "icon": "img src='../static/next-text.png' alt='Next Icon'",
    "name": "Next.js",
    "subtitle": "Web framework",
    "description": "Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as \"meta-framework for universal applications\".",
    "date_learned": "August 2019"
  }],
  "backend": {
    "git": {
      "icon": "DiGit",
      "styles": {
        "fontSize": "6rem",
        "color": "#F34F29"
      },
      "name": "Git",
      "subtitle": "System software",
      "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
      "author": "Linus Torvalds",
      "date_learned": "January 2019"
    },
    "github": {
      "icon": "DiGithubBadge",
      "styles": "gitHubStyles",
      "name": "GitHub",
      "subtitle": "Software developer",
      "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
      "date_learned": "January 2019"
    },
    "node": {
      "icon": "iNodejsSmall",
      "styles": "nodeStyles",
      "name": "Node.js",
      "subtitle": "JavaScript run-time environment",
      "description": "Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.",
      "date_learned": "March 2019"
    },
    "express": {
      "icon": "img src='../static/expressFinal.png' alt='Next Icon'",
      "styles": "expressStyles",
      "name": "Express.js",
      "subtitle": "Software",
      "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
      "date_learned": "March 2019"
    },
    "mysql": {
      "icon": "DiMysql",
      "styles": "mySqlStyles",
      "name": "MySQL",
      "subtitle": "System software",
      "description": "MySQL is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured",
      "date_learned": "March 2019"
    },
    "postgres": {
      "icon": "DiPostgresql",
      "styles": "postgresStyles",
      "name": "PostgreSQL",
      "subtitle": "System software",
      "description": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
      "date_learned": "March 2019"
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.71a1d83c7f7446009f41.hot-update.js.map
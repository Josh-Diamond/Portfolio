webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/projects/MediaCard.jsx":
/*!*******************************************!*\
  !*** ./components/projects/MediaCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
var _jsxFileName = "C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\MediaCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    maxWidth: 345,
    backgroundColor: '#e5e7e6',
    color: '#000c1f'
  },
  media: {
    height: 140
  }
});
function MediaCard(_ref) {
  var handleClickOpen = _ref.handleClickOpen,
      image = _ref.image,
      title = _ref.title,
      one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: image,
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, one && __jsx("div", {
    className: "jsx-4117656396" + " " + 'icon-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4117656396" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_10__["DiReact"], {
    style: {
      fontSize: '3rem',
      color: '#61DAFB'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("img", {
    src: "../static/next-text.png",
    alt: "Next Icon",
    style: {
      width: '50px',
      maxHeight: '50px',
      marginRight: '5%'
    },
    className: "jsx-4117656396" + " " + 'icon-hover front',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_10__["DiNodejsSmall"], {
    style: {
      fontSize: '3rem',
      color: '#83CD29'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4117656396" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: "../static/expressFinal.png",
    alt: "Express Icon",
    style: {
      width: '40px',
      height: '40px',
      marginTop: '2%',
      paddingLeft: '2%'
    },
    className: "jsx-4117656396" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("img", {
    src: "../static/netlify.png",
    alt: "Netlify Icon",
    style: {
      width: '40px',
      height: '40px',
      marginTop: '2.25%',
      paddingLeft: '2%'
    },
    className: "jsx-4117656396" + " " + 'icon-hover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "View"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, one && __jsx("a", {
    target: "_blank",
    href: "https://www.google.com",
    className: "jsx-4117656396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "GitHub"), two && 'GitHub', three && 'GitHub', four && 'GitHub'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4117656396",
    __self: this
  }, ".icon-container.jsx-4117656396{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.row.jsx-4117656396{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-4117656396{-webkit-text-decoration:none;text-decoration:none;color:#000C1F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGlhbW9cXERlc2t0b3BcXEdpdEZpbGVzXFxQb3J0Zm9saW9cXGNsaWVudFxcY29tcG9uZW50c1xccHJvamVjdHNcXE1lZGlhQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VnQixBQUdrQyxBQUlBLEFBSVEsa0RBRzFCLGNBQUMsVUFWMEIsQUFJTyw4RUFIakMsNkNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxkaWFtb1xcRGVza3RvcFxcR2l0RmlsZXNcXFBvcnRmb2xpb1xcY2xpZW50XFxjb21wb25lbnRzXFxwcm9qZWN0c1xcTWVkaWFDYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBEaVJlYWN0LCBEaU5vZGVqc1NtYWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBjYXJkOiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2U1ZTdlNicsXHJcbiAgICBjb2xvcjogJyMwMDBjMWYnXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUNhcmQoeyBoYW5kbGVDbGlja09wZW4sIGltYWdlLCB0aXRsZSwgb25lLCB0d28sIHRocmVlLCBmb3VyIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgIDxDYXJkQWN0aW9uQXJlYSBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59PlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgIHRpdGxlPVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgIHtvbmUgJiYgPGRpdiBjbGFzc05hbWU9J2ljb24tY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpUmVhY3Qgc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJywgY29sb3I6ICcjNjFEQUZCJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyIGZyb250JyBzcmM9Jy4uL3N0YXRpYy9uZXh0LXRleHQucG5nJyBhbHQ9J05leHQgSWNvbicgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgbWF4SGVpZ2h0OiAnNTBweCcsIG1hcmdpblJpZ2h0OiAnNSUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaU5vZGVqc1NtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnM3JlbScsIGNvbG9yOiAnIzgzQ0QyOSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naWNvbi1ob3Zlcicgc3JjPScuLi9zdGF0aWMvZXhwcmVzc0ZpbmFsLnBuZycgYWx0PSdFeHByZXNzIEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnLCBtYXJnaW5Ub3A6ICcyJScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpY29uLWhvdmVyJyBzcmM9Jy4uL3N0YXRpYy9uZXRsaWZ5LnBuZycgYWx0PSdOZXRsaWZ5IEljb24nIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnLCBtYXJnaW5Ub3A6ICcyLjI1JScsIHBhZGRpbmdMZWZ0OiAnMiUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgey8qIHt0d28gJiZ9XHJcbiAgICAgICAgICAgIHt0aHJlZSAmJn1cclxuICAgICAgICAgICAge2ZvdXIgJiZ9ICovfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgVmlld1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICB7b25lICYmIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+R2l0SHViPC9hPn1cclxuICAgICAgICAgIHt0d28gJiYgJ0dpdEh1Yid9XHJcbiAgICAgICAgICB7dGhyZWUgJiYgJ0dpdEh1Yid9XHJcbiAgICAgICAgICB7Zm91ciAmJiAnR2l0SHViJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMEMxRlxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gIDwvPlxyXG4gICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\diamo\\Desktop\\GitFiles\\Portfolio\\client\\components\\projects\\MediaCard.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.17f60321cf699016baa8.hot-update.js.map
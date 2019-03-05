webpackHotUpdate("main",{

/***/ "./src/components/AppRoot.js":
/*!***********************************!*\
  !*** ./src/components/AppRoot.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_json_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-json-tree */ "./node_modules/react-json-tree/lib/index.js");
/* harmony import */ var react_json_tree__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_json_tree__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _AppRoot_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AppRoot.scss */ "./src/components/AppRoot.scss");
/* harmony import */ var _AppRoot_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_AppRoot_scss__WEBPACK_IMPORTED_MODULE_16__);










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





 // import ReactJson from 'react-json-view';




var params = {};

var AppRoot =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(AppRoot, _React$Component);

  function AppRoot(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AppRoot);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AppRoot).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "informOutside", function (data) {
      try {
        console.log('window', window);
        console.log('HTMLIFrameElement', HTMLIFrameElement);
        var targetWindow = window.opener || HTMLIFrameElement.contentWindow;
        targetWindow.postMessage(data, '*');
      } catch (e) {// console.error(e);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getJD",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var jdRes, jdResults;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default()({
                method: 'POST',
                url: '/api/ims/profile/position',
                data: {
                  "header": {},
                  "request": {
                    "c": "",
                    "m": "",
                    "p": {
                      "jd_id": params.jd_id,
                      "job_func": params.job_func,
                      "plc_id": params.plc_id,
                      "work_dura": params.work_dura,
                      "session": params.session
                    }
                  }
                }
              });

            case 2:
              jdRes = _context.sent;

              _this.responseValidate(jdRes);

              jdResults = jdRes.data.response.results;

              _this.informOutside(jdResults);

              console.log('JD 数据', jdResults.jd);
              console.log('岗位画像数据', jdResults.position_profile);

              _this.setState({
                jd: jdResults.jd,
                position: jdResults.position_profile
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getCV",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var cvRes, cvResults;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default()({
                method: 'POST',
                url: '/api/ims/profile/talent',
                data: {
                  "header": {},
                  "request": {
                    "c": "",
                    "m": "",
                    "p": {
                      "cv_id": params.cv_id,
                      "session": params.session
                    }
                  }
                }
              });

            case 2:
              cvRes = _context2.sent;

              _this.responseValidate(cvRes);

              cvResults = cvRes.data.response.results;

              _this.informOutside(cvResults);

              console.log('CV 数据', cvRes.cv);
              console.log('人才画像数据', cvRes.talent_profile);

              _this.setState({
                cv: cvResults.cv,
                talent: cvResults.talent_profile
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "responseValidate", function (res) {
      var serverResponse = res.data;

      if (!serverResponse) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('服务端响应数据为空');
        throw new Error('服务端响应数据为空');
      }

      var trueResponse = serverResponse.response;

      if (!trueResponse) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('响应对象无 response 域');
        throw new Error('响应对象无 response 域');
      }

      var err_msg = trueResponse.err_msg,
          err_no = trueResponse.err_no;

      if (err_no !== 0) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])("\u670D\u52A1\u7AEF\u7ED9\u51FA\u7684 err_msg: ".concat(err_msg));
        throw new Error("\u670D\u52A1\u7AEF\u7ED9\u51FA\u7684 err_msg: ".concat(err_msg));
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "notify", function () {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])("Wow so easy !");
    });

    _this.state = {
      jd: null,
      position: null,
      cv: null,
      talent: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AppRoot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = '';
      var parsed = query_string__WEBPACK_IMPORTED_MODULE_15___default.a.parse(location.search);
      console.log('query string parsed', parsed);
      var session = parsed.session,
          jd_id = parsed.jd_id,
          job_func = parsed.job_func,
          plc_id = parsed.plc_id,
          work_dura = parsed.work_dura,
          cv_id = parsed.cv_id;
      params = parsed;

      if (jd_id) {
        this.getJD();
        return;
      }

      if (cv_id) {
        this.getCV();
        return;
      }

      Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('未收到 cv_id 或 jd_id');
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.position;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, data ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_json_tree__WEBPACK_IMPORTED_MODULE_14___default.a, {
        data: this.state.position
      }) : 'Loading...', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppRoot;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_13__["hot"])(AppRoot);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(params, "params", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(AppRoot, "AppRoot", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(_default, "default", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.f19b56a93f9bf83c9bba.hot-update.js.map
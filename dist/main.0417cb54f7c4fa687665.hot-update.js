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
/* harmony import */ var _cv_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cv.json */ "./src/components/cv.json");
var _cv_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cv.json */ "./src/components/cv.json", 1);
/* harmony import */ var _jd_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jd.json */ "./src/components/jd.json");
var _jd_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./jd.json */ "./src/components/jd.json", 1);
/* harmony import */ var _AppRoot_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AppRoot.scss */ "./src/components/AppRoot.scss");
/* harmony import */ var _AppRoot_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_AppRoot_scss__WEBPACK_IMPORTED_MODULE_18__);










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





 // import ReactJson from 'react-json-view';






var params = {};
var mock = true;

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
              if (!mock) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return Promise.resolve(_jd_json__WEBPACK_IMPORTED_MODULE_17__);

            case 3:
              jdRes = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.next = 8;
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

            case 8:
              jdRes = _context.sent;

            case 9:
              _this.responseValidate(jdRes);

              jdResults = jdRes.data.response.results;

              _this.informOutside(jdResults);

              console.log('JD 数据', jdResults.jd);
              console.log('岗位画像数据', jdResults.position_profile);

              _this.setState({
                jd: jdResults.jd,
                position: jdResults.position_profile
              });

            case 15:
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
              if (!mock) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return Promise.resolve(_cv_json__WEBPACK_IMPORTED_MODULE_16__);

            case 3:
              cvRes = _context2.sent;
              _context2.next = 9;
              break;

            case 6:
              _context2.next = 8;
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

            case 8:
              cvRes = _context2.sent;

            case 9:
              _this.responseValidate(cvRes);

              cvResults = cvRes.data.response.results;

              _this.informOutside(cvResults);

              console.log('CV 数据', cvRes.cv);
              console.log('人才画像数据', cvRes.talent_profile);

              _this.setState({
                cv: cvResults.cv,
                talent: cvResults.talent_profile
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "responseValidate", function (res) {
      var serverResponse = res.data;

      if (!serverResponse) {
        _this.setState({
          error: true
        });

        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('服务端响应数据为空');
        throw new Error('服务端响应数据为空');
      }

      var trueResponse = serverResponse.response;

      if (!trueResponse) {
        _this.setState({
          error: true
        });

        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('响应对象无 response 域');
        throw new Error('响应对象无 response 域');
      }

      var err_msg = trueResponse.err_msg,
          err_no = trueResponse.err_no;

      if (err_no !== 0) {
        _this.setState({
          error: true
        });

        Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])("\u670D\u52A1\u7AEF\u7ED9\u51FA\u7684 err_msg: ".concat(err_msg));
        throw new Error("\u670D\u52A1\u7AEF\u7ED9\u51FA\u7684 err_msg: ".concat(err_msg));
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "getContent", function (showType) {
      var _this$state = _this.state,
          error = _this$state.error,
          position = _this$state.position,
          cv = _this$state.cv,
          talent = _this$state.talent,
          jd = _this$state.jd;
      if (error) return '加载出错，请稍后重试';

      if (showType === 'cv') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "cv"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "CV\u6570\u636E\uFF1A"), cv ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_json_tree__WEBPACK_IMPORTED_MODULE_14___default.a, {
          data: cv
        }) : 'Loading...'), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "talent"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "\u4EBA\u624D\u753B\u50CF\u6570\u636E\uFF1A"), talent ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_json_tree__WEBPACK_IMPORTED_MODULE_14___default.a, {
          data: talent
        }) : 'Loading...'));
      }

      if (showType === 'jd') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "cv"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "JD\u6570\u636E\uFF1A"), jd ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_json_tree__WEBPACK_IMPORTED_MODULE_14___default.a, {
          data: jd
        }) : 'Loading...'), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "talent"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "\u5C97\u4F4D\u753B\u50CF\u6570\u636E\uFF1A"), position ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_json_tree__WEBPACK_IMPORTED_MODULE_14___default.a, {
          data: position
        }) : 'Loading...'));
      }

      return 'url 参数错误：无效的 showType';
    });

    _this.state = {
      jd: null,
      position: null,
      cv: null,
      talent: null,
      error: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AppRoot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var parsed = query_string__WEBPACK_IMPORTED_MODULE_15___default.a.parse(window.location.search);
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

      this.setState({
        error: true
      });
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"])('未收到 cv_id 或 jd_id');
    }
  }, {
    key: "render",
    value: function render() {
      var parsed = query_string__WEBPACK_IMPORTED_MODULE_15___default.a.parse(window.location.search);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, this.getContent(parsed.showType), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], null));
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
  reactHotLoader.register(mock, "mock", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(AppRoot, "AppRoot", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(_default, "default", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AppRoot.scss":
/*!*************************************!*\
  !*** ./src/components/AppRoot.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(true) {
      // 1551838926588
      var cssReload = __webpack_require__(/*! ../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  
    if(true) {
      // 1551838926588
      var cssReload = __webpack_require__(/*! ../../node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/components/cv.json":
/*!********************************!*\
  !*** ./src/components/cv.json ***!
  \********************************/
/*! exports provided: response, header, default */
/***/ (function(module) {

module.exports = {"response":{"err_no":0,"err_msg":"","results":{"cv_id":6275097,"cv":{"channel":"","basic":{"id":"6275097","contact_id":"6804758","resume_updated_at":"2019-01-02 15:42:59","name":"aaa","resume_name":"","industry_ids":"","is_validate":"U","is_increased":"Y","is_private":"1","is_processing":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2018-12-29 14:20:02","gender":"M","birth":"1992年07月","nation":"","marital":"U","is_fertility":"U","is_house":"U","live_family":"U","account_province":"0","account":"0","native_place_province":"0","native_place":"0","address_province":"0","address":"105","current_status":"4","src":"88","src_no":"100654","expect_city_ids":"10","expect_city_names":"上海","expect_salary_from":"0.02","expect_salary_to":"0","expect_salary_month":"12","expect_annual_salary_from":"0","expect_annual_salary_to":"0","expect_annual_salary":"0","expect_bonus":"0","expect_work_at":"","expect_type":"","expect_position_name":"22","expect_industry_name":"","expect_remarks":"","not_expect_corporation_name":"","not_expect_corporation_ids":"","not_expect_corporation_status":"0","is_active":"U","bonus_text":"","options":"","other_welfare":"","interests":"","overseas":"","political_status":"","project_info":"","other_info":"","card":"","speciality":"","nation_id":"0","photo":"","self_remark":"史蒂夫个史蒂夫收到发史蒂夫","focused_corporations":null,"focused_feelings":null,"is_core":"","customization":"","status":"CVC","is_add_v":"N","locked_time":"0","is_author":"0","verification_at":"0","practice":"","study":"","start_time":"2018年02月","end_time":"2018年05月","so_far":"","corporation_name":"史蒂夫史蒂夫夫史","industry_name":"","architecture_name":"","position_name":"蒂夫史蒂到","title_name":"","station_name":"","reporting_to":"","subordinates_count":"0","responsibilities":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到","management_experience":"","work_type":"","basic_salary":"0","bonus":"0","annual_salary":"0","basic_salary_from":"9999","basic_salary_to":"0","salary_month":"12","annual_salary_from":"0","annual_salary_to":"0","corporation_desc":"","scale":"","city":"","corporation_type":"","reason":"","is_oversea":"","achievement":"","a_p_b":"","corporation_id":"0","school_name":"但是ab","discipline_name":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫","degree":"2","is_entrance":"","discipline_desc":"","phone_id":"A7476E0A66D3C55E5B8D83D4","mail_id":"68BF818434237899043B2D6491D966B9D55B161D4ADF55DA34AB42548D949CFFA817384925EA32B8A558B58DAAC04ACC63FDD49D02FCDB99","has_phone":"Y","work_experience":"0"},"contact":{"name":"aaa","tel":"","phone":"13507777777","email":"","qq":"","msn":"","sina":"","ten":"","wechat":"","phone_area":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2018-12-29 14:20:02"},"training":{},"work":{"5C2C71828B05F":{"id":"5C2C71828B05F","start_time":"2018年02月","end_time":"2018年05月","so_far":"","corporation_name":"史蒂夫史蒂夫夫史","industry_name":"","architecture_name":"","position_name":"蒂夫史蒂到","title_name":"","station_name":"","reporting_to":"","subordinates_count":"0","responsibilities":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫是收到","management_experience":"","work_type":"","basic_salary":"0","bonus":"0","annual_salary":"0","basic_salary_from":"0","basic_salary_to":"0","salary_month":"0","annual_salary_from":"0","annual_salary_to":"0","corporation_desc":"","scale":"","city":"","corporation_type":"","reason":"","is_oversea":"","achievement":"","a_p_b":"","corporation_id":"0","industry_ids":"0","sort_id":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B0A2":{"id":"5C2C71828B0A2","start_time":"2016年06月","end_time":"2017年06月","so_far":"","corporation_name":"上海米哈游网络科技有限公司","industry_name":"","architecture_name":"","position_name":"unity3D","title_name":"","station_name":"","reporting_to":"","subordinates_count":"0","responsibilities":"","management_experience":"","work_type":"","basic_salary":"0","bonus":"0","annual_salary":"0","basic_salary_from":"0","basic_salary_to":"0","salary_month":"0","annual_salary_from":"0","annual_salary_to":"0","corporation_desc":"","scale":"","city":"","corporation_type":"","reason":"","is_oversea":"","achievement":"","a_p_b":"","corporation_id":"0","industry_ids":"0","sort_id":"2","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"}},"project":{"5C2C71828B19C":{"id":"5C2C71828B19C","name":"史蒂夫说发送到史蒂夫","start_time":"2018年02月","end_time":"2018年08月","describe":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫收到非玩玩钉钉","responsibilities":"","so_far":"","achivement":"","position_name":"","corporation_name":"","soft_env":"","hard_env":"","develop_tool":"","sort_id":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"}},"education":{"5C2C71828B11F":{"id":"5C2C71828B11F","start_time":"2015年11月","end_time":"2016年12月","so_far":"","school_name":"三峡大学","discipline_name":"测试专业","degree":"86","is_entrance":"","discipline_desc":"","sort_id":"2","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B15E":{"id":"5C2C71828B15E","start_time":"2011年09月","end_time":"2015年06月","so_far":"","school_name":"上海交通大学","discipline_name":"网络通信","degree":"2","is_entrance":"","discipline_desc":"","sort_id":"3","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B0E3":{"id":"5C2C71828B0E3","start_time":"2018年06月","end_time":"","so_far":"","school_name":"但是ab","discipline_name":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫","degree":"2","is_entrance":"","discipline_desc":"","sort_id":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"}},"language":{},"skill":{"5C2C71828B1DB":{"id":"5C2C71828B1DB","name":"似懂非懂","period":"","level":"","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B211":{"id":"5C2C71828B211","name":"sss","period":"","level":"","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B247":{"id":"5C2C71828B247","name":"ss","period":"","level":"","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B27C":{"id":"5C2C71828B27C","name":"22222","period":"","level":"","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"}},"certificate":{"5C2C71828B2B2":{"id":"5C2C71828B2B2","name":"史蒂夫史蒂夫说的蒂史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫收到蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫收到","start_time":"2018年12月","description":"","sort_id":"1","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B2C6":{"id":"5C2C71828B2C6","name":"史蒂夫史蒂夫","start_time":"2018年04月","description":"","sort_id":"2","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B2FC":{"id":"5C2C71828B2FC","name":"饭店干豆腐干","start_time":"2018年03月","description":"","sort_id":"3","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B332":{"id":"5C2C71828B332","name":"dfgdfgfdg","start_time":"2018年03月","description":"","sort_id":"4","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"},"5C2C71828B367":{"id":"5C2C71828B367","name":"dfgdfg","start_time":"2018年02月","description":"","sort_id":"5","is_deleted":"N","updated_at":"2019-01-02 16:08:34","created_at":"2019-01-02 16:08:34"}},"user_tag":[],"verification":[],"map":[{"id":"2597177","resume_id":"6275097","src":"88","src_no":"100654","show_src":"88","show_src_no":"100654","is_deleted":"N","updated_at":"2018-12-29 14:28:50","created_at":"2018-12-29 14:20:03"}],"algorithm":{"updated_at":"2018-12-29 14:20:04","created_at":"2018-12-29 14:20:02","cv_source":"[{\"id\":\"2597177\",\"resume_id\":\"6275097\",\"src\":\"88\",\"src_no\":\"100654\",\"show_src\":\"88\",\"show_src_no\":\"100654\",\"is_deleted\":\"N\",\"updated_at\":\"2018-12-29 14:28:50\",\"created_at\":\"2018-12-29 14:20:03\"}]","cv_trade":"null","cv_title":"null","cv_tag":"null","cv_entity":"null","cv_education":"null","cv_feature":"{}","diff":"[]","cv_language":"{\"cvs\":null}","cv_degree":{"degree":""},"cv_workyear":""},"profile":{"job_choice_values":{"income_wealth":0,"hobbies":0,"power_position":0,"independ":0,"self_realiz":0,"inter_perso_relation":0,"phy_ment_health":0,"organiz_stab":0,"stab_job":0,"organiz_needs":0}}},"talent_profile":{"axis1":{"gender":{"base":{"preference":0,"score":1,"weight":1},"value":1},"age":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":27,"min":0,"max":0}},"marital":{"base":{"preference":0,"score":1,"weight":1},"value":0},"political_status":{"base":null,"type":0},"live_location":{"base":{"preference":0,"score":1,"weight":1},"province_id":1000010,"province_name":"上海","city_id":1000105,"city_name":"上海市","address":""},"detail_degree":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":0.6666667,"min":0,"max":0}},"highest_school":[{"base":{"preference":0,"score":1,"weight":1},"id":100761,"name":"上海交通大学","tags":[2,1],"eduexp_id":"5C2C71828B15E"}],"highest_degree":[{"base":{"preference":0,"score":1,"weight":1},"id":2,"name":"硕士","is_full_time":false,"eduexp_id":"5C2C71828B15E"}],"oversea_edu":{"base":{"preference":0,"score":1,"weight":1},"value":false},"hopping_freq":{"base":{"preference":0,"score":1,"weight":1},"value":[{"years":1,"freq":1},{"years":2,"freq":2},{"years":3,"freq":2},{"years":4,"freq":2},{"years":5,"freq":2},{"years":6,"freq":2},{"years":7,"freq":2},{"years":8,"freq":2},{"years":9,"freq":2},{"years":10,"freq":2},{"years":11,"freq":2},{"years":12,"freq":2},{"years":13,"freq":2},{"years":14,"freq":2},{"years":15,"freq":2},{"years":16,"freq":2},{"years":17,"freq":2},{"years":18,"freq":2},{"years":19,"freq":2},{"years":20,"freq":2},{"years":21,"freq":2},{"years":22,"freq":2},{"years":23,"freq":2},{"years":24,"freq":2},{"years":25,"freq":2},{"years":26,"freq":2},{"years":27,"freq":2},{"years":28,"freq":2},{"years":29,"freq":2},{"years":30,"freq":2},{"years":31,"freq":2},{"years":32,"freq":2},{"years":33,"freq":2},{"years":34,"freq":2},{"years":35,"freq":2},{"years":36,"freq":2},{"years":37,"freq":2},{"years":38,"freq":2},{"years":39,"freq":2},{"years":40,"freq":2},{"years":41,"freq":2},{"years":42,"freq":2},{"years":43,"freq":2},{"years":44,"freq":2},{"years":45,"freq":2},{"years":46,"freq":2},{"years":47,"freq":2},{"years":48,"freq":2},{"years":49,"freq":2},{"years":50,"freq":2}]},"departure_reasons":[{"base":{"preference":0,"score":1,"weight":1},"workexp_id":"5C2C71828B0A2","value":""},{"base":{"preference":0,"score":1,"weight":1},"workexp_id":"5C2C71828B05F","value":""}],"work_exps":[{"start":{"year":2018,"month":2,"day":0},"end":{"year":2018,"month":5,"day":0},"workexp_id":"5C2C71828B05F","base":{"preference":0,"score":1,"weight":1}},{"start":{"year":2016,"month":6,"day":0},"end":{"year":2017,"month":6,"day":0},"workexp_id":"5C2C71828B0A2","base":{"preference":0,"score":1,"weight":1}}],"job_functions":[{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"","lvl1_id":0,"lvl2_id":0,"lvl3_id":0,"workexp_id":"5C2C71828B05F"},{"base":{"preference":0,"score":1,"weight":1},"id":4200247,"name":"unity开发工程师","lvl1_id":1200009,"lvl2_id":2200047,"lvl3_id":3200060,"workexp_id":"5C2C71828B0A2"}],"job_titles":[{"base":{"preference":0,"score":1,"weight":1},"id":1,"name":"职员","workexp_id":"5C2C71828B05F"},{"base":{"preference":0,"score":1,"weight":1},"id":1,"name":"职员","workexp_id":"5C2C71828B0A2"}],"job_levels":[{"base":{"preference":0,"score":1,"weight":1},"id":9,"name":"专业大学生/专员/初级","workexp_id":"5C2C71828B0A2"}],"promotion_curve":[{"base":{"preference":0,"score":1,"weight":1},"range":{"value":null,"start":{"year":2016,"month":6,"day":0},"end":{"year":2017,"month":6,"day":0}},"level":{"base":null,"id":9,"name":"专业大学生/专员/初级","workexp_id":"5C2C71828B0A2"}}],"former_corps":[{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"","industries":[],"type":0,"size":0,"capital_situation":0,"workexp_id":"5C2C71828B05F"},{"base":{"preference":0,"score":1,"weight":1},"id":1404487,"name":"上海米哈游网络科技有限公司","industries":[{"base":null,"id":1090,"name":"游戏制作服务"},{"base":null,"id":1032,"name":"数字动漫设计制造服务"}],"type":0,"size":0,"capital_situation":0,"workexp_id":"5C2C71828B0A2"}],"work_duration":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":9,"min":0,"max":0}},"last_corp_duration":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":2,"min":0,"max":0}},"industry_durations":[{"base":{"preference":0,"score":1,"weight":1},"industry":{"base":null,"id":1090,"name":"游戏制作服务"},"duration":{"value":12,"min":0,"max":0}},{"base":{"preference":0,"score":1,"weight":1},"industry":{"base":null,"id":1032,"name":"数字动漫设计制造服务"},"duration":{"value":12,"min":0,"max":0}}],"function_durations":[{"base":{"preference":0,"score":1,"weight":1},"function":{"base":null,"id":4200247,"name":"unity开发工程师","lvl1_id":1200009,"lvl2_id":2200047,"lvl3_id":3200060,"workexp_id":""},"duration":{"value":12,"min":0,"max":0}}],"cur_manage_size":{"base":{"preference":0,"score":1,"weight":1},"date":null,"size":{"value":0,"min":0,"max":0}},"manage_size_curve":[{"base":{"preference":0,"score":1,"weight":1},"date":{"value":null,"start":{"year":2016,"month":6,"day":0},"end":{"year":2017,"month":6,"day":0}},"size":{"value":0,"min":0,"max":0}},{"base":{"preference":0,"score":1,"weight":1},"date":{"value":null,"start":{"year":2018,"month":2,"day":0},"end":{"year":2018,"month":5,"day":0}},"size":{"value":0,"min":0,"max":0}}],"pro_skills":[{"base":{"preference":0,"score":1,"weight":1},"id":4775,"name":"Unity3D","level":0}],"expection_salary_curve":[{"base":{"preference":0,"score":1,"weight":1},"value":{"value":0,"min":20,"max":0},"date":{"value":{"year":2019,"month":1,"day":0},"start":null,"end":null}}],"expected_jobs":{"base":{"preference":0,"score":1,"weight":1},"value":"22"},"certificates":[{"base":{"preference":0,"score":1,"weight":1},"id":3000821,"name":"饭店英语证书"}],"startup_exp":{"base":{"preference":0,"score":1,"weight":1},"value":false},"projects":[{"base":{"preference":0,"score":1,"weight":1},"date_range":{"value":null,"start":{"year":2018,"month":2,"day":0},"end":{"year":2018,"month":8,"day":0}},"name":"史蒂夫说发送到史蒂夫","description":"史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫史蒂夫收到非玩玩钉钉","responsibility":""}],"job_choice_values":[{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"income_wealth","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"independ","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"self_realiz","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"power_position","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"stab_job","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"hobbies","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"organiz_stab","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"organiz_needs","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"phy_ment_health","value":0},{"base":{"preference":0,"score":1,"weight":1},"id":0,"name":"inter_perso_relation","value":0}],"edu_exps":[{"eduexp_id":"5C2C71828B11F","start":{"year":2015,"month":11,"day":0},"end":{"year":2016,"month":12,"day":0},"base":{"preference":0,"score":1,"weight":1}},{"eduexp_id":"5C2C71828B15E","start":{"year":2011,"month":9,"day":0},"end":{"year":2015,"month":6,"day":0},"base":{"preference":0,"score":1,"weight":1}}]},"axis2":{"skills":[{"base":{"preference":0,"score":1,"weight":1},"id":4775,"name":"Unity3D","level":0}],"values":[{"base":null,"id":0,"name":"partnership","value":0},{"base":null,"id":0,"name":"power","value":0},{"base":null,"id":0,"name":"work_life_balance","value":0},{"base":null,"id":0,"name":"independence","value":0},{"base":null,"id":0,"name":"challenge","value":0},{"base":null,"id":0,"name":"stable_work","value":0}],"personal_growth":{"base":{"preference":0,"score":1,"weight":1},"growth_motivation":{"value":0,"min":0,"max":0},"growth_potential":{"value":0,"min":0,"max":0}},"stability":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":6,"min":0,"max":0}},"past_achievement":{"base":{"preference":0,"score":1,"weight":1},"education_level":{"value":3,"min":0,"max":0},"growth_speed":{"value":0,"min":0,"max":0},"achievement":{"value":0,"min":0,"max":0}},"career_inclination":{"base":{"preference":0,"score":1,"weight":1},"industry_career_plans":null,"corp_scale_career_plans":null,"corp_type_career_plans":null,"function_career_plans":null,"role_preference":[]},"leadership_potential":{"base":{"preference":0,"score":1,"weight":1},"value":{"value":0.5,"min":0,"max":0}}},"axis3":{"team_preference":{"base":{"preference":0,"score":1,"weight":1},"team_culture":[{"base":null,"id":0,"name":"pursuit_excell","value":0},{"base":null,"id":0,"name":"pursuit_harmony","value":0},{"base":null,"id":0,"name":"self_management","value":0},{"base":null,"id":0,"name":"innovative","value":0},{"base":null,"id":0,"name":"pragmatic","value":0}],"leader_style":[{"base":null,"id":0,"name":"instructive","value":0},{"base":null,"id":0,"name":"leading","value":0},{"base":null,"id":0,"name":"democratic","value":0},{"base":null,"id":0,"name":"visionary","value":0},{"base":null,"id":0,"name":"affinity","value":0},{"base":null,"id":0,"name":"counseling","value":0}]},"platform_preference":{"base":{"preference":0,"score":1,"weight":1},"prefs":[{"base":null,"id":0,"name":"startup","value":0},{"base":null,"id":0,"name":"growth","value":0},{"base":null,"id":0,"name":"stable","value":0},{"base":null,"id":0,"name":"strive","value":0},{"base":null,"id":0,"name":"harmony","value":0},{"base":null,"id":0,"name":"flexible","value":0},{"base":null,"id":0,"name":"bureau","value":0},{"base":null,"id":0,"name":"open","value":0},{"base":null,"id":0,"name":"closed","value":0}]},"career_opportunity":{"base":{"preference":0,"score":1,"weight":1},"ability":{"value":0,"min":0,"max":0},"willingness":{"value":0,"min":0,"max":0}}},"axisExtra":{"feature":{"feature_level":[{"feature_details":"{\"work_id\":\"5C2C71828B05F\",\"title\":{\"蒂夫\":\"0,3.36,3.45\",\"史蒂\":\"1,3.36,3.45\"},\"desc\":{\"史蒂夫\":\"0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,50,51,52,53,54,55,56,57,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,80,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97,100,101,102,103,104,105,106,107,110,111,112,113,114,115,116,117,120,121,122,123,124,125,126,127,130,131,132,133,134,135,136,137,140,141,142,143,144,145,146,147,150,151,152,153,154,155,156,157,160,161,162,163,164,165,166,167,170,171,172,173,174,175,176,177,180,181,182,183,184,185,186,187,190,191,192,193,194,195,196,197,200,201,202,203,204,205,206,207,210,211,212,213,214,215,216,217,220,221,222,223,224,225,226,227,230,231,232,233,234,235,236,237,240,241,242,243,244,245,246,247,23.74,3024.77\",\"收到\":\"9,19,29,39,49,59,69,79,89,99,109,119,129,139,149,159,169,179,189,199,209,219,229,239,249,2.54,121.50\"},\"vector\":[],\"start_time\":\"2018年02月\",\"end_time\":\"2018年05月\",\"title_entity\":[],\"desc_entity\":[]}","workexp_id":"5C2C71828B05F"},{"feature_details":"{\"work_id\":\"5C2C71828B0A2\",\"title\":{},\"desc\":{},\"vector\":[],\"start_time\":\"2016年06月\",\"end_time\":\"2017年06月\",\"title_entity\":[],\"desc_entity\":[]}","workexp_id":"5C2C71828B0A2"}]}}}}},"header":{"appid":0,"app_id":0,"log_id":"","uid":"","uname":"","provider":"","signid":"","version":"","ip":"","timestamp":"","nonce":"","signature":""}};

/***/ }),

/***/ "./src/components/jd.json":
/*!********************************!*\
  !*** ./src/components/jd.json ***!
  \********************************/
/*! exports provided: response, header, default */
/***/ (function(module) {

module.exports = {"response":{"err_no":20215004,"err_msg":"positionProfile异常","results":null},"header":{"appid":0,"app_id":0,"log_id":"","uid":"","uname":"","provider":"","signid":"","version":"","ip":"","timestamp":"","nonce":"","signature":""}};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(true) {
      // 1551838923137
      var cssReload = __webpack_require__(/*! ../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  
    if(true) {
      // 1551838923137
      var cssReload = __webpack_require__(/*! ../node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "?bfc7":
false,

/***/ "?e319":
false

})
//# sourceMappingURL=main.0417cb54f7c4fa687665.hot-update.js.map
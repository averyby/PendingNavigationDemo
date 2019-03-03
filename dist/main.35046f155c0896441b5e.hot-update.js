webpackHotUpdate("main",{

/***/ "./appConfig.json":
/*!************************!*\
  !*** ./appConfig.json ***!
  \************************/
/*! exports provided: type, default */
/***/ (function(module) {

module.exports = {"type":"SSR"};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$":
/*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index.js": "./node_modules/react-universal-component/dist/requireById/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$";

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AppRoot */ "./src/components/AppRoot.js");
/* harmony import */ var _appConfig_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appConfig.json */ "./appConfig.json");
var _appConfig_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../appConfig.json */ "./appConfig.json", 1);





react_loadable__WEBPACK_IMPORTED_MODULE_2___default.a.preloadReady().then(function () {
  var method = _appConfig_json__WEBPACK_IMPORTED_MODULE_4__.type === 'SSR' ? 'hydrate' : 'render';
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a[method](react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppRoot__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('react-root'));
});

/***/ }),

/***/ "./src/components/AppRoot.js":
/*!***********************************!*\
  !*** ./src/components/AppRoot.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-plugin-universal-import/universalImport */ "./node_modules/babel-plugin-universal-import/universalImport.js");
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav.css */ "./src/components/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_13__);










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();






var LoadableComponent = react_loadable__WEBPACK_IMPORTED_MODULE_13___default()({
  loader: function loader() {
    return babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8___default()({
      id: "./LoadOnDemand",
      load: function load() {
        return Promise.all([__webpack_require__.e(/*! import() | LoadOnDemand */ "LoadOnDemand").then(__webpack_require__.bind(null, /*! ./LoadOnDemand */ "./src/components/LoadOnDemand.js"))]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return path__WEBPACK_IMPORTED_MODULE_7___default.a.join(__dirname, './LoadOnDemand');
      },
      resolve: function resolve() {
        return /*require.resolve*/(/*! ./LoadOnDemand */ "./src/components/LoadOnDemand.js");
      },
      chunkName: function chunkName() {
        return "LoadOnDemand";
      }
    });
  },
  modules: ['./LoadOnDemand'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./LoadOnDemand */ "./src/components/LoadOnDemand.js")];
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, "Loading...");
  }
});

var AppRoot =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AppRoot, _React$Component);

  function AppRoot(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppRoot);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AppRoot).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      _this.setState({
        show: true
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppRoot, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.handleClick
      }, "Reveal Loadable Content, haha"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, this.state.show ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(LoadableComponent, null) : null));
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

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__["hot"])(AppRoot);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadableComponent, "LoadableComponent", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(AppRoot, "AppRoot", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(_default, "default", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), "/"))

/***/ }),

/***/ "./src/components/nav.css":
/*!********************************!*\
  !*** ./src/components/nav.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(true) {
      // 1551626028676
      var cssReload = __webpack_require__(/*! ../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  
    if(true) {
      // 1551626028676
      var cssReload = __webpack_require__(/*! ../../node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(true) {
      // 1551626028666
      var cssReload = __webpack_require__(/*! ../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  
    if(true) {
      // 1551626028666
      var cssReload = __webpack_require__(/*! ../node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

})
//# sourceMappingURL=main.35046f155c0896441b5e.hot-update.js.map
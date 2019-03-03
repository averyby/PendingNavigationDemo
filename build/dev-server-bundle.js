module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"LoadOnDemand":"LoadOnDemand"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/render.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/babel-plugin-universal-import/universalImport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-universal-import/universalImport.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

module.exports = function(config, makeThennable) {
  if (makeThennable === false) return config

  var load = config.load
  config.then = function(cb) {
    return load().then(function(res) {
      return cb && cb(res)
    })
  }
  config.catch = function(cb) {
    return load().catch(function(e) {
      return cb && cb(e)
    })
  }
  return config
}

var isSet = false

function setHasPlugin() {
  if (isSet) return
  var universal
  var isWebpack = typeof __webpack_require__ !== 'undefined'

  try {
    if (isWebpack) {
      var weakId = /*require.resolve*/(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js")
      universal = __webpack_require__(weakId)
    } else {
      universal = __webpack_require__(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js")
    }

    if (universal) {
      universal.setHasBabelPlugin()
      isSet = true
    }
  } catch (e) {}
}

setHasPlugin()


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-loadable/lib/webpack.js":
/*!****************************************************!*\
  !*** ./node_modules/react-loadable/lib/webpack.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var url = __webpack_require__(/*! url */ "url");

function buildManifest(compiler, compilation) {
  var context = compiler.options.context;
  var manifest = {};

  compilation.chunks.forEach(function (chunk) {
    chunk.files.forEach(function (file) {
      chunk.forEachModule(function (module) {
        var id = module.id;
        var name = typeof module.libIdent === 'function' ? module.libIdent({ context: context }) : null;
        var publicPath = url.resolve(compilation.outputOptions.publicPath || '', file);

        var currentModule = module;
        if (module.constructor.name === 'ConcatenatedModule') {
          currentModule = module.rootModule;
        }
        if (!manifest[currentModule.rawRequest]) {
          manifest[currentModule.rawRequest] = [];
        }

        manifest[currentModule.rawRequest].push({ id: id, name: name, file: file, publicPath: publicPath });
      });
    });
  });

  return manifest;
}

var ReactLoadablePlugin = function () {
  function ReactLoadablePlugin() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ReactLoadablePlugin);

    this.filename = opts.filename;
  }

  ReactLoadablePlugin.prototype.apply = function apply(compiler) {
    var _this = this;

    compiler.plugin('emit', function (compilation, callback) {
      var manifest = buildManifest(compiler, compilation);
      var json = JSON.stringify(manifest, null, 2);
      var outputDirectory = path.dirname(_this.filename);
      try {
        fs.mkdirSync(outputDirectory);
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err;
        }
      }
      fs.writeFileSync(_this.filename, json);
      callback();
    });
  };

  return ReactLoadablePlugin;
}();

function getBundles(manifest, moduleIds) {
  return moduleIds.reduce(function (bundles, moduleId) {
    return bundles.concat(manifest[moduleId]);
  }, []);
}

exports.ReactLoadablePlugin = ReactLoadablePlugin;
exports.getBundles = getBundles;

/***/ }),

/***/ "./node_modules/react-loadable/webpack.js":
/*!************************************************!*\
  !*** ./node_modules/react-loadable/webpack.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/webpack */ "./node_modules/react-loadable/lib/webpack.js");


/***/ }),

/***/ "./node_modules/react-universal-component/dist/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/helpers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(/*! ./index */ "./node_modules/react-universal-component/dist/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!isInitialized) return state;
  if (!state.error) {
    state.error = null;
  }
  return __handleAfter(props, state, isMount, isSync, isServer);
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */
var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;


  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;

      var info = { isMount: isMount, isSync: isSync, isServer: isServer };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(/*! ./requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js");

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(/*! ./report-chunks */ "./node_modules/react-universal-component/dist/report-chunks.js");

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});
exports.default = universal;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(/*! vm */ "vm");

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-universal-component/dist/utils.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-universal-component/dist/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({ mod: null, props: props }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        requireAsync(props, context).then(function (mod) {
          var state = { mod: mod, props: props, context: context };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        }).catch(function (error) {
          return _this2.update({ error: error, props: props, context: context });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;


        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
      // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, { error: error, props: props, context: context }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, { asyncOnly: asyncOnly, props: props, mod: mod, context: context }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, { props: props, asyncOnly: asyncOnly, mod: mod, context: context }, context, true);
        return { mod: mod, asyncOnly: asyncOnly, context: context, props: props };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);
        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context);
      // $FlowFixMe
      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, { mod: mod });
            }

            var state = { mod: mod };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ mod: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;

        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, { mod: mod });
        }
        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-universal-component/dist/report-chunks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/report-chunks.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

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

/***/ "./node_modules/react-universal-component/dist/requireById/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-universal-component/dist/utils.js");

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__("./node_modules/react-universal-component/dist/requireById sync recursive ^.*$")("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireUniversalModule.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireUniversalModule.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = requireUniversalModule;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-universal-component/dist/utils.js");

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;
          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }
    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(/*! ./requireById */ "./node_modules/react-universal-component/dist/requireById/index.js");

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isTest = exports.isTest = "development" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (true) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, { error: error }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),

/***/ "./node_modules/react-universal-component/server.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-universal-component/server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  flushModuleIds: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").flushModuleIds,
  flushChunkNames: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").flushChunkNames,
  clearChunks: __webpack_require__(/*! ./dist/requireUniversalModule */ "./node_modules/react-universal-component/dist/requireUniversalModule.js").clearChunks,
  ReportChunks: __webpack_require__(/*! ./dist/report-chunks */ "./node_modules/react-universal-component/dist/report-chunks.js").default
}


/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/createApiWithCss.js":
/*!*******************************************************!*\
  !*** (webpack)-flush-chunks/dist/createApiWithCss.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssHash = exports.stylesAsString = exports.isCss = exports.isJs = exports.getJsFileRegex = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = "development" === 'development';

/** CREATE API WITH CSS */

exports.default = function (files, filesOrderedForCss, stats, outputPath) {
  var publicPath = stats.publicPath.replace(/\/$/, '');
  var regex = getJsFileRegex(files);
  var scripts = files.filter(function (file) {
    return isJs(regex, file);
  });
  var stylesheets = filesOrderedForCss.filter(isCss);
  var cssHashRaw = createCssHash(stats);

  var api = {
    // 1) Use as React components using ReactDOM.renderToStaticMarkup, eg:
    // <html><Styles /><Js /><html>
    Js: function Js() {
      return _react2.default.createElement(
        'span',
        null,
        scripts.map(function (file, key) {
          return _react2.default.createElement('script', {
            type: 'text/javascript',
            src: publicPath + '/' + file,
            key: key,
            defer: true
          });
        })
      );
    },
    Styles: function Styles() {
      return _react2.default.createElement(
        'span',
        null,
        stylesheets.map(function (file, key) {
          return _react2.default.createElement('link', { rel: 'stylesheet', href: publicPath + '/' + file, key: key });
        })
      );
    },

    // 2) Use as string, eg: `${styles} ${js}`
    js: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          scripts.map(function (file) {
            return '<script type=\'text/javascript\' src=\'' + publicPath + '/' + file + '\' defer=\'defer\'></script>';
          }).join('\n')
        );
      }
    },
    styles: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          stylesheets.map(function (file) {
            return '<link rel=\'stylesheet\' href=\'' + publicPath + '/' + file + '\' />';
          }).join('\n')
        );
      }
    },

    // 3) Embed the raw css without needing to load another file.
    // Use as a React component (<Css />) or a string (`${css}`):
    // NOTE: during development, HMR requires stylesheets.
    Css: function Css() {
      return DEV ? api.Styles() : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'style',
          null,
          stylesAsString(stylesheets, outputPath)
        )
      );
    },
    css: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          DEV ? api.styles.toString() : '<style>' + stylesAsString(stylesheets, outputPath) + '</style>'
        );
      }
    },

    // 4) names of files without publicPath or outputPath prefixed:
    scripts: scripts,
    stylesheets: stylesheets,

    // 5) for completeness provide the paths even though they were inputs:
    publicPath: publicPath,
    outputPath: outputPath,

    // 6) special goodness for dual-file import()
    cssHashRaw: cssHashRaw,
    CssHash: function CssHash() {
      return _react2.default.createElement('script', {
        type: 'text/javascript',
        dangerouslySetInnerHTML: {
          __html: 'window.__CSS_CHUNKS__ = ' + JSON.stringify(cssHashRaw)
        }
      });
    },
    cssHash: {
      toString: function toString() {
        return '<script type=\'text/javascript\'>window.__CSS_CHUNKS__= ' + JSON.stringify(cssHashRaw) + '</script>';
      }
    }
  };

  return api;
};

/** HELPERS */

var getJsFileRegex = exports.getJsFileRegex = function getJsFileRegex(files) {
  var isUsingExtractCssChunk = !!files.find(function (file) {
    return file.includes('no_css');
  });
  return isUsingExtractCssChunk ? /\.no_css\.js$/ : /\.js$/;
};

var isJs = exports.isJs = function isJs(regex, file) {
  return regex.test(file) && !/\.hot-update\.js$/.test(file);
};

var isCss = exports.isCss = function isCss(file) {
  return (/\.css$/.test(file)
  );
};

var stylesAsString = exports.stylesAsString = function stylesAsString(stylesheets, outputPath) {
  if (!outputPath) {
    throw new Error('No `outputPath` was provided as an option to `flushChunks`.\n      Please provide one so stylesheets can be read from the\n      file system since you\'re embedding the css as a string.');
  }

  var path = outputPath.replace(/\/$/, '');

  return stylesheets.map(function (file) {
    var filePath = path + '/' + file;
    return _fs2.default.readFileSync(filePath, 'utf8');
  }).join('\n').replace(/\/\*# sourceMappingURL=.+\*\//g, ''); // hide prod sourcemap err
};

var createCssHash = exports.createCssHash = function createCssHash(_ref) {
  var assetsByChunkName = _ref.assetsByChunkName,
      publicPath = _ref.publicPath;
  return Object.keys(assetsByChunkName).reduce(function (hash, name) {
    if (!assetsByChunkName[name] || !assetsByChunkName[name].find) return hash;
    var file = assetsByChunkName[name].find(function (file) {
      return file.endsWith('.css');
    });
    if (file) hash[name] = '' + publicPath + file;
    return hash;
  }, {});
};

/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/flushChunks.js":
/*!**************************************************!*\
  !*** (webpack)-flush-chunks/dist/flushChunks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesFromChunks = exports.concatFilesAtKeys = exports.normalizePath = exports.isUnique = exports.createFilesByModuleId = exports.createFilesByPath = exports.flushWebpack = exports.flushBabel = exports.flush = exports.flushFilesPure = exports.flushFiles = exports.flushChunks = undefined;

var _createApiWithCss = __webpack_require__(/*! ./createApiWithCss */ "./node_modules/webpack-flush-chunks/dist/createApiWithCss.js");

var _createApiWithCss2 = _interopRequireDefault(_createApiWithCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filesByPath = null;
var filesByModuleId = null;

var IS_WEBPACK = typeof __webpack_require__ !== 'undefined';
var IS_TEST = "development" === 'test';
var defaults = {
  before: ['bootstrap', 'vendor'],
  after: ['main']
};

/** PUBLIC API */

exports.default = function (stats, opts) {
  return flushChunks(stats, IS_WEBPACK, opts);
};

var flushChunks = function flushChunks(stats, isWebpack) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var beforeEntries = opts.before || defaults.before;
  var ffc = function ffc(assets, isWebpack) {
    return filesFromChunks(assets, stats, isWebpack);
  };

  var jsBefore = ffc(beforeEntries);

  var files = opts.chunkNames ? ffc(opts.chunkNames, true) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var afterEntries = opts.after || defaults.after;
  var jsAfter = ffc(afterEntries);

  return (0, _createApiWithCss2.default)([].concat(_toConsumableArray(jsBefore), _toConsumableArray(files), _toConsumableArray(jsAfter)).filter(isUnique), [].concat(_toConsumableArray(jsBefore), _toConsumableArray(jsAfter.reverse()), _toConsumableArray(files)).filter(isUnique), stats, opts.outputPath);
};

var flushFiles = function flushFiles(stats, opts) {
  return flushFilesPure(stats, IS_WEBPACK, opts);
};

var flushFilesPure = function flushFilesPure(stats, isWebpack, opts) {
  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var filter = opts.filter;

  if (filter) {
    if (typeof filter === 'function') {
      return files.filter(filter);
    }

    var regex = filter instanceof RegExp ? filter : new RegExp('.' + filter + '$');
    return files.filter(function (file) {
      return regex.test(file);
    });
  }

  return files;
};

/** BABEL VS. WEBPACK FLUSHING */

var flush = function flush(moduleIds, stats, rootDir, isWebpack) {
  return !isWebpack ? flushBabel(moduleIds, stats, rootDir).filter(isUnique) : flushWebpack(moduleIds, stats).filter(isUnique);
};

var flushBabel = function flushBabel(paths, stats, rootDir) {
  if (!rootDir) {
    throw new Error('No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.');
  }

  var dir = rootDir; // satisfy flow

  filesByPath = filesByPath && !IS_TEST ? filesByPath // cached
  : createFilesByPath(stats);

  return concatFilesAtKeys(filesByPath, paths.map(function (p) {
    return normalizePath(p, dir);
  }));
};

var flushWebpack = function flushWebpack(ids, stats) {
  filesByModuleId = filesByModuleId && !IS_TEST ? filesByModuleId // cached
  : createFilesByModuleId(stats);

  return concatFilesAtKeys(filesByModuleId, ids);
};

/** CREATE FILES MAP */
var filesByChunk = function filesByChunk(chunks) {
  return chunks.reduce(function (chunks, chunk) {
    chunks[chunk.id] = chunk.files;
    return chunks;
  }, {});
};

var createFilesByPath = function createFilesByPath(_ref) {
  var chunks = _ref.chunks,
      modules = _ref.modules;

  var chunkedFiles = filesByChunk(chunks);
  return modules.reduce(function (filesByPath, module) {
    var filePath = module.name;
    var files = concatFilesAtKeys(chunkedFiles, module.chunks);

    filesByPath[filePath] = files.filter(isUnique);
    return filesByPath;
  }, {});
};

var createFilesByModuleId = function createFilesByModuleId(stats) {
  var filesByPath = createFilesByPath(stats);

  return stats.modules.reduce(function (filesByModuleId, module) {
    var filePath = module.name;
    var id = module.id;

    filesByModuleId[id] = filesByPath[filePath];
    return filesByModuleId;
  }, {});
};

var findChunkById = function findChunkById(_ref2) {
  var chunks = _ref2.chunks;

  if (!chunks) {
    return {};
  }
  return filesByChunk(chunks);
};

/** HELPERS */

var isUnique = function isUnique(v, i, self) {
  return self.indexOf(v) === i;
};

var normalizePath = function normalizePath(path, rootDir) {
  return path.replace(rootDir, '.').replace(/\.js$/, '') + '.js';
};

var concatFilesAtKeys = function concatFilesAtKeys(inputFilesMap, pathsOrIdsOrChunks) {
  return pathsOrIdsOrChunks.reduce(function (files, key) {
    return files.concat(inputFilesMap[key] || []);
  }, []);
};

var filesByChunkName = function filesByChunkName(name, namedChunkGroups) {
  if (!namedChunkGroups || !namedChunkGroups[name]) {
    return [name];
  }

  return namedChunkGroups[name].chunks;
};

var hasChunk = function hasChunk(entry, assets, checkChunkNames) {
  var result = !!(assets[entry] || assets[entry + '-']);
  if (!result && checkChunkNames) {
    console.warn('[FLUSH CHUNKS]: Unable to find ' + entry + ' in Webpack chunks. Please check usage of Babel plugin.');
  }

  return result;
};

var chunksToResolve = function chunksToResolve(_ref3) {
  var chunkNames = _ref3.chunkNames,
      stats = _ref3.stats,
      checkChunkNames = _ref3.checkChunkNames;
  return chunkNames.reduce(function (names, name) {
    if (!hasChunk(name, stats.assetsByChunkName, checkChunkNames)) {
      return names;
    }
    var files = filesByChunkName(name, stats.namedChunkGroups);
    names.push.apply(names, _toConsumableArray(files));
    return names;
  }, []).filter(isUnique);
};

var filesFromChunks = function filesFromChunks(chunkNames, stats, checkChunkNames) {
  var _ref4;

  var chunksByID = findChunkById(stats);

  var entryToFiles = function entryToFiles(entry) {
    if (typeof entry === 'number') {
      return chunksByID[entry];
    }
    return stats.assetsByChunkName[entry] || stats.assetsByChunkName[entry + '-'];
  };

  var chunksWithAssets = chunksToResolve({
    chunkNames: chunkNames,
    stats: stats,
    checkChunkNames: checkChunkNames
  });

  return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(chunksWithAssets.map(entryToFiles))).filter(function (chunk) {
    return chunk;
  });
};

/** EXPORTS FOR TESTS */

exports.flushChunks = flushChunks;
exports.flushFiles = flushFiles;
exports.flushFilesPure = flushFilesPure;
exports.flush = flush;
exports.flushBabel = flushBabel;
exports.flushWebpack = flushWebpack;
exports.createFilesByPath = createFilesByPath;
exports.createFilesByModuleId = createFilesByModuleId;
exports.isUnique = isUnique;
exports.normalizePath = normalizePath;
exports.concatFilesAtKeys = concatFilesAtKeys;
exports.filesFromChunks = filesFromChunks;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./react-loadable.json":
/*!*****************************!*\
  !*** ./react-loadable.json ***!
  \*****************************/
/*! exports provided: ./LoadOnDemand, ./index.css, @babel/runtime/helpers/assertThisInitialized, @babel/runtime/helpers/classCallCheck, @babel/runtime/helpers/createClass, @babel/runtime/helpers/defineProperty, @babel/runtime/helpers/getPrototypeOf, @babel/runtime/helpers/inherits, @babel/runtime/helpers/possibleConstructorReturn, ./setPrototypeOf, ../helpers/typeof, babel-plugin-universal-import/universalImport, ../node_modules/css-loader/dist/runtime/api.js, react-hot-loader/root, ./lib/webpack, react-loadable/webpack, ./helpers, react-universal-component, ./dist/report-chunks, undefined, ./requireById, ./dist/requireUniversalModule, ./utils, react-universal-component/server, ./createApiWithCss, webpack-flush-chunks, ./../../node_modules/webpack/buildin/harmony-module.js, ./../../webpack/buildin/module.js, ../../react-loadable.json, ../components/AppRoot, ./nav.css, ../main.scss, ./src/server/render.js, default */
/***/ (function(module) {

module.exports = {"./LoadOnDemand":[{"id":"./src/components/LoadOnDemand.js","name":"./src/components/LoadOnDemand.js","file":"LoadOnDemand.js","publicPath":"/LoadOnDemand.js"},{"id":"./src/components/LoadOnDemand.js","name":"./src/components/LoadOnDemand.js","file":"LoadOnDemand.js.map","publicPath":"/LoadOnDemand.js.map"}],"./index.css":[{"id":"./src/components/index.css","name":"./src/components/index.css","file":"LoadOnDemand.js","publicPath":"/LoadOnDemand.js"},{"id":"./src/components/index.css","name":"./src/components/index.css","file":"LoadOnDemand.js.map","publicPath":"/LoadOnDemand.js.map"}],"@babel/runtime/helpers/assertThisInitialized":[{"id":"./node_modules/@babel/runtime/helpers/assertThisInitialized.js","name":"./node_modules/@babel/runtime/helpers/assertThisInitialized.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/assertThisInitialized.js","name":"./node_modules/@babel/runtime/helpers/assertThisInitialized.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/classCallCheck":[{"id":"./node_modules/@babel/runtime/helpers/classCallCheck.js","name":"./node_modules/@babel/runtime/helpers/classCallCheck.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/classCallCheck.js","name":"./node_modules/@babel/runtime/helpers/classCallCheck.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/createClass":[{"id":"./node_modules/@babel/runtime/helpers/createClass.js","name":"./node_modules/@babel/runtime/helpers/createClass.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/createClass.js","name":"./node_modules/@babel/runtime/helpers/createClass.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/defineProperty":[{"id":"./node_modules/@babel/runtime/helpers/defineProperty.js","name":"./node_modules/@babel/runtime/helpers/defineProperty.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/defineProperty.js","name":"./node_modules/@babel/runtime/helpers/defineProperty.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/getPrototypeOf":[{"id":"./node_modules/@babel/runtime/helpers/getPrototypeOf.js","name":"./node_modules/@babel/runtime/helpers/getPrototypeOf.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/getPrototypeOf.js","name":"./node_modules/@babel/runtime/helpers/getPrototypeOf.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/inherits":[{"id":"./node_modules/@babel/runtime/helpers/inherits.js","name":"./node_modules/@babel/runtime/helpers/inherits.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/inherits.js","name":"./node_modules/@babel/runtime/helpers/inherits.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"@babel/runtime/helpers/possibleConstructorReturn":[{"id":"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","name":"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","name":"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./setPrototypeOf":[{"id":"./node_modules/@babel/runtime/helpers/setPrototypeOf.js","name":"./node_modules/@babel/runtime/helpers/setPrototypeOf.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/setPrototypeOf.js","name":"./node_modules/@babel/runtime/helpers/setPrototypeOf.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"../helpers/typeof":[{"id":"./node_modules/@babel/runtime/helpers/typeof.js","name":"./node_modules/@babel/runtime/helpers/typeof.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/@babel/runtime/helpers/typeof.js","name":"./node_modules/@babel/runtime/helpers/typeof.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"babel-plugin-universal-import/universalImport":[{"id":"./node_modules/babel-plugin-universal-import/universalImport.js","name":"./node_modules/babel-plugin-universal-import/universalImport.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/babel-plugin-universal-import/universalImport.js","name":"./node_modules/babel-plugin-universal-import/universalImport.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"../node_modules/css-loader/dist/runtime/api.js":[{"id":"./node_modules/css-loader/dist/runtime/api.js","name":"./node_modules/css-loader/dist/runtime/api.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/css-loader/dist/runtime/api.js","name":"./node_modules/css-loader/dist/runtime/api.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"react-hot-loader/root":[{"id":"./node_modules/react-hot-loader/root.js","name":"./node_modules/react-hot-loader/root.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-hot-loader/root.js","name":"./node_modules/react-hot-loader/root.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./lib/webpack":[{"id":"./node_modules/react-loadable/lib/webpack.js","name":"./node_modules/react-loadable/lib/webpack.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-loadable/lib/webpack.js","name":"./node_modules/react-loadable/lib/webpack.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"react-loadable/webpack":[{"id":"./node_modules/react-loadable/webpack.js","name":"./node_modules/react-loadable/webpack.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-loadable/webpack.js","name":"./node_modules/react-loadable/webpack.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./helpers":[{"id":"./node_modules/react-universal-component/dist/helpers.js","name":"./node_modules/react-universal-component/dist/helpers.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/helpers.js","name":"./node_modules/react-universal-component/dist/helpers.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"react-universal-component":[{"id":"./node_modules/react-universal-component/dist/index.js","name":"./node_modules/react-universal-component/dist/index.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/index.js","name":"./node_modules/react-universal-component/dist/index.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./dist/report-chunks":[{"id":"./node_modules/react-universal-component/dist/report-chunks.js","name":"./node_modules/react-universal-component/dist/report-chunks.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/report-chunks.js","name":"./node_modules/react-universal-component/dist/report-chunks.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"undefined":[{"id":"./node_modules/react-universal-component/dist/requireById sync recursive ^.*$","name":"./node_modules/react-universal-component/dist/requireById sync recursive ^.*$","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"fs","name":"fs","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"hoist-non-react-statics","name":"hoist-non-react-statics","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"path","name":"path","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"prop-types","name":"prop-types","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"react","name":"react","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"react-dom/server","name":"react-dom/server","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"react-hot-loader","name":"react-hot-loader","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"react-loadable","name":"react-loadable","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"url","name":"url","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"vm","name":"vm","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/requireById sync recursive ^.*$","name":"./node_modules/react-universal-component/dist/requireById sync recursive ^.*$","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"fs","name":"fs","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"hoist-non-react-statics","name":"hoist-non-react-statics","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"path","name":"path","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"prop-types","name":"prop-types","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"react","name":"react","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"react-dom/server","name":"react-dom/server","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"react-hot-loader","name":"react-hot-loader","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"react-loadable","name":"react-loadable","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"url","name":"url","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"},{"id":"vm","name":"vm","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./requireById":[{"id":"./node_modules/react-universal-component/dist/requireById/index.js","name":"./node_modules/react-universal-component/dist/requireById/index.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/requireById/index.js","name":"./node_modules/react-universal-component/dist/requireById/index.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./dist/requireUniversalModule":[{"id":"./node_modules/react-universal-component/dist/requireUniversalModule.js","name":"./node_modules/react-universal-component/dist/requireUniversalModule.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/requireUniversalModule.js","name":"./node_modules/react-universal-component/dist/requireUniversalModule.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./utils":[{"id":"./node_modules/react-universal-component/dist/utils.js","name":"./node_modules/react-universal-component/dist/utils.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/dist/utils.js","name":"./node_modules/react-universal-component/dist/utils.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"react-universal-component/server":[{"id":"./node_modules/react-universal-component/server.js","name":"./node_modules/react-universal-component/server.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/react-universal-component/server.js","name":"./node_modules/react-universal-component/server.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./createApiWithCss":[{"id":"./node_modules/webpack-flush-chunks/dist/createApiWithCss.js","name":"./node_modules/webpack-flush-chunks/dist/createApiWithCss.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/webpack-flush-chunks/dist/createApiWithCss.js","name":"./node_modules/webpack-flush-chunks/dist/createApiWithCss.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"webpack-flush-chunks":[{"id":"./node_modules/webpack-flush-chunks/dist/flushChunks.js","name":"./node_modules/webpack-flush-chunks/dist/flushChunks.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/webpack-flush-chunks/dist/flushChunks.js","name":"./node_modules/webpack-flush-chunks/dist/flushChunks.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./../../node_modules/webpack/buildin/harmony-module.js":[{"id":"./node_modules/webpack/buildin/harmony-module.js","name":"./node_modules/webpack/buildin/harmony-module.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/webpack/buildin/harmony-module.js","name":"./node_modules/webpack/buildin/harmony-module.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./../../webpack/buildin/module.js":[{"id":"./node_modules/webpack/buildin/module.js","name":"./node_modules/webpack/buildin/module.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./node_modules/webpack/buildin/module.js","name":"./node_modules/webpack/buildin/module.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"../../react-loadable.json":[{"id":"./react-loadable.json","name":"./react-loadable.json","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./react-loadable.json","name":"./react-loadable.json","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"../components/AppRoot":[{"id":"./src/components/AppRoot.js","name":"./src/components/AppRoot.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./src/components/AppRoot.js","name":"./src/components/AppRoot.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./nav.css":[{"id":"./src/components/nav.css","name":"./src/components/nav.css","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./src/components/nav.css","name":"./src/components/nav.css","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"../main.scss":[{"id":"./src/main.scss","name":"./src/main.scss","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./src/main.scss","name":"./src/main.scss","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}],"./src/server/render.js":[{"id":"./src/server/render.js","name":"./src/server/render.js","file":"dev-server-bundle.js","publicPath":"/dev-server-bundle.js"},{"id":"./src/server/render.js","name":"./src/server/render.js","file":"dev-server-bundle.js.map","publicPath":"/dev-server-bundle.js.map"}]};

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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-plugin-universal-import/universalImport */ "./node_modules/babel-plugin-universal-import/universalImport.js");
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav.css */ "./src/components/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_13__);










(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
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
      }, "Reveal Loadable Content"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(LoadableComponent, null)));
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadableComponent, "LoadableComponent", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(AppRoot, "AppRoot", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
  reactHotLoader.register(_default, "default", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/components/AppRoot.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
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

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".nav {\n    width: 100%;\n    line-height: 2em;\n    background-color: black;\n}\n\n.nav a {\n    color: white;\n    text-decoration: none;\n    padding: 0 20px;\n}", ""]);



/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  background-color: #444; }\n\n.counter {\n  text-decoration: underline; }\n", ""]);



/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppRoot */ "./src/components/AppRoot.js");
/* harmony import */ var react_universal_component_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-universal-component/server */ "./node_modules/react-universal-component/server.js");
/* harmony import */ var react_universal_component_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webpack_flush_chunks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-flush-chunks */ "./node_modules/webpack-flush-chunks/dist/flushChunks.js");
/* harmony import */ var webpack_flush_chunks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_flush_chunks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable/webpack */ "./node_modules/react-loadable/webpack.js");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_loadable_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../react-loadable.json */ "./react-loadable.json");
var _react_loadable_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../react-loadable.json */ "./react-loadable.json", 1);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;
  enterModule && enterModule(module);
})();










var _default = function _default(_ref) {
  var clientStats = _ref.clientStats;
  return function (req, res) {
    var modules = [];
    var app = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_5___default.a.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppRoot__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    /*
      ${bundles.map(bundle => {
                return `<script src="${bundle.publicPath}"></script>`
    }).join('\n')}
    */

    var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_6__["getBundles"])(_react_loadable_json__WEBPACK_IMPORTED_MODULE_7__, modules).filter(function (b) {
      return b.publicPath.endsWith('.js');
    });
    console.log('bundles', bundles);
    console.log('modules', modules);

    var _flushChunks = webpack_flush_chunks__WEBPACK_IMPORTED_MODULE_4___default()(clientStats, {
      chunkNames: Object(react_universal_component_server__WEBPACK_IMPORTED_MODULE_3__["flushChunkNames"])()
    }),
        js = _flushChunks.js,
        styles = _flushChunks.styles,
        cssHash = _flushChunks.cssHash;

    res.send("\n      <html>\n      <head>\n        ".concat(styles, "\n        <title>Hello Title</title>\n      </head>\n      <body>\n          <div id=\"react-root\">").concat(app, "</div>\n          ").concat(bundles.map(function (bundle) {
      return "<script src=\"".concat(bundle.publicPath, "\"></script>");
    }).join('\\n'), "\n          ").concat(js, "\n          ").concat(cssHash, "\n      </body>\n      </html>\n    "));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/vimer/IdeaProjects/udemy-courses/webpack-course/src/server/render.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ })

/******/ });
//# sourceMappingURL=dev-server-bundle.js.map
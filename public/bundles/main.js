/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ \"sg+I\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar StarsDisplay = function StarsDisplay(props) {\n  return utils.range(1, props.starts).map(function (starId) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  });\n};\n\nvar PlayNumber = function PlayNumber(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"number\",\n    style: {\n      backgroundColor: colors[props.status]\n    },\n    onClick: function onClick() {\n      return props.onClick(props.number, props.status);\n    }\n  }, props.number);\n};\n\nvar PlayAgain = function PlayAgain(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === 'lost' ? 'red' : 'green'\n    }\n  }, props.gameStatus === 'lost' ? 'Game Over' : 'Nice'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: props.onClick\n  }, \"Play Again\"));\n}; // Custom Hook\n//To declare the State and manage the State.\n\n\nvar useGameState = function useGameState() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(utils.random(1, 9)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      starts = _useState2[0],\n      setStarts = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(utils.range(1, 9)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      candidateNums = _useState6[0],\n      setCandidateNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(10),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (secondLeft > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        setSecondsLeft(secondLeft - 1);\n      }, 1000);\n      return function () {\n        return clearTimeout(timerId);\n      };\n    }\n  });\n\n  var setGameState = function setGameState(newCandidateNums) {\n    if (utils.sum(newCandidateNums) !== starts) {\n      setCandidateNums(newCandidateNums);\n    } else {\n      var newAvailableNums = availableNums.filter(function (n) {\n        return !newCandidateNums.includes(n);\n      });\n      setStarts(utils.randomSumIn(newAvailableNums, 9));\n      setAvailableNums(newAvailableNums);\n      setCandidateNums([]);\n    }\n  };\n\n  var resetGame = function resetGame() {\n    setStarts(utils.random(1, 9));\n    setAvailableNums(utils.range(1, 9));\n    setCandidateNums([]);\n    setSecondsLeft(10);\n  };\n\n  return {\n    starts: starts,\n    availableNums: availableNums,\n    candidateNums: candidateNums,\n    secondLeft: secondLeft,\n    setGameState: setGameState,\n    resetGame: resetGame\n  };\n};\n\nvar StarMatch = function StarMatch() {\n  var _useGameState = useGameState(),\n      starts = _useGameState.starts,\n      availableNums = _useGameState.availableNums,\n      candidateNums = _useGameState.candidateNums,\n      secondLeft = _useGameState.secondLeft,\n      setGameState = _useGameState.setGameState,\n      resetGame = _useGameState.resetGame;\n\n  var candidateAreWrong = utils.sum(candidateNums) > starts;\n  var gameStatus = availableNums.length === 0 ? 'won' : secondLeft === 0 ? 'lost' : 'active';\n\n  var numberStatus = function numberStatus(number) {\n    if (!availableNums.includes(number)) {\n      return 'used';\n    }\n\n    if (candidateNums.includes(number)) {\n      return candidateAreWrong ? 'wrong' : 'candidate';\n    }\n\n    return 'available';\n  };\n\n  var onNumberClick = function onNumberClick(number, currentStatus) {\n    if (gameStatus !== 'active' || currentStatus === 'used') {\n      return;\n    }\n\n    var newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (cn) {\n      return cn !== number;\n    });\n    setGameState(newCandidateNums);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of starts\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus !== 'active' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayAgain, {\n    onClick: resetGame,\n    gameStatus: gameStatus\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarsDisplay, {\n    starts: starts\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, utils.range(1, 9).map(function (number) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayNumber, {\n      key: number,\n      status: numberStatus(number),\n      number: number,\n      onClick: onNumberClick\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondLeft)));\n}; // Color Theme\n\n\nvar colors = {\n  available: 'lightgray',\n  used: 'lightgreen',\n  wrong: 'lightcoral',\n  candidate: 'deepskyblue'\n}; // Math science\n\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length - 1)];\n  }\n};\nfunction App(_ref) {\n  var initialData = _ref.initialData;\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      count = _useState10[0],\n      setCount = _useState10[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGFyc0Rpc3BsYXkgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICB1dGlscy5yYW5nZSgxLCBwcm9wcy5zdGFydHMpLm1hcCggc3RhcklkID0+XG4gICAgICA8ZGl2IGtleT17c3RhcklkfSBjbGFzc05hbWU9XCJzdGFyXCIgLz5cbiAgICApXG4gICk7XG59XG5cbmNvbnN0IFBsYXlOdW1iZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPVwibnVtYmVyXCJcbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcnNbcHJvcHMuc3RhdHVzXX19IFxuICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5udW1iZXIsIHByb3BzLnN0YXR1cyl9XG4gICAgPlxuICAgICAgICB7cHJvcHMubnVtYmVyfVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5jb25zdCBQbGF5QWdhaW4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZG9uZVwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZVwiXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAncmVkJyA6ICdncmVlbid9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ0dhbWUgT3ZlcicgOiAnTmljZSd9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+UGxheSBBZ2FpbjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBDdXN0b20gSG9va1xuLy9UbyBkZWNsYXJlIHRoZSBTdGF0ZSBhbmQgbWFuYWdlIHRoZSBTdGF0ZS5cbmNvbnN0IHVzZUdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXJ0cywgc2V0U3RhcnRzXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmRvbSgxLCA5KSk7XG4gIGNvbnN0IFthdmFpbGFibGVOdW1zLCBzZXRBdmFpbGFibGVOdW1zXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmdlKDEsIDkpKTtcbiAgY29uc3QgW2NhbmRpZGF0ZU51bXMsIHNldENhbmRpZGF0ZU51bXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2Vjb25kTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMTApO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vjb25kTGVmdCA+IDAgJiYgYXZhaWxhYmxlTnVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFNlY29uZHNMZWZ0KHNlY29uZExlZnQgLSAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNldEdhbWVTdGF0ZSA9IChuZXdDYW5kaWRhdGVOdW1zKSA9PiB7XG4gICAgaWYodXRpbHMuc3VtKG5ld0NhbmRpZGF0ZU51bXMpICE9PSBzdGFydHMpIHtcbiAgICAgIHNldENhbmRpZGF0ZU51bXMobmV3Q2FuZGlkYXRlTnVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmZpbHRlcihcbiAgICAgICAgbiA9PiAhbmV3Q2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhuKVxuICAgICAgKTtcbiAgICAgIHNldFN0YXJ0cyh1dGlscy5yYW5kb21TdW1JbihuZXdBdmFpbGFibGVOdW1zLCA5KSk7XG4gICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xuICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhbXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0cyh1dGlscy5yYW5kb20oMSwgOSkpO1xuICAgIHNldEF2YWlsYWJsZU51bXModXRpbHMucmFuZ2UoMSwgOSkpO1xuICAgIHNldENhbmRpZGF0ZU51bXMoW10pO1xuICAgIHNldFNlY29uZHNMZWZ0KDEwKTtcbiAgfVxuXG4gIHJldHVybiB7IHN0YXJ0cywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgc2Vjb25kTGVmdCwgc2V0R2FtZVN0YXRlLCByZXNldEdhbWUgfVxufVxuXG5jb25zdCBTdGFyTWF0Y2ggPSAoKSA9PiB7XG5cbiAgY29uc3Qge3N0YXJ0cywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgc2Vjb25kTGVmdCwgc2V0R2FtZVN0YXRlLCByZXNldEdhbWV9ID0gdXNlR2FtZVN0YXRlKCk7XG5cbiAgY29uc3QgY2FuZGlkYXRlQXJlV3JvbmcgPSB1dGlscy5zdW0oY2FuZGlkYXRlTnVtcykgPiBzdGFydHM7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBhdmFpbGFibGVOdW1zLmxlbmd0aCA9PT0gMFxuICAgID8gJ3dvbidcbiAgICA6IHNlY29uZExlZnQgPT09IDAgPyAnbG9zdCcgOiAnYWN0aXZlJztcblxuICBjb25zdCBudW1iZXJTdGF0dXMgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKCFhdmFpbGFibGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgIHJldHVybiAndXNlZCc7XG4gICAgfVxuICAgIGlmIChjYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcbiAgICAgIHJldHVybiBjYW5kaWRhdGVBcmVXcm9uZyA/ICd3cm9uZycgOiAnY2FuZGlkYXRlJztcbiAgICB9XG4gICAgcmV0dXJuICdhdmFpbGFibGUnO1xuICB9O1xuXG4gIGNvbnN0IG9uTnVtYmVyQ2xpY2sgPSAobnVtYmVyLCBjdXJyZW50U3RhdHVzKSA9PiB7XG4gICAgaWYgKGdhbWVTdGF0dXMgIT09ICdhY3RpdmUnIHx8IGN1cnJlbnRTdGF0dXMgPT09ICd1c2VkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NhbmRpZGF0ZU51bXMgPSBcbiAgICAgIGN1cnJlbnRTdGF0dXMgPT09ICdhdmFpbGFibGUnXG4gICAgICA/IGNhbmRpZGF0ZU51bXMuY29uY2F0KG51bWJlcilcbiAgICAgIDogY2FuZGlkYXRlTnVtcy5maWx0ZXIoY24gPT4gY24gIT09IG51bWJlcik7XG5cbiAgICBzZXRHYW1lU3RhdGUobmV3Q2FuZGlkYXRlTnVtcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJ0c1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICB7Z2FtZVN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAoPFBsYXlBZ2FpbiBvbkNsaWNrPXtyZXNldEdhbWV9IGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9IC8+KSA6ICg8U3RhcnNEaXNwbGF5IHN0YXJ0cz17c3RhcnRzfS8+KX1cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIHt1dGlscy5yYW5nZSgxLCA5KS5tYXAoIG51bWJlciA9PlxuICAgICAgICAgICAgICA8UGxheU51bWJlciBcbiAgICAgICAgICAgICAgICBrZXk9e251bWJlcn1cbiAgICAgICAgICAgICAgICBzdGF0dXM9e251bWJlclN0YXR1cyhudW1iZXIpfSBcbiAgICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk51bWJlckNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3NlY29uZExlZnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gQ29sb3IgVGhlbWVcbmNvbnN0IGNvbG9ycyA9IHtcbiAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcbiAgdXNlZDogJ2xpZ2h0Z3JlZW4nLFxuICB3cm9uZzogJ2xpZ2h0Y29yYWwnLFxuICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXG59O1xuXG4vLyBNYXRoIHNjaWVuY2VcbmNvbnN0IHV0aWxzID0ge1xuICAvLyBTdW0gYW4gYXJyYXlcbiAgc3VtOiBhcnIgPT4gYXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKSxcblxuICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcbiAgcmFuZ2U6IChtaW4sIG1heCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbWF4IC0gbWluICsgMSB9LCAoXywgaSkgPT4gbWluICsgaSksXG5cbiAgLy8gcGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXG4gIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpLFxuXG4gIC8vIEdpdmVuIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIGEgbWF4Li4uXG4gIC8vIFBpY2sgYSByYW5kb20gc3VtICg8IG1heCkgZnJvbSB0aGUgc2V0IG9mIGFsbCBhdmFpbGFibGUgc3VtcyBpbiBhcnJcbiAgcmFuZG9tU3VtSW46IChhcnIsIG1heCkgPT4ge1xuICAgIGNvbnN0IHNldHMgPSBbW11dO1xuICAgIGNvbnN0IHN1bXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHNldHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlU2V0ID0gc2V0c1tqXS5jb25jYXQoYXJyW2ldKTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlU3VtID0gdXRpbHMuc3VtKGNhbmRpZGF0ZVNldCk7XG4gICAgICAgIGlmIChjYW5kaWRhdGVTdW0gPD0gbWF4KSB7XG4gICAgICAgICAgc2V0cy5wdXNoKGNhbmRpZGF0ZVNldCk7XG4gICAgICAgICAgc3Vtcy5wdXNoKGNhbmRpZGF0ZVN1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bXNbdXRpbHMucmFuZG9tKDAsIHN1bXMubGVuZ3RoIC0gMSldO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCh7IGluaXRpYWxEYXRhIH0pIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8U3Rhck1hdGNoIC8+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUJBO0FBNkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zOGE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ })

/******/ });
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modulesModuleOneJs = __webpack_require__(2);

	var _modulesModuleOneJs2 = _interopRequireDefault(_modulesModuleOneJs);

	var app = {
	    modules: [],

	    init: function init() {
	        console.log('I\'m started!!!');
	        this.modules.push(new _modulesModuleOneJs2['default']());
	    }
	};

	$(function () {
	    app.init();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	__webpack_require__(3);

	var ModuleOne = (function () {
	    function ModuleOne() {
	        _classCallCheck(this, ModuleOne);
	    }

	    _createClass(ModuleOne, [{
	        key: 'init',
	        value: function init() {
	            console.log('Hello, i\'m module one!');
	        }
	    }]);

	    return ModuleOne;
	})();

	exports['default'] = ModuleOne;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
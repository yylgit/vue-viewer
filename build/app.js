/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Vue = __webpack_require__(2);
	
	var _Vue2 = _interopRequireDefault(_Vue);
	
	var _app = __webpack_require__(4);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _NodeList = __webpack_require__(92);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(103);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(114);
	__webpack_require__(115);
	
	new _Vue2.default({
	  el: '#app',
	  components: {
	    App: _app2.default
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.2.1
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b)
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Whether to record perf
	   */
	  performance: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
	
	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	var perf;
	
	if (process.env.NODE_ENV !== 'production') {
	  perf = inBrowser && window.performance;
	  if (perf && (!perf.mark || !perf.measure)) {
	    perf = undefined;
	  }
	}
	
	/*  */
	
	var emptyObject = Object.freeze({});
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	var warn = noop;
	var tip = noop;
	var formatComponentName;
	
	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	
	    var file = vm._isVue && vm.$options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }
	
	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === "<Anonymous>") {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1);
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$2) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isType (type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type)
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	function handleError (err, vm, type) {
	  if (config.errorHandler) {
	    config.errorHandler.call(null, err, vm, type);
	  } else {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Error in " + type + ":"), vm);
	    }
	    /* istanbul ignore else */
	    if (inBrowser && typeof console !== 'undefined') {
	      console.error(err);
	    } else {
	      throw err
	    }
	  }
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var initProxy;
	
	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };
	
	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }
	
	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };
	
	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};
	
	var prototypeAccessors = { child: {} };
	
	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};
	
	Object.defineProperties( VNode.prototype, prototypeAccessors );
	
	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	var normalizeEvent = cached(function (name) {
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture
	  }
	});
	
	function createFnInvoker (fns) {
	  function invoker () {
	    var arguments$1 = arguments;
	
	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      for (var i = 0; i < fns.length; i++) {
	        fns[i].apply(null, arguments$1);
	      }
	    } else {
	      // return handler return value for single handlers
	      return fns.apply(null, arguments)
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, event;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      if (!cur.fns) {
	        cur = on[name] = createFnInvoker(cur);
	      }
	      add(event.name, cur, event.once, event.capture);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook) {
	  var invoker;
	  var oldHook = def[hookKey];
	
	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }
	
	  if (!oldHook) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (oldHook.fns && oldHook.merged) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }
	
	  invoker.merged = true;
	  def[hookKey] = invoker;
	}
	
	/*  */
	
	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:
	
	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}
	
	// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}
	
	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}
	
	var target;
	
	function add (event, fn, once$$1) {
	  if (once$$1) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}
	
	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}
	
	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
	}
	
	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var this$1 = this;
	
	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	function resolveScopedSlots (
	  fns
	) {
	  var res = {};
	  for (var i = 0; i < fns.length; i++) {
	    res[fns[i][0]] = fns[i][1];
	  }
	  return res
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}
	
	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'option is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');
	
	  var updateComponent;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
	    updateComponent = function () {
	      var name = vm._name;
	      var startTag = "start " + name;
	      var endTag = "end " + name;
	      perf.mark(startTag);
	      var vnode = vm._render();
	      perf.mark(endTag);
	      perf.measure((name + " render"), startTag, endTag);
	      perf.mark(startTag);
	      vm._update(vnode, hydrating);
	      perf.mark(endTag);
	      perf.measure((name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }
	
	  vm._watcher = new Watcher(vm, updateComponent, noop);
	  hydrating = false;
	
	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}
	
	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren
	  var hasChildren = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    parentVnode.data.scopedSlots || // has new scoped slots
	    vm.$scopedSlots !== emptyObject // has old scoped slots
	  );
	
	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;
	
	  // update props
	  if (propsData && vm.$options.props) {
	    observerState.shouldConvert = false;
	    if (process.env.NODE_ENV !== 'production') {
	      observerState.isSettingProps = true;
	    }
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      props[key] = validateProp(key, vm.$options.props, propsData, vm);
	    }
	    observerState.shouldConvert = true;
	    if (process.env.NODE_ENV !== 'production') {
	      observerState.isSettingProps = false;
	    }
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }
	  // update listeners
	  if (listeners) {
	    var oldListeners = vm.$options._parentListeners;
	    vm.$options._parentListeners = listeners;
	    updateComponentListeners(vm, listeners, oldListeners);
	  }
	  // resolve slots + force update if has children
	  if (hasChildren) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }
	}
	
	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}
	
	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive == null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}
	
	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      try {
	        handlers[i].call(vm);
	      } catch (e) {
	        handleError(e, vm, (hook + " hook"));
	      }
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}
	
	/*  */
	
	
	var queue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id, vm;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // call updated hooks
	  index = queue.length;
	  while (index--) {
	    watcher = queue[index];
	    vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  if (this.user) {
	    try {
	      value = this.getter.call(vm, vm);
	    } catch (e) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    }
	  } else {
	    value = this.getter.call(vm, vm);
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}
	
	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}
	
	/*  */
	
	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch) { initWatch(vm, opts.watch); }
	}
	
	var isReservedProp = { key: 1, ref: 1, slot: 1 };
	
	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      if (isReservedProp[key]) {
	        warn(
	          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(props, key, value, function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive$$1(props, key, value);
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };
	
	  for (var key in propsOptions) loop( key );
	  observerState.shouldConvert = true;
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(keys[i])) {
	      proxy(vm, "_data", keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}
	
	var computedWatcherOptions = { lazy: true };
	
	function initComputed (vm, computed) {
	  var watchers = vm._computedWatchers = Object.create(null);
	
	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    // create internal watcher for the computed property.
	    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);
	
	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    }
	  }
	}
	
	function defineComputed (target, key, userDef) {
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = createComputedGetter(key);
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? userDef.cache !== false
	        ? createComputedGetter(key)
	        : userDef.get
	      : noop;
	    sharedPropertyDefinition.set = userDef.set
	      ? userDef.set
	      : noop;
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}
	
	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);
	
	  data = data || {};
	
	  // transform component v-model data into props & events
	  if (data.model) {
	    transformModel(Ctor.options, data);
	  }
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
	    var child = vnode.componentInstance = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.componentInstance = oldVnode.componentInstance;
	  updateChildComponent(
	    child,
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.componentInstance._isMounted) {
	    vnode.componentInstance._isMounted = true;
	    callHook(vnode.componentInstance, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    activateChildComponent(vnode.componentInstance, true /* direct */);
	  }
	}
	
	function destroy (vnode) {
	  if (!vnode.componentInstance._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.componentInstance.$destroy();
	    } else {
	      deactivateChildComponent(vnode.componentInstance, true /* direct */);
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}
	
	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  if (on[event]) {
	    on[event] = [data.model.callback].concat(on[event]);
	  } else {
	    on[event] = data.model.callback;
	  }
	}
	
	/*  */
	
	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
	  return _createElement(context, tag, data, children, normalizationType)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}
	
	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return
	  }
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    ret = new Array(keys.length);
	    for (i = 0, l = keys.length; i < l; i++) {
	      key = keys[i];
	      ret[i] = render(val[key], key, i);
	    }
	  }
	  return ret
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      extend(props, bindObject);
	    }
	    return scopedSlotFn(props) || fallback
	  } else {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}
	
	/*  */
	
	/**
	 * Runtime helper for checking keyCodes from config.
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInAlias
	) {
	  var keyCodes = config.keyCodes[key] || builtInAlias;
	  if (Array.isArray(keyCodes)) {
	    return keyCodes.indexOf(eventKeyCode) === -1
	  } else {
	    return keyCodes !== eventKeyCode
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp
	) {
	  if (value) {
	    if (!isObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      for (var key in value) {
	        if (key === 'class' || key === 'style') {
	          data[key] = value[key];
	        } else {
	          var type = data.attrs && data.attrs.type;
	          var hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	          hash[key] = value[key];
	        }
	      }
	    }
	  }
	  return data
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var tree = this._staticTrees[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree by doing a shallow clone.
	  if (tree && !isInFor) {
	    return Array.isArray(tree)
	      ? cloneVNodes(tree)
	      : cloneVNode(tree)
	  }
	  // otherwise, render a fresh tree.
	  tree = this._staticTrees[index] =
	    this.$options.staticRenderFns[index].call(this._renderProxy);
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}
	
	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}
	
	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}
	
	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render function");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        vnode = vm.$options.renderError
	          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
	          : vm._vnode;
	      } else {
	        vnode = vm._vnode;
	      }
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // internal render helpers.
	  // these are exposed on the instance prototype to reduce generated render
	  // code size.
	  Vue.prototype._o = markOnce;
	  Vue.prototype._n = toNumber;
	  Vue.prototype._s = _toString;
	  Vue.prototype._l = renderList;
	  Vue.prototype._t = renderSlot;
	  Vue.prototype._q = looseEqual;
	  Vue.prototype._i = looseIndexOf;
	  Vue.prototype._m = renderStatic;
	  Vue.prototype._f = resolveFilter;
	  Vue.prototype._k = checkKeyCodes;
	  Vue.prototype._b = bindObjectProps;
	  Vue.prototype._v = createTextVNode;
	  Vue.prototype._e = createEmptyVNode;
	  Vue.prototype._u = resolveScopedSlots;
	}
	
	/*  */
	
	function initInjections (vm) {
	  var provide = vm.$options.provide;
	  var inject = vm.$options.inject;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    // isArray here
	    var isArray = Array.isArray(inject);
	    var keys = isArray
	      ? inject
	      : hasSymbol
	        ? Reflect.ownKeys(inject)
	        : Object.keys(inject);
	
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var provideKey = isArray ? key : inject[key];
	      var source = vm;
	      while (source) {
	        if (source._provided && source._provided[provideKey]) {
	          vm[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	    }
	  }
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
	      perf.mark('init');
	    }
	
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    initInjections(vm);
	    callHook(vm, 'created');
	
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
	      vm._name = formatComponentName(vm, false);
	      perf.mark('init end');
	      perf.measure(((vm._name) + " init"), 'init', 'init end');
	    }
	
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}
	
	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}
	
	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}
	
	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = dedupe(latest[key], sealed[key]);
	    }
	  }
	  return modified
	}
	
	function dedupe (latest, sealed) {
	  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	  // between merges
	  if (Array.isArray(latest)) {
	    var res = [];
	    sealed = Array.isArray(sealed) ? sealed : [sealed];
	    for (var i = 0; i < latest.length; i++) {
	      if (sealed.indexOf(latest[i]) < 0) {
	        res.push(latest[i]);
	      }
	    }
	    return res
	  } else {
	    return latest
	  }
	}
	
	function Vue$2 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$2)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	
	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }
	
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);
	
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}
	
	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}
	
	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	/*  */
	
	var patternTypes = [String, RegExp];
	
	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}
	
	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (pattern instanceof RegExp) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	function pruneCache (cache, filter) {
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cachedNode);
	        cache[key] = null;
	      }
	    }
	  }
	}
	
	function pruneCacheEntry (vnode) {
	  if (vnode) {
	    if (!vnode.componentInstance._inactive) {
	      callHook(vnode.componentInstance, 'deactivated');
	    }
	    vnode.componentInstance.$destroy();
	  }
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this$1.cache) {
	      pruneCacheEntry(this$1.cache[key]);
	    }
	  },
	
	  watch: {
	    include: function include (val) {
	      pruneCache(this.cache, function (name) { return matches(val, name); });
	    },
	    exclude: function exclude (val) {
	      pruneCache(this.cache, function (name) { return !matches(val, name); });
	    }
	  },
	
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.componentInstance = this.cache[key].componentInstance;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	
	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive$$1
	  };
	
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$2);
	
	Object.defineProperty(Vue$2.prototype, '$isServer', {
	  get: isServerRendering
	});
	
	Vue$2.version = '2.2.1';
	
	/*  */
	
	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.componentInstance) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }
	
	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }
	
	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	
	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }
	
	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }
	
	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }
	
	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    var ancestor = vnode;
	    while (ancestor) {
	      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	        nodeOps.setAttribute(vnode.elm, i, '');
	      }
	      ancestor = ancestor.parent;
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');
	
	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );
	
	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parentElm$1 !== null) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}
	
	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	/*  */
	
	var validDivisionCharRE = /[\w).+\-_$\]]/;
	
	
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	/*  */
	
	/**
	 * Cross-platform code generation for component v-model
	 */
	
	
	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */
	
	
	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */
	
	var str;
	var index$1;
	
	/*  */
	
	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';
	
	/*  */
	
	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  var event;
	  /* istanbul ignore if */
	  if (on[RANGE_TOKEN]) {
	    // IE input[type=range] only supports `change` event
	    event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  if (on[CHECKBOX_RADIO_TOKEN]) {
	    // Chrome fires microtasks in between click/change, leads to #4521
	    event = isChrome ? 'click' : 'change';
	    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}
	
	var target$1;
	
	function add$1 (
	  event,
	  handler,
	  once,
	  capture
	) {
	  if (once) {
	    var oldHandler = handler;
	    var _target = target$1; // save current target element in closure
	    handler = function (ev) {
	      var res = arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	      if (res !== null) {
	        remove$2(event, handler, capture, _target);
	      }
	    };
	  }
	  target$1.addEventListener(event, handler, capture);
	}
	
	function remove$2 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(event, handler, capture);
	}
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	    }
	
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (shouldUpdateValue(elm, vnode, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	// check platforms/web/util/attrs.js acceptValue
	
	
	function shouldUpdateValue (
	  elm,
	  vnode,
	  checkVal
	) {
	  return (!elm.composing && (
	    vnode.tag === 'option' ||
	    isDirty(elm, checkVal) ||
	    isInputChanged(elm, checkVal)
	  ))
	}
	
	function isDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	  return document.activeElement !== elm && elm.value !== checkVal
	}
	
	function isInputChanged (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});
	
	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}
	
	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}
	
	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;
	
	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }
	
	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }
	
	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}
	
	/*  */
	
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	
	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
	  }
	
	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};
	
	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;
	
	  var style = normalizeStyleBinding(vnode.data.style) || {};
	
	  vnode.data.style = style.__ob__ ? extend({}, style) : style;
	
	  var newStyle = getStyle(vnode, true);
	
	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser && window.requestAnimationFrame
	  ? window.requestAnimationFrame.bind(window)
	  : setTimeout;
	
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;
	
	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;
	
	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );
	
	  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookAgumentsLength(enterHook);
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      addTransitionClass(el, toClass);
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        if (isValidDuration(explicitEnterDuration)) {
	          setTimeout(cb, explicitEnterDuration);
	        } else {
	          whenTransitionEnds(el, type, cb);
	        }
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookAgumentsLength(leave);
	
	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );
	
	  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          if (isValidDuration(explicitLeaveDuration)) {
	            setTimeout(cb, explicitLeaveDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}
	
	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}
	
	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookAgumentsLength (fn) {
	  if (!fn) { return false }
	  var invokerFns = fn.fns;
	  if (invokerFns) {
	    // invoker
	    return getHookAgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}
	
	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}
	
	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model$1 = {
	  inserted: function inserted (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },
	
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },
	
	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model$1,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;
	
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var body = document.body;
	    var f = body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$2.config.mustUseProp = mustUseProp;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.isUnknownElement = isUnknownElement;
	
	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);
	
	// install platform patch function
	Vue$2.prototype.__patch__ = inBrowser ? patch : noop;
	
	// public mount method
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
	      console[console.info ? 'info' : 'log'](
	        'Download the Vue Devtools extension for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	  if (process.env.NODE_ENV !== 'production' &&
	      config.productionTip !== false &&
	      inBrowser && typeof console !== 'undefined') {
	    console[console.info ? 'info' : 'log'](
	      "You are running Vue in development mode.\n" +
	      "Make sure to turn on production mode when deploying for production.\n" +
	      "See more tips at https://vuejs.org/guide/deployment.html"
	    );
	  }
	}, 0);
	
	module.exports = Vue$2;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(5)
	
	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(91),
	  /* scopeId */
	  "data-v-46efb734",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("55f7d100", content, true);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46efb734&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46efb734&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(9)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null
	
	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (!hasSSR) {
	    update(obj)
	  }
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueViewer = __webpack_require__(12);
	
	var _vueViewer2 = _interopRequireDefault(_vueViewer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showImage: false,
	      imageSrc: 'http://p0.meituan.net/qcs/4662a009da0eafd379f3172a524127e1120196.jpg'
	    };
	  },
	  components: {
	    Viewer: _vueViewer2.default
	  },
	  methods: {
	    showImageClick: function showImageClick() {
	      this.showImage = true;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _defineProperty4 = __webpack_require__(14);
	
	var _defineProperty5 = _interopRequireDefault2(_defineProperty4);
	
	var _stringify = __webpack_require__(32);
	
	var _stringify2 = _interopRequireDefault2(_stringify);
	
	var _keys = __webpack_require__(34);
	
	var _keys2 = _interopRequireDefault2(_keys);
	
	var _typeof2 = __webpack_require__(54);
	
	var _typeof3 = _interopRequireDefault2(_typeof2);
	
	function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && ( false ? 'undefined' : (0, _typeof3.default)(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object') exports["vue-viewer"] = factory();else root["vue-viewer"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
	
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
	
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
	
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
	
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
	
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
	
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
	
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
	
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
	
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _Viewer = __webpack_require__(1);
	
				var _Viewer2 = _interopRequireDefault(_Viewer);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = _Viewer2.default;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				/* styles */
				__webpack_require__(2);
	
				var Component = __webpack_require__(8)(
				/* script */
				__webpack_require__(9),
				/* template */
				__webpack_require__(29),
				/* scopeId */
				"data-v-d773db96",
				/* cssModules */
				null);
				Component.options.__file = "/Users/yyl/meituan/work/yyl/github/vue-viewer/src/Viewer.vue";
				if (Component.esModule && (0, _keys2.default)(Component.esModule).some(function (key) {
					return key !== "default" && key !== "__esModule";
				})) {
					console.error("named exports are not supported in *.vue files.");
				}
				if (Component.options.functional) {
					console.error("[vue-loader] Viewer.vue: functional components are not supported with templates, they should use render functions.");
				}
	
				/* hot reload */
				if (false) {
					(function () {
						var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						module.hot.accept();
						if (!module.hot.data) {
							hotAPI.createRecord("data-v-d773db96", Component.options);
						} else {
							hotAPI.reload("data-v-d773db96", Component.options);
						}
					})();
				}
	
				module.exports = Component.exports;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(3);
				if (typeof content === 'string') content = [[module.id, content, '']];
				if (content.locals) module.exports = content.locals;
				// add the styles to the DOM
				var update = __webpack_require__(6)("6af43932", content, false);
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d773db96&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Viewer.vue", function () {
							var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d773db96&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Viewer.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(4)();
				// imports
	
	
				// module
				exports.push([module.id, "\n.viewer-bg[data-v-d773db96] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  overflow: auto;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.target-image[data-v-d773db96] {\n  z-index: 1001;\n  position: fixed;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.toolbar[data-v-d773db96] {\n  position: fixed;\n  z-index: 1002;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.toolbar .icon[data-v-d773db96] {\n    cursor: pointer;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 50%;\n    cursor: pointer;\n    height: 24px;\n    overflow: hidden;\n    width: 24px;\n}\n.toolbar .icon i[data-v-d773db96] {\n      background-image: url(" + __webpack_require__(5) + ");\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin: 2px;\n}\n.toolbar .icon i.zoom-in[data-v-d773db96] {\n        background-position: 0 0;\n}\n.toolbar .icon i.zoom-out[data-v-d773db96] {\n        background-position: -20px 0;\n}\n.toolbar .icon i.one-to-one[data-v-d773db96] {\n        background-position: -40px 0;\n}\n.toolbar .icon i.reset[data-v-d773db96] {\n        background-position: -60px 0;\n}\n.toolbar .icon i.rotate-left[data-v-d773db96] {\n        background-position: -140px 0;\n}\n.toolbar .icon i.rotate-right[data-v-d773db96] {\n        background-position: -160px 0;\n}\n.viewer-tooltip[data-v-d773db96] {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 12px;\n  height: 20px;\n  left: 50%;\n  line-height: 20px;\n  margin-left: -25px;\n  margin-top: -10px;\n  position: fixed;\n  text-align: center;\n  top: 50%;\n  width: 50px;\n  z-index: 1003;\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.viewer-tooltip.tip-show[data-v-d773db96] {\n    opacity: 1;\n}\n", "", { "version": 3, "sources": ["/./src/Viewer.vue"], "names": [], "mappings": ";AACA;EACE,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,gBAAgB;EAChB,eAAe;EACf,UAAU;EACV,qCAAqC;EACrC,cAAc;CACf;AACD;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,qBAAqB;EACrB,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,UAAU;EACV,WAAW;EACX,mBAAmB;CACpB;AACD;IACI,gBAAgB;IAChB,sBAAsB;IACtB,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,YAAY;CACf;AACD;MACM,gDAAkD;MAClD,6BAA6B;MAC7B,sBAAsB;MACtB,aAAa;MACb,YAAY;MACZ,YAAY;CACjB;AACD;QACQ,yBAAyB;CAChC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,8BAA8B;CACrC;AACD;QACQ,8BAA8B;CACrC;AACD;EACE,qCAAqC;EACrC,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,cAAc;EACd,WAAW;EACX,0BAA0B;CAC3B;AACD;IACI,WAAW;CACd", "file": "Viewer.vue", "sourcesContent": ["\n.viewer-bg[data-v-d773db96] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  overflow: auto;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.target-image[data-v-d773db96] {\n  z-index: 1001;\n  position: fixed;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.toolbar[data-v-d773db96] {\n  position: fixed;\n  z-index: 1002;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.toolbar .icon[data-v-d773db96] {\n    cursor: pointer;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 50%;\n    cursor: pointer;\n    height: 24px;\n    overflow: hidden;\n    width: 24px;\n}\n.toolbar .icon i[data-v-d773db96] {\n      background-image: url(\"~images/viewer_icons.png\");\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin: 2px;\n}\n.toolbar .icon i.zoom-in[data-v-d773db96] {\n        background-position: 0 0;\n}\n.toolbar .icon i.zoom-out[data-v-d773db96] {\n        background-position: -20px 0;\n}\n.toolbar .icon i.one-to-one[data-v-d773db96] {\n        background-position: -40px 0;\n}\n.toolbar .icon i.reset[data-v-d773db96] {\n        background-position: -60px 0;\n}\n.toolbar .icon i.rotate-left[data-v-d773db96] {\n        background-position: -140px 0;\n}\n.toolbar .icon i.rotate-right[data-v-d773db96] {\n        background-position: -160px 0;\n}\n.viewer-tooltip[data-v-d773db96] {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 12px;\n  height: 20px;\n  left: 50%;\n  line-height: 20px;\n  margin-left: -25px;\n  margin-top: -10px;\n  position: fixed;\n  text-align: center;\n  top: 50%;\n  width: 50px;\n  z-index: 1003;\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.viewer-tooltip.tip-show[data-v-d773db96] {\n    opacity: 1;\n}\n"], "sourceRoot": "webpack://" }]);
	
				// exports
	
	
				/***/
			},
			/* 4 */
			/***/function (module, exports) {
	
				/*
	   	MIT License http://www.opensource.org/licenses/mit-license.php
	   	Author Tobias Koppers @sokra
	   */
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];
	
					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};
	
					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string") modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number") alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};
	
				/***/
			},
			/* 5 */
			/***/function (module, exports) {
	
				module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC";
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				/*
	     MIT License http://www.opensource.org/licenses/mit-license.php
	     Author Tobias Koppers @sokra
	     Modified by Evan You @yyx990803
	   */
	
				var hasDocument = typeof document !== 'undefined';
	
				if (false) {
					if (!hasDocument) {
						throw new Error('vue-style-loader cannot be used in a non-browser environment. ' + "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
					}
				}
	
				var listToStyles = __webpack_require__(7);
	
				/*
	   type StyleObject = {
	     id: number;
	     parts: Array<StyleObjectPart>
	   }
	   	type StyleObjectPart = {
	     css: string;
	     media: string;
	     sourceMap: ?string
	   }
	   */
	
				var stylesInDom = {/*
	                      [id: number]: {
	                      id: number,
	                      refs: number,
	                      parts: Array<(obj?: StyleObjectPart) => void>
	                      }
	                      */};
	
				var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
				var singletonElement = null;
				var singletonCounter = 0;
				var isProduction = false;
				var noop = function noop() {};
	
				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
	
				module.exports = function (parentId, list, _isProduction) {
					isProduction = _isProduction;
	
					var styles = listToStyles(parentId, list);
					addStylesToDom(styles);
	
					return function update(newList) {
						var mayRemove = [];
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];
							domStyle.refs--;
							mayRemove.push(domStyle);
						}
						if (newList) {
							styles = listToStyles(parentId, newList);
							addStylesToDom(styles);
						} else {
							styles = [];
						}
						for (var i = 0; i < mayRemove.length; i++) {
							var domStyle = mayRemove[i];
							if (domStyle.refs === 0) {
								for (var j = 0; j < domStyle.parts.length; j++) {
									domStyle.parts[j]();
								}
								delete stylesInDom[domStyle.id];
							}
						}
					};
				};
	
				function addStylesToDom(styles /* Array<StyleObject> */) {
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						if (domStyle) {
							domStyle.refs++;
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j](item.parts[j]);
							}
							for (; j < item.parts.length; j++) {
								domStyle.parts.push(addStyle(item.parts[j]));
							}
							if (domStyle.parts.length > item.parts.length) {
								domStyle.parts.length = item.parts.length;
							}
						} else {
							var parts = [];
							for (var j = 0; j < item.parts.length; j++) {
								parts.push(addStyle(item.parts[j]));
							}
							stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
						}
					}
				}
	
				function listToStyles(parentId, list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = { css: css, media: media, sourceMap: sourceMap };
						if (!newStyles[id]) {
							part.id = parentId + ':0';
							styles.push(newStyles[id] = { id: id, parts: [part] });
						} else {
							part.id = parentId + ':' + newStyles[id].parts.length;
							newStyles[id].parts.push(part);
						}
					}
					return styles;
				}
	
				function createStyleElement() {
					var styleElement = document.createElement('style');
					styleElement.type = 'text/css';
					head.appendChild(styleElement);
					return styleElement;
				}
	
				function addStyle(obj /* StyleObjectPart */) {
					var update, remove;
					var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');
					var hasSSR = styleElement != null;
	
					// if in production mode and style is already provided by SSR,
					// simply do nothing.
					if (hasSSR && isProduction) {
						return noop;
					}
	
					if (isOldIE) {
						// use singleton mode for IE9.
						var styleIndex = singletonCounter++;
						styleElement = singletonElement || (singletonElement = createStyleElement());
						update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
						remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
					} else {
						// use multi-style-tag mode in all other cases
						styleElement = styleElement || createStyleElement();
						update = applyToTag.bind(null, styleElement);
						remove = function remove() {
							styleElement.parentNode.removeChild(styleElement);
						};
					}
	
					if (!hasSSR) {
						update(obj);
					}
	
					return function updateStyle(newObj /* StyleObjectPart */) {
						if (newObj) {
							if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
								return;
							}
							update(obj = newObj);
						} else {
							remove();
						}
					};
				}
	
				var replaceText = function () {
					var textStore = [];
	
					return function (index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join('\n');
					};
				}();
	
				function applyToSingletonTag(styleElement, index, remove, obj) {
					var css = remove ? '' : obj.css;
	
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = replaceText(index, css);
					} else {
						var cssNode = document.createTextNode(css);
						var childNodes = styleElement.childNodes;
						if (childNodes[index]) styleElement.removeChild(childNodes[index]);
						if (childNodes.length) {
							styleElement.insertBefore(cssNode, childNodes[index]);
						} else {
							styleElement.appendChild(cssNode);
						}
					}
				}
	
				function applyToTag(styleElement, obj) {
					var css = obj.css;
					var media = obj.media;
					var sourceMap = obj.sourceMap;
	
					if (media) {
						styleElement.setAttribute('media', media);
					}
	
					if (sourceMap) {
						// https://developer.chrome.com/devtools/docs/javascript-debugging
						// this makes source maps inside style tags work properly in Chrome
						css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
						// http://stackoverflow.com/a/26603875
						css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent((0, _stringify2.default)(sourceMap)))) + ' */';
					}
	
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = css;
					} else {
						while (styleElement.firstChild) {
							styleElement.removeChild(styleElement.firstChild);
						}
						styleElement.appendChild(document.createTextNode(css));
					}
				}
	
				/***/
			},
			/* 7 */
			/***/function (module, exports) {
	
				/**
	    * Translates the list format produced by css-loader into something
	    * easier to manipulate.
	    */
				module.exports = function listToStyles(parentId, list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = {
							id: parentId + ':' + i,
							css: css,
							media: media,
							sourceMap: sourceMap
						};
						if (!newStyles[id]) {
							styles.push(newStyles[id] = { id: id, parts: [part] });
						} else {
							newStyles[id].parts.push(part);
						}
					}
					return styles;
				};
	
				/***/
			},
			/* 8 */
			/***/function (module, exports) {
	
				module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, scopeId, cssModules) {
					var esModule;
					var scriptExports = rawScriptExports = rawScriptExports || {};
	
					// ES6 modules interop
					var type = (0, _typeof3.default)(rawScriptExports.default);
					if (type === 'object' || type === 'function') {
						esModule = rawScriptExports;
						scriptExports = rawScriptExports.default;
					}
	
					// Vue.extend constructor export interop
					var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
	
					// render functions
					if (compiledTemplate) {
						options.render = compiledTemplate.render;
						options.staticRenderFns = compiledTemplate.staticRenderFns;
					}
	
					// scopedId
					if (scopeId) {
						options._scopeId = scopeId;
					}
	
					// inject cssModules
					if (cssModules) {
						var computed = options.computed || (options.computed = {});
						(0, _keys2.default)(cssModules).forEach(function (key) {
							var module = cssModules[key];
							computed[key] = function () {
								return module;
							};
						});
					}
	
					return {
						esModule: esModule,
						exports: scriptExports,
						options: options
					};
				};
	
				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _defineProperty2 = __webpack_require__(10);
	
				var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
				//
	
				exports.default = {
					props: {
						src: {
							type: String
						},
						alt: {
							type: String,
							default: ''
						},
						value: {
							type: Boolean,
							default: false
						}
					},
					data: function data() {
						return (0, _defineProperty3.default)({
							rotate: 0,
							width: 'auto',
							height: 'auto',
							winHeight: 0,
							winWidth: 0,
							initWidth: 'auto',
							initHeight: 'auto',
							percent: -1, //初始的percent值为-1
							showTip: false,
							top: 0,
							left: 0,
							canDrag: false, //是否可以拖动，点击图片时可以拖动
							reset: false, //是否是重置，解决点击重置时watch中的设置top和left
							pageX: -1
						}, 'pageX', -1);
					},
					computed: {
						imageStyle: function imageStyle() {
							return {
								width: this.width === 'auto' ? 'auto' : this.width + 'px',
								height: this.height === 'auto' ? 'auto' : this.height + 'px',
								transform: 'rotate(' + this.rotate + 'deg)',
								transition: 'all 0.5s ease',
								top: this.top + 'px',
								left: this.left + 'px'
							};
						}
					},
					methods: {
						//计算位置和大小
						calposition: function calposition(reset) {
							var oldwidth = this.width;
							var oldheight = this.height;
							this.width = this.initWidth * this.percent;
							this.height = this.initHeight * this.percent;
							//如果是初始加载和点击重置时，图片的top和left 位于window中央
							if (reset) {
								this.top = (this.winHeight - this.height) / 2;
								this.left = (this.winWidth - this.width) / 2;
							} else {
								//否则以当前位置为中心进行缩放
								this.top -= (this.height - oldheight) / 2;
								this.left -= (this.width - oldwidth) / 2;
							}
							this.Tip();
						},
						Tip: function Tip() {
							var _this = this;
	
							this.showTip = true;
							setTimeout(function () {
								_this.showTip = false;
							}, 1000);
						},
						oneToOne: function oneToOne() {
							this.percent = 1;
							this.calposition();
						},
						imageLoaded: function imageLoaded() {
							var _this2 = this;
	
							var targetImage = this.$refs.targetImage;
							this.width = this.initWidth = targetImage.width;
							this.height = this.initHeight = targetImage.height;
	
							window.onresize = function () {
								_this2.resetImage();
							};
							this.resetImage();
							this.bindDrag();
						},
						bindDrag: function bindDrag() {
							var _this3 = this;
	
							document.onmousedown = function (e) {
								e.preventDefault(); //禁止图片的拖动，会不触发mouseup
								var evtobj = window.event || e;
								var targetobj = evtobj.srcElement || e.target;
								var targetImage = _this3.$refs.targetImage;
								if (targetobj === targetImage) {
									_this3.canDrag = true;
								}
							};
							document.onmouseup = function (e) {
								_this3.canDrag = false;
							};
							document.onmousemove = function (e) {
	
								if (_this3.canDrag) {
									var event = e;
									if (event.movementY && event.movementX) {
										_this3.top += event.movementY;
										_this3.left += event.movementX;
									} else {
										var oldPageX = _this3.pageX;
										var oldPageY = _this3.pageY;
										if (oldPageX !== -1 && oldPageY !== -1) {
											var moveX = event.pageX - _this3.pageX;
											var moveY = event.pageY - _this3.pageY;
											_this3.left += moveX;
											_this3.top += moveY;
										}
										_this3.pageX = event.pageX;
										_this3.pageY = event.pageY;
									}
								}
							};
						},
						getWindowSize: function getWindowSize() {
							var winWidth = void 0;
							var winHeight = void 0;
							if (window.innerWidth) {
								winWidth = window.innerWidth;
							} else if (document.body && document.body.clientWidth) {
								winWidth = document.body.clientWidth;
							}
							// 获取窗口高度 
							if (window.innerHeight) winHeight = window.innerHeight;else if (document.body && document.body.clientHeight) winHeight = document.body.clientHeight;
	
							// 通过深入 Document 内部对 body 进行检测，获取窗口大小 
							if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
								winHeight = document.documentElement.clientHeight;
								winWidth = document.documentElement.clientWidth;
							}
							this.winHeight = winHeight;
							this.winWidth = winWidth;
						},
						bgClick: function bgClick() {
							this.$emit('input', false);
							this.resetImage();
						},
						zoomIn: function zoomIn() {
							this.zoomTo(0.1);
						},
						zoomOut: function zoomOut() {
							this.zoomTo(-0.1);
						},
						zoomTo: function zoomTo(ratio) {
							ratio = Number(ratio);
							if (ratio < 0) {
								ratio = 1 / (1 - ratio);
							} else {
								ratio = 1 + ratio;
							}
	
							var percent = this.width * ratio / this.initWidth;
							percent = Math.max(0, percent);
							percent = Math.min(Math.max(percent, 0.01), 100);
							if (percent > 0.95 && percent < 1.05) {
								percent = 1;
							}
	
							this.percent = percent;
							this.calposition();
						},
						RotateLeft: function RotateLeft() {
							this.rotate = this.rotate - 90;
						},
						RotateRight: function RotateRight() {
							this.rotate = this.rotate + 90;
						},
						resetImage: function resetImage() {
							this.getWindowSize();
							var marginHeight = 100;
							var marginWidth = 100;
							var maxImageHeight = this.winHeight - marginHeight;
							var maxImageWidth = this.winWidth - marginWidth;
							var heightPercent = 1;
							var widthPercent = 1;
							if (this.initHeight > maxImageHeight) {
								heightPercent = maxImageHeight / this.initHeight;
							}
							if (this.initWidth > maxImageWidth) {
								widthPercent = maxImageWidth / this.initWidth;
							}
							this.percent = Math.min(heightPercent, widthPercent);
							this.percent = Math.max(this.percent, 0.1);
							this.rotate = 0;
							this.calposition(true);
						}
					}
				};
	
				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				exports.__esModule = true;
	
				var _defineProperty = __webpack_require__(11);
	
				var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = function (obj, key, value) {
					if (key in obj) {
						(0, _defineProperty2.default)(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true
						});
					} else {
						obj[key] = value;
					}
	
					return obj;
				};
	
				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(12), __esModule: true };
	
				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(13);
				var $Object = __webpack_require__(16).Object;
				module.exports = function defineProperty(it, key, desc) {
					return $Object.defineProperty(it, key, desc);
				};
	
				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {
	
				var $export = __webpack_require__(14);
				// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
				$export($export.S + $export.F * !__webpack_require__(24), 'Object', { defineProperty: __webpack_require__(20).f });
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				var global = __webpack_require__(15),
				    core = __webpack_require__(16),
				    ctx = __webpack_require__(17),
				    hide = __webpack_require__(19),
				    PROTOTYPE = 'prototype';
	
				var $export = function $export(type, name, source) {
					var IS_FORCED = type & $export.F,
					    IS_GLOBAL = type & $export.G,
					    IS_STATIC = type & $export.S,
					    IS_PROTO = type & $export.P,
					    IS_BIND = type & $export.B,
					    IS_WRAP = type & $export.W,
					    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
					    expProto = exports[PROTOTYPE],
					    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
					    key,
					    own,
					    out;
					if (IS_GLOBAL) source = name;
					for (key in source) {
						// contains in native
						own = !IS_FORCED && target && target[key] !== undefined;
						if (own && key in exports) continue;
						// export native or passed
						out = own ? target[key] : source[key];
						// prevent global pollution for namespaces
						exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
						// bind timers to global for call from export context
						: IS_BIND && own ? ctx(out, global)
						// wrap global constructors for prevent change them in library
						: IS_WRAP && target[key] == out ? function (C) {
							var F = function F(a, b, c) {
								if (this instanceof C) {
									switch (arguments.length) {
										case 0:
											return new C();
										case 1:
											return new C(a);
										case 2:
											return new C(a, b);
									}return new C(a, b, c);
								}return C.apply(this, arguments);
							};
							F[PROTOTYPE] = C[PROTOTYPE];
							return F;
							// make static versions for prototype methods
						}(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
						// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
						if (IS_PROTO) {
							(exports.virtual || (exports.virtual = {}))[key] = out;
							// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
							if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
						}
					}
				};
				// type bitmap
				$export.F = 1; // forced
				$export.G = 2; // global
				$export.S = 4; // static
				$export.P = 8; // proto
				$export.B = 16; // bind
				$export.W = 32; // wrap
				$export.U = 64; // safe
				$export.R = 128; // real proto method for `library` 
				module.exports = $export;
	
				/***/
			},
			/* 15 */
			/***/function (module, exports) {
	
				// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
				var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
				if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	
				/***/
			},
			/* 16 */
			/***/function (module, exports) {
	
				var core = module.exports = { version: '2.4.0' };
				if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				// optional / simple context binding
				var aFunction = __webpack_require__(18);
				module.exports = function (fn, that, length) {
					aFunction(fn);
					if (that === undefined) return fn;
					switch (length) {
						case 1:
							return function (a) {
								return fn.call(that, a);
							};
						case 2:
							return function (a, b) {
								return fn.call(that, a, b);
							};
						case 3:
							return function (a, b, c) {
								return fn.call(that, a, b, c);
							};
					}
					return function () /* ...args */{
						return fn.apply(that, arguments);
					};
				};
	
				/***/
			},
			/* 18 */
			/***/function (module, exports) {
	
				module.exports = function (it) {
					if (typeof it != 'function') throw TypeError(it + ' is not a function!');
					return it;
				};
	
				/***/
			},
			/* 19 */
			/***/function (module, exports, __webpack_require__) {
	
				var dP = __webpack_require__(20),
				    createDesc = __webpack_require__(28);
				module.exports = __webpack_require__(24) ? function (object, key, value) {
					return dP.f(object, key, createDesc(1, value));
				} : function (object, key, value) {
					object[key] = value;
					return object;
				};
	
				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {
	
				var anObject = __webpack_require__(21),
				    IE8_DOM_DEFINE = __webpack_require__(23),
				    toPrimitive = __webpack_require__(27),
				    dP = _defineProperty5.default;
	
				exports.f = __webpack_require__(24) ? _defineProperty5.default : function defineProperty(O, P, Attributes) {
					anObject(O);
					P = toPrimitive(P, true);
					anObject(Attributes);
					if (IE8_DOM_DEFINE) try {
						return dP(O, P, Attributes);
					} catch (e) {/* empty */}
					if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
					if ('value' in Attributes) O[P] = Attributes.value;
					return O;
				};
	
				/***/
			},
			/* 21 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(22);
				module.exports = function (it) {
					if (!isObject(it)) throw TypeError(it + ' is not an object!');
					return it;
				};
	
				/***/
			},
			/* 22 */
			/***/function (module, exports) {
	
				module.exports = function (it) {
					return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
				};
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function () {
					return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function get() {
							return 7;
						} }).a != 7;
				});
	
				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {
	
				// Thank's IE8 for his funny defineProperty
				module.exports = !__webpack_require__(25)(function () {
					return Object.defineProperty({}, 'a', { get: function get() {
							return 7;
						} }).a != 7;
				});
	
				/***/
			},
			/* 25 */
			/***/function (module, exports) {
	
				module.exports = function (exec) {
					try {
						return !!exec();
					} catch (e) {
						return true;
					}
				};
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(22),
				    document = __webpack_require__(15).document
				// in old IE typeof document.createElement is 'object'
				,
				    is = isObject(document) && isObject(document.createElement);
				module.exports = function (it) {
					return is ? document.createElement(it) : {};
				};
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				// 7.1.1 ToPrimitive(input [, PreferredType])
				var isObject = __webpack_require__(22);
				// instead of the ES6 spec version, we didn't implement @@toPrimitive case
				// and the second argument - flag - preferred type is a string
				module.exports = function (it, S) {
					if (!isObject(it)) return it;
					var fn, val;
					if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
					if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
					if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
					throw TypeError("Can't convert object to primitive value");
				};
	
				/***/
			},
			/* 28 */
			/***/function (module, exports) {
	
				module.exports = function (bitmap, value) {
					return {
						enumerable: !(bitmap & 1),
						configurable: !(bitmap & 2),
						writable: !(bitmap & 4),
						value: value
					};
				};
	
				/***/
			},
			/* 29 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { render: function render() {
						var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
						return _c('div', {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: _vm.value,
								expression: "value"
							}]
						}, [_c('div', {
							staticClass: "viewer-bg",
							on: {
								"click": _vm.bgClick
							}
						}), _vm._v(" "), _c('img', {
							ref: "targetImage",
							staticClass: "target-image",
							style: _vm.imageStyle,
							attrs: {
								"src": _vm.src,
								"alt": ""
							},
							on: {
								"load": _vm.imageLoaded
							}
						}), _vm._v(" "), _c('div', {
							staticClass: "toolbar"
						}, [_c('span', {
							staticClass: "icon",
							on: {
								"click": _vm.zoomIn
							}
						}, [_c('i', {
							staticClass: "zoom-in"
						})]), _vm._v(" "), _c('span', {
							staticClass: "icon",
							on: {
								"click": _vm.zoomOut
							}
						}, [_c('i', {
							staticClass: "zoom-out"
						})]), _vm._v(" "), _c('span', {
							staticClass: "icon",
							on: {
								"click": _vm.oneToOne
							}
						}, [_c('i', {
							staticClass: "one-to-one"
						})]), _vm._v(" "), _c('span', {
							staticClass: "icon"
						}, [_c('i', {
							staticClass: "reset",
							on: {
								"click": _vm.resetImage
							}
						})]), _vm._v(" "), _c('span', {
							staticClass: "icon",
							on: {
								"click": _vm.RotateLeft
							}
						}, [_c('i', {
							staticClass: "rotate-left"
						})]), _vm._v(" "), _c('span', {
							staticClass: "icon",
							on: {
								"click": _vm.RotateRight
							}
						}, [_c('i', {
							staticClass: "rotate-right"
						})])]), _vm._v(" "), _c('div', {
							staticClass: "viewer-tooltip",
							class: {
								'tip-show': _vm.showTip
							}
						}, [_vm._v("\n  " + _vm._s(parseInt(this.percent * 100)) + "%\n  ")])]);
					}, staticRenderFns: [] };
				module.exports.render._withStripped = true;
				if (false) {
					module.hot.accept();
					if (module.hot.data) {
						require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d773db96", module.exports);
					}
				}
	
				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	var $Object = __webpack_require__(19).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(17);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(27), 'Object', {defineProperty: __webpack_require__(23).f});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(20)
	  , hide      = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(23)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(27) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(30)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(27) && !__webpack_require__(28)(function(){
	  return Object.defineProperty(__webpack_require__(29)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(28)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(25);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(19)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	module.exports = __webpack_require__(19).Object.keys;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(37)
	  , $keys    = __webpack_require__(39);
	
	__webpack_require__(53)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(38);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(40)
	  , enumBugKeys = __webpack_require__(52);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(41)
	  , toIObject    = __webpack_require__(42)
	  , arrayIndexOf = __webpack_require__(45)(false)
	  , IE_PROTO     = __webpack_require__(49)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(43)
	  , defined = __webpack_require__(38);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(44);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(42)
	  , toLength  = __webpack_require__(46)
	  , toIndex   = __webpack_require__(48);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(47)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(47)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(50)('keys')
	  , uid    = __webpack_require__(51);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17)
	  , core    = __webpack_require__(19)
	  , fails   = __webpack_require__(28);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(55);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(75);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	__webpack_require__(70);
	module.exports = __webpack_require__(74).f('iterator');

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(58)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(59)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(47)
	  , defined   = __webpack_require__(38);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(60)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(61)
	  , hide           = __webpack_require__(22)
	  , has            = __webpack_require__(41)
	  , Iterators      = __webpack_require__(62)
	  , $iterCreate    = __webpack_require__(63)
	  , setToStringTag = __webpack_require__(67)
	  , getPrototypeOf = __webpack_require__(69)
	  , ITERATOR       = __webpack_require__(68)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(64)
	  , descriptor     = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(67)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(22)(IteratorPrototype, __webpack_require__(68)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(24)
	  , dPs         = __webpack_require__(65)
	  , enumBugKeys = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(49)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(29)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(66).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(23)
	  , anObject = __webpack_require__(24)
	  , getKeys  = __webpack_require__(39);
	
	module.exports = __webpack_require__(27) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(23).f
	  , has = __webpack_require__(41)
	  , TAG = __webpack_require__(68)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(50)('wks')
	  , uid        = __webpack_require__(51)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(41)
	  , toObject    = __webpack_require__(37)
	  , IE_PROTO    = __webpack_require__(49)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(22)
	  , Iterators     = __webpack_require__(62)
	  , TO_STRING_TAG = __webpack_require__(68)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(72)
	  , step             = __webpack_require__(73)
	  , Iterators        = __webpack_require__(62)
	  , toIObject        = __webpack_require__(42);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(59)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(68);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	module.exports = __webpack_require__(19).Symbol;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(18)
	  , has            = __webpack_require__(41)
	  , DESCRIPTORS    = __webpack_require__(27)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(61)
	  , META           = __webpack_require__(78).KEY
	  , $fails         = __webpack_require__(28)
	  , shared         = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(67)
	  , uid            = __webpack_require__(51)
	  , wks            = __webpack_require__(68)
	  , wksExt         = __webpack_require__(74)
	  , wksDefine      = __webpack_require__(79)
	  , keyOf          = __webpack_require__(80)
	  , enumKeys       = __webpack_require__(81)
	  , isArray        = __webpack_require__(84)
	  , anObject       = __webpack_require__(24)
	  , toIObject      = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(30)
	  , createDesc     = __webpack_require__(31)
	  , _create        = __webpack_require__(64)
	  , gOPNExt        = __webpack_require__(85)
	  , $GOPD          = __webpack_require__(87)
	  , $DP            = __webpack_require__(23)
	  , $keys          = __webpack_require__(39)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(86).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(83).f  = $propertyIsEnumerable;
	  __webpack_require__(82).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(60)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(51)('meta')
	  , isObject = __webpack_require__(25)
	  , has      = __webpack_require__(41)
	  , setDesc  = __webpack_require__(23).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(28)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(18)
	  , core           = __webpack_require__(19)
	  , LIBRARY        = __webpack_require__(60)
	  , wksExt         = __webpack_require__(74)
	  , defineProperty = __webpack_require__(23).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(39)
	  , toIObject = __webpack_require__(42);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(39)
	  , gOPS    = __webpack_require__(82)
	  , pIE     = __webpack_require__(83);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 83 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(44);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(42)
	  , gOPN      = __webpack_require__(86).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(40)
	  , hiddenKeys = __webpack_require__(52).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(83)
	  , createDesc     = __webpack_require__(31)
	  , toIObject      = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(30)
	  , has            = __webpack_require__(41)
	  , IE8_DOM_DEFINE = __webpack_require__(26)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(27) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 88 */
/***/ function(module, exports) {



/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)('asyncIterator');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)('observable');

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('viewer', {
	    attrs: {
	      "src": _vm.imageSrc
	    },
	    model: {
	      value: (_vm.showImage),
	      callback: function($$v) {
	        _vm.showImage = $$v
	      }
	    }
	  }), _vm._v(" "), _c('el-button', {
	    on: {
	      "click": _vm.showImageClick
	    }
	  }, [_vm._v("显示")])], 1)
	},staticRenderFns: []}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(14);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator24 = __webpack_require__(55);
	
	var _iterator25 = _interopRequireDefault(_iterator24);
	
	var _getOwnPropertyNames = __webpack_require__(93);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _getIterator2 = __webpack_require__(96);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(101);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(102);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var i = 0,
	        l,
	        nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var _i in nodes) {
	        this[_i] = nodes[_i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var el = _step.value;
	
	            if (el instanceof Node) {
	              if (!~nodes.indexOf(el)) nodes.push(el);
	            } else if (el) {
	              flatten(el);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(arguments), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var arg = _step2.value;
	
	          if (arg instanceof Node) {
	            if (!~nodes.indexOf(arg)) nodes.push(arg);
	          } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
	            flatten(arg);
	          } else {
	            throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.map(function (el) {
	        return el.parentNode;
	      });
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(flatten(this)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var el = _step3.value;
	
	          var node = el.querySelectorAll(element);
	          if (node && node.length) nodes.push(node);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return flatten(ArrayProto.map.apply(this, args), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = (0, _getIterator3.default)(arguments), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var arg = _step4.value;
	
	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg);
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var list = new NodeList([[], this.owner]);
	      var splice = function splice(index) {
	        return ArrayProto.splice.apply();
	      };
	      var i = this.length - 1;
	      for (var el = this[i]; el; el = this[--i]) {
	        if (el.remove) {
	          el.remove();
	          ArrayProto.splice.call(this, i, 1);
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	          ArrayProto.splice.call(this, i, 1);
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var shift = ArrayProto.shift.bind(this);
	      while (amount--) {
	        nodes.push(shift());
	      }return new NodeList([nodes, this]);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      return new NodeList([ArrayProto.slice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var i = 2, l = arguments.length; i < l; i++) {
	        if (!(arguments[i] instanceof Node)) throw nodeError;
	      }
	      return new NodeList([ArrayProto.splice.apply(this, arguments), this]);
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var unshift = ArrayProto.unshift.bind(this);
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(arguments), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var arg = _step5.value;
	
	          if (!(arg instanceof Node)) throw nodeError;
	          if (!~this.indexOf(arg)) unshift(arg);
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var _this2 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this2.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = (0, _getIterator3.default)(this), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var el = _step6.value;
	
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        var _iteratorNormalCompletion7 = true;
	        var _didIteratorError7 = false;
	        var _iteratorError7 = undefined;
	
	        try {
	          for (var _iterator7 = (0, _getIterator3.default)(this), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	            var el = _step7.value;
	
	            if (el) {
	              for (key in prop) {
	                if (key in el) {
	                  el[key] = prop[key];
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError7 = true;
	          _iteratorError7 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	              _iterator7.return();
	            }
	          } finally {
	            if (_didIteratorError7) {
	              throw _iteratorError7;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion8 = true;
	        var _didIteratorError8 = false;
	        var _iteratorError8 = undefined;
	
	        try {
	          for (var _iterator8 = (0, _getIterator3.default)(this), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	            var _el = _step8.value;
	
	            if (prop in _el) {
	              _el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError8 = true;
	          _iteratorError8 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion8 && _iterator8.return) {
	              _iterator8.return();
	            }
	          } finally {
	            if (_didIteratorError8) {
	              throw _iteratorError8;
	            }
	          }
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion9 = true;
	      var _didIteratorError9 = false;
	      var _iteratorError9 = undefined;
	
	      try {
	        for (var _iterator9 = (0, _getIterator3.default)(this), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	          var el = _step9.value;
	
	          if (el && el[method] instanceof Function) {
	            el = el[method].apply(el, args);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError9 = true;
	        _iteratorError9 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion9 && _iterator9.return) {
	            _iterator9.return();
	          }
	        } finally {
	          if (_didIteratorError9) {
	            throw _iteratorError9;
	          }
	        }
	      }
	
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return new NodeList([[this[index]], this]);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = new NodeList([selector, this]);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      var _iteratorNormalCompletion10 = true;
	      var _didIteratorError10 = false;
	      var _iteratorError10 = undefined;
	
	      try {
	        for (var _iterator10 = (0, _getIterator3.default)(events), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	          var event = _step10.value;
	          var _iteratorNormalCompletion11 = true;
	          var _didIteratorError11 = false;
	          var _iteratorError11 = undefined;
	
	          try {
	            for (var _iterator11 = (0, _getIterator3.default)(this), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	              var el = _step11.value;
	
	              el.addEventListener(event, callback, false);
	              Events.push({
	                el: el,
	                event: event,
	                callback: callback
	              });
	            }
	          } catch (err) {
	            _didIteratorError11 = true;
	            _iteratorError11 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                _iterator11.return();
	              }
	            } finally {
	              if (_didIteratorError11) {
	                throw _iteratorError11;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError10 = true;
	        _iteratorError10 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion10 && _iterator10.return) {
	            _iterator10.return();
	          }
	        } finally {
	          if (_didIteratorError10) {
	            throw _iteratorError10;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        var _iteratorNormalCompletion12 = true;
	        var _didIteratorError12 = false;
	        var _iteratorError12 = undefined;
	
	        try {
	          for (var _iterator12 = (0, _getIterator3.default)(this), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	            var el = _step12.value;
	
	            for (var e in Events) {
	              var _iteratorNormalCompletion13 = true;
	              var _didIteratorError13 = false;
	              var _iteratorError13 = undefined;
	
	              try {
	                for (var _iterator13 = (0, _getIterator3.default)(events.split(' ')), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	                  var event = _step13.value;
	
	                  if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
	                    Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                    delete Events[e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError13 = true;
	                _iteratorError13 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
	                    _iterator13.return();
	                  }
	                } finally {
	                  if (_didIteratorError13) {
	                    throw _iteratorError13;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError12 = true;
	          _iteratorError12 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	              _iterator12.return();
	            }
	          } finally {
	            if (_didIteratorError12) {
	              throw _iteratorError12;
	            }
	          }
	        }
	      } else if (typeof events === 'string') {
	        var _iteratorNormalCompletion14 = true;
	        var _didIteratorError14 = false;
	        var _iteratorError14 = undefined;
	
	        try {
	          for (var _iterator14 = (0, _getIterator3.default)(this), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
	            var _el2 = _step14.value;
	
	            for (var _e in Events) {
	              var _iteratorNormalCompletion15 = true;
	              var _didIteratorError15 = false;
	              var _iteratorError15 = undefined;
	
	              try {
	                for (var _iterator15 = (0, _getIterator3.default)(events.split(' ')), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
	                  var _event = _step15.value;
	
	                  if (Events[_e] && Events[_e].el === _el2 && Events[_e].event === _event) {
	                    Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
	                    delete Events[_e];
	                  }
	                }
	              } catch (err) {
	                _didIteratorError15 = true;
	                _iteratorError15 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion15 && _iterator15.return) {
	                    _iterator15.return();
	                  }
	                } finally {
	                  if (_didIteratorError15) {
	                    throw _iteratorError15;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError14 = true;
	          _iteratorError14 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion14 && _iterator14.return) {
	              _iterator14.return();
	            }
	          } finally {
	            if (_didIteratorError14) {
	              throw _iteratorError14;
	            }
	          }
	        }
	      } else if (callback instanceof Function) {
	        var _iteratorNormalCompletion16 = true;
	        var _didIteratorError16 = false;
	        var _iteratorError16 = undefined;
	
	        try {
	          for (var _iterator16 = (0, _getIterator3.default)(this), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
	            var _el3 = _step16.value;
	
	            for (var _e2 in Events) {
	              if (Events[_e2] && Events[_e2].el === _el3 && Events[_e2].callback === callback) {
	                Events[_e2].el.removeEventListener(Events[_e2].event, Events[_e2].callback);
	                delete Events[_e2];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError16 = true;
	          _iteratorError16 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion16 && _iterator16.return) {
	              _iterator16.return();
	            }
	          } finally {
	            if (_didIteratorError16) {
	              throw _iteratorError16;
	            }
	          }
	        }
	      } else {
	        var _iteratorNormalCompletion17 = true;
	        var _didIteratorError17 = false;
	        var _iteratorError17 = undefined;
	
	        try {
	          for (var _iterator17 = (0, _getIterator3.default)(this), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
	            var _el4 = _step17.value;
	
	            for (var _e3 in Events) {
	              if (Events[_e3] && Events[_e3].el === _el4) {
	                Events[_e3].el.removeEventListener(Events[_e3].event, Events[_e3].callback);
	                delete Events[_e3];
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError17 = true;
	          _iteratorError17 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion17 && _iterator17.return) {
	              _iterator17.return();
	            }
	          } finally {
	            if (_didIteratorError17) {
	              throw _iteratorError17;
	            }
	          }
	        }
	      }
	      Events = Events.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({
	          el: el,
	          callback: callback
	        });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          var _iteratorNormalCompletion18 = true;
	          var _didIteratorError18 = false;
	          var _iteratorError18 = undefined;
	
	          try {
	            for (var _iterator18 = (0, _getIterator3.default)(blurList), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
	              var item = _step18.value;
	
	              var target = item.el.contains(e.target) || item.el === e.target;
	              if (!target) item.callback.call(item.el, e, item.el);
	            }
	          } catch (err) {
	            _didIteratorError18 = true;
	            _iteratorError18 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion18 && _iterator18.return) {
	                _iterator18.return();
	              }
	            } finally {
	              if (_didIteratorError18) {
	                throw _iteratorError18;
	              }
	            }
	          }
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        for (var e in blurList) {
	          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
	            delete blurList[e];
	          }
	        }
	      });
	      blurList = blurList.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  var _iteratorNormalCompletion19 = true;
	  var _didIteratorError19 = false;
	  var _iteratorError19 = undefined;
	
	  try {
	    for (var _iterator19 = (0, _getIterator3.default)(arr), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
	      var el = _step19.value;
	
	      if (el instanceof Node || el === null) {
	        if (!~list.indexOf(el)) list.push(el);
	      } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
	        var _iteratorNormalCompletion20 = true;
	        var _didIteratorError20 = false;
	        var _iteratorError20 = undefined;
	
	        try {
	          for (var _iterator20 = (0, _getIterator3.default)(el), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
	            var el2 = _step20.value;
	            list.push(el2);
	          }
	        } catch (err) {
	          _didIteratorError20 = true;
	          _iteratorError20 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion20 && _iterator20.return) {
	              _iterator20.return();
	            }
	          } finally {
	            if (_didIteratorError20) {
	              throw _iteratorError20;
	            }
	          }
	        }
	      } else {
	        arr.get = NL.get;
	        arr.set = NL.set;
	        arr.call = NL.call;
	        arr.owner = owner;
	        return arr;
	      }
	    }
	  } catch (err) {
	    _didIteratorError19 = true;
	    _iteratorError19 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion19 && _iterator19.return) {
	        _iterator19.return();
	      }
	    } finally {
	      if (_didIteratorError19) {
	        throw _iteratorError19;
	      }
	    }
	  }
	
	  return new NodeList([list, owner]);
	}
	
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator25.default) {
	  NL[_iterator25.default] = NL.values = ArrayProto[_iterator25.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this3 = this,
	      _arguments = arguments;
	
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      var arr = [];
	      var returnThis = true;
	      var _iteratorNormalCompletion21 = true;
	      var _didIteratorError21 = false;
	      var _iteratorError21 = undefined;
	
	      try {
	        for (var _iterator21 = (0, _getIterator3.default)(NL), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
	          var el = _step21.value;
	
	          if (el && el[prop] instanceof Function) {
	            el = el[prop].apply(el, _arguments);
	            arr.push(el);
	            if (returnThis && el !== undefined) {
	              returnThis = false;
	            }
	          } else {
	            arr.push(undefined);
	          }
	        }
	      } catch (err) {
	        _didIteratorError21 = true;
	        _iteratorError21 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion21 && _iterator21.return) {
	            _iterator21.return();
	          }
	        } finally {
	          if (_didIteratorError21) {
	            throw _iteratorError21;
	          }
	        }
	      }
	
	      return returnThis ? _this3 : flatten(arr, _this3);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        var _iteratorNormalCompletion22 = true;
	        var _didIteratorError22 = false;
	        var _iteratorError22 = undefined;
	
	        try {
	          for (var _iterator22 = (0, _getIterator3.default)(this), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
	            var el = _step22.value;
	
	            if (el !== null) {
	              el = el[prop];
	            }
	            arr.push(el);
	          }
	        } catch (err) {
	          _didIteratorError22 = true;
	          _iteratorError22 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion22 && _iterator22.return) {
	              _iterator22.return();
	            }
	          } finally {
	            if (_didIteratorError22) {
	              throw _iteratorError22;
	            }
	          }
	        }
	
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        var _iteratorNormalCompletion23 = true;
	        var _didIteratorError23 = false;
	        var _iteratorError23 = undefined;
	
	        try {
	          for (var _iterator23 = (0, _getIterator3.default)(this), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
	            var el = _step23.value;
	
	            if (el && prop in el) {
	              el[prop] = value;
	            }
	          }
	        } catch (err) {
	          _didIteratorError23 = true;
	          _iteratorError23 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion23 && _iterator23.return) {
	              _iterator23.return();
	            }
	          } finally {
	            if (_didIteratorError23) {
	              throw _iteratorError23;
	            }
	          }
	        }
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  return new NodeList(arguments);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	var $Object = __webpack_require__(19).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(53)('getOwnPropertyNames', function(){
	  return __webpack_require__(85).f;
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(57);
	module.exports = __webpack_require__(98);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(24)
	  , get      = __webpack_require__(99);
	module.exports = __webpack_require__(19).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(100)
	  , ITERATOR  = __webpack_require__(68)('iterator')
	  , Iterators = __webpack_require__(62);
	module.exports = __webpack_require__(19).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(44)
	  , TAG = __webpack_require__(68)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(14);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(105)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./docs.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\nbody {\n  position: relative;\n  /* For scrollspy */ }\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal; }\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c; }\n\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3; }\n\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff; }\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%; }\n\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px; }\n\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px; }\n\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff; }\n\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3; }\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0; }\n\n.bs-home-nav .bs-nav-b {\n  display: none; }\n\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c; }\n\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9; }\n\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c; }\n\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff; }\n\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9; }\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5; }\n\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999; }\n\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px; }\n\n.bs-docs-footer-links li:first-child {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0; } }\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center; }\n\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1; }\n\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important; }\n\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important; }\n\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0; }\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image: -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image: linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x; }\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px; }\n\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff; }\n\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff; }\n\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9; }\n\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px; }\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto; } }\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px; }\n  .bs-docs-masthead .lead {\n    font-size: 24px; } }\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px; } }\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px; }\n\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff; }\n\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4; }\n\n.bs-docs-header .container {\n  position: relative; }\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left; }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1; } }\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px; } }\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden;\n  /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important; }\n\n.carbonad-img {\n  margin: 0 !important; }\n\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important; }\n\n.carbonad-text {\n  padding-top: 0 !important; }\n\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important; }\n\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important; }\n\n.carbonad #azcarbon > img {\n  display: none;\n  /* hide what I assume are tracking images */ }\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px; }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important; } }\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important; } }\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important; }\n  .bs-docs-masthead .carbonad {\n    position: static; } }\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5; }\n\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0; }\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333; }\n\n.half-rule {\n  width: 100px;\n  margin: 40px auto; }\n\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333; }\n\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333; }\n\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none; }\n\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px; }\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px; } }\n\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px; }\n  .bs-docs-featurette-title {\n    font-size: 40px; }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto; }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px; }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px; }\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0; } }\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px; }\n\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px; }\n\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px; }\n\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0; } }\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px; }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px; } }\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static; }\n\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px; } }\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999; }\n\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C; }\n\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C; }\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none;\n  /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px; }\n\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal; }\n\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px; }\n\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500; }\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999; }\n\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none; }\n\n.bs-docs-theme-toggle {\n  margin-top: 0; }\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block; } }\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block; }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px; }\n  .bs-docs-sidebar.affix {\n    position: fixed;\n    /* Undo the static from mobile first approach */\n    top: 20px; }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute;\n    /* Undo the static from mobile first approach */ }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0; } }\n\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px; } }\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px; }\n\n.bs-docs-section:last-child {\n  margin-bottom: 0; }\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0; }\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px; }\n\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.bs-callout p:last-child {\n  margin-bottom: 0; }\n\n.bs-callout code {\n  border-radius: 3px; }\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px; }\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f; }\n\n.bs-callout-danger h4 {\n  color: #d9534f; }\n\n.bs-callout-warning {\n  border-left-color: #f0ad4e; }\n\n.bs-callout-warning h4 {\n  color: #f0ad4e; }\n\n.bs-callout-info {\n  border-left-color: #5bc0de; }\n\n.bs-callout-info h4 {\n  color: #5bc0de; }\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden;\n  /* clearfix */ }\n\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px; }\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px; } }\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222; }\n\n.color-swatches .gray-dark {\n  background-color: #333; }\n\n.color-swatches .gray {\n  background-color: #555; }\n\n.color-swatches .gray-light {\n  background-color: #999; }\n\n.color-swatches .gray-lighter {\n  background-color: #eee; }\n\n.color-swatches .brand-primary {\n  background-color: #428bca; }\n\n.color-swatches .brand-success {\n  background-color: #5cb85c; }\n\n.color-swatches .brand-warning {\n  background-color: #f0ad4e; }\n\n.color-swatches .brand-danger {\n  background-color: #d9534f; }\n\n.color-swatches .brand-info {\n  background-color: #5bc0de; }\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c; }\n\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3; }\n\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea; }\n\n.color-swatches .bs-gray {\n  background-color: #f9f9f9; }\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555; }\n\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none; }\n\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px; }\n\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px; }\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n.show-grid {\n  margin-bottom: 15px; }\n\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86, 61, 124, 0.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86, 61, 124, 0.2); }\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.05); }\n\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\"; }\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0; }\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; } }\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto; }\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0; }\n\n.bs-example > p > .close {\n  float: none; }\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle; }\n\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee; }\n\n.bs-example-type .table tr:first-child td {\n  border-top: 0; }\n\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0; }\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px; }\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px; }\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff; }\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px; }\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px; }\n\n.bs-example-form .input-group {\n  margin-bottom: 10px; }\n\n.bs-example > textarea.form-control {\n  resize: vertical; }\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px; }\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0; }\n\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden;\n  /* cut the drop shadows off */ }\n\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0; }\n\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0; }\n\n.bs-navbar-top-example {\n  padding-bottom: 45px; }\n\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px; }\n\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px; }\n\n.bs-navbar-bottom-example {\n  padding-top: 45px; }\n\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px; }\n\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute; } }\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0; }\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5; }\n\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block; }\n\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto; }\n\n.custom-modal {\n  width: 90%; }\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left; }\n\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left; }\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px; }\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center; }\n\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9; }\n\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px; }\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto; }\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left; }\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px; }\n\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n\n.highlight pre code {\n  font-size: inherit;\n  color: #333;\n  /* Effectively the base text color */ }\n\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px; }\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal; }\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999; }\n\n.responsive-utilities tbody th {\n  font-weight: normal; }\n\n.responsive-utilities td {\n  text-align: center; }\n\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important; }\n\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important; }\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px; }\n\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px; }\n\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px; }\n\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd; }\n\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6; }\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden; }\n\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none; }\n\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff; }\n\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px; }\n\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word;\n  /* Help out IE10+ with class names */ }\n\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c; }\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0; }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px; } }\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px; }\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555; }\n\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.bs-customizer h3 {\n  margin-bottom: 0; }\n\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0; }\n\n.bs-customizer .bs-callout h4 {\n  margin-top: 0;\n  /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px; }\n\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa; }\n\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px; }\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal; }\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px; }\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25); }\n\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px; }\n\n.bs-customizer-alert p {\n  margin-bottom: 0; }\n\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px; }\n\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1); }\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px; }\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center; }\n\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff; }\n\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c; }\n\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px; }\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto; }\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%; }\n\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c; }\n\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f; }\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%; }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff; }\n  .bs-brand-item h1 {\n    font-size: 60px; } }\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px; }\n\n.bs-examples h4 {\n  margin-bottom: 5px; }\n\n.bs-examples p {\n  margin-bottom: 20px; }\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: #cccccc;\n  /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  outline: thin dotted \\9;\n  /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82, 168, 236, 0.6);\n  box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); }\n\n/*\n * ZeroClipboard styles\n */\n.zero-clipboard {\n  position: relative;\n  display: none; }\n\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px; }\n\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block; } }\n", ""]);
	
	// exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(105)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./style.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif; }\n\n.bs-docs-section h1 {\n  font-size: 42px; }\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333; }\n\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left; }\n\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden; }\n\n.bs-docs-nav {\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.175); }\n\n.bs-docs-header p {\n  font-weight: lighter; }\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal; }\n\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease; }\n\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C; }\n\n.bs-docs-masthead, .bs-docs-header {\n  background: linear-gradient(90deg, #1D976C 10%, #93F9B9 90%);\n  /* W3C */\n  filter: none;\n  color: #e9e9e9; }\n\n.bs-docs-masthead {\n  margin-bottom: 20px; }\n\n.bs-docs-header h1 {\n  color: #ffffff; }\n\n.bs-docs-header p {\n  color: #ffffff; }\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0; }\n\n.bs-docs-sidebar .nav > li > a {\n  color: #767676;\n  font-size: 14px; }\n\n.bs-docs-sidebar .nav > li > a:hover, .bs-docs-sidebar .nav > li > a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983; }\n\n.back-to-top:hover {\n  color: #42b983; }\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto; }\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px; }\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block; }\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px; }\n\n.bs-example-popover-contained {\n  height: 200px; }\n\n.bs-example-popover-contained > div {\n  position: relative; }\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px; }\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0; }\n\n.playground {\n  margin-bottom: 36px; }\n\n.bs-example {\n  margin-bottom: 0; }\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0; }\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px; }\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff; } }\n\n.code-toggle.open {\n  background: #f8f5ec; }\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative; }\n\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute; }\n\n.prop-table {\n  background-color: white; }\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px; }\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient(top, red 0%, yellow 15%, lime 30%, cyan 50%, blue 65%, magenta 80%, red 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, red), color-stop(15%, yellow), color-stop(30%, lime), color-stop(50%, cyan), color-stop(65%, blue), color-stop(80%, magenta), color-stop(100%, red)); }\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative; }\n\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0; }\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5; }\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px; }\n\n.prop-desc-heading {\n  margin-bottom: 10px; }\n\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px; }\n\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.bs-callout p:last-child {\n  margin-bottom: 0; }\n\n.bs-callout code {\n  border-radius: 3px; }\n\n.bs-callout + .bs-callout {\n  margin-top: -5px; }\n\n.bs-callout-default {\n  border-left-color: #777; }\n\n.bs-callout-default h4 {\n  color: #777; }\n\n.bs-callout-primary {\n  border-left-color: #428bca; }\n\n.bs-callout-primary h4 {\n  color: #428bca; }\n\n.bs-callout-success {\n  border-left-color: #42b983; }\n\n.bs-callout-success h4 {\n  color: #42b983; }\n\n.bs-callout-danger {\n  border-left-color: #d9534f; }\n\n.bs-callout-danger h4 {\n  color: #d9534f; }\n\n.bs-callout-warning {\n  border-left-color: #f0ad4e; }\n\n.bs-callout-warning h4 {\n  color: #f0ad4e; }\n\n.bs-callout-info {\n  border-left-color: #5bc0de; }\n\n.bs-callout-info h4 {\n  color: #5bc0de; }\n", ""]);
	
	// exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(105)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./prism-coy.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./prism-coy.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n@font-face {\n  font-family: 'icon';\n  src: url(" + __webpack_require__(110) + ");\n  src: url(" + __webpack_require__(110) + "#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(111) + ") format(\"woff\"), url(" + __webpack_require__(112) + ") format(\"truetype\"), url(" + __webpack_require__(113) + "#icon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n @media screen and (-webkit-min-device-pixel-ratio:0) {\n   @font-face {\n     font-family: 'icon';\n     src: url('../font/icon.svg?70502573#icon') format('svg');\n   }\n }\n */\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"icon\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */ }\n\n.icon-ok-circled:before {\n  content: '\\E800'; }\n\n/* '' */\n.icon-ok-circled2:before {\n  content: '\\E801'; }\n\n/* '' */\n.icon-info-circled:before {\n  content: '\\E802'; }\n\n/* '' */\n.icon-help-circled:before {\n  content: '\\E803'; }\n\n/* '' */\n.icon-github-circled:before {\n  content: '\\E804'; }\n\n/* '' */\n.icon-git:before {\n  content: '\\E805'; }\n\n/* '' */\n.icon-ellipsis:before {\n  content: '\\E806'; }\n\n/* '' */\n.icon-ellipsis-vert:before {\n  content: '\\E807'; }\n\n/* '' */\n.icon-cancel-circled:before {\n  content: '\\E808'; }\n\n/* '' */\n.icon-cancel-circled2:before {\n  content: '\\E809'; }\n\n/* '' */\n.icon-cancel:before {\n  content: '\\E80A'; }\n\n/* '' */\n.icon-ok:before {\n  content: '\\E80B'; }\n\n/* '' */\n.icon-attention-circled:before {\n  content: '\\E80C'; }\n\n/* '' */\n.icon-star-empty:before {\n  content: '\\E80D'; }\n\n/* '' */\n.icon-star:before {\n  content: '\\E80E'; }\n\n/* '' */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  font-family: 'Source Code Pro',Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\n/* Code blocks */\npre[class*=\"language-\"] {\n  position: relative;\n  margin: .5em 0;\n  -webkit-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  -moz-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  border-left: 5px solid #358ccb;\n  background-color: #fdfdfd;\n  background-image: -webkit-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -moz-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -ms-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -o-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-size: 3em 3em;\n  background-origin: content-box;\n  overflow: visible;\n  max-height: 30em; }\n\ncode[class*=\"language\"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto; }\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7D8B99; }\n\n.token.punctuation {\n  color: #5F6364; }\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #c92c2c; }\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.function,\n.token.builtin,\n.token.inserted {\n  color: #2f9c0a; }\n\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5); }\n\n.token.atrule,\n.token.attr-value,\n.token.keyword,\n.token.class-name {\n  color: #1990b8; }\n\n.token.regex,\n.token.important {\n  color: #e90; }\n\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5); }\n\n.token.important {\n  font-weight: normal; }\n\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n\n.namespace {\n  opacity: .7; }\n\n@media screen and (max-width: 767px) {\n  pre[class*=\"language-\"]:before,\n  pre[class*=\"language-\"]:after {\n    bottom: 14px;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none; } }\n\n/* Plugin styles */\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: #e0d7d1; }\n\n/* Plugin styles: Line Numbers */\npre[class*=\"language-\"].line-numbers {\n  padding-left: 0; }\n\npre[class*=\"language-\"].line-numbers code {\n  padding-left: 3.8em; }\n\npre[class*=\"language-\"].line-numbers .line-numbers-rows {\n  left: 0; }\n\n/* Plugin styles: Line Highlight */\npre[class*=\"language-\"][data-line] {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0; }\n\npre[data-line] code {\n  position: relative;\n  padding-left: 4em; }\n\npre .line-highlight {\n  margin-top: 0; }\n\n.hll {\n  background-color: #ffc; }\n\n.c {\n  color: #999; }\n\n.err {\n  color: #A00;\n  background-color: #FAA; }\n\n.k {\n  color: #069; }\n\n.o {\n  color: #555; }\n\n.cm {\n  color: #999; }\n\n.cp {\n  color: #099; }\n\n.c1 {\n  color: #999; }\n\n.cs {\n  color: #999; }\n\n.gd {\n  background-color: #FCC;\n  border: 1px solid #C00; }\n\n.ge {\n  font-style: italic; }\n\n.gr {\n  color: red; }\n\n.gh {\n  color: #030; }\n\n.gi {\n  background-color: #CFC;\n  border: 1px solid #0C0; }\n\n.go {\n  color: #AAA; }\n\n.gp {\n  color: #009; }\n\n.gu {\n  color: #030; }\n\n.gt {\n  color: #9C6; }\n\n.kc {\n  color: #069; }\n\n.kd {\n  color: #069; }\n\n.kn {\n  color: #069; }\n\n.kp {\n  color: #069; }\n\n.kr {\n  color: #069; }\n\n.kt {\n  color: #078; }\n\n.m {\n  color: #F60; }\n\n.s {\n  color: #d44950; }\n\n.na {\n  color: #4f9fcf; }\n\n.nb {\n  color: #366; }\n\n.nc {\n  color: #0A8; }\n\n.no {\n  color: #360; }\n\n.nd {\n  color: #99F; }\n\n.ni {\n  color: #999; }\n\n.ne {\n  color: #C00; }\n\n.nf {\n  color: #C0F; }\n\n.nl {\n  color: #99F; }\n\n.nn {\n  color: #0CF; }\n\n.nt {\n  color: #2f6f9f; }\n\n.nv {\n  color: #033; }\n\n.ow {\n  color: #000; }\n\n.w {\n  color: #bbb; }\n\n.mf {\n  color: #F60; }\n\n.mh {\n  color: #F60; }\n\n.mi {\n  color: #F60; }\n\n.mo {\n  color: #F60; }\n\n.sb {\n  color: #C30; }\n\n.sc {\n  color: #C30; }\n\n.sd {\n  color: #C30;\n  font-style: italic; }\n\n.s2 {\n  color: #C30; }\n\n.se {\n  color: #C30; }\n\n.sh {\n  color: #C30; }\n\n.si {\n  color: #A00; }\n\n.sx {\n  color: #C30; }\n\n.sr {\n  color: #3AA; }\n\n.s1 {\n  color: #C30; }\n\n.ss {\n  color: #FC3; }\n\n.bp {\n  color: #366; }\n\n.vc {\n  color: #033; }\n\n.vg {\n  color: #033; }\n\n.vi {\n  color: #033; }\n\n.il {\n  color: #F60; }\n\n.css .nt + .nt, .css .o, .css .o + .nt {\n  color: #999; }\n\npre[class*='language-'] {\n  position: relative; }\n\npre[class*='language-'][data-language]::before {\n  content: attr(data-language);\n  color: black;\n  background-color: #CFCFCF;\n  display: inline-block;\n  position: absolute;\n  bottom: auto;\n  left: auto;\n  top: 0;\n  right: 0;\n  width: auto;\n  height: auto;\n  font-size: 0.9em;\n  border-radius: 0 0 0 5px;\n  padding: 0 0.5em;\n  text-shadow: none;\n  z-index: 1;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n  transform: none; }\n", ""]);
	
	// exports


/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtZXRhZGF0YT5Db3B5cmlnaHQgKEMpIDIwMTUgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbTwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0iaWNvbiIgaG9yaXotYWR2LXg9IjEwMDAiID4KPGZvbnQtZmFjZSBmb250LWZhbWlseT0iaWNvbiIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iMTAwMCIgYXNjZW50PSI4NTAiIGRlc2NlbnQ9Ii0xNTAiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDAwIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ib2stY2lyY2xlZCIgdW5pY29kZT0iJiN4ZTgwMDsiIGQ9Im03MTcgNDQwcTAgMTYtMTEgMjZsLTUwIDUwcS0xMSAxMS0yNSAxMXQtMjYtMTFsLTIyNy0yMjctMTI2IDEyNnEtMTEgMTEtMjUgMTF0LTI2LTExbC01MC01MHEtMTAtMTAtMTAtMjYgMC0xNSAxMC0yNWwyMDItMjAycTEwLTEwIDI1LTEwIDE1IDAgMjUgMTBsMzAzIDMwM3ExMSAxMCAxMSAyNXogbTE0MC05MHEwLTExNy01Ny0yMTV0LTE1Ni0xNTYtMjE1LTU4LTIxNiA1OC0xNTUgMTU2LTU4IDIxNSA1OCAyMTUgMTU1IDE1NiAyMTYgNTggMjE1LTU4IDE1Ni0xNTYgNTctMjE1eiIgaG9yaXotYWR2LXg9Ijg1Ny4xIiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ib2stY2lyY2xlZDIiIHVuaWNvZGU9IiYjeGU4MDE7IiBkPSJtNjUzIDM5NmwtMjM1LTIzNXEtMTEtMTEtMjUtMTF0LTI1IDExbC0xNjQgMTY0cS0xMSAxMS0xMSAyNXQxMSAyNWw1NyA1N3ExMCAxMSAyNSAxMXQyNS0xMWw4Mi04MiAxNTMgMTUzcTExIDExIDI1IDExdDI2LTExbDU2LTU2cTExLTExIDExLTI2dC0xMS0yNXogbTc5LTQ2cTAgODMtNDEgMTUydC0xMTAgMTExLTE1MiA0MS0xNTMtNDEtMTEwLTExMS00MS0xNTIgNDEtMTUyIDExMC0xMTEgMTUzLTQxIDE1MiA0MSAxMTAgMTExIDQxIDE1MnogbTEyNSAwcTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTgtMjE2IDU4LTE1NSAxNTYtNTggMjE1IDU4IDIxNSAxNTUgMTU2IDIxNiA1OCAyMTUtNTggMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjEiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZWQiIHVuaWNvZGU9IiYjeGU4MDI7IiBkPSJtNTcxIDgydjg5cTAgOC01IDEzdC0xMiA1aC01NHYyODZxMCA4LTUgMTN0LTEzIDVoLTE3OHEtOCAwLTEzLTV0LTUtMTN2LTg5cTAtOCA1LTEzdDEzLTVoNTN2LTE3OWgtNTNxLTggMC0xMy01dC01LTEzdi04OXEwLTggNS0xM3QxMy01aDI1MHE3IDAgMTIgNXQ1IDEzeiBtLTcxIDUwMHY4OXEwIDgtNSAxM3QtMTMgNWgtMTA3cS04IDAtMTMtNXQtNS0xM3YtODlxMC04IDUtMTN0MTMtNWgxMDdxOCAwIDEzIDV0NSAxM3ogbTM1Ny0yMzJxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01OC0yMTYgNTgtMTU1IDE1Ni01OCAyMTUgNTggMjE1IDE1NSAxNTYgMjE2IDU4IDIxNS01OCAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMSIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImhlbHAtY2lyY2xlZCIgdW5pY29kZT0iJiN4ZTgwMzsiIGQ9Im01MDAgODJ2MTA3cTAgOC01IDEzdC0xMyA1aC0xMDdxLTggMC0xMy01dC01LTEzdi0xMDdxMC04IDUtMTN0MTMtNWgxMDdxOCAwIDEzIDV0NSAxM3ogbTE0MyAzNzVxMCA0OS0zMSA5MXQtNzcgNjUtOTUgMjNxLTEzNiAwLTIwNy0xMTktOS0xNCA0LTI0bDc0LTU1cTQtNCAxMC00IDkgMCAxNCA3IDMwIDM4IDQ4IDUxIDE5IDE0IDQ4IDE0IDI3IDAgNDgtMTV0MjEtMzNxMC0yMS0xMS0zNHQtMzgtMjVxLTM1LTE2LTY1LTQ4dC0yOS03MHYtMjBxMC04IDUtMTN0MTMtNWgxMDdxOCAwIDEzIDV0NSAxM3EwIDEwIDEyIDI3dDMwIDI4cTE4IDEwIDI4IDE2dDI1IDE5IDI1IDI3IDE2IDM0IDcgNDV6IG0yMTQtMTA3cTAtMTE3LTU3LTIxNXQtMTU2LTE1Ni0yMTUtNTgtMjE2IDU4LTE1NSAxNTYtNTggMjE1IDU4IDIxNSAxNTUgMTU2IDIxNiA1OCAyMTUtNTggMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjEiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJnaXRodWItY2lyY2xlZCIgdW5pY29kZT0iJiN4ZTgwNDsiIGQ9Im04NTcgMzUwcTAtMTQwLTgyLTI1MnQtMjExLTE1NXEtMTUtMy0yMiA0dC03IDE3djExOHEwIDU0LTI5IDc5IDMyIDMgNTcgMTB0NTMgMjIgNDUgMzcgMzAgNTggMTEgODRxMCA2OC00NCAxMTUgMjEgNTEtNSAxMTQtMTUgNS00NS02dC01MS0yNWwtMjEtMTNxLTUyIDE1LTEwNyAxNXQtMTA4LTE1cS04IDYtMjMgMTV0LTQ3IDIyLTQ4IDdxLTI0LTYzLTQtMTE0LTQ0LTQ3LTQ0LTExNSAwLTQ3IDEyLTgzdDI5LTU5IDQ1LTM3IDUyLTIyIDU3LTEwcS0yMi0yMC0yNy01OC0xMi01LTI1LTh0LTMyLTMtMzYgMTItMzEgMzVxLTExIDE4LTI3IDI5dC0yOCAxNGwtMTEgMXEtMTIgMC0xNi0ydC0zLTcgNS04IDctNmw0LTNxMTItNiAyNC0yMXQxOC0yOWw1LTEzcTgtMjEgMjUtMzR0MzctMTcgMzktNCAzMSAybDEzIDNxMC0yMiAwLTUwdDEtMzBxMC0xMC04LTE3dC0yMi00cS0xMjkgNDMtMjExIDE1NXQtODIgMjUycTAgMTE3IDU4IDIxNXQxNTUgMTU2IDIxNiA1OCAyMTUtNTggMTU2LTE1NiA1Ny0yMTV6IiBob3Jpei1hZHYteD0iODU3LjEiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJnaXQiIHVuaWNvZGU9IiYjeGU4MDU7IiBkPSJtMzMyIDVxMCA1Ni05MiA1Ni04OCAwLTg4LTU4IDAtNTcgOTYtNTcgODQgMCA4NCA1OXogbS0zMyA0MjFxMCAzNS0xNyA1N3QtNDkgMjNxLTY5IDAtNjktODEgMC03NSA2OS03NSA2NiAwIDY2IDc2eiBtMTUwIDE4MXYtMTEycS0yMC03LTQ0LTEzIDktMjQgOS00NyAwLTcwLTQxLTEyMHQtMTEwLTYzcS0yMi01LTMzLTE1dC0xMS0zM3EwLTE3IDEzLTI4dDMyLTE4IDQ0LTEyIDQ4LTE1IDQ0LTIxIDMyLTM1IDEzLTU1cTAtMTcwLTIwMy0xNzAtMzggMC03MiA3dC02NSAyMy00OSA0Ni0xOCA3MXEwIDkyIDEwMiAxMjV2M3EtMzggMjItMzggNzAgMCA2MSAzNSA3NnYzcS00MCAxMy02NiA2MHQtMjcgOTJxMCA3OCA1MyAxMzB0MTMxIDUxcTU0IDAgMTAwLTI2IDU0IDAgMTIxIDI2eiBtMTc4LTQ5MWgtMTI0cTIgMjUgMiA3NHYzNDBxMCA1My0yIDcyaDEyNHEtMy0xOS0zLTcwdi0zNDJxMC00OSAzLTc0eiBtMzM1IDEyNHYtMTEwcS00MC0yMi05Ny0yMi0zNSAwLTYwIDEydC0zOSAyNy0yMiA0NC0xMCA1MS0yIDU4djE5NmgxdjJxLTQgMC0xMSAwdC0xMCAxcS0xMiAwLTMzLTN2MTA2aDU0djQycTAgMzAtNCA1MGgxMjdxLTMtMjMtMy05Mmg5NXYtMTA2cS04IDAtMjQgMXQtMjQgMWgtNDd2LTIwNHEwLTczIDQ4LTczIDM0IDAgNjEgMTl6IG0tMzIxIDUyOHEwLTMyLTIyLTU3dC01NC0yNHEtMzIgMC01NCAyNHQtMjMgNTdxMCAzMyAyMiA1N3Q1NSAyNXEzMyAwIDU0LTI1dDIyLTU3eiIgaG9yaXotYWR2LXg9IjEwMDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJlbGxpcHNpcyIgdW5pY29kZT0iJiN4ZTgwNjsiIGQ9Im0yMTQgNDM5di0xMDdxMC0yMi0xNS0zOHQtMzgtMTVoLTEwN3EtMjMgMC0zOCAxNXQtMTYgMzh2MTA3cTAgMjMgMTYgMzh0MzggMTZoMTA3cTIyIDAgMzgtMTZ0MTUtMzh6IG0yODYgMHYtMTA3cTAtMjItMTYtMzh0LTM4LTE1aC0xMDdxLTIyIDAtMzggMTV0LTE1IDM4djEwN3EwIDIzIDE1IDM4dDM4IDE2aDEwN3EyMyAwIDM4LTE2dDE2LTM4eiBtMjg2IDB2LTEwN3EwLTIyLTE2LTM4dC0zOC0xNWgtMTA3cS0yMiAwLTM4IDE1dC0xNiAzOHYxMDdxMCAyMyAxNiAzOHQzOCAxNmgxMDdxMjIgMCAzOC0xNnQxNi0zOHoiIGhvcml6LWFkdi14PSI3ODUuNyIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImVsbGlwc2lzLXZlcnQiIHVuaWNvZGU9IiYjeGU4MDc7IiBkPSJtMjE0IDE1NHYtMTA4cTAtMjItMTUtMzd0LTM4LTE2aC0xMDdxLTIzIDAtMzggMTZ0LTE2IDM3djEwOHEwIDIyIDE2IDM4dDM4IDE1aDEwN3EyMiAwIDM4LTE1dDE1LTM4eiBtMCAyODV2LTEwN3EwLTIyLTE1LTM4dC0zOC0xNWgtMTA3cS0yMyAwLTM4IDE1dC0xNiAzOHYxMDdxMCAyMyAxNiAzOHQzOCAxNmgxMDdxMjIgMCAzOC0xNnQxNS0zOHogbTAgMjg2di0xMDdxMC0yMi0xNS0zOHQtMzgtMTZoLTEwN3EtMjMgMC0zOCAxNnQtMTYgMzh2MTA3cTAgMjIgMTYgMzh0MzggMTZoMTA3cTIyIDAgMzgtMTZ0MTUtMzh6IiBob3Jpei1hZHYteD0iMjE0LjMiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJjYW5jZWwtY2lyY2xlZCIgdW5pY29kZT0iJiN4ZTgwODsiIGQ9Im02NDEgMjI0cTAgMTQtMTAgMjVsLTEwMSAxMDEgMTAxIDEwMXExMCAxMSAxMCAyNSAwIDE1LTEwIDI2bC01MSA1MHEtMTAgMTEtMjUgMTEtMTUgMC0yNS0xMWwtMTAxLTEwMS0xMDEgMTAxcS0xMSAxMS0yNiAxMS0xNSAwLTI1LTExbC01MC01MHEtMTEtMTEtMTEtMjYgMC0xNCAxMS0yNWwxMDEtMTAxLTEwMS0xMDFxLTExLTExLTExLTI1IDAtMTUgMTEtMjZsNTAtNTBxMTAtMTEgMjUtMTEgMTUgMCAyNiAxMWwxMDEgMTAxIDEwMS0xMDFxMTAtMTEgMjUtMTEgMTUgMCAyNSAxMWw1MSA1MHExMCAxMSAxMCAyNnogbTIxNiAxMjZxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01OC0yMTYgNTgtMTU1IDE1Ni01OCAyMTUgNTggMjE1IDE1NSAxNTYgMjE2IDU4IDIxNS01OCAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMSIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNhbmNlbC1jaXJjbGVkMiIgdW5pY29kZT0iJiN4ZTgwOTsiIGQ9Im02MTIgMjQ4bC04MS04MnEtNi01LTEzLTV0LTEzIDVsLTc2IDc3LTc3LTc3cS01LTUtMTMtNXQtMTMgNWwtODEgODJxLTYgNS02IDEzdDYgMTNsNzYgNzYtNzYgNzZxLTYgNi02IDEzdDYgMTNsODEgODJxNiA1IDEzIDV0MTMtNWw3Ny03NyA3NiA3N3E2IDUgMTMgNXQxMy01bDgxLTgycTYtNSA2LTEzdC02LTEzbC03Ni03NiA3Ni03NnE2LTYgNi0xM3QtNi0xM3ogbTEyMCAxMDJxMCA4My00MSAxNTJ0LTExMCAxMTEtMTUyIDQxLTE1My00MS0xMTAtMTExLTQxLTE1MiA0MS0xNTIgMTEwLTExMSAxNTMtNDEgMTUyIDQxIDExMCAxMTEgNDEgMTUyeiBtMTI1IDBxMC0xMTctNTctMjE1dC0xNTYtMTU2LTIxNS01OC0yMTYgNTgtMTU1IDE1Ni01OCAyMTUgNTggMjE1IDE1NSAxNTYgMjE2IDU4IDIxNS01OCAxNTYtMTU2IDU3LTIxNXoiIGhvcml6LWFkdi14PSI4NTcuMSIgLz4KPGdseXBoIGdseXBoLW5hbWU9ImNhbmNlbCIgdW5pY29kZT0iJiN4ZTgwYTsiIGQ9Im03MjQgMTEycTAtMjItMTUtMzhsLTc2LTc2cS0xNi0xNS0zOC0xNXQtMzggMTVsLTE2NCAxNjUtMTY0LTE2NXEtMTYtMTUtMzgtMTV0LTM4IDE1bC03NiA3NnEtMTYgMTYtMTYgMzh0MTYgMzhsMTY0IDE2NC0xNjQgMTY0cS0xNiAxNi0xNiAzOHQxNiAzOGw3NiA3NnExNiAxNiAzOCAxNnQzOC0xNmwxNjQtMTY0IDE2NCAxNjRxMTYgMTYgMzggMTZ0MzgtMTZsNzYtNzZxMTUtMTUgMTUtMzh0LTE1LTM4bC0xNjQtMTY0IDE2NC0xNjRxMTUtMTUgMTUtMzh6IiBob3Jpei1hZHYteD0iNzg1LjciIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJvayIgdW5pY29kZT0iJiN4ZTgwYjsiIGQ9Im05MzIgNTM0cTAtMjItMTUtMzhsLTQwNC00MDQtNzYtNzZxLTE2LTE1LTM4LTE1dC0zOCAxNWwtNzYgNzYtMjAyIDIwMnEtMTUgMTYtMTUgMzh0MTUgMzhsNzYgNzZxMTYgMTYgMzggMTZ0MzgtMTZsMTY0LTE2NSAzNjYgMzY3cTE2IDE2IDM4IDE2dDM4LTE2bDc2LTc2cTE1LTE2IDE1LTM4eiIgaG9yaXotYWR2LXg9IjEwMDAiIC8+CjxnbHlwaCBnbHlwaC1uYW1lPSJhdHRlbnRpb24tY2lyY2xlZCIgdW5pY29kZT0iJiN4ZTgwYzsiIGQ9Im00MjkgNzc5cTExNiAwIDIxNS01OHQxNTYtMTU2IDU3LTIxNS01Ny0yMTUtMTU2LTE1Ni0yMTUtNTgtMjE2IDU4LTE1NSAxNTYtNTggMjE1IDU4IDIxNSAxNTUgMTU2IDIxNiA1OHogbTcxLTY5NnYxMDZxMCA4LTUgMTN0LTEyIDVoLTEwN3EtOCAwLTEzLTV0LTYtMTN2LTEwNnEwLTggNi0xM3QxMy02aDEwN3E3IDAgMTIgNnQ1IDEzeiBtLTEgMTkybDEwIDM0NnEwIDctNiAxMC01IDUtMTMgNWgtMTIzcS04IDAtMTMtNS02LTMtNi0xMGwxMC0zNDZxMC02IDUtMTB0MTQtNGgxMDNxOCAwIDEzIDR0NiAxMHoiIGhvcml6LWFkdi14PSI4NTcuMSIgLz4KPGdseXBoIGdseXBoLW5hbWU9InN0YXItZW1wdHkiIHVuaWNvZGU9IiYjeGU4MGQ7IiBkPSJtNjM0IDI5MGwxNzEgMTY1LTIzNSAzNS0xMDYgMjEzLTEwNS0yMTMtMjM2LTM1IDE3MS0xNjUtNDEtMjM1IDIxMSAxMTEgMjExLTExMXogbTI5NSAxOTlxMC0xMi0xNS0yN2wtMjAzLTE5NyA0OC0yNzlxMS00IDEtMTIgMC0yOC0yMy0yOC0xMCAwLTIyIDdsLTI1MSAxMzItMjUwLTEzMnEtMTMtNy0yMy03LTExIDAtMTcgOXQtNiAxOXEwIDQgMSAxMmw0OCAyNzktMjAzIDE5N3EtMTQgMTUtMTQgMjcgMCAyMSAzMSAyNmwyODAgNDAgMTI2IDI1NHExMSAyMyAyNyAyM3QyOC0yM2wxMjUtMjU0IDI4MC00MHEzMi01IDMyLTI2eiIgaG9yaXotYWR2LXg9IjkyOC42IiAvPgo8Z2x5cGggZ2x5cGgtbmFtZT0ic3RhciIgdW5pY29kZT0iJiN4ZTgwZTsiIGQ9Im05MjkgNDg5cTAtMTItMTUtMjdsLTIwMy0xOTcgNDgtMjc5cTEtNCAxLTEyIDAtMTEtNi0xOXQtMTctOXEtMTAgMC0yMiA3bC0yNTEgMTMyLTI1MC0xMzJxLTEzLTctMjMtNy0xMSAwLTE3IDl0LTYgMTlxMCA0IDEgMTJsNDggMjc5LTIwMyAxOTdxLTE0IDE1LTE0IDI3IDAgMjEgMzEgMjZsMjgwIDQwIDEyNiAyNTRxMTEgMjMgMjcgMjN0MjgtMjNsMTI1LTI1NCAyODAtNDBxMzItNSAzMi0yNnoiIGhvcml6LWFkdi14PSI5MjguNiIgLz4KPC9mb250Pgo8L2RlZnM+Cjwvc3ZnPg=="

/***/ },
/* 114 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
	
				if (arguments.length == 2) {
					insert = arguments[1];
	
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
	
					return grammar;
				}
	
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
	
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},
	
		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
				if (env.code) {
					env.element.textContent = env.code;
				}
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						greedy = !!pattern.greedy,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					if (greedy && !pattern.pattern.global) {
						// Without the global flag, lastIndex won't work
						var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
						pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
					}
	
					pattern = pattern.pattern || pattern;
	
					// Don’t cache length as it changes during the loop
					for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							pattern.lastIndex = pos;
							match = pattern.exec(text);
							if (!match) {
								break;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0),
							    to = match.index + match[0].length,
							    k = i,
							    p = pos;
	
							for (var len = strarr.length; k < len && p < to; ++k) {
								p += strarr[k].length;
								// Move the index i to the element in strarr that is closest to from
								if (from >= p) {
									++i;
									pos = p;
								}
							}
	
							/*
							 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
							 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
							 */
							if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
								continue;
							}
	
							// Number of tokens to delete and replace with the new match
							delNum = k - i;
							str = text.slice(pos, p);
							match.index -= pos;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || "").length|0;
		this.greedy = !!greedy;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = Object.keys(env.attributes).map(function(name) {
			return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}).join(' ');
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				if (window.requestAnimationFrame) {
					window.requestAnimationFrame(_.highlightAll);
				} else {
					window.setTimeout(_.highlightAll, 16);
				}
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/i,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': {
			pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
	
		};
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 115 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "html": "HTML", "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
		Prism.hooks.add('before-highlight', function (env) {
			var pre = env.element.parentNode;
			if (!pre || !/pre/i.test(pre.nodeName)) {
				return;
			}
			var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
			pre.setAttribute('data-language', language);
		});
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
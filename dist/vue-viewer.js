(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-viewer"] = factory();
	else
		root["vue-viewer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Viewer = __webpack_require__(1);

	var _Viewer2 = _interopRequireDefault(_Viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Viewer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(8)(
	  /* script */
	  __webpack_require__(9),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  "data-v-d773db96",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/yyl/meituan/work/yyl/github/vue-viewer/src/Viewer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Viewer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d773db96", Component.options)
	  } else {
	    hotAPI.reload("data-v-d773db96", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("6af43932", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d773db96&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Viewer.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d773db96&scoped=true!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Viewer.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.viewer-bg[data-v-d773db96] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  overflow: auto;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.target-image[data-v-d773db96] {\n  z-index: 1001;\n  position: fixed;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.toolbar[data-v-d773db96] {\n  position: fixed;\n  z-index: 1002;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.toolbar .icon[data-v-d773db96] {\n    cursor: pointer;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 50%;\n    cursor: pointer;\n    height: 24px;\n    overflow: hidden;\n    width: 24px;\n}\n.toolbar .icon i[data-v-d773db96] {\n      background-image: url(" + __webpack_require__(5) + ");\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin: 2px;\n}\n.toolbar .icon i.zoom-in[data-v-d773db96] {\n        background-position: 0 0;\n}\n.toolbar .icon i.zoom-out[data-v-d773db96] {\n        background-position: -20px 0;\n}\n.toolbar .icon i.one-to-one[data-v-d773db96] {\n        background-position: -40px 0;\n}\n.toolbar .icon i.reset[data-v-d773db96] {\n        background-position: -60px 0;\n}\n.toolbar .icon i.rotate-left[data-v-d773db96] {\n        background-position: -140px 0;\n}\n.toolbar .icon i.rotate-right[data-v-d773db96] {\n        background-position: -160px 0;\n}\n.viewer-tooltip[data-v-d773db96] {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 12px;\n  height: 20px;\n  left: 50%;\n  line-height: 20px;\n  margin-left: -25px;\n  margin-top: -10px;\n  position: fixed;\n  text-align: center;\n  top: 50%;\n  width: 50px;\n  z-index: 1003;\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.viewer-tooltip.tip-show[data-v-d773db96] {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/./src/Viewer.vue"],"names":[],"mappings":";AACA;EACE,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,gBAAgB;EAChB,eAAe;EACf,UAAU;EACV,qCAAqC;EACrC,cAAc;CACf;AACD;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,qBAAqB;EACrB,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,UAAU;EACV,WAAW;EACX,mBAAmB;CACpB;AACD;IACI,gBAAgB;IAChB,sBAAsB;IACtB,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,YAAY;CACf;AACD;MACM,gDAAkD;MAClD,6BAA6B;MAC7B,sBAAsB;MACtB,aAAa;MACb,YAAY;MACZ,YAAY;CACjB;AACD;QACQ,yBAAyB;CAChC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,8BAA8B;CACrC;AACD;QACQ,8BAA8B;CACrC;AACD;EACE,qCAAqC;EACrC,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,cAAc;EACd,WAAW;EACX,0BAA0B;CAC3B;AACD;IACI,WAAW;CACd","file":"Viewer.vue","sourcesContent":["\n.viewer-bg[data-v-d773db96] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  overflow: auto;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n}\n.target-image[data-v-d773db96] {\n  z-index: 1001;\n  position: fixed;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.toolbar[data-v-d773db96] {\n  position: fixed;\n  z-index: 1002;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.toolbar .icon[data-v-d773db96] {\n    cursor: pointer;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 50%;\n    cursor: pointer;\n    height: 24px;\n    overflow: hidden;\n    width: 24px;\n}\n.toolbar .icon i[data-v-d773db96] {\n      background-image: url(\"~images/viewer_icons.png\");\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin: 2px;\n}\n.toolbar .icon i.zoom-in[data-v-d773db96] {\n        background-position: 0 0;\n}\n.toolbar .icon i.zoom-out[data-v-d773db96] {\n        background-position: -20px 0;\n}\n.toolbar .icon i.one-to-one[data-v-d773db96] {\n        background-position: -40px 0;\n}\n.toolbar .icon i.reset[data-v-d773db96] {\n        background-position: -60px 0;\n}\n.toolbar .icon i.rotate-left[data-v-d773db96] {\n        background-position: -140px 0;\n}\n.toolbar .icon i.rotate-right[data-v-d773db96] {\n        background-position: -160px 0;\n}\n.viewer-tooltip[data-v-d773db96] {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 12px;\n  height: 20px;\n  left: 50%;\n  line-height: 20px;\n  margin-left: -25px;\n  margin-top: -10px;\n  position: fixed;\n  text-align: center;\n  top: 50%;\n  width: 50px;\n  z-index: 1003;\n  opacity: 0;\n  transition: all 0.5s ease;\n}\n.viewer-tooltip.tip-show[data-v-d773db96] {\n    opacity: 1;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC"

/***/ },
/* 6 */
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

	var listToStyles = __webpack_require__(7)

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(10);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(11);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
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
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
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
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.value),
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
	    style: (_vm.imageStyle),
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
	  }, [_vm._v("\n  " + _vm._s(parseInt(this.percent * 100)) + "%\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d773db96", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
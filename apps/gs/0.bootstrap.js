(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../gsopt-web/pkg/gsopt_web.js":
/*!*************************************!*\
  !*** ../gsopt-web/pkg/gsopt_web.js ***!
  \*************************************/
/*! exports provided: crush_code, CrushResult, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsopt_web_bg.wasm */ \"../gsopt-web/pkg/gsopt_web_bg.wasm\");\n/* harmony import */ var _gsopt_web_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gsopt_web_bg.js */ \"../gsopt-web/pkg/gsopt_web_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"crush_code\", function() { return _gsopt_web_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"crush_code\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CrushResult\", function() { return _gsopt_web_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"CrushResult\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _gsopt_web_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../gsopt-web/pkg/gsopt_web.js?");

/***/ }),

/***/ "../gsopt-web/pkg/gsopt_web_bg.js":
/*!****************************************!*\
  !*** ../gsopt-web/pkg/gsopt_web_bg.js ***!
  \****************************************/
/*! exports provided: crush_code, CrushResult, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crush_code\", function() { return crush_code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CrushResult\", function() { return CrushResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsopt_web_bg.wasm */ \"../gsopt-web/pkg/gsopt_web_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} input\n* @returns {CrushResult}\n*/\nfunction crush_code(input) {\n    var ptr0 = passStringToWasm0(input, _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"crush_code\"](ptr0, len0);\n    return CrushResult.__wrap(ret);\n}\n\n/**\n*/\nclass CrushResult {\n\n    static __wrap(ptr) {\n        const obj = Object.create(CrushResult.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_crushresult_free\"](ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    get_compressed() {\n        try {\n            _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"crushresult_get_compressed\"](8, this.ptr);\n            var r0 = getInt32Memory0()[8 / 4 + 0];\n            var r1 = getInt32Memory0()[8 / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {string}\n    */\n    get_details() {\n        try {\n            _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"crushresult_get_details\"](8, this.ptr);\n            var r0 = getInt32Memory0()[8 / 4 + 0];\n            var r1 = getInt32Memory0()[8 / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _gsopt_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../gsopt-frontend/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../gsopt-web/pkg/gsopt_web_bg.js?");

/***/ }),

/***/ "../gsopt-web/pkg/gsopt_web_bg.wasm":
/*!******************************************!*\
  !*** ../gsopt-web/pkg/gsopt_web_bg.wasm ***!
  \******************************************/
/*! exports provided: memory, __wbg_crushresult_free, crushresult_get_compressed, crushresult_get_details, crush_code, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./gsopt_web_bg.js */ \"../gsopt-web/pkg/gsopt_web_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../gsopt-web/pkg/gsopt_web_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsopt_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsopt-web */ \"../gsopt-web/pkg/gsopt_web.js\");\n\r\n\r\n(function() {\r\n    var [input, output, details, button] = ['gs-input', 'gs-output', 'gs-details', 'gs-button']\r\n        .map(x => document.getElementById(x));\r\n\r\n    button.addEventListener('click', () => {\r\n        var result = gsopt_web__WEBPACK_IMPORTED_MODULE_0__[\"crush_code\"](input.value);\r\n\r\n        output.value = result.get_compressed();\r\n        details.innerText = result.get_details();\r\n    })\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);
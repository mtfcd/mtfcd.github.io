(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_bench.js":
/*!****************************!*\
  !*** ../pkg/wasm_bench.js ***!
  \****************************/
/*! exports provided: prime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bench_bg.wasm */ \"../pkg/wasm_bench_bg.wasm\");\n/* harmony import */ var _wasm_bench_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_bench_bg.js */ \"../pkg/wasm_bench_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prime\", function() { return _wasm_bench_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"prime\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_bench.js?");

/***/ }),

/***/ "../pkg/wasm_bench_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_bench_bg.js ***!
  \*******************************/
/*! exports provided: prime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prime\", function() { return prime; });\n/* harmony import */ var _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bench_bg.wasm */ \"../pkg/wasm_bench_bg.wasm\");\n\n\n/**\n* @param {number} n\n* @returns {number}\n*/\nfunction prime(n) {\n    var ret = _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"prime\"](n);\n    return ret >>> 0;\n}\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_bench_bg.js?");

/***/ }),

/***/ "../pkg/wasm_bench_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_bench_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, prime */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_bench_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_bench__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm_bench */ \"../pkg/wasm_bench.js\");\n\n\n\nfunction prime(n) {\n    let max = 0;\n    for (let i = 3; i<n; i++) {\n        let j = 2;\n        while (j<n) {\n            if (i % j == 0) {\n                break\n            }\n            j++;\n        }\n        if (i == j && i > max) {\n            max = i;\n        }\n    }\n    return max;\n}\n\nfunction bench() {\n    const num = parseInt(document.getElementById('num').value);\n    \n    const t3 = Date.now();\n    const res2 = prime(num)\n    const t4 = Date.now();\n    document.getElementById('res2').innerHTML = `js result: ${res2}, time used: ${t4 - t3}`\n\n    const t1 = Date.now();\n    const res1 = wasm_bench__WEBPACK_IMPORTED_MODULE_0__[\"prime\"](num);\n    const t2 = Date.now();\n    document.getElementById('res1').innerHTML = `wasm result: ${res1}, time used: ${t2 - t1}`\n\n}\n\nconst playPauseButton = document.getElementById(\"bench\");\n\nplayPauseButton.addEventListener(\"click\", event => {\n    document.getElementById('res2').innerHTML = '...'\n    document.getElementById('res1').innerHTML = '...'\n    bench()\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);
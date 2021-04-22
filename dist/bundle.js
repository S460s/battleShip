/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction renderBoard(size = 10, container) {\n    for (let x = 0; x < Math.pow(size, 2); x++) {\n        const cell = document.createElement('div');\n        cell.className = 'square';\n        container.appendChild(cell);\n    }\n    container.style.cssText = `grid-template-columns: repeat(${size}, auto);`;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9kb20udHM/NmIxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBUyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxTQUF5QjtJQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBSSxFQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7SUFDRCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxpQ0FBaUMsSUFBSSxVQUFVLENBQUM7QUFDM0UsQ0FBQztBQUVzQiIsImZpbGUiOiIuL3NyYy9kb20udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJCb2FyZChzaXplID0gMTAsIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcblx0Zm9yIChsZXQgeCA9IDA7IHggPCBzaXplICoqIDI7IHgrKykge1xuXHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjZWxsLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblx0fVxuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3NpemV9LCBhdXRvKTtgO1xufVxuXG5leHBvcnQgeyByZW5kZXJCb2FyZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* import Ship, { ShipInterface } from './Ship';\nimport Gameboard from './Gameboard';\nimport Player from './Player';\n */\n/* function gamelooptest() {\n    const gameboard = new Gameboard();\n    const p1 = new Player();\n    p1.enemyGameboard = gameboard;\n    while (!p1.allShipsPlaced()) {\n        const y = prompt('Enter y: ');\n        const x = prompt('Enter x: ');\n        const f = prompt('Horizontaly (h) or Vertically (v) ?');\n        if (x && y && (f === 'h' || f === 'v')) {\n            if (p1.placeShip({ x: parseInt(x), y: parseInt(y), flag: f })) {\n                console.log(p1.gameboard.board);\n            }\n        }\n    }\n}\n\n gamelooptest(); */\n\nconst board = document.querySelector('.board');\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(10, board);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZ0JtQjtBQUVpQjtBQUlwQyxNQUFNLEtBQUssR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUUsQ0FBQztBQUNoRSxpREFBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCBTaGlwLCB7IFNoaXBJbnRlcmZhY2UgfSBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbiAqL1xuXG4vKiBmdW5jdGlvbiBnYW1lbG9vcHRlc3QoKSB7XG5cdGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblx0Y29uc3QgcDEgPSBuZXcgUGxheWVyKCk7XG5cdHAxLmVuZW15R2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuXHR3aGlsZSAoIXAxLmFsbFNoaXBzUGxhY2VkKCkpIHtcblx0XHRjb25zdCB5ID0gcHJvbXB0KCdFbnRlciB5OiAnKTtcblx0XHRjb25zdCB4ID0gcHJvbXB0KCdFbnRlciB4OiAnKTtcblx0XHRjb25zdCBmID0gcHJvbXB0KCdIb3Jpem9udGFseSAoaCkgb3IgVmVydGljYWxseSAodikgPycpO1xuXHRcdGlmICh4ICYmIHkgJiYgKGYgPT09ICdoJyB8fCBmID09PSAndicpKSB7XG5cdFx0XHRpZiAocDEucGxhY2VTaGlwKHsgeDogcGFyc2VJbnQoeCksIHk6IHBhcnNlSW50KHkpLCBmbGFnOiBmIH0pKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHAxLmdhbWVib2FyZC5ib2FyZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IFxuXG4gZ2FtZWxvb3B0ZXN0KCk7ICovXG5cbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuY29uc3QgYm9hcmQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJykhO1xucmVuZGVyQm9hcmQoMTAsIGJvYXJkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
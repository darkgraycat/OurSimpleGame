/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/Entity.js":
/*!********************************!*\
  !*** ./src/entities/Entity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\nclass Entity {\r\n\r\n  /**\r\n   * @param {Number[]} position [x, y]\r\n   * @param {Number[]} size [width, height]\r\n   * @param {String} color color\r\n   * @param {Boolean} isContainer relative or absolute\r\n  */\r\n  constructor(position, size, color, isContainer = false) {\r\n    this._element = document.createElement('div')\r\n    this.x = position[0]\r\n    this.y = position[1]\r\n    this.width = size[0]\r\n    this.height = size[1]\r\n    this.color = color\r\n    this.isContainer = isContainer\r\n  }\r\n\r\n  get element() {\r\n    return this._element\r\n  }\r\n\r\n  get x() {\r\n    return this._element.offsetLeft\r\n  }\r\n\r\n  get y() {\r\n    return this._element.offsetTop\r\n  }\r\n\r\n  get width() {\r\n    return this._element.offsetWidth\r\n  }\r\n\r\n  get height() {\r\n    return this._element.offsetHeight\r\n  }\r\n\r\n  get color() {\r\n    return window.getComputedStyle(this._element).backgroundColor;\r\n  }\r\n\r\n  get isContainer() {\r\n    return window.getComputedStyle(this._element).position === 'relative'\r\n  }\r\n\r\n  set x(value) {\r\n    this._element.style.left = value + 'px'\r\n  }\r\n\r\n  set y(value) {\r\n    this._element.style.top = value + 'px'\r\n  }\r\n\r\n  set width(value) {\r\n    this._element.style.width = value + 'px'\r\n  }\r\n\r\n  set height(value) {\r\n    this._element.style.height = value + 'px'\r\n  }\r\n\r\n  set color(value) {\r\n    this._element.style.backgroundColor = value\r\n  }\r\n\r\n  set isContainer(value) {\r\n    this._element.style.position = value ? 'relative' : 'absolute'\r\n  }\r\n}\n\n//# sourceURL=webpack://our_simple_game/./src/entities/Entity.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entities_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/Entity */ \"./src/entities/Entity.js\");\n/*\r\n  Entry point\r\n*/\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  console.log('Game init')\r\n\r\n  const gameElement = document.querySelector('#game')\r\n  const statusElement = document.querySelector('#status')\r\n\r\n\r\n  const scene = new _entities_Entity__WEBPACK_IMPORTED_MODULE_0__.default([0, 0], [2000, 2000], '#444', true)\r\n  const player = new _entities_Entity__WEBPACK_IMPORTED_MODULE_0__.default([400, 200], [50, 50], 'red')\r\n\r\n  gameElement.appendChild(scene.element)\r\n  scene.element.appendChild(player.element)\r\n\r\n  const move = (x, y) => {\r\n    player.x += x\r\n    player.y += y\r\n  }\r\n\r\n  const print = (message) => {\r\n    statusElement.innerHTML = message\r\n  }\r\n\r\n  const playerProps = {\r\n    speed: {\r\n      x: 0,\r\n      y: 0\r\n    }\r\n  }\r\n\r\n  const airResist = 0.95\r\n  const speed = 0.5\r\n\r\n  const playerUpdate = delta => {\r\n    move(\r\n      delta * playerProps.speed.x,\r\n      delta * playerProps.speed.y\r\n    )\r\n    playerProps.speed.x *= airResist\r\n    playerProps.speed.y *= airResist\r\n\r\n    if (Math.abs(playerProps.speed.x) < 0.1) playerProps.speed.x = 0\r\n    if (Math.abs(playerProps.speed.y) < 0.1) playerProps.speed.y = 0\r\n  }\r\n\r\n  window.addEventListener('keydown', e => {\r\n    if (e.code == 'KeyW') {\r\n      playerProps.speed.y = -speed\r\n    } else if (e.code == 'KeyS') {\r\n      playerProps.speed.y = speed\r\n    } else if (e.code == 'KeyA') {\r\n      playerProps.speed.x = -speed\r\n    } else if (e.code == 'KeyD') {\r\n      playerProps.speed.x = speed\r\n    }\r\n  })\r\n\r\n  let running = false\r\n  let lastTime = performance.now()\r\n  const start = () => {\r\n    console.warn('game started')\r\n    running = true\r\n    loop()\r\n  }\r\n  const stop = () => {\r\n    console.warn('game stopped')\r\n    running = false\r\n  }\r\n\r\n  const loop = t => {\r\n    const dt = t - lastTime\r\n\r\n    playerUpdate(dt)\r\n    print(`x:${player.x} y:${player.y}`)\r\n\r\n    lastTime = t\r\n\r\n    if (running) requestAnimationFrame(loop)\r\n  }\r\n\r\n  // export to global scope for debug\r\n  window.start = start\r\n  window.stop = stop\r\n\r\n\r\n  start()\r\n})\r\n\n\n//# sourceURL=webpack://our_simple_game/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
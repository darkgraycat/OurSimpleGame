/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*\r\n  Entry point\r\n*/\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  console.log('Game init')\r\n\r\n  const gameElement = document.querySelector('#game')\r\n  const statusElement = document.querySelector('#status')\r\n\r\n\r\n  const sceneElement = document.createElement('div')\r\n  sceneElement.style.position = 'relative'\r\n  sceneElement.style.left = '0px'\r\n  sceneElement.style.top = '0px'\r\n  sceneElement.style.width = '2000px'\r\n  sceneElement.style.height = '2000px'\r\n  sceneElement.style.backgroundColor = '#444'\r\n\r\n  const playerElement = document.createElement('div')\r\n  playerElement.style.position = 'absolute'\r\n  playerElement.style.left = '400px'\r\n  playerElement.style.top = '200px'\r\n  playerElement.style.width = '50px'\r\n  playerElement.style.height = '50px'\r\n  playerElement.style.backgroundColor = '#f88'\r\n\r\n  gameElement.appendChild(sceneElement)\r\n  sceneElement.appendChild(playerElement)\r\n\r\n  const move = (x, y) => {\r\n    playerElement.style.left = playerElement.offsetLeft + x + 'px'\r\n    playerElement.style.top = playerElement.offsetTop + y + 'px'\r\n  }\r\n\r\n  const print = (message) => {\r\n    statusElement.innerHTML = message\r\n  }\r\n\r\n  const playerProps = {\r\n    speed: {\r\n      x: 0,\r\n      y: 0\r\n    }\r\n  }\r\n\r\n  const airResist = 0.95\r\n  const speed = 0.5\r\n\r\n  const playerUpdate = delta => {\r\n    move(\r\n      delta * playerProps.speed.x,\r\n      delta * playerProps.speed.y\r\n    )\r\n    playerProps.speed.x *= airResist\r\n    playerProps.speed.y *= airResist\r\n\r\n    if (Math.abs(playerProps.speed.x) < 0.1) playerProps.speed.x = 0\r\n    if (Math.abs(playerProps.speed.y) < 0.1) playerProps.speed.y = 0\r\n  }\r\n\r\n  window.addEventListener('keydown', e => {\r\n    if (e.code == 'KeyW') {\r\n      playerProps.speed.y = -speed\r\n    } else if (e.code == 'KeyS') {\r\n      playerProps.speed.y = speed\r\n    } else if (e.code == 'KeyA') {\r\n      playerProps.speed.x = -speed\r\n    } else if (e.code == 'KeyD') {\r\n      playerProps.speed.x = speed\r\n    }\r\n  })\r\n\r\n  let running = false\r\n  let lastTime = performance.now()\r\n  const start = () => {\r\n    console.warn('game started')\r\n    running = true\r\n    loop()\r\n  }\r\n  const stop = () => {\r\n    console.warn('game stopped')\r\n    running = false\r\n  }\r\n\r\n  const loop = t => {\r\n    const dt = t - lastTime\r\n\r\n    playerUpdate(dt)\r\n    print(`x:${playerElement.offsetLeft} y:${playerElement.offsetTop}`)\r\n\r\n    lastTime = t\r\n\r\n    if (running) requestAnimationFrame(loop)\r\n  }\r\n\r\n  // export to global scope for debug\r\n  window.start = start\r\n  window.stop = stop\r\n\r\n\r\n  start()\r\n})\r\n\n\n//# sourceURL=webpack://our_simple_game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOMController.js":
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMController)
/* harmony export */ });
class DOMController {
  static renderStartScreen() {
    const body = document.querySelector("body");
    const startMenuScreen = document.createElement("div");
    const title = document.createElement("div");
    const instruction = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const startButton = document.createElement("button");
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    const checkBoxText = document.createElement("div");
    startMenuScreen.classList.toggle("start-menu");
    title.classList.toggle("title");
    instruction.classList.toggle("instruction");
    buttonContainer.classList.toggle("btn-cont");
    startButton.classList.toggle("start-btn");
    checkboxContainer.classList.toggle("ai");
    title.textContent = "Battleship";
    instruction.textContent = "Click the button below to start the game";
    startButton.textContent = "Start Game";
    checkbox.type = "checkbox";
    checkbox.id = "play-ai";
    checkbox.checked = true;
    checkBoxText.textContent = "Play with AI?";
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkBoxText);
    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(checkboxContainer);
    startMenuScreen.appendChild(title);
    startMenuScreen.appendChild(instruction);
    startMenuScreen.appendChild(buttonContainer);
    body.innerHTML = "";
    body.appendChild(startMenuScreen);
  }
  static renderGameScreen(size) {
    const body = document.querySelector("body");
    const gameScreen = document.createElement("div");
    const gameBoard = document.createElement("div");
    const infomation = document.createElement("div");
    const player = document.createElement("div");
    const playerName = document.createElement("span");
    const text = document.createElement("span");
    const comment = document.createElement("div");
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }
    gameScreen.classList.toggle("game-screen");
    gameBoard.classList.toggle("game-board");
    infomation.classList.toggle("information");
    player.classList.toggle("player");
    playerName.classList.toggle("player-name");
    comment.classList.toggle("comment");
    playerName.textContent = "Player 1";
    text.textContent = " turn";
    player.appendChild(playerName);
    player.appendChild(text);
    comment.textContent = "Click on any grid to play turn";
    infomation.appendChild(player);
    infomation.appendChild(comment);
    gameScreen.appendChild(gameBoard);
    gameScreen.appendChild(infomation);
    body.innerHTML = "";
    body.appendChild(gameScreen);
  }
  static renderPlaceShipScreen(size) {
    const placeShipScreen = document.createElement("div");
    const gameBoard = document.createElement("div");
    const comment = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const confirmBtn = document.createElement("button");
    const resetBtn = document.createElement("button");
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }
    placeShipScreen.classList.toggle("place-ship-screen");
    gameBoard.classList.toggle("game-board");
    comment.classList.toggle("comment");
    buttonContainer.classList.toggle("btn-cont");
    confirmBtn.classList.toggle("confirm");
    resetBtn.classList.toggle("reset");
    comment.innerHTML = '<span class="player-name">Player 1</span> Select any grid to place ship';
    confirmBtn.textContent = "Confirm Placement";
    resetBtn.textContent = "Reset";
    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(resetBtn);
    placeShipScreen.appendChild(gameBoard);
    placeShipScreen.appendChild(comment);
    placeShipScreen.appendChild(buttonContainer);
    const body = document.querySelector("body");
    body.innerHTML = "";
    body.appendChild(placeShipScreen);
  }
  static renderGameBoard(gameBoardArray) {
    let hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const size = gameBoardArray.length;
    const gameBoard = document.querySelector(".game-board");
    gameBoard.innerHTML = "";
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        if (gameBoardArray[i][j] === 0) grid.classList.toggle("miss");else if (gameBoardArray[i][j] === 1) grid.classList.toggle("hit");else if (typeof gameBoardArray[i][j] === "object") if (!hidden) grid.classList.toggle("ship");
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }
  }
  static addListenerGrid(type, handlerFunction) {
    const gameBoard = document.querySelectorAll(".grid");
    gameBoard.forEach(grid => grid.addEventListener(type, handlerFunction));
  }
  static showValidPlacement(gameBoard, size, coordinate, rotation) {
    const mid = Math.floor(size / 2);
    document.querySelectorAll(".grid.green").forEach(e => e.classList.toggle("green"));
    document.querySelectorAll(".grid.red").forEach(e => e.classList.toggle("red"));
    if (gameBoard.checkValidPlacement(size, rotation, coordinate)) {
      if (rotation === "h") {
        for (let i = coordinate[1] - mid; i < coordinate[1] + (size - mid); i += 1) {
          document.querySelector(`[data-row="${coordinate[0]}"][data-column="${i}"]`).classList.toggle("green");
        }
      } else {
        for (let i = coordinate[0] - mid; i < coordinate[0] + (size - mid); i += 1) {
          document.querySelector(`[data-row="${i}"][data-column="${coordinate[1]}"]`).classList.toggle("green");
        }
      }
    } else {
      document.querySelector(`[data-row="${coordinate[0]}"][data-column="${coordinate[1]}"]`).classList.toggle("red");
    }
  }
}

/***/ }),

/***/ "./src/modules/GameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/modules/Ship.js");

class Gameboard {
  constructor(size) {
    this.size = size;
    const gameboardArray = [];
    let i = 0;
    while (i < size) {
      const temp = [];
      let j = 0;
      while (j < size) {
        temp.push(-1);
        j += 1;
      }
      gameboardArray.push(temp);
      i += 1;
    }
    this.gameboardArray = gameboardArray;
  }
  getBoard() {
    return this.gameboardArray;
  }
  checkValidPlacement(size, rotation, coordinate) {
    const mid = Math.floor(size / 2);
    if (size > this.size) return false;
    if (coordinate[0] > this.size || coordinate[0] < 0 || coordinate[1] > this.size || coordinate[1] < 0) return false;
    if (rotation === "h") {
      if (coordinate[1] - mid < 0 || coordinate[1] + (size - mid) > this.size) return false;
      for (let i = coordinate[1] - mid; i < coordinate[1] + (size - mid); i += 1) {
        if (typeof this.gameboardArray[coordinate[0]][i] === "object") return false;
      }
    }
    if (rotation === "v") {
      if (coordinate[0] - mid < 0 || coordinate[0] + (size - mid) > this.size) return false;
      for (let i = coordinate[0] - mid; i < coordinate[0] + (size - mid); i += 1) {
        if (typeof this.gameboardArray[i][coordinate[1]] === "object") return false;
      }
    }
    return true;
  }
  placeShip(size, rotation, coordinate) {
    // size: size of ship, rotation: horizontal('h') or vertical('v'), coordinate: [x,y]
    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](size);
    const mid = Math.floor(size / 2);
    if (this.checkValidPlacement(size, rotation, coordinate)) {
      if (rotation === "h") {
        for (let i = coordinate[1] - mid; i < coordinate[1] + (size - mid); i += 1) {
          this.gameboardArray[coordinate[0]][i] = ship;
        }
      } else {
        for (let i = coordinate[0] - mid; i < coordinate[0] + (size - mid); i += 1) {
          this.gameboardArray[i][coordinate[1]] = ship;
        }
      }
      return true;
    }
    return false;
  }
  receiveHit(coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    if (this.gameboardArray[x][y] === 0 || this.gameboardArray[x][y] === 1) return "invalid";
    if (typeof this.gameboardArray[x][y] === "object") {
      this.gameboardArray[x][y].hit();
      this.gameboardArray[x][y] = 1;
      return "hit";
    }
    if (this.gameboardArray[x][y] === -1) {
      this.gameboardArray[x][y] = 0;
      return "miss";
    }
    return null;
  }
  isShipsSunk() {
    let i = 0;
    while (i < this.size) {
      let j = 0;
      while (j < this.size) {
        if (typeof this.gameboardArray[i][j] === "object") return false;
        j += 1;
      }
      i += 1;
    }
    return true;
  }
  autoPlaceShip(shipArray) {
    const temp = [...shipArray];
    let row = Math.floor(Math.random() * (this.size - 0)) + 0;
    let column = Math.floor(Math.random() * (this.size - 0)) + 0;
    let rotation = Math.floor(Math.random() * (10 - 0)) + 0 < 5 ? "h" : "v";
    while (temp.length !== 0) {
      while (!this.placeShip(temp.length, rotation, [row, column])) {
        row = Math.floor(Math.random() * (this.size - 0)) + 0;
        column = Math.floor(Math.random() * (this.size - 0)) + 0;
        rotation = Math.floor(Math.random() * (10 - 0)) + 0 < 5 ? "h" : "v";
      }
      temp[temp.length - 1] -= 1;
      if (temp[temp.length - 1] === 0) temp.pop();
    }
  }
  autoHit() {
    let row = Math.floor(Math.random() * (this.size - 0)) + 0;
    let column = Math.floor(Math.random() * (this.size - 0)) + 0;
    while (this.receiveHit([row, column]) === "invalid") {
      row = Math.floor(Math.random() * (this.size - 0)) + 0;
      column = Math.floor(Math.random() * (this.size - 0)) + 0;
    }
  }
}

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.health = length;
  }
  hit() {
    this.health -= 1;
  }
  isSunk() {
    return this.health === 0;
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMController.js */ "./src/modules/DOMController.js");
/* harmony import */ var _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameBoard.js */ "./src/modules/GameBoard.js");
/* eslint-disable no-use-before-define */


let player1 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
let player2 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
let ai = false;
let rotation = "h";
const shipArray = [2];
let temp = [...shipArray]; // index + 1 = size of ship, value = no of ship
let currentPlayer = player1;
startGame();
function restartGame() {
  player1 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
  player2 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
  temp = [...shipArray];
  currentPlayer = player1;
  startGame();
}
function hoverHandler(e) {
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].showValidPlacement(currentPlayer, temp.length, [+e.target.dataset.row, +e.target.dataset.column], rotation);
}
function clickHandler(e) {
  const size = temp.length;
  const row = +e.target.dataset.row;
  const column = +e.target.dataset.column;
  rotation = Math.floor(Math.random() * (10 - 0)) + 0 < 5 ? "h" : "v";
  const flag = currentPlayer.placeShip(size, rotation, [row, column]);
  if (flag) {
    temp[temp.length - 1] -= 1;
    if (temp[temp.length - 1] === 0) temp.pop();
  }
  placeShipHandler();
}
function hitHandler(e) {
  console.log(currentPlayer === player1 ? "player1" : "player2");
  const enemyPlayer = currentPlayer === player1 ? player2 : player1;
  enemyPlayer.receiveHit([+e.target.dataset.row, +e.target.dataset.column]);
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(enemyPlayer.getBoard(), true);
  setTimeout(() => {
    document.querySelector(".player-name").textContent = currentPlayer === player1 ? "Player 2" : "Player 1";
    if (ai === true) {
      currentPlayer.autoHit();
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(currentPlayer.getBoard());
      document.querySelector(".player-name").textContent = "AI";
      setTimeout(() => {
        _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(enemyPlayer.getBoard(), true);
        _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("click", hitHandler);
        document.querySelector(".player-name").textContent = "Player 1";
      }, 2000);
    } else {
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(currentPlayer.getBoard(), true);
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("click", hitHandler);
      togglePlayer();
    }
  }, 2000);
  if (player1.isShipsSunk()) {
    document.querySelector(".player").textContent = "Player 2 won, all ships destroyed";
    document.querySelector(".comment").textContent = "";
    setTimeout(startGame, 3000);
  } else if (player2.isShipsSunk()) {
    document.querySelector(".player").textContent = "Player 1 won, all ships destroyed";
    document.querySelector(".comment").textContent = "";
    setTimeout(restartGame, 5000);
  }
}
function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}
function gameScreenHandler() {
  if (ai === true || currentPlayer === player2) {
    _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameScreen(10);
    if (currentPlayer === player2) {
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(currentPlayer.getBoard(), true);
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("click", hitHandler);
      togglePlayer();
    } else {
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(player2.getBoard(), true);
      _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("click", hitHandler);
    }
  } else {
    temp = [...shipArray];
    togglePlayer();
    placeShipHandler();
  }
}
function resetBoard() {
  if (currentPlayer === player1) {
    player1 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
    currentPlayer = player1;
  } else {
    player2 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
    currentPlayer = player2;
  }
  temp = [...shipArray];
  placeShipHandler();
}
function placeShipHandler() {
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderPlaceShipScreen(10);
  if (currentPlayer === player1) document.querySelector("span.player-name").textContent = "Player 1";else document.querySelector("span.player-name").textContent = "Player 2";
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderGameBoard(currentPlayer.getBoard());
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("mouseover", hoverHandler);
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("touchmove", hoverHandler);
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListenerGrid("click", clickHandler);
  if (temp.length === 0) {
    document.querySelector(".confirm").addEventListener("click", gameScreenHandler);
    document.querySelector(".reset").addEventListener("click", resetBoard);
  }
}
function startGame() {
  _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderStartScreen();
  const startButton = document.querySelector(".start-btn");
  startButton.addEventListener("click", () => {
    ai = document.querySelector("input").checked;
    if (ai === true) player2.autoPlaceShip(shipArray);
    placeShipHandler();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUNvbnRyb2xsZXIge1xyXG4gIHN0YXRpYyByZW5kZXJTdGFydFNjcmVlbigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGNvbnN0IHN0YXJ0TWVudVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBjaGVja0JveFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIHN0YXJ0TWVudVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwic3RhcnQtbWVudVwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJ0aXRsZVwiKTtcclxuICAgIGluc3RydWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJpbnN0cnVjdGlvblwiKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYnRuLWNvbnRcIik7XHJcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwic3RhcnQtYnRuXCIpO1xyXG4gICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFpXCIpO1xyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XHJcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byBzdGFydCB0aGUgZ2FtZVwiO1xyXG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5pZCA9IFwicGxheS1haVwiO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICBjaGVja0JveFRleHQudGV4dENvbnRlbnQgPSBcIlBsYXkgd2l0aCBBST9cIjtcclxuXHJcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveFRleHQpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcbiAgICBzdGFydE1lbnVTY3JlZW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgc3RhcnRNZW51U2NyZWVuLmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcclxuICAgIHN0YXJ0TWVudVNjcmVlbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRNZW51U2NyZWVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJHYW1lU2NyZWVuKHNpemUpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGNvbnN0IGdhbWVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGluZm9tYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JpZFwiKTtcclxuICAgICAgICBncmlkLmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICBncmlkLmRhdGFzZXQuY29sdW1uID0gajtcclxuICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLXNjcmVlblwiKTtcclxuICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiZ2FtZS1ib2FyZFwiKTtcclxuICAgIGluZm9tYXRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImluZm9ybWF0aW9uXCIpO1xyXG4gICAgcGxheWVyLmNsYXNzTGlzdC50b2dnbGUoXCJwbGF5ZXJcIik7XHJcbiAgICBwbGF5ZXJOYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJwbGF5ZXItbmFtZVwiKTtcclxuICAgIGNvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbW1lbnRcIik7XHJcblxyXG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIjtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIiB0dXJuXCI7XHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XHJcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBjb21tZW50LnRleHRDb250ZW50ID0gXCJDbGljayBvbiBhbnkgZ3JpZCB0byBwbGF5IHR1cm5cIjtcclxuICAgIGluZm9tYXRpb24uYXBwZW5kQ2hpbGQocGxheWVyKTtcclxuICAgIGluZm9tYXRpb24uYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgICBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVCb2FyZCk7XHJcbiAgICBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGluZm9tYXRpb24pO1xyXG5cclxuICAgIGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyUGxhY2VTaGlwU2NyZWVuKHNpemUpIHtcclxuICAgIGNvbnN0IHBsYWNlU2hpcFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkXCIpO1xyXG4gICAgICAgIGdyaWQuZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBqO1xyXG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcFNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwicGxhY2Utc2hpcC1zY3JlZW5cIik7XHJcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtYm9hcmRcIik7XHJcbiAgICBjb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21tZW50XCIpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJidG4tY29udFwiKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNvbmZpcm1cIik7XHJcbiAgICByZXNldEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwicmVzZXRcIik7XHJcblxyXG4gICAgY29tbWVudC5pbm5lckhUTUwgPVxyXG4gICAgICAnPHNwYW4gY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAxPC9zcGFuPiBTZWxlY3QgYW55IGdyaWQgdG8gcGxhY2Ugc2hpcCc7XHJcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtIFBsYWNlbWVudFwiO1xyXG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XHJcblxyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcclxuXHJcbiAgICBwbGFjZVNoaXBTY3JlZW4uYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKTtcclxuICAgIHBsYWNlU2hpcFNjcmVlbi5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICAgIHBsYWNlU2hpcFNjcmVlbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocGxhY2VTaGlwU2NyZWVuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJHYW1lQm9hcmQoZ2FtZUJvYXJkQXJyYXksIGhpZGRlbiA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzaXplID0gZ2FtZUJvYXJkQXJyYXkubGVuZ3RoO1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWJvYXJkXCIpO1xyXG4gICAgZ2FtZUJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRcIik7XHJcbiAgICAgICAgaWYgKGdhbWVCb2FyZEFycmF5W2ldW2pdID09PSAwKSBncmlkLmNsYXNzTGlzdC50b2dnbGUoXCJtaXNzXCIpO1xyXG4gICAgICAgIGVsc2UgaWYgKGdhbWVCb2FyZEFycmF5W2ldW2pdID09PSAxKSBncmlkLmNsYXNzTGlzdC50b2dnbGUoXCJoaXRcIik7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGdhbWVCb2FyZEFycmF5W2ldW2pdID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgaWYgKCFoaWRkZW4pIGdyaWQuY2xhc3NMaXN0LnRvZ2dsZShcInNoaXBcIik7XHJcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgZ3JpZC5kYXRhc2V0LmNvbHVtbiA9IGo7XHJcbiAgICAgICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkTGlzdGVuZXJHcmlkKHR5cGUsIGhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkXCIpO1xyXG4gICAgZ2FtZUJvYXJkLmZvckVhY2goKGdyaWQpID0+IGdyaWQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyRnVuY3Rpb24pKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93VmFsaWRQbGFjZW1lbnQoZ2FtZUJvYXJkLCBzaXplLCBjb29yZGluYXRlLCByb3RhdGlvbikge1xyXG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihzaXplIC8gMik7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLmdyZWVuXCIpXHJcbiAgICAgIC5mb3JFYWNoKChlKSA9PiBlLmNsYXNzTGlzdC50b2dnbGUoXCJncmVlblwiKSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLnJlZFwiKVxyXG4gICAgICAuZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QudG9nZ2xlKFwicmVkXCIpKTtcclxuICAgIGlmIChnYW1lQm9hcmQuY2hlY2tWYWxpZFBsYWNlbWVudChzaXplLCByb3RhdGlvbiwgY29vcmRpbmF0ZSkpIHtcclxuICAgICAgaWYgKHJvdGF0aW9uID09PSBcImhcIikge1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaSA9IGNvb3JkaW5hdGVbMV0gLSBtaWQ7XHJcbiAgICAgICAgICBpIDwgY29vcmRpbmF0ZVsxXSArIChzaXplIC0gbWlkKTtcclxuICAgICAgICAgIGkgKz0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS1jb2x1bW49XCIke2l9XCJdYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVswXSAtIG1pZDtcclxuICAgICAgICAgIGkgPCBjb29yZGluYXRlWzBdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImdyZWVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGBbZGF0YS1yb3c9XCIke2Nvb3JkaW5hdGVbMF19XCJdW2RhdGEtY29sdW1uPVwiJHtjb29yZGluYXRlWzFdfVwiXWBcclxuICAgICAgICApXHJcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJyZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmRBcnJheSA9IFtdO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUgKGkgPCBzaXplKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuICAgICAgbGV0IGogPSAwO1xyXG4gICAgICB3aGlsZSAoaiA8IHNpemUpIHtcclxuICAgICAgICB0ZW1wLnB1c2goLTEpO1xyXG4gICAgICAgIGogKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBnYW1lYm9hcmRBcnJheS5wdXNoKHRlbXApO1xyXG4gICAgICBpICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYW1lYm9hcmRBcnJheSA9IGdhbWVib2FyZEFycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmRBcnJheTtcclxuICB9XHJcblxyXG4gIGNoZWNrVmFsaWRQbGFjZW1lbnQoc2l6ZSwgcm90YXRpb24sIGNvb3JkaW5hdGUpIHtcclxuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3Ioc2l6ZSAvIDIpO1xyXG4gICAgaWYgKHNpemUgPiB0aGlzLnNpemUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgY29vcmRpbmF0ZVswXSA+IHRoaXMuc2l6ZSB8fFxyXG4gICAgICBjb29yZGluYXRlWzBdIDwgMCB8fFxyXG4gICAgICBjb29yZGluYXRlWzFdID4gdGhpcy5zaXplIHx8XHJcbiAgICAgIGNvb3JkaW5hdGVbMV0gPCAwXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAocm90YXRpb24gPT09IFwiaFwiKSB7XHJcbiAgICAgIGlmIChjb29yZGluYXRlWzFdIC0gbWlkIDwgMCB8fCBjb29yZGluYXRlWzFdICsgKHNpemUgLSBtaWQpID4gdGhpcy5zaXplKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSBjb29yZGluYXRlWzFdIC0gbWlkO1xyXG4gICAgICAgIGkgPCBjb29yZGluYXRlWzFdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgIGkgKz0gMVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZWJvYXJkQXJyYXlbY29vcmRpbmF0ZVswXV1baV0gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocm90YXRpb24gPT09IFwidlwiKSB7XHJcbiAgICAgIGlmIChjb29yZGluYXRlWzBdIC0gbWlkIDwgMCB8fCBjb29yZGluYXRlWzBdICsgKHNpemUgLSBtaWQpID4gdGhpcy5zaXplKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSBjb29yZGluYXRlWzBdIC0gbWlkO1xyXG4gICAgICAgIGkgPCBjb29yZGluYXRlWzBdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgIGkgKz0gMVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZWJvYXJkQXJyYXlbaV1bY29vcmRpbmF0ZVsxXV0gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChzaXplLCByb3RhdGlvbiwgY29vcmRpbmF0ZSkge1xyXG4gICAgLy8gc2l6ZTogc2l6ZSBvZiBzaGlwLCByb3RhdGlvbjogaG9yaXpvbnRhbCgnaCcpIG9yIHZlcnRpY2FsKCd2JyksIGNvb3JkaW5hdGU6IFt4LHldXHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2l6ZSk7XHJcbiAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKHNpemUgLyAyKTtcclxuICAgIGlmICh0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2l6ZSwgcm90YXRpb24sIGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIGlmIChyb3RhdGlvbiA9PT0gXCJoXCIpIHtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IGkgPSBjb29yZGluYXRlWzFdIC0gbWlkO1xyXG4gICAgICAgICAgaSA8IGNvb3JkaW5hdGVbMV0gKyAoc2l6ZSAtIG1pZCk7XHJcbiAgICAgICAgICBpICs9IDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbY29vcmRpbmF0ZVswXV1baV0gPSBzaGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IGkgPSBjb29yZGluYXRlWzBdIC0gbWlkO1xyXG4gICAgICAgICAgaSA8IGNvb3JkaW5hdGVbMF0gKyAoc2l6ZSAtIG1pZCk7XHJcbiAgICAgICAgICBpICs9IDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbaV1bY29vcmRpbmF0ZVsxXV0gPSBzaGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVIaXQoY29vcmRpbmF0ZSkge1xyXG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZVsxXTtcclxuICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldID09PSAwIHx8IHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPT09IDEpXHJcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICB0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldLmhpdCgpO1xyXG4gICAgICB0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIFwiaGl0XCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9IDA7XHJcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNTaGlwc1N1bmsoKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IHRoaXMuc2l6ZSkge1xyXG4gICAgICBsZXQgaiA9IDA7XHJcbiAgICAgIHdoaWxlIChqIDwgdGhpcy5zaXplKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWVib2FyZEFycmF5W2ldW2pdID09PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaiArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXV0b1BsYWNlU2hpcChzaGlwQXJyYXkpIHtcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uc2hpcEFycmF5XTtcclxuICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5zaXplIC0gMCkpICsgMDtcclxuICAgIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5zaXplIC0gMCkpICsgMDtcclxuICAgIGxldCByb3RhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKSArIDAgPCA1ID8gXCJoXCIgOiBcInZcIjtcclxuICAgIHdoaWxlICh0ZW1wLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB3aGlsZSAoIXRoaXMucGxhY2VTaGlwKHRlbXAubGVuZ3RoLCByb3RhdGlvbiwgW3JvdywgY29sdW1uXSkpIHtcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5zaXplIC0gMCkpICsgMDtcclxuICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5zaXplIC0gMCkpICsgMDtcclxuICAgICAgICByb3RhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKSArIDAgPCA1ID8gXCJoXCIgOiBcInZcIjtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wW3RlbXAubGVuZ3RoIC0gMV0gLT0gMTtcclxuICAgICAgaWYgKHRlbXBbdGVtcC5sZW5ndGggLSAxXSA9PT0gMCkgdGVtcC5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF1dG9IaXQoKSB7XHJcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICB3aGlsZSAodGhpcy5yZWNlaXZlSGl0KFtyb3csIGNvbHVtbl0pID09PSBcImludmFsaWRcIikge1xyXG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5zaXplIC0gMCkpICsgMDtcclxuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aCA9PT0gMDtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9ET01Db250cm9sbGVyLmpzXCI7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9HYW1lQm9hcmQuanNcIjtcclxuXHJcbmxldCBwbGF5ZXIxID0gbmV3IEdhbWVCb2FyZCgxMCk7XHJcbmxldCBwbGF5ZXIyID0gbmV3IEdhbWVCb2FyZCgxMCk7XHJcblxyXG5sZXQgYWkgPSBmYWxzZTtcclxubGV0IHJvdGF0aW9uID0gXCJoXCI7XHJcbmNvbnN0IHNoaXBBcnJheSA9IFsyXTtcclxubGV0IHRlbXAgPSBbLi4uc2hpcEFycmF5XTsgLy8gaW5kZXggKyAxID0gc2l6ZSBvZiBzaGlwLCB2YWx1ZSA9IG5vIG9mIHNoaXBcclxubGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xyXG5zdGFydEdhbWUoKTtcclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIHBsYXllcjEgPSBuZXcgR2FtZUJvYXJkKDEwKTtcclxuICBwbGF5ZXIyID0gbmV3IEdhbWVCb2FyZCgxMCk7XHJcbiAgdGVtcCA9IFsuLi5zaGlwQXJyYXldO1xyXG4gIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xyXG4gIHN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob3ZlckhhbmRsZXIoZSkge1xyXG4gIERPTUNvbnRyb2xsZXIuc2hvd1ZhbGlkUGxhY2VtZW50KFxyXG4gICAgY3VycmVudFBsYXllcixcclxuICAgIHRlbXAubGVuZ3RoLFxyXG4gICAgWytlLnRhcmdldC5kYXRhc2V0LnJvdywgK2UudGFyZ2V0LmRhdGFzZXQuY29sdW1uXSxcclxuICAgIHJvdGF0aW9uXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBjb25zdCBzaXplID0gdGVtcC5sZW5ndGg7XHJcbiAgY29uc3Qgcm93ID0gK2UudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gIGNvbnN0IGNvbHVtbiA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcclxuICByb3RhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKSArIDAgPCA1ID8gXCJoXCIgOiBcInZcIjtcclxuICBjb25zdCBmbGFnID0gY3VycmVudFBsYXllci5wbGFjZVNoaXAoc2l6ZSwgcm90YXRpb24sIFtyb3csIGNvbHVtbl0pO1xyXG4gIGlmIChmbGFnKSB7XHJcbiAgICB0ZW1wW3RlbXAubGVuZ3RoIC0gMV0gLT0gMTtcclxuICAgIGlmICh0ZW1wW3RlbXAubGVuZ3RoIC0gMV0gPT09IDApIHRlbXAucG9wKCk7XHJcbiAgfVxyXG4gIHBsYWNlU2hpcEhhbmRsZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGl0SGFuZGxlcihlKSB7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IFwicGxheWVyMVwiIDogXCJwbGF5ZXIyXCIpO1xyXG4gIGNvbnN0IGVuZW15UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xyXG4gIGVuZW15UGxheWVyLnJlY2VpdmVIaXQoWytlLnRhcmdldC5kYXRhc2V0LnJvdywgK2UudGFyZ2V0LmRhdGFzZXQuY29sdW1uXSk7XHJcbiAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lQm9hcmQoZW5lbXlQbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lXCIpLnRleHRDb250ZW50ID1cclxuICAgICAgY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IFwiUGxheWVyIDJcIiA6IFwiUGxheWVyIDFcIjtcclxuICAgIGlmIChhaSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjdXJyZW50UGxheWVyLmF1dG9IaXQoKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lQm9hcmQoY3VycmVudFBsYXllci5nZXRCb2FyZCgpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZVwiKS50ZXh0Q29udGVudCA9IFwiQUlcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lQm9hcmQoZW5lbXlQbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XHJcbiAgICAgICAgRE9NQ29udHJvbGxlci5hZGRMaXN0ZW5lckdyaWQoXCJjbGlja1wiLCBoaXRIYW5kbGVyKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lXCIpLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKGN1cnJlbnRQbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwiY2xpY2tcIiwgaGl0SGFuZGxlcik7XHJcbiAgICAgIHRvZ2dsZVBsYXllcigpO1xyXG4gICAgfVxyXG4gIH0sIDIwMDApO1xyXG4gIGlmIChwbGF5ZXIxLmlzU2hpcHNTdW5rKCkpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpLnRleHRDb250ZW50ID1cclxuICAgICAgXCJQbGF5ZXIgMiB3b24sIGFsbCBzaGlwcyBkZXN0cm95ZWRcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudFwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBzZXRUaW1lb3V0KHN0YXJ0R2FtZSwgMzAwMCk7XHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIyLmlzU2hpcHNTdW5rKCkpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpLnRleHRDb250ZW50ID1cclxuICAgICAgXCJQbGF5ZXIgMSB3b24sIGFsbCBzaGlwcyBkZXN0cm95ZWRcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudFwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBzZXRUaW1lb3V0KHJlc3RhcnRHYW1lLCA1MDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVBsYXllcigpIHtcclxuICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lU2NyZWVuSGFuZGxlcigpIHtcclxuICBpZiAoYWkgPT09IHRydWUgfHwgY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xyXG4gICAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lU2NyZWVuKDEwKTtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIyKSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKGN1cnJlbnRQbGF5ZXIuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwiY2xpY2tcIiwgaGl0SGFuZGxlcik7XHJcbiAgICAgIHRvZ2dsZVBsYXllcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lQm9hcmQocGxheWVyMi5nZXRCb2FyZCgpLCB0cnVlKTtcclxuICAgICAgRE9NQ29udHJvbGxlci5hZGRMaXN0ZW5lckdyaWQoXCJjbGlja1wiLCBoaXRIYW5kbGVyKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcCA9IFsuLi5zaGlwQXJyYXldO1xyXG4gICAgdG9nZ2xlUGxheWVyKCk7XHJcbiAgICBwbGFjZVNoaXBIYW5kbGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKSB7XHJcbiAgICBwbGF5ZXIxID0gbmV3IEdhbWVCb2FyZCgxMCk7XHJcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyMiA9IG5ldyBHYW1lQm9hcmQoMTApO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjI7XHJcbiAgfVxyXG4gIHRlbXAgPSBbLi4uc2hpcEFycmF5XTtcclxuICBwbGFjZVNoaXBIYW5kbGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEhhbmRsZXIoKSB7XHJcbiAgRE9NQ29udHJvbGxlci5yZW5kZXJQbGFjZVNoaXBTY3JlZW4oMTApO1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4ucGxheWVyLW5hbWVcIikudGV4dENvbnRlbnQgPSBcIlBsYXllciAxXCI7XHJcbiAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5wbGF5ZXItbmFtZVwiKS50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIjtcclxuICBET01Db250cm9sbGVyLnJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyLmdldEJvYXJkKCkpO1xyXG4gIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwibW91c2VvdmVyXCIsIGhvdmVySGFuZGxlcik7XHJcbiAgRE9NQ29udHJvbGxlci5hZGRMaXN0ZW5lckdyaWQoXCJ0b3VjaG1vdmVcIiwgaG92ZXJIYW5kbGVyKTtcclxuICBET01Db250cm9sbGVyLmFkZExpc3RlbmVyR3JpZChcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZVNjcmVlbkhhbmRsZXIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRCb2FyZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgRE9NQ29udHJvbGxlci5yZW5kZXJTdGFydFNjcmVlbigpO1xyXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idG5cIik7XHJcblxyXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5jaGVja2VkO1xyXG4gICAgaWYgKGFpID09PSB0cnVlKSBwbGF5ZXIyLmF1dG9QbGFjZVNoaXAoc2hpcEFycmF5KTtcclxuICAgIHBsYWNlU2hpcEhhbmRsZXIoKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiRE9NQ29udHJvbGxlciIsInJlbmRlclN0YXJ0U2NyZWVuIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0TWVudVNjcmVlbiIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImluc3RydWN0aW9uIiwiYnV0dG9uQ29udGFpbmVyIiwic3RhcnRCdXR0b24iLCJjaGVja2JveENvbnRhaW5lciIsImNoZWNrYm94IiwiY2hlY2tCb3hUZXh0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJ0eXBlIiwiaWQiLCJjaGVja2VkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJyZW5kZXJHYW1lU2NyZWVuIiwic2l6ZSIsImdhbWVTY3JlZW4iLCJnYW1lQm9hcmQiLCJpbmZvbWF0aW9uIiwicGxheWVyIiwicGxheWVyTmFtZSIsInRleHQiLCJjb21tZW50IiwiaSIsImoiLCJncmlkIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsInJlbmRlclBsYWNlU2hpcFNjcmVlbiIsInBsYWNlU2hpcFNjcmVlbiIsImNvbmZpcm1CdG4iLCJyZXNldEJ0biIsInJlbmRlckdhbWVCb2FyZCIsImdhbWVCb2FyZEFycmF5IiwiaGlkZGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWRkTGlzdGVuZXJHcmlkIiwiaGFuZGxlckZ1bmN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1ZhbGlkUGxhY2VtZW50IiwiY29vcmRpbmF0ZSIsInJvdGF0aW9uIiwibWlkIiwiTWF0aCIsImZsb29yIiwiZSIsImNoZWNrVmFsaWRQbGFjZW1lbnQiLCJTaGlwIiwiR2FtZWJvYXJkIiwiY29uc3RydWN0b3IiLCJnYW1lYm9hcmRBcnJheSIsInRlbXAiLCJwdXNoIiwiZ2V0Qm9hcmQiLCJwbGFjZVNoaXAiLCJzaGlwIiwicmVjZWl2ZUhpdCIsIngiLCJ5IiwiaGl0IiwiaXNTaGlwc1N1bmsiLCJhdXRvUGxhY2VTaGlwIiwic2hpcEFycmF5IiwicmFuZG9tIiwicG9wIiwiYXV0b0hpdCIsImhlYWx0aCIsImlzU3VuayIsIkdhbWVCb2FyZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYWkiLCJjdXJyZW50UGxheWVyIiwic3RhcnRHYW1lIiwicmVzdGFydEdhbWUiLCJob3ZlckhhbmRsZXIiLCJ0YXJnZXQiLCJjbGlja0hhbmRsZXIiLCJmbGFnIiwicGxhY2VTaGlwSGFuZGxlciIsImhpdEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZW5lbXlQbGF5ZXIiLCJzZXRUaW1lb3V0IiwidG9nZ2xlUGxheWVyIiwiZ2FtZVNjcmVlbkhhbmRsZXIiLCJyZXNldEJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==
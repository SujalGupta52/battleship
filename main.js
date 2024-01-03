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
const shipArray = [2, 1, 1, 1, 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01Db250cm9sbGVyIHtcclxuICBzdGF0aWMgcmVuZGVyU3RhcnRTY3JlZW4oKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBjb25zdCBzdGFydE1lbnVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgY2hlY2tCb3hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBzdGFydE1lbnVTY3JlZW4uY2xhc3NMaXN0LnRvZ2dsZShcInN0YXJ0LW1lbnVcIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwidGl0bGVcIik7XHJcbiAgICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaW5zdHJ1Y3Rpb25cIik7XHJcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ0bi1jb250XCIpO1xyXG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInN0YXJ0LWJ0blwiKTtcclxuICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhaVwiKTtcclxuXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xyXG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gc3RhcnQgdGhlIGdhbWVcIjtcclxuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XHJcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgY2hlY2tib3guaWQgPSBcInBsYXktYWlcIjtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgY2hlY2tCb3hUZXh0LnRleHRDb250ZW50ID0gXCJQbGF5IHdpdGggQUk/XCI7XHJcblxyXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hUZXh0KTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG4gICAgc3RhcnRNZW51U2NyZWVuLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHN0YXJ0TWVudVNjcmVlbi5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XHJcbiAgICBzdGFydE1lbnVTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHN0YXJ0TWVudVNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyR2FtZVNjcmVlbihzaXplKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbmZvbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRcIik7XHJcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgZ3JpZC5kYXRhc2V0LmNvbHVtbiA9IGo7XHJcbiAgICAgICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiZ2FtZS1zY3JlZW5cIik7XHJcbiAgICBnYW1lQm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtYm9hcmRcIik7XHJcbiAgICBpbmZvbWF0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJpbmZvcm1hdGlvblwiKTtcclxuICAgIHBsYXllci5jbGFzc0xpc3QudG9nZ2xlKFwicGxheWVyXCIpO1xyXG4gICAgcGxheWVyTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwicGxheWVyLW5hbWVcIik7XHJcbiAgICBjb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21tZW50XCIpO1xyXG5cclxuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBcIlBsYXllciAxXCI7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCIgdHVyblwiO1xyXG4gICAgcGxheWVyLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xyXG4gICAgcGxheWVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgY29tbWVudC50ZXh0Q29udGVudCA9IFwiQ2xpY2sgb24gYW55IGdyaWQgdG8gcGxheSB0dXJuXCI7XHJcbiAgICBpbmZvbWF0aW9uLmFwcGVuZENoaWxkKHBsYXllcik7XHJcbiAgICBpbmZvbWF0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xyXG4gICAgZ2FtZVNjcmVlbi5hcHBlbmRDaGlsZChnYW1lQm9hcmQpO1xyXG4gICAgZ2FtZVNjcmVlbi5hcHBlbmRDaGlsZChpbmZvbWF0aW9uKTtcclxuXHJcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVTY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclBsYWNlU2hpcFNjcmVlbihzaXplKSB7XHJcbiAgICBjb25zdCBwbGFjZVNoaXBTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JpZFwiKTtcclxuICAgICAgICBncmlkLmRhdGFzZXQucm93ID0gaTtcclxuICAgICAgICBncmlkLmRhdGFzZXQuY29sdW1uID0gajtcclxuICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBTY3JlZW4uY2xhc3NMaXN0LnRvZ2dsZShcInBsYWNlLXNoaXAtc2NyZWVuXCIpO1xyXG4gICAgZ2FtZUJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLWJvYXJkXCIpO1xyXG4gICAgY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tbWVudFwiKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYnRuLWNvbnRcIik7XHJcbiAgICBjb25maXJtQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb25maXJtXCIpO1xyXG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInJlc2V0XCIpO1xyXG5cclxuICAgIGNvbW1lbnQuaW5uZXJIVE1MID1cclxuICAgICAgJzxzcGFuIGNsYXNzPVwicGxheWVyLW5hbWVcIj5QbGF5ZXIgMTwvc3Bhbj4gU2VsZWN0IGFueSBncmlkIHRvIHBsYWNlIHNoaXAnO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybSBQbGFjZW1lbnRcIjtcclxuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xyXG5cclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ0bik7XHJcblxyXG4gICAgcGxhY2VTaGlwU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVCb2FyZCk7XHJcbiAgICBwbGFjZVNoaXBTY3JlZW4uYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgICBwbGFjZVNoaXBTY3JlZW4uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHBsYWNlU2hpcFNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyR2FtZUJvYXJkKGdhbWVCb2FyZEFycmF5LCBoaWRkZW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IGdhbWVCb2FyZEFycmF5Lmxlbmd0aDtcclxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ib2FyZFwiKTtcclxuICAgIGdhbWVCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBncmlkLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkXCIpO1xyXG4gICAgICAgIGlmIChnYW1lQm9hcmRBcnJheVtpXVtqXSA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QudG9nZ2xlKFwibWlzc1wiKTtcclxuICAgICAgICBlbHNlIGlmIChnYW1lQm9hcmRBcnJheVtpXVtqXSA9PT0gMSkgZ3JpZC5jbGFzc0xpc3QudG9nZ2xlKFwiaGl0XCIpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBnYW1lQm9hcmRBcnJheVtpXVtqXSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgIGlmICghaGlkZGVuKSBncmlkLmNsYXNzTGlzdC50b2dnbGUoXCJzaGlwXCIpO1xyXG4gICAgICAgIGdyaWQuZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBqO1xyXG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZExpc3RlbmVyR3JpZCh0eXBlLCBoYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZFwiKTtcclxuICAgIGdhbWVCb2FyZC5mb3JFYWNoKChncmlkKSA9PiBncmlkLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlckZ1bmN0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2hvd1ZhbGlkUGxhY2VtZW50KGdhbWVCb2FyZCwgc2l6ZSwgY29vcmRpbmF0ZSwgcm90YXRpb24pIHtcclxuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3Ioc2l6ZSAvIDIpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC5ncmVlblwiKVxyXG4gICAgICAuZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JlZW5cIikpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC5yZWRcIilcclxuICAgICAgLmZvckVhY2goKGUpID0+IGUuY2xhc3NMaXN0LnRvZ2dsZShcInJlZFwiKSk7XHJcbiAgICBpZiAoZ2FtZUJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2l6ZSwgcm90YXRpb24sIGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIGlmIChyb3RhdGlvbiA9PT0gXCJoXCIpIHtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IGkgPSBjb29yZGluYXRlWzFdIC0gbWlkO1xyXG4gICAgICAgICAgaSA8IGNvb3JkaW5hdGVbMV0gKyAoc2l6ZSAtIG1pZCk7XHJcbiAgICAgICAgICBpICs9IDFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke2Nvb3JkaW5hdGVbMF19XCJdW2RhdGEtY29sdW1uPVwiJHtpfVwiXWApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JlZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgaSA9IGNvb3JkaW5hdGVbMF0gLSBtaWQ7XHJcbiAgICAgICAgICBpIDwgY29vcmRpbmF0ZVswXSArIChzaXplIC0gbWlkKTtcclxuICAgICAgICAgIGkgKz0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2x1bW49XCIke2Nvb3JkaW5hdGVbMV19XCJdYClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIHdoaWxlIChpIDwgc2l6ZSkge1xyXG4gICAgICBjb25zdCB0ZW1wID0gW107XHJcbiAgICAgIGxldCBqID0gMDtcclxuICAgICAgd2hpbGUgKGogPCBzaXplKSB7XHJcbiAgICAgICAgdGVtcC5wdXNoKC0xKTtcclxuICAgICAgICBqICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgZ2FtZWJvYXJkQXJyYXkucHVzaCh0ZW1wKTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXkgPSBnYW1lYm9hcmRBcnJheTtcclxuICB9XHJcblxyXG4gIGdldEJvYXJkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkQXJyYXk7XHJcbiAgfVxyXG5cclxuICBjaGVja1ZhbGlkUGxhY2VtZW50KHNpemUsIHJvdGF0aW9uLCBjb29yZGluYXRlKSB7XHJcbiAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKHNpemUgLyAyKTtcclxuICAgIGlmIChzaXplID4gdGhpcy5zaXplKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNvb3JkaW5hdGVbMF0gPiB0aGlzLnNpemUgfHxcclxuICAgICAgY29vcmRpbmF0ZVswXSA8IDAgfHxcclxuICAgICAgY29vcmRpbmF0ZVsxXSA+IHRoaXMuc2l6ZSB8fFxyXG4gICAgICBjb29yZGluYXRlWzFdIDwgMFxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKHJvdGF0aW9uID09PSBcImhcIikge1xyXG4gICAgICBpZiAoY29vcmRpbmF0ZVsxXSAtIG1pZCA8IDAgfHwgY29vcmRpbmF0ZVsxXSArIChzaXplIC0gbWlkKSA+IHRoaXMuc2l6ZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVsxXSAtIG1pZDtcclxuICAgICAgICBpIDwgY29vcmRpbmF0ZVsxXSArIChzaXplIC0gbWlkKTtcclxuICAgICAgICBpICs9IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWVib2FyZEFycmF5W2Nvb3JkaW5hdGVbMF1dW2ldID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdGF0aW9uID09PSBcInZcIikge1xyXG4gICAgICBpZiAoY29vcmRpbmF0ZVswXSAtIG1pZCA8IDAgfHwgY29vcmRpbmF0ZVswXSArIChzaXplIC0gbWlkKSA+IHRoaXMuc2l6ZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVswXSAtIG1pZDtcclxuICAgICAgICBpIDwgY29vcmRpbmF0ZVswXSArIChzaXplIC0gbWlkKTtcclxuICAgICAgICBpICs9IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWVib2FyZEFycmF5W2ldW2Nvb3JkaW5hdGVbMV1dID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoc2l6ZSwgcm90YXRpb24sIGNvb3JkaW5hdGUpIHtcclxuICAgIC8vIHNpemU6IHNpemUgb2Ygc2hpcCwgcm90YXRpb246IGhvcml6b250YWwoJ2gnKSBvciB2ZXJ0aWNhbCgndicpLCBjb29yZGluYXRlOiBbeCx5XVxyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNpemUpO1xyXG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihzaXplIC8gMik7XHJcbiAgICBpZiAodGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNpemUsIHJvdGF0aW9uLCBjb29yZGluYXRlKSkge1xyXG4gICAgICBpZiAocm90YXRpb24gPT09IFwiaFwiKSB7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVsxXSAtIG1pZDtcclxuICAgICAgICAgIGkgPCBjb29yZGluYXRlWzFdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmdhbWVib2FyZEFycmF5W2Nvb3JkaW5hdGVbMF1dW2ldID0gc2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVswXSAtIG1pZDtcclxuICAgICAgICAgIGkgPCBjb29yZGluYXRlWzBdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmdhbWVib2FyZEFycmF5W2ldW2Nvb3JkaW5hdGVbMV1dID0gc2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlSGl0KGNvb3JkaW5hdGUpIHtcclxuICAgIGNvbnN0IHggPSBjb29yZGluYXRlWzBdO1xyXG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XHJcbiAgICBpZiAodGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9PT0gMCB8fCB0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldID09PSAxKVxyXG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XS5oaXQoKTtcclxuICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9IDE7XHJcbiAgICAgIHJldHVybiBcImhpdFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPSAwO1xyXG4gICAgICByZXR1cm4gXCJtaXNzXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUgKGkgPCB0aGlzLnNpemUpIHtcclxuICAgICAgbGV0IGogPSAwO1xyXG4gICAgICB3aGlsZSAoaiA8IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lYm9hcmRBcnJheVtpXVtqXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGogKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGF1dG9QbGFjZVNoaXAoc2hpcEFycmF5KSB7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLnNoaXBBcnJheV07XHJcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICBsZXQgcm90YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAwKSkgKyAwIDwgNSA/IFwiaFwiIDogXCJ2XCI7XHJcbiAgICB3aGlsZSAodGVtcC5sZW5ndGggIT09IDApIHtcclxuICAgICAgd2hpbGUgKCF0aGlzLnBsYWNlU2hpcCh0ZW1wLmxlbmd0aCwgcm90YXRpb24sIFtyb3csIGNvbHVtbl0pKSB7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICAgICAgcm90YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAwKSkgKyAwIDwgNSA/IFwiaFwiIDogXCJ2XCI7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcFt0ZW1wLmxlbmd0aCAtIDFdIC09IDE7XHJcbiAgICAgIGlmICh0ZW1wW3RlbXAubGVuZ3RoIC0gMV0gPT09IDApIHRlbXAucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdXRvSGl0KCkge1xyXG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnNpemUgLSAwKSkgKyAwO1xyXG4gICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnNpemUgLSAwKSkgKyAwO1xyXG4gICAgd2hpbGUgKHRoaXMucmVjZWl2ZUhpdChbcm93LCBjb2x1bW5dKSA9PT0gXCJpbnZhbGlkXCIpIHtcclxuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuc2l6ZSAtIDApKSArIDA7XHJcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnNpemUgLSAwKSkgKyAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGggPT09IDA7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvRE9NQ29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL21vZHVsZXMvR2FtZUJvYXJkLmpzXCI7XHJcblxyXG5sZXQgcGxheWVyMSA9IG5ldyBHYW1lQm9hcmQoMTApO1xyXG5sZXQgcGxheWVyMiA9IG5ldyBHYW1lQm9hcmQoMTApO1xyXG5cclxubGV0IGFpID0gZmFsc2U7XHJcbmxldCByb3RhdGlvbiA9IFwiaFwiO1xyXG5jb25zdCBzaGlwQXJyYXkgPSBbMiwgMSwgMSwgMSwgMV07XHJcbmxldCB0ZW1wID0gWy4uLnNoaXBBcnJheV07IC8vIGluZGV4ICsgMSA9IHNpemUgb2Ygc2hpcCwgdmFsdWUgPSBubyBvZiBzaGlwXHJcbmxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcclxuc3RhcnRHYW1lKCk7XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuICBwbGF5ZXIxID0gbmV3IEdhbWVCb2FyZCgxMCk7XHJcbiAgcGxheWVyMiA9IG5ldyBHYW1lQm9hcmQoMTApO1xyXG4gIHRlbXAgPSBbLi4uc2hpcEFycmF5XTtcclxuICBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcclxuICBzdGFydEdhbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaG92ZXJIYW5kbGVyKGUpIHtcclxuICBET01Db250cm9sbGVyLnNob3dWYWxpZFBsYWNlbWVudChcclxuICAgIGN1cnJlbnRQbGF5ZXIsXHJcbiAgICB0ZW1wLmxlbmd0aCxcclxuICAgIFsrZS50YXJnZXQuZGF0YXNldC5yb3csICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtbl0sXHJcbiAgICByb3RhdGlvblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgY29uc3Qgc2l6ZSA9IHRlbXAubGVuZ3RoO1xyXG4gIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5kYXRhc2V0LnJvdztcclxuICBjb25zdCBjb2x1bW4gPSArZS50YXJnZXQuZGF0YXNldC5jb2x1bW47XHJcbiAgcm90YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAwKSkgKyAwIDwgNSA/IFwiaFwiIDogXCJ2XCI7XHJcbiAgY29uc3QgZmxhZyA9IGN1cnJlbnRQbGF5ZXIucGxhY2VTaGlwKHNpemUsIHJvdGF0aW9uLCBbcm93LCBjb2x1bW5dKTtcclxuICBpZiAoZmxhZykge1xyXG4gICAgdGVtcFt0ZW1wLmxlbmd0aCAtIDFdIC09IDE7XHJcbiAgICBpZiAodGVtcFt0ZW1wLmxlbmd0aCAtIDFdID09PSAwKSB0ZW1wLnBvcCgpO1xyXG4gIH1cclxuICBwbGFjZVNoaXBIYW5kbGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpdEhhbmRsZXIoZSkge1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBcInBsYXllcjFcIiA6IFwicGxheWVyMlwiKTtcclxuICBjb25zdCBlbmVteVBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBwbGF5ZXIyIDogcGxheWVyMTtcclxuICBlbmVteVBsYXllci5yZWNlaXZlSGl0KFsrZS50YXJnZXQuZGF0YXNldC5yb3csICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtbl0pO1xyXG4gIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKGVuZW15UGxheWVyLmdldEJvYXJkKCksIHRydWUpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZVwiKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBcIlBsYXllciAyXCIgOiBcIlBsYXllciAxXCI7XHJcbiAgICBpZiAoYWkgPT09IHRydWUpIHtcclxuICAgICAgY3VycmVudFBsYXllci5hdXRvSGl0KCk7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKGN1cnJlbnRQbGF5ZXIuZ2V0Qm9hcmQoKSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWVcIikudGV4dENvbnRlbnQgPSBcIkFJXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKGVuZW15UGxheWVyLmdldEJvYXJkKCksIHRydWUpO1xyXG4gICAgICAgIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwiY2xpY2tcIiwgaGl0SGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZVwiKS50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIjtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBET01Db250cm9sbGVyLnJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyLmdldEJvYXJkKCksIHRydWUpO1xyXG4gICAgICBET01Db250cm9sbGVyLmFkZExpc3RlbmVyR3JpZChcImNsaWNrXCIsIGhpdEhhbmRsZXIpO1xyXG4gICAgICB0b2dnbGVQbGF5ZXIoKTtcclxuICAgIH1cclxuICB9LCAyMDAwKTtcclxuICBpZiAocGxheWVyMS5pc1NoaXBzU3VuaygpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiUGxheWVyIDIgd29uLCBhbGwgc2hpcHMgZGVzdHJveWVkXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgc2V0VGltZW91dChzdGFydEdhbWUsIDMwMDApO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyMi5pc1NoaXBzU3VuaygpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKS50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiUGxheWVyIDEgd29uLCBhbGwgc2hpcHMgZGVzdHJveWVkXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgc2V0VGltZW91dChyZXN0YXJ0R2FtZSwgNTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQbGF5ZXIoKSB7XHJcbiAgY3VycmVudFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBwbGF5ZXIyIDogcGxheWVyMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZVNjcmVlbkhhbmRsZXIoKSB7XHJcbiAgaWYgKGFpID09PSB0cnVlIHx8IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcclxuICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZVNjcmVlbigxMCk7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xyXG4gICAgICBET01Db250cm9sbGVyLnJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyLmdldEJvYXJkKCksIHRydWUpO1xyXG4gICAgICBET01Db250cm9sbGVyLmFkZExpc3RlbmVyR3JpZChcImNsaWNrXCIsIGhpdEhhbmRsZXIpO1xyXG4gICAgICB0b2dnbGVQbGF5ZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIucmVuZGVyR2FtZUJvYXJkKHBsYXllcjIuZ2V0Qm9hcmQoKSwgdHJ1ZSk7XHJcbiAgICAgIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwiY2xpY2tcIiwgaGl0SGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXAgPSBbLi4uc2hpcEFycmF5XTtcclxuICAgIHRvZ2dsZVBsYXllcigpO1xyXG4gICAgcGxhY2VTaGlwSGFuZGxlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xyXG4gICAgcGxheWVyMSA9IG5ldyBHYW1lQm9hcmQoMTApO1xyXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcjIgPSBuZXcgR2FtZUJvYXJkKDEwKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIyO1xyXG4gIH1cclxuICB0ZW1wID0gWy4uLnNoaXBBcnJheV07XHJcbiAgcGxhY2VTaGlwSGFuZGxlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBIYW5kbGVyKCkge1xyXG4gIERPTUNvbnRyb2xsZXIucmVuZGVyUGxhY2VTaGlwU2NyZWVuKDEwKTtcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnBsYXllci1uYW1lXCIpLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xyXG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4ucGxheWVyLW5hbWVcIikudGV4dENvbnRlbnQgPSBcIlBsYXllciAyXCI7XHJcbiAgRE9NQ29udHJvbGxlci5yZW5kZXJHYW1lQm9hcmQoY3VycmVudFBsYXllci5nZXRCb2FyZCgpKTtcclxuICBET01Db250cm9sbGVyLmFkZExpc3RlbmVyR3JpZChcIm1vdXNlb3ZlclwiLCBob3ZlckhhbmRsZXIpO1xyXG4gIERPTUNvbnRyb2xsZXIuYWRkTGlzdGVuZXJHcmlkKFwidG91Y2htb3ZlXCIsIGhvdmVySGFuZGxlcik7XHJcbiAgRE9NQ29udHJvbGxlci5hZGRMaXN0ZW5lckdyaWQoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVTY3JlZW5IYW5kbGVyKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0Qm9hcmQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gIERPTUNvbnRyb2xsZXIucmVuZGVyU3RhcnRTY3JlZW4oKTtcclxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xyXG5cclxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuY2hlY2tlZDtcclxuICAgIGlmIChhaSA9PT0gdHJ1ZSkgcGxheWVyMi5hdXRvUGxhY2VTaGlwKHNoaXBBcnJheSk7XHJcbiAgICBwbGFjZVNoaXBIYW5kbGVyKCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRPTUNvbnRyb2xsZXIiLCJyZW5kZXJTdGFydFNjcmVlbiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydE1lbnVTY3JlZW4iLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJpbnN0cnVjdGlvbiIsImJ1dHRvbkNvbnRhaW5lciIsInN0YXJ0QnV0dG9uIiwiY2hlY2tib3hDb250YWluZXIiLCJjaGVja2JveCIsImNoZWNrQm94VGV4dCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRleHRDb250ZW50IiwidHlwZSIsImlkIiwiY2hlY2tlZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwicmVuZGVyR2FtZVNjcmVlbiIsInNpemUiLCJnYW1lU2NyZWVuIiwiZ2FtZUJvYXJkIiwiaW5mb21hdGlvbiIsInBsYXllciIsInBsYXllck5hbWUiLCJ0ZXh0IiwiY29tbWVudCIsImkiLCJqIiwiZ3JpZCIsImRhdGFzZXQiLCJyb3ciLCJjb2x1bW4iLCJyZW5kZXJQbGFjZVNoaXBTY3JlZW4iLCJwbGFjZVNoaXBTY3JlZW4iLCJjb25maXJtQnRuIiwicmVzZXRCdG4iLCJyZW5kZXJHYW1lQm9hcmQiLCJnYW1lQm9hcmRBcnJheSIsImhpZGRlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFkZExpc3RlbmVyR3JpZCIsImhhbmRsZXJGdW5jdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dWYWxpZFBsYWNlbWVudCIsImNvb3JkaW5hdGUiLCJyb3RhdGlvbiIsIm1pZCIsIk1hdGgiLCJmbG9vciIsImUiLCJjaGVja1ZhbGlkUGxhY2VtZW50IiwiU2hpcCIsIkdhbWVib2FyZCIsImNvbnN0cnVjdG9yIiwiZ2FtZWJvYXJkQXJyYXkiLCJ0ZW1wIiwicHVzaCIsImdldEJvYXJkIiwicGxhY2VTaGlwIiwic2hpcCIsInJlY2VpdmVIaXQiLCJ4IiwieSIsImhpdCIsImlzU2hpcHNTdW5rIiwiYXV0b1BsYWNlU2hpcCIsInNoaXBBcnJheSIsInJhbmRvbSIsInBvcCIsImF1dG9IaXQiLCJoZWFsdGgiLCJpc1N1bmsiLCJHYW1lQm9hcmQiLCJwbGF5ZXIxIiwicGxheWVyMiIsImFpIiwiY3VycmVudFBsYXllciIsInN0YXJ0R2FtZSIsInJlc3RhcnRHYW1lIiwiaG92ZXJIYW5kbGVyIiwidGFyZ2V0IiwiY2xpY2tIYW5kbGVyIiwiZmxhZyIsInBsYWNlU2hpcEhhbmRsZXIiLCJoaXRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImVuZW15UGxheWVyIiwic2V0VGltZW91dCIsInRvZ2dsZVBsYXllciIsImdhbWVTY3JlZW5IYW5kbGVyIiwicmVzZXRCb2FyZCJdLCJzb3VyY2VSb290IjoiIn0=
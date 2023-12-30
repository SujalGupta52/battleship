/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    }
    if (rotation === "v") {
      if (coordinate[0] - mid < 0 || coordinate[0] + (size - mid) > this.size) return false;
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
          this.gameboardArray[i][coordinate[0]] = ship;
        }
      }
    }
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
/* harmony import */ var _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GameBoard.js */ "./src/modules/GameBoard.js");

const player1 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"](8);
const player2 = new _modules_GameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"](8);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFFZCxNQUFNQyxTQUFTLENBQUM7RUFDN0JDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNoQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUVoQixNQUFNQyxjQUFjLEdBQUcsRUFBRTtJQUN6QixJQUFJQyxDQUFDLEdBQUcsQ0FBQztJQUNULE9BQU9BLENBQUMsR0FBR0YsSUFBSSxFQUFFO01BQ2YsTUFBTUcsSUFBSSxHQUFHLEVBQUU7TUFDZixJQUFJQyxDQUFDLEdBQUcsQ0FBQztNQUNULE9BQU9BLENBQUMsR0FBR0osSUFBSSxFQUFFO1FBQ2ZHLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2JELENBQUMsSUFBSSxDQUFDO01BQ1I7TUFDQUgsY0FBYyxDQUFDSSxJQUFJLENBQUNGLElBQUksQ0FBQztNQUN6QkQsQ0FBQyxJQUFJLENBQUM7SUFDUjtJQUVBLElBQUksQ0FBQ0QsY0FBYyxHQUFHQSxjQUFjO0VBQ3RDO0VBRUFLLFFBQVFBLENBQUEsRUFBRztJQUNULE9BQU8sSUFBSSxDQUFDTCxjQUFjO0VBQzVCO0VBRUFNLG1CQUFtQkEsQ0FBQ1AsSUFBSSxFQUFFUSxRQUFRLEVBQUVDLFVBQVUsRUFBRTtJQUM5QyxNQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUlBLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDbEMsSUFDRVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1QsSUFBSSxJQUN6QlMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFDakJBLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNULElBQUksSUFDekJTLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBRWpCLE9BQU8sS0FBSztJQUNkLElBQUlELFFBQVEsS0FBSyxHQUFHLEVBQUU7TUFDcEIsSUFBSUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxHQUFHLEdBQUcsQ0FBQyxJQUFJRCxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUlULElBQUksR0FBR1UsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDVixJQUFJLEVBQ3JFLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQUlRLFFBQVEsS0FBSyxHQUFHLEVBQUU7TUFDcEIsSUFBSUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxHQUFHLEdBQUcsQ0FBQyxJQUFJRCxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUlULElBQUksR0FBR1UsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDVixJQUFJLEVBQ3JFLE9BQU8sS0FBSztJQUNoQjtJQUVBLE9BQU8sSUFBSTtFQUNiO0VBRUFhLFNBQVNBLENBQUNiLElBQUksRUFBRVEsUUFBUSxFQUFFQyxVQUFVLEVBQUU7SUFDcEM7SUFDQSxNQUFNSyxJQUFJLEdBQUcsSUFBSWpCLGdEQUFJLENBQUNHLElBQUksQ0FBQztJQUMzQixNQUFNVSxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksSUFBSSxDQUFDTyxtQkFBbUIsQ0FBQ1AsSUFBSSxFQUFFUSxRQUFRLEVBQUVDLFVBQVUsQ0FBQyxFQUFFO01BQ3hELElBQUlELFFBQVEsS0FBSyxHQUFHLEVBQUU7UUFDcEIsS0FDRSxJQUFJTixDQUFDLEdBQUdPLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBR0MsR0FBRyxFQUMzQlIsQ0FBQyxHQUFHTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUlULElBQUksR0FBR1UsR0FBRyxDQUFDLEVBQ2hDUixDQUFDLElBQUksQ0FBQyxFQUNOO1VBQ0EsSUFBSSxDQUFDRCxjQUFjLENBQUNRLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDUCxDQUFDLENBQUMsR0FBR1ksSUFBSTtRQUM5QztNQUNGLENBQUMsTUFBTTtRQUNMLEtBQ0UsSUFBSVosQ0FBQyxHQUFHTyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUdDLEdBQUcsRUFDM0JSLENBQUMsR0FBR08sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJVCxJQUFJLEdBQUdVLEdBQUcsQ0FBQyxFQUNoQ1IsQ0FBQyxJQUFJLENBQUMsRUFDTjtVQUNBLElBQUksQ0FBQ0QsY0FBYyxDQUFDQyxDQUFDLENBQUMsQ0FBQ08sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdLLElBQUk7UUFDOUM7TUFDRjtJQUNGO0VBQ0Y7RUFFQUMsVUFBVUEsQ0FBQ04sVUFBVSxFQUFFO0lBQ3JCLE1BQU1PLENBQUMsR0FBR1AsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNUSxDQUFDLEdBQUdSLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkIsSUFBSSxJQUFJLENBQUNSLGNBQWMsQ0FBQ2UsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNlLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ3BFLE9BQU8sU0FBUztJQUNsQixJQUFJLE9BQU8sSUFBSSxDQUFDaEIsY0FBYyxDQUFDZSxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO01BQ2pELElBQUksQ0FBQ2hCLGNBQWMsQ0FBQ2UsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUMvQixJQUFJLENBQUNqQixjQUFjLENBQUNlLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRyxDQUFDO01BQzdCLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSSxJQUFJLENBQUNoQixjQUFjLENBQUNlLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUNwQyxJQUFJLENBQUNoQixjQUFjLENBQUNlLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRyxDQUFDO01BQzdCLE9BQU8sTUFBTTtJQUNmO0lBQ0EsT0FBTyxJQUFJO0VBQ2I7RUFFQUUsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSWpCLENBQUMsR0FBRyxDQUFDO0lBQ1QsT0FBT0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0YsSUFBSSxFQUFFO01BQ3BCLElBQUlJLENBQUMsR0FBRyxDQUFDO01BQ1QsT0FBT0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0osSUFBSSxFQUFFO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRSxPQUFPLEtBQUs7UUFDL0RBLENBQUMsSUFBSSxDQUFDO01BQ1I7TUFDQUYsQ0FBQyxJQUFJLENBQUM7SUFDUjtJQUNBLE9BQU8sSUFBSTtFQUNiO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDdkdlLE1BQU1MLElBQUksQ0FBQztFQUN0QkUsV0FBV0EsQ0FBQ3FCLE1BQU0sRUFBRTtJQUNoQixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLE1BQU0sR0FBR0QsTUFBTTtFQUN4QjtFQUVBRixHQUFHQSxDQUFBLEVBQUc7SUFDRixJQUFJLENBQUNHLE1BQU0sSUFBSSxDQUFDO0VBQ3BCO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNMLE9BQU8sSUFBSSxDQUFDRCxNQUFNLEtBQUssQ0FBQztFQUM1QjtBQUNKOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDO0FBRS9DLE1BQU1HLE9BQU8sR0FBRyxJQUFJRCw2REFBUyxDQUFDLENBQUMsQ0FBQztBQUNoQyxNQUFNRSxPQUFPLEdBQUcsSUFBSUYsNkRBQVMsQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZEFycmF5ID0gW107XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IHNpemUpIHtcclxuICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG4gICAgICBsZXQgaiA9IDA7XHJcbiAgICAgIHdoaWxlIChqIDwgc2l6ZSkge1xyXG4gICAgICAgIHRlbXAucHVzaCgtMSk7XHJcbiAgICAgICAgaiArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGdhbWVib2FyZEFycmF5LnB1c2godGVtcCk7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdhbWVib2FyZEFycmF5ID0gZ2FtZWJvYXJkQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRCb2FyZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZEFycmF5O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tWYWxpZFBsYWNlbWVudChzaXplLCByb3RhdGlvbiwgY29vcmRpbmF0ZSkge1xyXG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihzaXplIC8gMik7XHJcbiAgICBpZiAoc2l6ZSA+IHRoaXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKFxyXG4gICAgICBjb29yZGluYXRlWzBdID4gdGhpcy5zaXplIHx8XHJcbiAgICAgIGNvb3JkaW5hdGVbMF0gPCAwIHx8XHJcbiAgICAgIGNvb3JkaW5hdGVbMV0gPiB0aGlzLnNpemUgfHxcclxuICAgICAgY29vcmRpbmF0ZVsxXSA8IDBcclxuICAgIClcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHJvdGF0aW9uID09PSBcImhcIikge1xyXG4gICAgICBpZiAoY29vcmRpbmF0ZVsxXSAtIG1pZCA8IDAgfHwgY29vcmRpbmF0ZVsxXSArIChzaXplIC0gbWlkKSA+IHRoaXMuc2l6ZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdGF0aW9uID09PSBcInZcIikge1xyXG4gICAgICBpZiAoY29vcmRpbmF0ZVswXSAtIG1pZCA8IDAgfHwgY29vcmRpbmF0ZVswXSArIChzaXplIC0gbWlkKSA+IHRoaXMuc2l6ZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoc2l6ZSwgcm90YXRpb24sIGNvb3JkaW5hdGUpIHtcclxuICAgIC8vIHNpemU6IHNpemUgb2Ygc2hpcCwgcm90YXRpb246IGhvcml6b250YWwoJ2gnKSBvciB2ZXJ0aWNhbCgndicpLCBjb29yZGluYXRlOiBbeCx5XVxyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNpemUpO1xyXG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihzaXplIC8gMik7XHJcbiAgICBpZiAodGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNpemUsIHJvdGF0aW9uLCBjb29yZGluYXRlKSkge1xyXG4gICAgICBpZiAocm90YXRpb24gPT09IFwiaFwiKSB7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVsxXSAtIG1pZDtcclxuICAgICAgICAgIGkgPCBjb29yZGluYXRlWzFdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmdhbWVib2FyZEFycmF5W2Nvb3JkaW5hdGVbMF1dW2ldID0gc2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBpID0gY29vcmRpbmF0ZVswXSAtIG1pZDtcclxuICAgICAgICAgIGkgPCBjb29yZGluYXRlWzBdICsgKHNpemUgLSBtaWQpO1xyXG4gICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmdhbWVib2FyZEFycmF5W2ldW2Nvb3JkaW5hdGVbMF1dID0gc2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY2VpdmVIaXQoY29vcmRpbmF0ZSkge1xyXG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZVsxXTtcclxuICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldID09PSAwIHx8IHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPT09IDEpXHJcbiAgICAgIHJldHVybiBcImludmFsaWRcIjtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICB0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldLmhpdCgpO1xyXG4gICAgICB0aGlzLmdhbWVib2FyZEFycmF5W3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIFwiaGl0XCI7XHJcbiAgICB9IFxyXG4gICAgaWYgKHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0gPSAwO1xyXG4gICAgICByZXR1cm4gXCJtaXNzXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUgKGkgPCB0aGlzLnNpemUpIHtcclxuICAgICAgbGV0IGogPSAwO1xyXG4gICAgICB3aGlsZSAoaiA8IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lYm9hcmRBcnJheVtpXVtqXSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGogKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoID09PSAwO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL21vZHVsZXMvR2FtZUJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBwbGF5ZXIxID0gbmV3IEdhbWVCb2FyZCg4KTtcclxuY29uc3QgcGxheWVyMiA9IG5ldyBHYW1lQm9hcmQoOCk7XHJcbiJdLCJuYW1lcyI6WyJTaGlwIiwiR2FtZWJvYXJkIiwiY29uc3RydWN0b3IiLCJzaXplIiwiZ2FtZWJvYXJkQXJyYXkiLCJpIiwidGVtcCIsImoiLCJwdXNoIiwiZ2V0Qm9hcmQiLCJjaGVja1ZhbGlkUGxhY2VtZW50Iiwicm90YXRpb24iLCJjb29yZGluYXRlIiwibWlkIiwiTWF0aCIsImZsb29yIiwicGxhY2VTaGlwIiwic2hpcCIsInJlY2VpdmVIaXQiLCJ4IiwieSIsImhpdCIsImlzU2hpcHNTdW5rIiwibGVuZ3RoIiwiaGVhbHRoIiwiaXNTdW5rIiwiR2FtZUJvYXJkIiwicGxheWVyMSIsInBsYXllcjIiXSwic291cmNlUm9vdCI6IiJ9
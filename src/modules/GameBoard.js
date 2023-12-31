import Ship from "./Ship.js";

export default class Gameboard {
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
    if (
      coordinate[0] > this.size ||
      coordinate[0] < 0 ||
      coordinate[1] > this.size ||
      coordinate[1] < 0
    )
      return false;

    if (rotation === "h") {
      if (coordinate[1] - mid < 0 || coordinate[1] + (size - mid) > this.size)
        return false;

      for (
        let i = coordinate[1] - mid;
        i < coordinate[1] + (size - mid);
        i += 1
      ) {
        if (typeof this.gameboardArray[coordinate[0]][i] === "object")
          return false;
      }
    }

    if (rotation === "v") {
      if (coordinate[0] - mid < 0 || coordinate[0] + (size - mid) > this.size)
        return false;

      for (
        let i = coordinate[0] - mid;
        i < coordinate[0] + (size - mid);
        i += 1
      ) {
        if (typeof this.gameboardArray[i][coordinate[1]] === "object")
          return false;
      }
    }

    return true;
  }

  placeShip(size, rotation, coordinate) {
    // size: size of ship, rotation: horizontal('h') or vertical('v'), coordinate: [x,y]
    const ship = new Ship(size);
    const mid = Math.floor(size / 2);
    if (this.checkValidPlacement(size, rotation, coordinate)) {
      if (rotation === "h") {
        for (
          let i = coordinate[1] - mid;
          i < coordinate[1] + (size - mid);
          i += 1
        ) {
          this.gameboardArray[coordinate[0]][i] = ship;
        }
      } else {
        for (
          let i = coordinate[0] - mid;
          i < coordinate[0] + (size - mid);
          i += 1
        ) {
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
    if (this.gameboardArray[x][y] === 0 || this.gameboardArray[x][y] === 1)
      return "invalid";
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

import Ship from "./Ship";

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
    }

    if (rotation === "v") {
      if (coordinate[0] - mid < 0 || coordinate[0] + (size - mid) > this.size)
        return false;
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
          this.gameboardArray[i][coordinate[0]] = ship;
        }
      }
    }
  }

  receiveHit(coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    if (this.gameboardArray[x][y] === 0 || this.gameboardArray[x][y] === 1)
      return false;

    if (typeof this.gameboardArray[x][y] === "object") {
      this.gameboardArray[x][y].hit();
      this.gameboardArray[x][y] = 1;
    } else {
      this.gameboardArray[x][y] = 0;
    }
    return true;
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

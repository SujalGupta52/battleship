import Ship from "./Ship";

export default class Gameboard {
  constructor(size) {
    this.size = size;

    const gameboardArray = [];
    let i = 0;
    while (i < 8) {
      const temp = [];
      let j = 0;
      while (j < 8) {
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

}

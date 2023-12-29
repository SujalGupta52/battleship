import Gameboard from "../modules/GameBoard";

let gameboard = new Gameboard(8);
let mockBoard = (() => {
  let i = 0;
  let mockArray = [];
  while (i < 8) {
    let temp = [];
    let j = 0;
    while (j < 8) {
      temp.push(-1);
      j += 1;
    }
    mockArray.push(temp);
    i += 1;
  }
  return mockArray;
})();

test("Gameboard object created", () => {
  expect(gameboard).not.toBeUndefined();
});

test("Gameboard array created", () => {
  expect(gameboard.getBoard()).toEqual(mockBoard);
});

describe("Valid placement", () => {

    test("Coordinate out of board", () => {
      expect(gameboard.checkValidPlacement(5, "h", [0, 9])).toBe(false);
    });

    test("Horizontal: Ship is placed in valid coordinate", () => {
        expect(gameboard.checkValidPlacement(5, "h", [4, 4])).toBe(true);
    });

    test("Vertical: Ship is placed in valid coordinate", () => {
          expect(gameboard.checkValidPlacement(5, "v", [4, 4])).toBe(true);
    });
});



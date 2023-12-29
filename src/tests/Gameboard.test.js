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

test("Ship placement", () => {
  gameboard.placeShip(5, "v", [4, 4]);
  console.log(gameboard.getBoard());
});

describe("Hit test", () => {
  test("Hit missed", () => {
    gameboard.receiveHit([0, 0]);
    expect(gameboard.getBoard()[0][0]).toBe(0); //-1 for water, 0 for missed hit and 1 for damage
  });

  test("Ship hit", () => {
    gameboard.receiveHit([4, 4]);
    expect(gameboard.getBoard()[4][4]).toBe(1);
    console.log(gameboard.getBoard());
  });

  test("Hit in same place twice", () => {
    expect(gameboard.receiveHit([0, 0])).toBe(false);
  });
});
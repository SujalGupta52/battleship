import Gameboard from "../modules/GameBoard";

let gameboard = new Gameboard();

test('Gameboard object created', () => {
    expect(gameboard).not.toBeUndefined();
});

test('Gameboard array created', () => {
    let i = 0;
    let mockArray = []
    while(i < 8) {
        let temp = [];
        let j = 0;
        while(j < 8) {
            temp.push(-1);
            j += 1;
        }
        mockArray.push(temp);
        i += 1;
    }
    expect(gameboard.getBoard()).toEqual(mockArray);
});



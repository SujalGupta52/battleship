import Ship from  '../modules/Ship.js'

const ship = new Ship(2)

test('Object created successfully', () => {
    expect(ship).not.toBeUndefined();
});

test('Hit ship', () => {
    ship.hit();
    expect(ship.health).toBe(1);
});

test('Ship sunk', () => {
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
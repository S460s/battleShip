import Ship from '../src/Ship';

describe('Test Ship Class', () => {
	test('isSunk method', () => {
		const ship = new Ship(2);
		ship.hit();
		expect(ship.isSunk()).toBe(false);
		ship.hit();
		expect(ship.isSunk()).toBe(true);
	});
});

import Ship from '../src/Ship';

describe('Test Ship Class', () => {
	test('Make ship with length 3', () => {
		const ship = new Ship(3);
		expect(ship.length).toBe(3);
	});

	test('isSunk method', () => {
		const ship = new Ship(2);
		ship.hit();
		expect(ship.isSunck()).toBe(false);
		ship.hit();
		expect(ship.isSunck()).toBe(true);
	});
});

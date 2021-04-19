import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

describe('Gameboard class', () => {
	test('Place small ship', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(1);
		gameboard.placeShip(ship, [0, 0, 'v']);
		expect(gameboard.board[0][0]).toBe(0);
		expect(gameboard.board[0][1]).toBeFalsy();
	});

	test('Pass impossible coords', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(2);
		expect(gameboard.validateCoords(ship, [9, 9, 'v'])).toBe(false);
		expect(gameboard.validateCoords(ship, [9, 2, 'h'])).toBe(true);
		expect(gameboard.validateCoords(ship, [10, 2, 'h'])).toBe(false);
	});
});

import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

describe('Gameboard class', () => {
	test('Place small ship', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(1);
		gameboard.placeShip(ship, [1, 1, 'v']);
		expect(gameboard.board[1][1]).toBe(0);
		expect(gameboard.board[0][1]).toBeFalsy();
	});

	test('Pass impossible coords', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(2);
		expect(gameboard.validateCoords(ship, [10, 10, 'v'])).toBe(false);
	});
});

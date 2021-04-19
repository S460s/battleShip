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
		expect(gameboard.placeShip(new Ship(3), [4, 11, 'h'])).toBe(false);
		expect(gameboard.placeShip(new Ship(3), [4, 7, 'h'])).toBe(false);
		expect(gameboard.placeShip(new Ship(3), [1, 7, 'v'])).toBe(true);
	});

	test('Place longer ship', () => {
		const gameboard = new Gameboard();
		expect(gameboard.placeShip(new Ship(2), [5, 4, 'h'])).toBe(true);
	});

	test('Check for placed ships', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(3);

		expect(gameboard.placeShip(ship, [5, 5, 'h'])).toBe(true);
		expect(gameboard.board[5][5]).toBe(0);
		expect(gameboard.board[5][6]).toBe(0);
		expect(gameboard.board[5][6]).toBe(0);

		gameboard.placeShip(new Ship(1), [2, 2, 'h']);
		expect(gameboard.board[2][2]).toBe(1);
	});
});

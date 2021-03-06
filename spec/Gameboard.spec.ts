import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

describe('Gameboard class', () => {
	test('Place small ship', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(1);
		gameboard.placeShip(ship, { x: 0, y: 0, flag: 'v' });
		expect(gameboard.board[0][0]).toBe(0);
		expect(gameboard.board[0][1]).toBeFalsy();
	});

	test('Pass impossible coords', () => {
		const gameboard = new Gameboard();
		expect(
			gameboard.validateCoords(new Ship(2), { y: 0, x: 7, flag: 'h' })
		).toBe(true);
	});

	test('Place longer ship', () => {
		const gameboard = new Gameboard();
		expect(gameboard.placeShip(new Ship(2), { y: 5, x: 4, flag: 'v' })).toBe(
			true
		);
	});

	test('Check for placed ships', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(3);

		expect(gameboard.placeShip(ship, { y: 5, x: 5, flag: 'h' })).toBe(true);
		expect(gameboard.board[5][5]).toBe(0);
		expect(gameboard.board[5][6]).toBe(0);
		expect(gameboard.board[5][7]).toBe(0);

		gameboard.placeShip(new Ship(1), { y: 2, x: 2, flag: 'h' });
		expect(gameboard.board[2][2]).toBe(1);
	});

	test('Hit a ship', () => {
		const gameboard = new Gameboard();
		expect(gameboard.placeShip(new Ship(1), { y: 1, x: 1, flag: 'h' })).toBe(
			true
		);
		gameboard.recieveAttack({ y: 1, x: 1 });
		expect(gameboard.board[1][1]).toBe('s');
	});

	test('Sunk a bigger ship', () => {
		const gameboard = new Gameboard();
		expect(gameboard.placeShip(new Ship(2), { y: 2, x: 2, flag: 'h' })).toBe(
			true
		);

		gameboard.recieveAttack({ y: 2, x: 2 });
		expect(gameboard.board[2][2]).toBe('0h');

		gameboard.recieveAttack({ y: 2, x: 3 });
		expect(gameboard.board[2][3]).toBe('s');
	});

	test('Missed shot', () => {
		const gameboard = new Gameboard();
		gameboard.recieveAttack({ y: 2, x: 3 });
		expect(gameboard.board[2][3]).toBe('m');
	});

	test('ValidataAttack', () => {
		const gameboard = new Gameboard();

		expect(gameboard.validateAttack({ y: 3, x: 3 })).toBe(true);
		gameboard.recieveAttack({ y: 3, x: 3 });
		expect(gameboard.validateAttack({ y: 3, x: 3 })).toBe(false);
		expect(gameboard.validateAttack({ y: 10, x: 3 })).toBe(false);
	});

	test('Placing ships on same coords', () => {
		const gameboard = new Gameboard();
		const ship = new Ship(1);
		gameboard.placeShip(ship, { y: 3, x: 3, flag: 'v' });
		expect(gameboard.board[3][3]).toBe(0);
		expect(gameboard.validateCoords(ship, { y: 3, x: 3, flag: 'v' })).toBe(
			false
		);
	});
});

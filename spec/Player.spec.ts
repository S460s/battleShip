import Gameboard from '../src/Gameboard';
import Player from '../src/Player';
import Ship from '../src/Ship';

describe('Player Class', () => {
	test('Attack enemy', () => {
		const enemyGameboard = new Gameboard();
		const p1 = new Player();
		enemyGameboard.placeShip(new Ship(1), { y: 3, x: 3, flag: 'v' });
		p1.enemyGameboard = enemyGameboard;
		expect(p1.attack({ x: 12, y: 3 })).toBe(false);
		p1.attack({ y: 3, x: 3 });
		expect(p1.isWinner()).toBe(true);
	});

	test('Place Ships', () => {
		const gameboard = new Gameboard();
		const p1 = new Player();
		p1.enemyGameboard = gameboard;
		p1.placeShip({ x: 3, y: 4, flag: 'h' });
		p1.placeShip({ x: 3, y: 4, flag: 'h' });
		expect(p1.allShipsPlaced()).toBe(false);
	});

	test('Place all ships', () => {
		const gameboard = new Gameboard();
		const p1 = new Player();
		p1.enemyGameboard = gameboard;
		p1.placeShip({ x: 3, y: 4, flag: 'h' });
		p1.placeShip({ x: 5, y: 3, flag: 'h' });
		expect(p1.allShipsPlaced()).toBe(true);
	});
});

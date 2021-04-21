import Gameboard from '../src/Gameboard';
import Player from '../src/Player';

describe('Player Class', () => {
	test('Attack enemy', () => {
		const enemyGameboard = new Gameboard();
		const p1 = new Player();
		p1.enemyGameboard = enemyGameboard;
		expect(p1.attack({ x: 12, y: 3 })).toBe(false);
	});

	test('Place Ships', () => {
		const gameboard = new Gameboard();
		const p1 = new Player();
		p1.enemyGameboard = gameboard;
		p1.placeShip({ x: 3, y: 4, flag: 'h' });
		p1.placeShip({ x: 3, y: 4, flag: 'h' });
		expect(p1.allShipsPlaced()).toBe(false);
	});
});

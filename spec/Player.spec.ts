import Gameboard from '../src/Gameboard';
import Player from '../src/Player';

describe('Player Class', () => {
	test('Attack enemy', () => {
		const enemyGameboard = new Gameboard();
		const p1 = new Player();
		expect(p1.attack(enemyGameboard, { x: 12, y: 3 })).toBe(false);
	});
});

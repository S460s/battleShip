/* import Ship, { ShipInterface } from './Ship';
import Gameboard from './Gameboard';
import Player from './Player';
 */

/* function gamelooptest() {
	const gameboard = new Gameboard();
	const p1 = new Player();
	p1.enemyGameboard = gameboard;
	while (!p1.allShipsPlaced()) {
		const y = prompt('Enter y: ');
		const x = prompt('Enter x: ');
		const f = prompt('Horizontaly (h) or Vertically (v) ?');
		if (x && y && (f === 'h' || f === 'v')) {
			if (p1.placeShip({ x: parseInt(x), y: parseInt(y), flag: f })) {
				console.log(p1.gameboard.board);
			}
		}
	}
} 

 gamelooptest(); */

function add(a: number, b: number): number {
	return a + b;
}

export default add;

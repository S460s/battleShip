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

import { playerDOM, PCDOM } from './dom';
import Gameboard from './Gameboard';
import Player, { PCplayer } from './Player';

function gameloop() {
	const board: HTMLDivElement = document.querySelector('#playerBoard')!;
	const pcboard: HTMLDivElement = document.querySelector('#pcBoard')!;

	const player = new Player();
	const pcPlayer = new PCplayer();

	player.enemyGameboard = pcPlayer.gameboard;
	pcPlayer.enemyGameboard = player.gameboard;

	const p1DOM = new playerDOM(player, board);
	const pcDOM = new PCDOM(pcPlayer, pcboard);
	p1DOM.renderBoard();
	pcDOM.renderBoard();
}

gameloop();

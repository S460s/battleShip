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

/* import { playerDOM, PCDOM } from './dom';*/
import Gameboard from './Gameboard';
import Player, { PCplayer } from './Player';

/* renderBoard(): void {
	const board = this.PCplayer.gameboard.board;
	this.PCplayer.PCplaceShips();
	console.log(this.PCplayer.gameboard.board);

	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const cell = document.createElement('div');
			cell.className = 'square';
			cell.addEventListener('click', this.recieveAttack.bind(this));

			cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
			this.container.appendChild(cell);
		});
	});

	this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
}
} */

function renderBoard(container: HTMLDivElement, player: Player): void {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const cell = document.createElement('div');
			cell.className = 'square';
			//cell.addEventListener('click', this.recieveAttack.bind(this));
			cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
			container.appendChild(cell);
		});
	});
	container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
}

function gameloop() {
	const board: HTMLDivElement = document.querySelector('#playerBoard')!;
	const pcboard: HTMLDivElement = document.querySelector('#pcBoard')!;

	const player = new Player();
	const pcPlayer = new PCplayer();

	player.enemyGameboard = pcPlayer.gameboard;
	pcPlayer.enemyGameboard = player.gameboard;

	renderBoard(board, player);
}

gameloop();

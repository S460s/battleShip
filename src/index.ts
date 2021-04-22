import Gameboard, { coordsInterface } from './Gameboard';
import Player, { PCplayer } from './Player';
const board: HTMLDivElement = document.querySelector('#playerBoard')!;
const pcboard: HTMLDivElement = document.querySelector('#pcBoard')!;

function chooseColor(square: string | number): string {
	let color: string = 'white';
	if (typeof square === 'string') {
		if (square[square.length - 1] === 'h') {
			color = 'tomato';
		} else if (square[square.length - 1] === 's') {
			color = 'red';
		} else if (square[square.length - 1] === 'm') {
			color = 'gray';
		}
	} else if (typeof square === 'number') {
		color = 'blue';
	}
	return color;
}

function updateBoard(container: HTMLDivElement, player: Player): void {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const index = Number(`${index1}` + `${index2}`);
			const child = container.children[index] as HTMLDivElement;
			child.style.backgroundColor = chooseColor(square);
		});
	});

	if (player.allShipsPlaced() && player.type === 'player') {
		const pcBoard = document.getElementById('pcBoard')!;
		pcBoard.style.display = 'grid';
	}
}

function PCrecieveAttack(e: MouseEvent, player: Player) {
	const target = e.target as HTMLDivElement;
	const coords = JSON.parse(target.dataset.coord as string) as coordsInterface;
	if (
		player.gameboard.board[+coords.y][+coords.x] === '' ||
		typeof player.gameboard.board[+coords.y][+coords.x] === 'number'
	) {
		player.gameboard.recieveAttack({ x: +coords.x, y: +coords.y });
		updateBoard(pcboard, player);
	}
}

function placePlayerShip(
	e: MouseEvent,
	player: Player,
	flag: 'v' | 'h',
	container: HTMLDivElement
): void {
	if (!player.allShipsPlaced()) {
		const target = e.target as HTMLDivElement;
		const coords = JSON.parse(
			target.dataset.coord as string
		) as coordsInterface;
		player.placeShip({ y: +coords.y, x: +coords.x, flag });
		updateBoard(container, player);
	}
}

function renderBoard(container: HTMLDivElement, player: Player): void {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const cell = document.createElement('div');
			cell.className = 'square';
			if (player.type === 'player') {
				cell.addEventListener('click', (e) => {
					placePlayerShip(e, player, 'v', container);
				});
			} else if (player.type === 'PC') {
				cell.addEventListener('click', (e) => {
					PCrecieveAttack(e, player);
				});
			}
			cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
			container.appendChild(cell);
		});
	});
	container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
}

/* recieveAttack(e: MouseEvent) {
	const target = e.target as HTMLDivElement;
	const coords = JSON.parse(
		target.dataset.coord as string
	) as coordsInterface;
	console.log(this.PCplayer.gameboard.board);
	this.PCplayer.gameboard.recieveAttack({ x: +coords.x, y: +coords.y });

	this.updateBoard();
	this.PCplayer.PCattack();
	this.updateEnemy();
} */

function gameloop() {
	const player = new Player();
	const pcPlayer = new PCplayer();

	player.enemyGameboard = pcPlayer.gameboard;
	pcPlayer.enemyGameboard = player.gameboard;

	renderBoard(board, player);
	renderBoard(pcboard, pcPlayer);

	pcPlayer.PCplaceShips();
	updateBoard(pcboard, pcPlayer);
}

gameloop();

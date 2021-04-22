import Gameboard, { coordsInterface } from './Gameboard';
import Player, { PCplayer } from './Player';

/* placeShip(e: MouseEvent): void {
	const target = e.target as HTMLDivElement;
	const coords = JSON.parse(
		target.dataset.coord as string
	) as coordsInterface;
	this.player.placeShip({ y: +coords.y, x: +coords.x, flag: 'h' });

	this.updateBoard();

	console.log(this.player.gameboard.board);
} */

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

const updateBoard = (
	container: HTMLDivElement,
	player: Player,
	type: 'player' | 'PC'
): void => {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const index = Number(`${index1}` + `${index2}`);
			const child = container.children[index] as HTMLDivElement;
			child.style.backgroundColor = chooseColor(square);
		});
	});

	if (player.allShipsPlaced() && type === 'player') {
		const pcBoard = document.getElementById('pcBoard')!;
		pcBoard.style.display = 'grid';
	}
};

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
		updateBoard(container, player, 'player');
	}
}

function clearDiv(container: HTMLDivElement): void {
	while (container.childNodes.length) {
		container.removeChild(container.lastChild!);
	}
}

function renderBoard(
	container: HTMLDivElement,
	player: Player,
	type: 'player' | 'PC'
): void {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const cell = document.createElement('div');
			cell.className = 'square';
			if (type === 'player') {
				cell.addEventListener('click', (e) => {
					placePlayerShip(e, player, 'v', container);
				});
			}
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

	renderBoard(board, player, 'player');
	renderBoard(pcboard, pcPlayer, 'PC');
	pcPlayer.PCplaceShips();
	updateBoard(pcboard, pcPlayer, 'PC');
}

gameloop();

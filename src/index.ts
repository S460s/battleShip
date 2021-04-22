import Gameboard from './Gameboard';
import Player, { PCplayer } from './Player';

/* public updateBoard() {
	const board = this.player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const index = Number(`${index1}` + `${index2}`);
			const child = this.container.children[index] as HTMLDivElement;
	});
	if (this.player.allShipsPlaced()) {
		this.renderBoard();
		pcBoardDiv.style.display = 'grid';
	}
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

function updateBoard(container: HTMLDivElement, player: Player): void {
	const board = player.gameboard.board;
	board.forEach((row: string[] | number[], index1: number) => {
		row.forEach((square: string | number, index2: number) => {
			const index = Number(`${index1}` + `${index2}`);
			const child = container.children[index] as HTMLDivElement;
			child.style.backgroundColor = chooseColor(square);
		});
	});
}

function clearDiv(container: HTMLDivElement): void {
	while (container.childNodes.length) {
		container.removeChild(container.lastChild!);
	}
}

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
	renderBoard(pcboard, pcPlayer);
	pcPlayer.PCplaceShips();
	updateBoard(pcboard, pcPlayer);
}

gameloop();

import Gameboard, { coordsInterface } from './Gameboard';
import Player, { PCplayer } from './Player';
const board: HTMLDivElement = document.querySelector('#playerBoard')!;
const pcboard: HTMLDivElement = document.querySelector('#pcBoard')!;
const subTitle: HTMLElement = document.querySelector('h2')!;

//todo (1) => Refactor
const player = new Player();
const pcPlayer = new PCplayer();

function checkWinner(player: Player) {
	if (player.isWinner()) {
		subTitle.textContent = `${player.type} winns!`;
	}
}

function chooseColor(square: string | number, type: string): string {
	let color: string = 'white';
	if (typeof square === 'string') {
		if (square[square.length - 1] === 'h') {
			color = 'tomato';
		} else if (square[square.length - 1] === 's') {
			color = 'red';
		} else if (square[square.length - 1] === 'm') {
			color = 'gray';
		}
	} else if (typeof square === 'number' && type === 'player') {
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
			child.style.backgroundColor = chooseColor(square, player.type);
		});
	});
}

function PCrecieveAttack(e: MouseEvent, pcPlayer: PCplayer) {
	const target = e.target as HTMLDivElement;
	const coords = JSON.parse(target.dataset.coord as string) as coordsInterface;
	if (
		pcPlayer.gameboard.board[+coords.y][+coords.x] === '' ||
		typeof pcPlayer.gameboard.board[+coords.y][+coords.x] === 'number'
	) {
		pcPlayer.gameboard.recieveAttack({ x: +coords.x, y: +coords.y });
		updateBoard(pcboard, pcPlayer);
		checkWinner(player);
		pcPlayer.PCattack();
		checkWinner(pcPlayer);
		//todo (1)
		updateBoard(board, player);
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
	if (player.allShipsPlaced()) {
		const pcBoard = document.getElementById('pcBoard')!;
		pcBoard.style.display = 'grid';
		subTitle.innerText = 'Attack!';
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
					PCrecieveAttack(e, player as PCplayer);
				});
			}
			cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
			container.appendChild(cell);
		});
	});
	container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
}

function gameloop() {
	player.enemyGameboard = pcPlayer.gameboard;
	pcPlayer.enemyGameboard = player.gameboard;

	renderBoard(board, player);
	renderBoard(pcboard, pcPlayer);

	pcPlayer.PCplaceShips();
	updateBoard(pcboard, pcPlayer);
}

gameloop();

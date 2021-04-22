import Player, { PCplayer } from './Player';
import { coordsInterface } from './Gameboard';

class playerDOM {
	constructor(private player: Player, private container: HTMLDivElement) {}

	private clearBoard(): void {
		while (this.container.childNodes.length) {
			this.container.removeChild(this.container.lastChild!);
		}
	}

	private updateBoard() {
		const board = this.player.gameboard.board;
		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				if (typeof square === 'number') {
					const index = Number(`${index1}` + `${index2}`);
					console.log(index);
					const child = this.container.children[index] as HTMLDivElement;
					child.style.backgroundColor = 'cyan';
				}
			});
		});
		if (this.player.allShipsPlaced()) {
			this.renderBoard();
		}
	}

	placeShip(e: MouseEvent): void {
		const target = e.target as HTMLDivElement;
		const coords = JSON.parse(
			target.dataset.coord as string
		) as coordsInterface;
		this.player.placeShip({ y: +coords.y, x: +coords.x, flag: 'h' });

		this.updateBoard();

		console.log(this.player.gameboard.board);
	}

	renderBoard(): void {
		const board = this.player.gameboard.board;
		this.clearBoard();

		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				const cell = document.createElement('div');
				cell.className = 'square';

				if (typeof square === 'number') {
					cell.style.backgroundColor = 'cyan';
				}

				cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
				this.container.appendChild(cell);

				if (!this.player.allShipsPlaced()) {
					cell.addEventListener('click', this.placeShip.bind(this));
				}
			});
		});

		this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
	}
}

export class PCDOM {
	constructor(public PCplayer: PCplayer, private container: HTMLDivElement) {}

	private updateBoard() {
		const board = this.PCplayer.gameboard.board;
		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				const index = Number(`${index1}` + `${index2}`);
				if (typeof square === 'string') {
					const child = this.container.children[index] as HTMLDivElement;
					if (square[square.length - 1] === 'h') {
						child.style.backgroundColor = 'tomato';
					} else if (square[square.length - 1] === 's') {
						child.style.backgroundColor = 'red';
					} else if (square[square.length - 1] === 'm') {
						child.style.backgroundColor = 'gray';
					}
				}
			});
		});
	}

	recieveAttack(e: MouseEvent) {
		const target = e.target as HTMLDivElement;
		const coords = JSON.parse(
			target.dataset.coord as string
		) as coordsInterface;
		console.log(this.PCplayer.gameboard.board);
		this.PCplayer.gameboard.recieveAttack({ x: +coords.x, y: +coords.y });
		this.updateBoard();
	}

	renderBoard(): void {
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
}

export { playerDOM };

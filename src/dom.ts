import Player, { PCplayer } from './Player';
import { coordsInterface } from './Gameboard';

class playerDOM {
	constructor(private player: Player, private container: HTMLDivElement) {}

	private clearBoard(): void {
		while (this.container.childNodes.length) {
			this.container.removeChild(this.container.lastChild!);
		}
	}

	updateBoard() {
		const board = this.player.gameboard.board;

		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				if (typeof square === 'string') {
					if (square[square.length - 1] === 'h') {
						const child = this.container.children[
							Number(`${index1}` + `${index2}`)
						] as HTMLDivElement;
						child.style.cssText = 'cyan';
					}
				}
			});
		});
	}

	placeShip(e: MouseEvent): void {
		const target = e.target as HTMLDivElement;
		const coords = JSON.parse(
			target.dataset.coord as string
		) as coordsInterface;
		this.player.placeShip({ y: +coords.y, x: +coords.x, flag: 'h' });

		this.clearBoard();
		this.renderBoard();

		console.log(this.player.gameboard.board);
	}

	renderBoard(): void {
		const board = this.player.gameboard.board;

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
				} else {
					cell.removeEventListener('click', this.placeShip.bind(this));
				}
			});
		});

		this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
	}
}

class PCDOM {
	constructor(public PCplayer: PCplayer, private container: HTMLDivElement) {}

	updateBoard() {
		const board = this.PCplayer.gameboard.board;

		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				if (typeof square === 'string') {
					if (square[square.length - 1] === 'h') {
						this.container.children[Number(`${index1}` + `${index2}`)];
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
		this.PCplayer.gameboard.recieveAttack({ x: +coords.x, y: +coords.y });
	}

	renderBoard(): void {
		const board = this.PCplayer.gameboard.board;
		this.PCplayer.PCplaceShips();

		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				const cell = document.createElement('div');
				cell.className = 'square';
				cell.addEventListener('click', this.recieveAttack.bind(this));

				if (typeof square === 'string') {
					if (square[square.length - 1] === 'h') {
						cell.style.backgroundColor = 'red';
					}
				}

				cell.dataset.coord = `{"y": "${index1}", "x": "${index2}"}`;
				this.container.appendChild(cell);
			});
		});

		this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
	}
}

export { playerDOM };

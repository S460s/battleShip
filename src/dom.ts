import Player from './Player';
import { coordsInterface } from './Gameboard';

class DOM {
	constructor(private player: Player, private container: HTMLDivElement) {}

	clearBoard(): void {
		while (this.container.childNodes.length) {
			this.container.removeChild(this.container.lastChild!);
		}
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
		console.log(this.player);
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
				cell.addEventListener('click', this.placeShip.bind(this));
			});
		});

		this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
	}
}

export { DOM };

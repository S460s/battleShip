import Player from './Player';

class DOM {
	constructor(private player: Player, private container: HTMLDivElement) {}

	renderBoard(): void {
		const board = this.player.gameboard.board;

		board.forEach((row: string[] | number[], index1: number) => {
			row.forEach((square: string | number, index2: number) => {
				const cell = document.createElement('div');
				cell.className = 'square';
				cell.textContent = `${square}`;
				cell.dataset.coord = `{y: ${index1}, x: ${index2}}`;
				this.container.appendChild(cell);
			});
		});

		this.container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;
	}
}

export { DOM };

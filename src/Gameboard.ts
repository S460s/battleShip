import { ShipInterface } from './Ship';
interface coordsInterface {
	y: number;
	x: number;
	flag: 'h' | 'v';
}
class Gameboard {
	private ships: ShipInterface[] = [];
	private attackedCoords: { x: number; y: number }[] = [];

	board: number[][] | string[][] = [
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
	];

	private validateCoords(
		ship: ShipInterface,
		coords: coordsInterface
	): boolean {
		// Min coord is 0 and max is 9
		if (coords.y > 9 || coords.x > 9) return false;

		const max = coords.flag === 'v' ? coords.y : coords.x;
		if (max + ship.length + 1 > this.board.length) return false;

		for (let i = 0; i < ship.length; i++) {
			//todo => refactor
			const [y, x] =
				coords.flag === 'v'
					? [coords.y + i, coords.x]
					: [coords.y, coords.x + i];

			if (this.board[y][x] !== '') false;
		}
		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsInterface): boolean {
		if (!this.validateCoords(ship, coords)) return false;
		for (let i = 0; i < ship.length; i++) {
			//todo => refactor
			const [y, x] =
				coords.flag === 'v'
					? [coords.y + i, coords.x]
					: [coords.y, coords.x + i];

			ship.coords.push({ y, x });
			this.board[y][x] = this.ships.length;
		}
		this.ships.push(ship);
		return true;
	}

	recieveAttack({ y, x }: { y: number; x: number }): void {
		// todo => Written in 22:32. To be refactored or at least looked into.

		const index = this.board[y][x];
		if (typeof index === 'number') {
			this.ships[index].hit();
			this.board[y][x] = index + 'h';

			if (this.ships[index].isSunk()) {
				/* 				for (let i = 0; i < this.board.length; i++) {
					for (let i2 = 0; i2 < this.board[i].length; i2++) {
						if (this.board[i][i2] === index + 'h') {
							this.board[i][i2] = 'sunk';
						}
					}
				} */
				/* this.ships[index].coords.forEach((coord) => {
					this.board[coord.y][coord.x] = 'sunk';
				}); */

				for (let i = 0; i < this.ships[index].coords.length; i++) {
					this.board[this.ships[index].coords[i].y][
						this.ships[index].coords[i].x
					] = 'sunk';
				}
			}

			this.attackedCoords.push({ x, y });
		}
	}
}
export default Gameboard;

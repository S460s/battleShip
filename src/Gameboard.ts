import Ship, { ShipInterface } from './Ship';
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
			const [x, y] =
				coords.flag === 'v'
					? [coords.y + i, coords.x]
					: [coords.y, coords.x + i];

			if (this.board[x][y] !== '') false;
		}
		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsInterface): boolean {
		if (!this.validateCoords(ship, coords)) return false;
		this.ships.push(ship);
		for (let i = 0; i < ship.length; i++) {
			//todo => refactor
			const [x, y] =
				coords.flag === 'v'
					? [coords.y + i, coords.x]
					: [coords.y, coords.x + i];

			this.board[x][y] = this.ships.length - 1;
		}
		return true;
	}

	recieveAttack({ x, y }: { y: number; x: number }) {
		// todo
		const index = this.board[y][x];

		if (typeof index === 'number') {
			this.ships[index].hit();
			this.board[y][x] = index + 'h';

			if (this.ships[index].isSunk()) {
				/* 				this.board.forEach((row: number[] | string[]) => {
					row.forEach((position: number | string) => {
						position = 's';
					});
				}); */
				for (let i = 0; i < this.board.length; i++) {
					for (let i2 = 0; i2 < this.board[i].length; i2++) {
						if (this.board[i][i2] === index + 'h') {
							this.board[i][i2] = 'sunk';
						}
					}
				}
			}
		}

		this.attackedCoords.push({ x, y });
	}
}

export default Gameboard;

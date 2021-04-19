import { ShipInterface } from './Ship';
type coordsType = [number, number, 'h' | 'v'];

class Gameboard {
	ships: ShipInterface[] = [];

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

	private validateCoords(ship: ShipInterface, coords: coordsType): boolean {
		// Min coord is 0 and max is 9
		if (coords[0] > 9 || coords[1] > 9) return false;

		const max = coords[2] === 'v' ? coords[0] : coords[1];
		if (max + ship.length + 1 > this.board.length) return false;

		for (let i = 0; i < ship.length; i++) {
			//todo => refactor
			const [x, y] =
				coords[2] === 'v'
					? [coords[0] + i, coords[1]]
					: [coords[0], coords[1] + i];

			if (this.board[x][y] !== '') false;
		}
		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsType): boolean {
		if (!this.validateCoords(ship, coords)) return false;

		this.ships.push(ship);
		for (let i = 0; i < ship.length; i++) {
			//todo => refactor
			const [x, y] =
				coords[2] === 'v'
					? [coords[0] + i, coords[1]]
					: [coords[0], coords[1] + i];

			this.board[x][y] = this.ships.length - 1;
		}
		return true;
	}
}

export default Gameboard;

import { ShipInterface } from './Ship';
interface coordsInterface {
	y: number;
	x: number;
	flag: 'h' | 'v';
}
class Gameboard {
	ships: ShipInterface[] = [];
	attackedCoords = [];

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
}

export default Gameboard;

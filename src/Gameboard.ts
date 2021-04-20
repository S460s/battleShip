import { ShipInterface } from './Ship';
interface coordsInterface {
	y: number;
	x: number;
	flag?: 'h' | 'v';
}
class Gameboard {
	private ships: ShipInterface[] = [];
	private attackedCoords: string[] = [];

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

	validateAttack(coords: string): boolean {
		return this.attackedCoords.includes(coords) ? false : true;
	}

	recieveAttack({ y, x }: coordsInterface): void {
		// m = missed; num = ship; num+h = hit ship; sunk = sunk
		const index = this.board[y][x];

		if (typeof index === 'number') {
			this.ships[index].hit();
			this.board[y][x] = index + 'h';

			if (this.ships[index].isSunk()) {
				this.ships[index].coords.forEach((coord) => {
					this.board[coord.y][coord.x] = 'sunk';
				});
			}
		} else {
			this.board[y][x] = 'm';
		}

		this.attackedCoords.push(String(y) + String(x));
	}
}
export default Gameboard;

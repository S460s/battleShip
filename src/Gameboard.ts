import { ShipInterface } from './Ship';

export interface coordsInterface {
	y: number;
	x: number;
	flag?: 'h' | 'v';
}

export interface GameboardInterface {
	validateCoords(ship: ShipInterface, coords: coordsInterface): boolean;
	placeShip(ship: ShipInterface, coords: coordsInterface): boolean;

	validateAttack(coords: coordsInterface): boolean;
	recieveAttack(coords: coordsInterface): void;

	isGG(): boolean;
}

class Gameboard {
	private ships: ShipInterface[] = [];
	private attackedCoords: string[] = [];
	private hitShips = 0;

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

	public validateCoords(ship: ShipInterface, coords: coordsInterface): boolean {
		// Min coord is 0 and max is 9
		if (coords.y > 9 || coords.x > 9) return false;

		const max = coords.flag === 'v' ? coords.y : coords.x;
		if (max + ship.length + 1 > this.board.length) return false;

		for (let i = 0; i < ship.length; i++) {
			const [y, x] =
				coords.flag === 'v'
					? [coords.y + i, coords.x]
					: [coords.y, coords.x + i];

			if (this.board[y][x] !== '') return false;
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

	public validateAttack({ x, y }: coordsInterface): boolean {
		if (y > this.board.length - 1 || x > this.board.length - 1) return false;
		return this.attackedCoords.includes(`${y}` + `${x}`) ? false : true;
	}

	public recieveAttack({ y, x }: coordsInterface): void {
		// m = missed; num = ship; num+h = hit ship; s = sunk
		const index = this.board[y][x];

		if (typeof index === 'number') {
			this.ships[index].hit();
			this.board[y][x] = index + 'h';

			if (this.ships[index].isSunk()) {
				this.hitShips += 1;
				this.ships[index].coords.forEach((coord) => {
					this.board[coord.y][coord.x] = 's';
				});
			}
		} else {
			this.board[y][x] = 'm';
		}

		this.attackedCoords.push(String(y) + String(x));
	}

	public isGG(): boolean {
		return this.ships.length === this.hitShips;
	}
}
export default Gameboard;

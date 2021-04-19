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

	public validateCoords(ship: ShipInterface, coords: coordsType): boolean {
		for (let i = 0; i < ship.length; i++) {
			if (coords[2] === 'v') {
				if (coords[0] + i > this.board.length) return false;
			}
			if (coords[2] === 'h') {
				if (coords[1] + i > this.board.length) return false;
			}
		}

		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsType): void {
		this.ships.push(ship);
		this.board[coords[0]][coords[1]] = ship.length - 1;
	}
}

export default Gameboard;

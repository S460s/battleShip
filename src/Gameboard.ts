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
		if (coords[0] > 9 || coords[1] > 9) return false;
		for (let i = 0; i < ship.length; i++) {
			const max = coords[2] === 'v' ? coords[0] + i : coords[1] + i;
			if (max + 1 > this.board.length) return false;
		}

		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsType): void {
		this.ships.push(ship);
		this.board[coords[0]][coords[1]] = this.ships.length - 1;
	}
}

export default Gameboard;

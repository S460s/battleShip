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
		// Min coord is 0 and max is 9
		if (coords[0] > 9 || coords[1] > 9) return false;

		const max = coords[2] === 'v' ? coords[0] : coords[1];
		if (max + ship.length + 1 > this.board.length) return false;

		for (let i = 0; i < ship.length; i++) {
			if (coords[2] === 'v') {
				if (this.board[coords[0] + i][coords[1]] !== '') return false;
			} else {
				if (this.board[coords[0]][coords[1] + i] !== '') return false;
			}
		}
		return true;
	}

	public placeShip(ship: ShipInterface, coords: coordsType): void {
		this.ships.push(ship);
		for (let i = 0; i < ship.length; i++) {
			if (coords[2] === 'v') {
				this.board[coords[0] + i][coords[1]] = this.ships.length - 1;
			} else {
				this.board[coords[0]][coords[1] + i] = this.ships.length - 1;
			}
		}
	}
}

export default Gameboard;

/* public validateCoords(ship: ShipInterface, coords: coordsType): boolean {
  // Min coord is 0 and max is 9
  if (coords[0] > 9 || coords[1] > 9) return false;

  const startPoint = coords[2] === 'h' ? coords[0] : coords[1];
  let endPoint = coords[2] === 'v' ? coords[0] : coords[1];

  for (let i = 0; i < ship.length; i++) {
    if (coords[2] === 'v') {
      endPoint = coords[0];
      if (this.board[endPoint + i][coords[1]] !== '') return false;
    } else {
      endPoint = coords[1];
      if (this.board[endPoint + i][coords[0]] !== '') return false;
    }
    if (endPoint + i + 1 > this.board.length) return false;
  } */

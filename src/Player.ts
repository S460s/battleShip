import Gameboard, { coordsInterface } from './Gameboard';
import Ship, { ShipInterface } from './Ship';

export interface PlayerInterface {
	gameboard: Gameboard;
	enemyGameboard: null | Gameboard;
	placeShip(coords: coordsInterface): void;
	attack(coords: coordsInterface): boolean;
	isWinner(): boolean;
}

export default class Player {
	private placedShips = 0;
	public enemyGameboard: null | Gameboard = null;
	private ships: ShipInterface[] = [new Ship(1), new Ship(2)];
	readonly gameboard = new Gameboard();
	type = 'player';

	public placeShip(coords: coordsInterface): void {
		if (this.gameboard.validateCoords(this.ships[this.placedShips], coords)) {
			this.gameboard.placeShip(this.ships[this.placedShips], coords);
			this.placedShips += 1;
		}
	}

	public attack(coords: coordsInterface): boolean {
		if (this.enemyGameboard?.validateAttack(coords)) {
			this.enemyGameboard.recieveAttack(coords);
			return true;
		}
		return false;
	}

	public isWinner(): boolean {
		if (this.enemyGameboard) return this.enemyGameboard.isGG();
		return false;
	}

	public allShipsPlaced(): boolean {
		console.log(this.placedShips, this.ships.length);
		return this.placedShips === this.ships.length;
	}
}

export class PCplayer extends Player {
	type = 'PC';
	public possibleCoords: coordsInterface[] = this.makePsoosibleCoords();

	private makePsoosibleCoords(): coordsInterface[] {
		// possible redo
		const coords = [];
		for (let i = 0; i < this.gameboard.board.length; i++) {
			for (let i2 = 0; i2 < this.gameboard.board.length; i2++) {
				coords.push({ y: i, x: i2 });
			}
		}
		return coords;
	}

	public PCplaceShips(): void {
		while (!super.allShipsPlaced()) {
			const y = Math.floor(Math.random() * this.gameboard.board.length);
			const x = Math.floor(Math.random() * this.gameboard.board.length);
			const flag = x < y ? 'v' : 'h';
			super.placeShip({ y, x, flag });
		}
	}

	public PCattack(): void {
		const index = Math.floor(Math.random() * this.possibleCoords.length) - 1;

		super.attack(this.possibleCoords[index]);
		this.possibleCoords = this.possibleCoords.filter(({ x, y }) => {
			const flag =
				x === this.possibleCoords[index].x &&
				y === this.possibleCoords[index].y;
			return !flag;
		});
	}
}

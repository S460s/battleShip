import Gameboard, { GameboardInterface, coordsInterface } from './Gameboard';
import Ship, { ShipInterface } from './Ship';
export default class Player {
	gameboard = new Gameboard();
	private placedShips = 0;

	public enemyGameboard: null | GameboardInterface = null;
	public ships: ShipInterface[] = [new Ship(1), new Ship(2)];

	public placeShip(coords: coordsInterface): boolean {
		if (this.gameboard.validateCoords(this.ships[this.placedShips], coords)) {
			this.gameboard.placeShip(this.ships[this.placedShips], coords);
			this.placedShips += 1;
			return true;
		}
		return false;
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
		return this.placedShips === this.ships.length;
	}
}

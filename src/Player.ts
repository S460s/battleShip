import Gameboard, { GameboardInterface, coordsInterface } from './Gameboard';
import Ship, { ShipInterface } from './Ship';
export default class Player {
	gameboard = new Gameboard();
	public ships: ShipInterface[] = [new Ship(1), new Ship(2)];
	private placedShips = 0;

	public placeShips(coords: coordsInterface, ship: ShipInterface): void {
		if (this.gameboard.validateCoords(ship, coords)) {
			this.gameboard.placeShip(ship, coords);
			this.placedShips += 1;
		}
	}

	public attack(
		enemyGameboard: GameboardInterface,
		coords: coordsInterface
	): boolean {
		if (enemyGameboard?.validateAttack(coords)) {
			enemyGameboard.recieveAttack(coords);
			return true;
		}
		return false;
	}

	public isWinner(enemyGameboard: GameboardInterface): boolean {
		return enemyGameboard.isGG();
	}

	public allShipsPlaced(): boolean {
		return this.placedShips === this.ships.length;
	}
}

import Gameboard, { GameboardInterface, coordsInterface } from './Gameboard';
import Ship, { ShipInterface } from './Ship';
class Player {
	gameboard = new Gameboard();
	ships: ShipInterface[] = [new Ship(1), new Ship(2)];
	constructor(private enemyGameboard: GameboardInterface) {}

	public placeShips(coords: coordsInterface) {
		this.ships.forEach((ship) => {
			let isValidated = false;
			while (!isValidated) {
				if (this.gameboard.validateCoords(ship, coords)) {
					this.gameboard.placeShip(ship, coords);
					isValidated = true;
				}
			}
		});
	}

	public attack(coords: coordsInterface) {
		let isValidated = false;
		while (!isValidated) {
			if (this.enemyGameboard.validateAttack(coords)) {
				this.enemyGameboard.recieveAttack(coords);
				isValidated = true;
			}
		}
	}
}

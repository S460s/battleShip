export interface ShipInterface {
	isSunk: () => boolean;
	hit: () => void;
	length: number;
	coords: { x: number; y: number }[];
}

class Ship implements ShipInterface {
	private attacked = 0;
	constructor(public length: number) {}
	coords: { x: number; y: number }[] = [];

	public hit(): void {
		this.attacked += 1;
	}

	public isSunk(): boolean {
		return this.length === this.attacked ? true : false;
	}
}

export default Ship;

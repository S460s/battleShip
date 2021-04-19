class Ship {
	private attacked = 0;
	constructor(public length: number) {}

	public hit(): void {
		this.attacked += 1;
	}

	public isSunck(): boolean {
		return this.length === this.attacked ? true : false;
	}
}

export default Ship;

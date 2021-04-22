function renderBoard(size = 10, container: HTMLDivElement): void {
	for (let x = 0; x < size ** 2; x++) {
		const cell = document.createElement('div');
		cell.className = 'square';
		container.appendChild(cell);
	}
	container.style.cssText = `grid-template-columns: repeat(${size}, auto);`;
}

export { renderBoard };

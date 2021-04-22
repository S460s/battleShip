/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.ts":
/*!**************************!*\
  !*** ./src/Gameboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n    constructor() {\n        this.ships = [];\n        this.attackedCoords = [];\n        this.hitShips = 0;\n        this.board = [\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n            ['', '', '', '', '', '', '', '', '', ''],\n        ];\n    }\n    validateCoords(ship, coords) {\n        // Min coord is 0 and max is 9\n        //if (coords.y > 9 || coords.x > 9) return false;\n        const max = coords.flag === 'v' ? coords.y : coords.x;\n        if (max + ship.length > this.board.length)\n            return false;\n        for (let i = 0; i < ship.length; i++) {\n            const [y, x] = coords.flag === 'v'\n                ? [coords.y + i, coords.x]\n                : [coords.y, coords.x + i];\n            if (this.board[y][x] !== '')\n                return false;\n        }\n        return true;\n    }\n    placeShip(ship, coords) {\n        if (!this.validateCoords(ship, coords))\n            return false;\n        for (let i = 0; i < ship.length; i++) {\n            const [y, x] = coords.flag === 'v'\n                ? [coords.y + i, coords.x]\n                : [coords.y, coords.x + i];\n            ship.coords.push({ y, x });\n            this.board[y][x] = this.ships.length;\n        }\n        this.ships.push(ship);\n        return true;\n    }\n    validateAttack({ x, y }) {\n        if (y > this.board.length - 1 || x > this.board.length - 1)\n            return false;\n        return this.attackedCoords.includes(`${y}` + `${x}`) ? false : true;\n    }\n    recieveAttack({ y, x }) {\n        // m = missed; num = ship; num+h = hit ship; s = sunk\n        const index = this.board[y][x];\n        if (typeof index === 'number') {\n            this.ships[index].hit();\n            this.board[y][x] = index + 'h';\n            if (this.ships[index].isSunk()) {\n                this.hitShips += 1;\n                this.ships[index].coords.forEach((coord) => {\n                    this.board[coord.y][coord.x] = 's';\n                });\n            }\n        }\n        else {\n            this.board[y][x] = 'm';\n        }\n        this.attackedCoords.push(String(y) + String(x));\n    }\n    isGG() {\n        return this.ships.length === this.hitShips;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9HYW1lYm9hcmQudHM/NTdlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBUUEsTUFBTSxTQUFTO0lBQWY7UUFDUyxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUE0QjtZQUN2QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUN4QyxDQUFDO0lBbUVILENBQUM7SUFqRU8sY0FBYyxDQUFDLElBQW1CLEVBQUUsTUFBdUI7UUFDakUsOEJBQThCO1FBQzlCLGlEQUFpRDtRQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRXhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQ1gsTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHO2dCQUNsQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsT0FBTyxLQUFLLENBQUM7U0FDMUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxTQUFTLENBQUMsSUFBbUIsRUFBRSxNQUF1QjtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FDWCxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUc7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFtQjtRQUM5QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRSxDQUFDO0lBRU0sYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBbUI7UUFDN0MscURBQXFEO1FBQ3JELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2FBQ0g7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztDQUNEO0FBQ0QsaUVBQWUsU0FBUyxFQUFDIiwiZmlsZSI6Ii4vc3JjL0dhbWVib2FyZC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXBJbnRlcmZhY2UgfSBmcm9tICcuL1NoaXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGNvb3Jkc0ludGVyZmFjZSB7XG5cdHk6IG51bWJlcjtcblx0eDogbnVtYmVyO1xuXHRmbGFnPzogJ2gnIHwgJ3YnO1xufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuXHRwcml2YXRlIHNoaXBzOiBTaGlwSW50ZXJmYWNlW10gPSBbXTtcblx0cHJpdmF0ZSBhdHRhY2tlZENvb3Jkczogc3RyaW5nW10gPSBbXTtcblx0cHJpdmF0ZSBoaXRTaGlwcyA9IDA7XG5cblx0cHVibGljIGJvYXJkOiBudW1iZXJbXVtdIHwgc3RyaW5nW11bXSA9IFtcblx0XHRbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuXHRcdFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG5cdFx0WycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcblx0XHRbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuXHRcdFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG5cdFx0WycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcblx0XHRbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuXHRcdFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG5cdFx0WycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcblx0XHRbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuXHRdO1xuXG5cdHB1YmxpYyB2YWxpZGF0ZUNvb3JkcyhzaGlwOiBTaGlwSW50ZXJmYWNlLCBjb29yZHM6IGNvb3Jkc0ludGVyZmFjZSk6IGJvb2xlYW4ge1xuXHRcdC8vIE1pbiBjb29yZCBpcyAwIGFuZCBtYXggaXMgOVxuXHRcdC8vaWYgKGNvb3Jkcy55ID4gOSB8fCBjb29yZHMueCA+IDkpIHJldHVybiBmYWxzZTtcblxuXHRcdGNvbnN0IG1heCA9IGNvb3Jkcy5mbGFnID09PSAndicgPyBjb29yZHMueSA6IGNvb3Jkcy54O1xuXHRcdGlmIChtYXggKyBzaGlwLmxlbmd0aCA+IHRoaXMuYm9hcmQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IFt5LCB4XSA9XG5cdFx0XHRcdGNvb3Jkcy5mbGFnID09PSAndidcblx0XHRcdFx0XHQ/IFtjb29yZHMueSArIGksIGNvb3Jkcy54XVxuXHRcdFx0XHRcdDogW2Nvb3Jkcy55LCBjb29yZHMueCArIGldO1xuXG5cdFx0XHRpZiAodGhpcy5ib2FyZFt5XVt4XSAhPT0gJycpIHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBwbGFjZVNoaXAoc2hpcDogU2hpcEludGVyZmFjZSwgY29vcmRzOiBjb29yZHNJbnRlcmZhY2UpOiBib29sZWFuIHtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGVDb29yZHMoc2hpcCwgY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBbeSwgeF0gPVxuXHRcdFx0XHRjb29yZHMuZmxhZyA9PT0gJ3YnXG5cdFx0XHRcdFx0PyBbY29vcmRzLnkgKyBpLCBjb29yZHMueF1cblx0XHRcdFx0XHQ6IFtjb29yZHMueSwgY29vcmRzLnggKyBpXTtcblxuXHRcdFx0c2hpcC5jb29yZHMucHVzaCh7IHksIHggfSk7XG5cdFx0XHR0aGlzLmJvYXJkW3ldW3hdID0gdGhpcy5zaGlwcy5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHVibGljIHZhbGlkYXRlQXR0YWNrKHsgeCwgeSB9OiBjb29yZHNJbnRlcmZhY2UpOiBib29sZWFuIHtcblx0XHRpZiAoeSA+IHRoaXMuYm9hcmQubGVuZ3RoIC0gMSB8fCB4ID4gdGhpcy5ib2FyZC5sZW5ndGggLSAxKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXMuYXR0YWNrZWRDb29yZHMuaW5jbHVkZXMoYCR7eX1gICsgYCR7eH1gKSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyByZWNpZXZlQXR0YWNrKHsgeSwgeCB9OiBjb29yZHNJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHQvLyBtID0gbWlzc2VkOyBudW0gPSBzaGlwOyBudW0raCA9IGhpdCBzaGlwOyBzID0gc3Vua1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5ib2FyZFt5XVt4XTtcblxuXHRcdGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcblx0XHRcdHRoaXMuYm9hcmRbeV1beF0gPSBpbmRleCArICdoJztcblxuXHRcdFx0aWYgKHRoaXMuc2hpcHNbaW5kZXhdLmlzU3VuaygpKSB7XG5cdFx0XHRcdHRoaXMuaGl0U2hpcHMgKz0gMTtcblx0XHRcdFx0dGhpcy5zaGlwc1tpbmRleF0uY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ib2FyZFtjb29yZC55XVtjb29yZC54XSA9ICdzJztcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYm9hcmRbeV1beF0gPSAnbSc7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdHRhY2tlZENvb3Jkcy5wdXNoKFN0cmluZyh5KSArIFN0cmluZyh4KSk7XG5cdH1cblxuXHRwdWJsaWMgaXNHRygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zaGlwcy5sZW5ndGggPT09IHRoaXMuaGl0U2hpcHM7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Gameboard.ts\n");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player),\n/* harmony export */   \"PCplayer\": () => (/* binding */ PCplayer)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.ts\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.ts\");\n\n\nclass Player {\n    constructor() {\n        this.placedShips = 0;\n        this.enemyGameboard = null;\n        this.ships = [new _Ship__WEBPACK_IMPORTED_MODULE_1__.default(1), new _Ship__WEBPACK_IMPORTED_MODULE_1__.default(2)];\n        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.default();\n    }\n    placeShip(coords) {\n        if (this.gameboard.validateCoords(this.ships[this.placedShips], coords)) {\n            this.gameboard.placeShip(this.ships[this.placedShips], coords);\n            this.placedShips += 1;\n        }\n    }\n    attack(coords) {\n        var _a;\n        if ((_a = this.enemyGameboard) === null || _a === void 0 ? void 0 : _a.validateAttack(coords)) {\n            this.enemyGameboard.recieveAttack(coords);\n            return true;\n        }\n        return false;\n    }\n    isWinner() {\n        if (this.enemyGameboard)\n            return this.enemyGameboard.isGG();\n        return false;\n    }\n    allShipsPlaced() {\n        return this.placedShips === this.ships.length;\n    }\n}\nclass PCplayer extends Player {\n    constructor() {\n        super(...arguments);\n        this.possibleCoords = this.makePsoosibleCoords();\n    }\n    makePsoosibleCoords() {\n        // possible redo\n        const coords = [];\n        for (let i = 0; i < this.gameboard.board.length; i++) {\n            for (let i2 = 0; i2 < this.gameboard.board.length; i2++) {\n                coords.push({ y: i, x: i2 });\n            }\n        }\n        return coords;\n    }\n    PCplaceShips() {\n        while (!super.allShipsPlaced()) {\n            const y = Math.floor(Math.random() * this.gameboard.board.length);\n            const x = Math.floor(Math.random() * this.gameboard.board.length);\n            const flag = x < y ? 'v' : 'h';\n            super.placeShip({ y, x, flag });\n        }\n    }\n    PCattack() {\n        const index = Math.floor(Math.random() * this.possibleCoords.length) - 1;\n        super.attack(this.possibleCoords[index]);\n        this.possibleCoords = this.possibleCoords.filter(({ x, y }) => {\n            const flag = x === this.possibleCoords[index].x &&\n                y === this.possibleCoords[index].y;\n            return !flag;\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9QbGF5ZXIudHM/MDIyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlEO0FBQ1o7QUFVOUIsTUFBTSxNQUFNO0lBQTNCO1FBQ1MsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDakIsbUJBQWMsR0FBcUIsSUFBSSxDQUFDO1FBQ3ZDLFVBQUssR0FBb0IsQ0FBQyxJQUFJLDBDQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSwwQ0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsY0FBUyxHQUFHLElBQUksK0NBQVMsRUFBRSxDQUFDO0lBeUJ0QyxDQUFDO0lBdkJPLFNBQVMsQ0FBQyxNQUF1QjtRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUF1Qjs7UUFDcEMsSUFBSSxVQUFJLENBQUMsY0FBYywwQ0FBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLFFBQVE7UUFDZCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGNBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7Q0FDRDtBQUVNLE1BQU0sUUFBUyxTQUFRLE1BQU07SUFBcEM7O1FBQ1EsbUJBQWMsR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFpQ3ZFLENBQUM7SUEvQlEsbUJBQW1CO1FBQzFCLGdCQUFnQjtRQUNoQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM3QjtTQUNEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBRU0sWUFBWTtRQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRU0sUUFBUTtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzdELE1BQU0sSUFBSSxHQUNULENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QiLCJmaWxlIjoiLi9zcmMvUGxheWVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCwgeyBjb29yZHNJbnRlcmZhY2UgfSBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCwgeyBTaGlwSW50ZXJmYWNlIH0gZnJvbSAnLi9TaGlwJztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJJbnRlcmZhY2Uge1xuXHRnYW1lYm9hcmQ6IEdhbWVib2FyZDtcblx0ZW5lbXlHYW1lYm9hcmQ6IG51bGwgfCBHYW1lYm9hcmQ7XG5cdHBsYWNlU2hpcChjb29yZHM6IGNvb3Jkc0ludGVyZmFjZSk6IHZvaWQ7XG5cdGF0dGFjayhjb29yZHM6IGNvb3Jkc0ludGVyZmFjZSk6IGJvb2xlYW47XG5cdGlzV2lubmVyKCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdHByaXZhdGUgcGxhY2VkU2hpcHMgPSAwO1xuXHRwdWJsaWMgZW5lbXlHYW1lYm9hcmQ6IG51bGwgfCBHYW1lYm9hcmQgPSBudWxsO1xuXHRwcml2YXRlIHNoaXBzOiBTaGlwSW50ZXJmYWNlW10gPSBbbmV3IFNoaXAoMSksIG5ldyBTaGlwKDIpXTtcblx0cmVhZG9ubHkgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG5cdHB1YmxpYyBwbGFjZVNoaXAoY29vcmRzOiBjb29yZHNJbnRlcmZhY2UpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5nYW1lYm9hcmQudmFsaWRhdGVDb29yZHModGhpcy5zaGlwc1t0aGlzLnBsYWNlZFNoaXBzXSwgY29vcmRzKSkge1xuXHRcdFx0dGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHRoaXMuc2hpcHNbdGhpcy5wbGFjZWRTaGlwc10sIGNvb3Jkcyk7XG5cdFx0XHR0aGlzLnBsYWNlZFNoaXBzICs9IDE7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGF0dGFjayhjb29yZHM6IGNvb3Jkc0ludGVyZmFjZSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLmVuZW15R2FtZWJvYXJkPy52YWxpZGF0ZUF0dGFjayhjb29yZHMpKSB7XG5cdFx0XHR0aGlzLmVuZW15R2FtZWJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRzKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgaXNXaW5uZXIoKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuZW5lbXlHYW1lYm9hcmQpIHJldHVybiB0aGlzLmVuZW15R2FtZWJvYXJkLmlzR0coKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgYWxsU2hpcHNQbGFjZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGxhY2VkU2hpcHMgPT09IHRoaXMuc2hpcHMubGVuZ3RoO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQQ3BsYXllciBleHRlbmRzIFBsYXllciB7XG5cdHB1YmxpYyBwb3NzaWJsZUNvb3JkczogY29vcmRzSW50ZXJmYWNlW10gPSB0aGlzLm1ha2VQc29vc2libGVDb29yZHMoKTtcblxuXHRwcml2YXRlIG1ha2VQc29vc2libGVDb29yZHMoKTogY29vcmRzSW50ZXJmYWNlW10ge1xuXHRcdC8vIHBvc3NpYmxlIHJlZG9cblx0XHRjb25zdCBjb29yZHMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBpMiA9IDA7IGkyIDwgdGhpcy5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpMisrKSB7XG5cdFx0XHRcdGNvb3Jkcy5wdXNoKHsgeTogaSwgeDogaTIgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb29yZHM7XG5cdH1cblxuXHRwdWJsaWMgUENwbGFjZVNoaXBzKCk6IHZvaWQge1xuXHRcdHdoaWxlICghc3VwZXIuYWxsU2hpcHNQbGFjZWQoKSkge1xuXHRcdFx0Y29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aCk7XG5cdFx0XHRjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoKTtcblx0XHRcdGNvbnN0IGZsYWcgPSB4IDwgeSA/ICd2JyA6ICdoJztcblx0XHRcdHN1cGVyLnBsYWNlU2hpcCh7IHksIHgsIGZsYWcgfSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIFBDYXR0YWNrKCk6IHZvaWQge1xuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb3NzaWJsZUNvb3Jkcy5sZW5ndGgpIC0gMTtcblxuXHRcdHN1cGVyLmF0dGFjayh0aGlzLnBvc3NpYmxlQ29vcmRzW2luZGV4XSk7XG5cdFx0dGhpcy5wb3NzaWJsZUNvb3JkcyA9IHRoaXMucG9zc2libGVDb29yZHMuZmlsdGVyKCh7IHgsIHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgZmxhZyA9XG5cdFx0XHRcdHggPT09IHRoaXMucG9zc2libGVDb29yZHNbaW5kZXhdLnggJiZcblx0XHRcdFx0eSA9PT0gdGhpcy5wb3NzaWJsZUNvb3Jkc1tpbmRleF0ueTtcblx0XHRcdHJldHVybiAhZmxhZztcblx0XHR9KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Player.ts\n");

/***/ }),

/***/ "./src/Ship.ts":
/*!*********************!*\
  !*** ./src/Ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.attacked = 0;\n        this.coords = [];\n    }\n    hit() {\n        this.attacked += 1;\n    }\n    isSunk() {\n        return this.length === this.attacked ? true : false;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9TaGlwLnRzP2I1NGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE1BQU0sSUFBSTtJQUdULFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnpCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFNLEdBQStCLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFOUIsR0FBRztRQUNULElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxNQUFNO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7Q0FDRDtBQUVELGlFQUFlLElBQUksRUFBQyIsImZpbGUiOiIuL3NyYy9TaGlwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcblx0aXNTdW5rOiAoKSA9PiBib29sZWFuO1xuXHRoaXQ6ICgpID0+IHZvaWQ7XG5cdGxlbmd0aDogbnVtYmVyO1xuXHRjb29yZHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xufVxuXG5jbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG5cdHByaXZhdGUgYXR0YWNrZWQgPSAwO1xuXHRwdWJsaWMgY29vcmRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSA9IFtdO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbGVuZ3RoOiBudW1iZXIpIHt9XG5cblx0cHVibGljIGhpdCgpOiB2b2lkIHtcblx0XHR0aGlzLmF0dGFja2VkICs9IDE7XG5cdH1cblxuXHRwdWJsaWMgaXNTdW5rKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy5hdHRhY2tlZCA/IHRydWUgOiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Ship.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n\n/* public updateBoard() {\n    const board = this.player.gameboard.board;\n    board.forEach((row: string[] | number[], index1: number) => {\n        row.forEach((square: string | number, index2: number) => {\n            const index = Number(`${index1}` + `${index2}`);\n            const child = this.container.children[index] as HTMLDivElement;\n    });\n    if (this.player.allShipsPlaced()) {\n        this.renderBoard();\n        pcBoardDiv.style.display = 'grid';\n    }\n} */\nfunction chooseColor(square) {\n    let color = 'white';\n    if (typeof square === 'string') {\n        if (square[square.length - 1] === 'h') {\n            color = 'tomato';\n        }\n        else if (square[square.length - 1] === 's') {\n            color = 'red';\n        }\n        else if (square[square.length - 1] === 'm') {\n            color = 'gray';\n        }\n    }\n    else if (typeof square === 'number') {\n        color = 'blue';\n    }\n    return color;\n}\nfunction updateBoard(container, player) {\n    const board = player.gameboard.board;\n    board.forEach((row, index1) => {\n        row.forEach((square, index2) => {\n            const index = Number(`${index1}` + `${index2}`);\n            const child = container.children[index];\n            child.style.backgroundColor = chooseColor(square);\n        });\n    });\n}\nfunction clearDiv(container) {\n    while (container.childNodes.length) {\n        container.removeChild(container.lastChild);\n    }\n}\nfunction renderBoard(container, player) {\n    const board = player.gameboard.board;\n    board.forEach((row, index1) => {\n        row.forEach((square, index2) => {\n            const cell = document.createElement('div');\n            cell.className = 'square';\n            //cell.addEventListener('click', this.recieveAttack.bind(this));\n            cell.dataset.coord = `{\"y\": \"${index1}\", \"x\": \"${index2}\"}`;\n            container.appendChild(cell);\n        });\n    });\n    container.style.cssText = `grid-template-columns: repeat(${board.length}, auto);`;\n}\nfunction gameloop() {\n    const board = document.querySelector('#playerBoard');\n    const pcboard = document.querySelector('#pcBoard');\n    const player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default();\n    const pcPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__.PCplayer();\n    player.enemyGameboard = pcPlayer.gameboard;\n    pcPlayer.enemyGameboard = player.gameboard;\n    renderBoard(board, player);\n    renderBoard(pcboard, pcPlayer);\n    pcPlayer.PCplaceShips();\n    updateBoard(pcboard, pcPlayer);\n}\ngameloop();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQzRDO0FBRTVDOzs7Ozs7Ozs7OztJQVdJO0FBRUosU0FBUyxXQUFXLENBQUMsTUFBdUI7SUFDM0MsSUFBSSxLQUFLLEdBQVcsT0FBTyxDQUFDO0lBQzVCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQy9CLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3RDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDakI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM3QyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM3QyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ2Y7S0FDRDtTQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3RDLEtBQUssR0FBRyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFNBQXlCLEVBQUUsTUFBYztJQUM3RCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNyQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBd0IsRUFBRSxNQUFjLEVBQUUsRUFBRTtRQUMxRCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBdUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUN2RCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDaEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQW1CLENBQUM7WUFDMUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsU0FBeUI7SUFDMUMsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUNuQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFVLENBQUMsQ0FBQztLQUM1QztBQUNGLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxTQUF5QixFQUFFLE1BQWM7SUFDN0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQXdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7UUFDMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQXVCLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxNQUFNLFlBQVksTUFBTSxJQUFJLENBQUM7WUFDNUQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsaUNBQWlDLEtBQUssQ0FBQyxNQUFNLFVBQVUsQ0FBQztBQUNuRixDQUFDO0FBRUQsU0FBUyxRQUFRO0lBQ2hCLE1BQU0sS0FBSyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRSxDQUFDO0lBQ3RFLE1BQU0sT0FBTyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBRXBFLE1BQU0sTUFBTSxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksNkNBQVEsRUFBRSxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUMzQyxRQUFRLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFFM0MsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciwgeyBQQ3BsYXllciB9IGZyb20gJy4vUGxheWVyJztcblxuLyogcHVibGljIHVwZGF0ZUJvYXJkKCkge1xuXHRjb25zdCBib2FyZCA9IHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblx0Ym9hcmQuZm9yRWFjaCgocm93OiBzdHJpbmdbXSB8IG51bWJlcltdLCBpbmRleDE6IG51bWJlcikgPT4ge1xuXHRcdHJvdy5mb3JFYWNoKChzcXVhcmU6IHN0cmluZyB8IG51bWJlciwgaW5kZXgyOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IGluZGV4ID0gTnVtYmVyKGAke2luZGV4MX1gICsgYCR7aW5kZXgyfWApO1xuXHRcdFx0Y29uc3QgY2hpbGQgPSB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbltpbmRleF0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cdH0pO1xuXHRpZiAodGhpcy5wbGF5ZXIuYWxsU2hpcHNQbGFjZWQoKSkge1xuXHRcdHRoaXMucmVuZGVyQm9hcmQoKTtcblx0XHRwY0JvYXJkRGl2LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG5cdH1cbn0gKi9cblxuZnVuY3Rpb24gY2hvb3NlQ29sb3Ioc3F1YXJlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuXHRsZXQgY29sb3I6IHN0cmluZyA9ICd3aGl0ZSc7XG5cdGlmICh0eXBlb2Ygc3F1YXJlID09PSAnc3RyaW5nJykge1xuXHRcdGlmIChzcXVhcmVbc3F1YXJlLmxlbmd0aCAtIDFdID09PSAnaCcpIHtcblx0XHRcdGNvbG9yID0gJ3RvbWF0byc7XG5cdFx0fSBlbHNlIGlmIChzcXVhcmVbc3F1YXJlLmxlbmd0aCAtIDFdID09PSAncycpIHtcblx0XHRcdGNvbG9yID0gJ3JlZCc7XG5cdFx0fSBlbHNlIGlmIChzcXVhcmVbc3F1YXJlLmxlbmd0aCAtIDFdID09PSAnbScpIHtcblx0XHRcdGNvbG9yID0gJ2dyYXknO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygc3F1YXJlID09PSAnbnVtYmVyJykge1xuXHRcdGNvbG9yID0gJ2JsdWUnO1xuXHR9XG5cdHJldHVybiBjb2xvcjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgcGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcblx0Y29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXHRib2FyZC5mb3JFYWNoKChyb3c6IHN0cmluZ1tdIHwgbnVtYmVyW10sIGluZGV4MTogbnVtYmVyKSA9PiB7XG5cdFx0cm93LmZvckVhY2goKHNxdWFyZTogc3RyaW5nIHwgbnVtYmVyLCBpbmRleDI6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBOdW1iZXIoYCR7aW5kZXgxfWAgKyBgJHtpbmRleDJ9YCk7XG5cdFx0XHRjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltpbmRleF0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cdFx0XHRjaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaG9vc2VDb2xvcihzcXVhcmUpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXYoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xuXHR3aGlsZSAoY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0Y29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQhKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJCb2FyZChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xuXHRjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cdGJvYXJkLmZvckVhY2goKHJvdzogc3RyaW5nW10gfCBudW1iZXJbXSwgaW5kZXgxOiBudW1iZXIpID0+IHtcblx0XHRyb3cuZm9yRWFjaCgoc3F1YXJlOiBzdHJpbmcgfCBudW1iZXIsIGluZGV4MjogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjZWxsLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuXHRcdFx0Ly9jZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWNpZXZlQXR0YWNrLmJpbmQodGhpcykpO1xuXHRcdFx0Y2VsbC5kYXRhc2V0LmNvb3JkID0gYHtcInlcIjogXCIke2luZGV4MX1cIiwgXCJ4XCI6IFwiJHtpbmRleDJ9XCJ9YDtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHR9KTtcblx0fSk7XG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7Ym9hcmQubGVuZ3RofSwgYXV0byk7YDtcbn1cblxuZnVuY3Rpb24gZ2FtZWxvb3AoKSB7XG5cdGNvbnN0IGJvYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpITtcblx0Y29uc3QgcGNib2FyZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGNCb2FyZCcpITtcblxuXHRjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cdGNvbnN0IHBjUGxheWVyID0gbmV3IFBDcGxheWVyKCk7XG5cblx0cGxheWVyLmVuZW15R2FtZWJvYXJkID0gcGNQbGF5ZXIuZ2FtZWJvYXJkO1xuXHRwY1BsYXllci5lbmVteUdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG5cblx0cmVuZGVyQm9hcmQoYm9hcmQsIHBsYXllcik7XG5cdHJlbmRlckJvYXJkKHBjYm9hcmQsIHBjUGxheWVyKTtcblx0cGNQbGF5ZXIuUENwbGFjZVNoaXBzKCk7XG5cdHVwZGF0ZUJvYXJkKHBjYm9hcmQsIHBjUGxheWVyKTtcbn1cblxuZ2FtZWxvb3AoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
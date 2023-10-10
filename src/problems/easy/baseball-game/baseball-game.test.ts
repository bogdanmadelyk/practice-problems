import {baseballGame} from './baseball-game.ts';

describe("Baseball game tests", () => {
	test("case 1", () => {
		expect(baseballGame(["5","2","C","D","+"])).toBe(30)
	})
	test("case 2", () => {
		expect(baseballGame(["5","-2","4","C","D","9","+","+"])).toBe(27)
	})
	test("case 3", () => {
		expect(baseballGame(["1","C"])).toBe(0)
	})
})
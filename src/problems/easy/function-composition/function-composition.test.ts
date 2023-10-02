import {compose} from './function-composition.ts';

describe('Function composition tests', () => {
	test('case 1', () => {
		let fn = compose([x => x + 1, x => x * x, x => 2 * x])
		expect(fn(4)).toBe(65)
	})
	test('case 2', () => {
		let fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
		expect(fn(1)).toBe(1000)
	})
	test('case 3', () => {
		let fn = compose([])
		expect(fn(42)).toBe(42)
	})
})
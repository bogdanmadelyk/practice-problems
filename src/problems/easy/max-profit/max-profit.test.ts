import {maxProfit} from './max-profit.ts';

describe('Max profit tests', () => {
	test('case 1', () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
	})
	test('case 2', () => {
		expect(maxProfit([7,6,4,3,1])).toBe(0)
	})
})
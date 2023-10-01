import {filter} from './filter.ts';

describe('Fitler tests', () => {
	test('case 1', () => {
		expect(filter([0, 10, 20, 30], (n) => n > 10)).toStrictEqual([20, 30])
	})
	test('case 2', () => {
		expect(filter([1, 2, 3], (_, i) => i === 0)).toStrictEqual([1])
	})
	test('case 3', () => {
		expect(filter([-2,-1,0,1,2], (n) => n + 1)).toStrictEqual([-2, 0, 1, 2])
	})
})
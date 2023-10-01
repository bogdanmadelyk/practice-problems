import {filter} from './filter.ts';
import {map} from './map.ts';
import {reduce} from './reduce.ts';

describe('Fitler tests', () => {
	test('Filter case 1', () => {
		expect(filter([0, 10, 20, 30], (n) => n > 10)).toStrictEqual([20, 30])
	})
	test('Filter case 2', () => {
		expect(filter([1, 2, 3], (_, i) => i === 0)).toStrictEqual([1])
	})
	test('Filter case 3', () => {
		expect(filter([-2,-1,0,1,2], (n) => n + 1)).toStrictEqual([-2, 0, 1, 2])
	})
})

describe('Map tests', () => {
	test('Map case 1', () => {
		expect(map([1, 2, 3], (n) => n + 1)).toStrictEqual([2, 3, 4])
	})
	test('Map case 2', () => {
		expect(map([1, 2, 3], (n, i) => n + i)).toStrictEqual([1, 3, 5])
	})
	test('Map case 3', () => {
		expect(map([0, 1, 2], () => 40)).toStrictEqual([40, 40, 40])
	})
})

describe('Reduce tests', () => {
	test('Reduce case 1', () => {
		expect(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0)).toBe(10)
	})
	test('Reduce case 2', () => {
		expect(reduce([1, 2, 3, 4], (accum, curr) => accum + curr * curr, 100)).toBe(130)
	})
	test('Reduce case 3', () => {
		expect(reduce([], () => 0, 25)).toBe(25)
	})
})
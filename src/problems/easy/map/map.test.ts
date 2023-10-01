import {map} from './map.ts';

describe('Map tests', () => {
	test('case 1', () => {
		expect(map([1, 2, 3], (n) => n + 1)).toStrictEqual([2, 3, 4])
	})
	test('case 2', () => {
		expect(map([1, 2, 3], (n, i) => n + i)).toStrictEqual([1, 3, 5])
	})
	test('case 3', () => {
		expect(map([0, 1, 2], () => 40)).toStrictEqual([40, 40, 40])
	})
})
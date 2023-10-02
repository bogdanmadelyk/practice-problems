import {mergeSortedArray} from './merge-sorted-array.ts';

describe('Merge sorted array tests', () => {
	test('case 1', () => {
		let result = [1,2,3,0,0,0]
		mergeSortedArray(result, 3, [2,5,6], 3)
		expect(result).toStrictEqual([1,2,2,3,5,6])
	})
	test('case 2', () => {
		let result = [1]
		mergeSortedArray(result, 1, [], 0)
		expect(result).toStrictEqual([1])
	})
	test('case 3', () => {
		let result = [0]
		mergeSortedArray(result, 0, [1], 1)
		expect(result).toStrictEqual([1])
	})
})
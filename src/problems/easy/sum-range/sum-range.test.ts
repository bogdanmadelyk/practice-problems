import {NumArray} from './sum-range.ts';

describe('Sum range', () => {
	const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
	test('case 1', () => {
		const sum = numArray.sumRange(0, 2)
		expect(sum).toBe(1)
	})
	test('case 2', () => {
		const sum = numArray.sumRange(2, 5)
		expect(sum).toBe(-1)
	})
	test('case 3', () => {
		const sum = numArray.sumRange(0, 5)
		expect(sum).toBe(-3)
	})
})
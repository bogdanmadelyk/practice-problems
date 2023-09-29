import {minimumDifference} from './minimum-difference.ts';

describe('Minimum differences tests', () => {
	test('case 1', () => {
		expect(minimumDifference([90], 1)).toBe(0)
	})
	test('case 2', () => {
		expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2)
	})
})
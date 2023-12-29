import {plusOne} from './plus-one.ts';

describe('Plus one tests', () => {
	test('case 1', () => {
		expect(plusOne([1,2,3])).toEqual([1,2,4])
	})
	test('case 2', () => {
		expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
	})
	test('case 3', () => {
		expect(plusOne([9])).toEqual([1,0])
	})
})
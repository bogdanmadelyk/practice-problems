import {getConcatenation} from './concatenation-array.ts';

describe('Concatenation of array', () => {
	test('Case 1', () => {
		expect(getConcatenation([1,2,1])).toStrictEqual([1,2,1,1,2,1])
	})
	test('Case 2', () => {
		expect(getConcatenation([1,3,2,1])).toStrictEqual([1,3,2,1,1,3,2,1])
	})
	test('Empty array case', () => {
		expect(getConcatenation([])).toStrictEqual([])
	})
})
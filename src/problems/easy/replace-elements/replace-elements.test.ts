import {replaceElements} from './replace-elements.ts';

describe('Replace elements tests', () => {
	test('case 1', () => {
		expect(replaceElements([17,18,5,4,6,1])).toStrictEqual([18,6,6,6,1,-1])
	})
	test('Case with one element', () => {
		expect(replaceElements([400])).toStrictEqual([-1])
	})
	test('Case with empty array', () => {
		expect(replaceElements([])).toStrictEqual([])
	})
})
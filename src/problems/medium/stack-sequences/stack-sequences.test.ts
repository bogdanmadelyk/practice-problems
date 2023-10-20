import {stackSequences} from './stack-sequences.ts';

describe('Stack sequences tests', () => {
	test('true case', () => {
		expect(stackSequences([1,2,3,4,5], [4,5,3,2,1])).toBe(true)
	})
	test('false case', () => {
		expect(stackSequences([1,2,3,4,5], [4,3,5,1,2])).toBe(false)
	})
})
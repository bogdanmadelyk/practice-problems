import {isSubsequence} from './is-subsequence.ts';

describe('Is Subsequence tests', () => {
	test('True case', () => {
		expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
	})
	test('False case', () => {
		expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
	})
})
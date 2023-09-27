import {longestPrefix} from './longest-prefix.ts';

describe('Longest prefix tests', () => {
	test('case 1', () => {
		expect(longestPrefix(["flower","flow","flight"])).toBe("fl")
	})
	test('Case with one element', () => {
		expect(longestPrefix(["dog","racecar","car"])).toBe("")
	})
})
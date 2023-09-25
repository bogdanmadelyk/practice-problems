import {groupAnagrams} from './group-anagrams.ts';

describe('Group Anagrams tests', () => {
	test('true case', () => {
		expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toStrictEqual([["eat","tea","ate"], ["tan", "nat"], ["bat"]])
	})
	test('empty array', () => {
		expect(groupAnagrams([""])).toStrictEqual([[""]])
	})
	test('array with one element', () => {
		expect(groupAnagrams(["a"])).toStrictEqual([["a"]])
	})
})
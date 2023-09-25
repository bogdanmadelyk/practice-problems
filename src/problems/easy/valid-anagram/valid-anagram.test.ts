import {isAnagram} from './valid-anagram.ts';

describe('Valid Anagram tests', () => {
	test('true case', () => {
		expect(isAnagram('anagram', 'nagaram')).toBe(true);
	});
	test('false case', () => {
		expect(isAnagram('rat', 'cat')).toBe(false);
	})
	test('empty string case', () => {
		expect(isAnagram('', 's')).toBe(false)
	})
});

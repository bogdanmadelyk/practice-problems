import {isPalindrome} from './valid-palindrome.ts';

describe('Valid Anagram tests', () => {
	test('true case', () => {
		expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
	});
	test('false case', () => {
		expect(isPalindrome('race a car')).toBe(false);
	})
	test('empty string case', () => {
		expect(isPalindrome(' ')).toBe(true)
	})
});

import {wordPattern} from './word-pattern.ts';

describe('Word pattern tests', () => {
	test('case 1', () => {
		expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
	})
	test('case 2', () => {
		expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
	})
	test('case 3', () => {
		expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
	})
})
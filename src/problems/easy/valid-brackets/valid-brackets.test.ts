import {validBrackets} from './valid-brackets.ts';

describe('Valid brackets tests', () => {
	test('', () => {
		expect(validBrackets('()')).toBe(true)
	})
	test('', () => {
		expect(validBrackets('()[]{}')).toBe(true)
	})
	test('', () => {
		expect(validBrackets('(]')).toBe(false)
	})
})
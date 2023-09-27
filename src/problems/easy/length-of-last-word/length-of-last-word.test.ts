import {lengthOfLastWord} from './length-of-last-word.ts';

describe('Length of last word tests', () => {
	test('case 1', () => {
		expect(lengthOfLastWord('Hello World')).toBe(5)
	})
	test('case 2', () => {
		expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4)
	})
	test('case 3', () => {
		expect(lengthOfLastWord('luffy is still joyboy')).toBe(6)
	})
	test('empty case', () => {
		expect(lengthOfLastWord('')).toBe(0)
	})
})
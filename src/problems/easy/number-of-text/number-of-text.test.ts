import {numberOfText} from './number-of-text.ts';

describe('Number of text tests', () => {
	test('case 1', () => {
		expect(numberOfText('balloon', 'nlaebolko')).toBe(1)
	})
	test('case 2', () => {
		expect(numberOfText('balloon', 'loonbalxballpoon')).toBe(2)
	})
	test('case 3', () => {
		expect(numberOfText('balloon', 'leetcode')).toBe(0)
	})
})
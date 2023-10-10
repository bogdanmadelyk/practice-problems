import {removeStars} from './remove-stars.ts';

describe('Remove stars tests', () => {
	test('case 1', () => {
		expect(removeStars('leet**cod*e')).toBe('lecoe')
	})
	test('case 1', () => {
		expect(removeStars('erase*****')).toBe('')
	})
})
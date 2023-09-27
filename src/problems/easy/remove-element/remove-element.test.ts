import {removeElement} from './remove-element.ts';

describe('Remove element tests', () => {
	test('case 1', () => {
		expect(removeElement([3,2,2,3], 3)).toBe(2)
	})
	test('case 2', () => {
		expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5)
	})
})
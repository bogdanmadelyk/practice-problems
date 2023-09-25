import {containsDuplicate} from './contains-duplicate.ts';

describe('Contains Duplicate tests', () => {
	test('true case with 2 duplicate numbers', () => {
		expect(containsDuplicate([1,2,3,1])).toBe(true)
	})
	test('true case with many duplicate numbers', () => {
		expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
	})
	test('false case', () => {
		expect(containsDuplicate([1,2,3,4])).toBe(false)
	})
	test('empty array case', () => {
		expect(containsDuplicate([])).toBe(false)
	})
})
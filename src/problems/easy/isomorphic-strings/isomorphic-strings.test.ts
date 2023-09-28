import {isIsomorphic} from './isomorphic-strings.ts';

describe('Isomorphic strings tests', () => {
	test('case 1', () => {
		expect(isIsomorphic('egg', 'add')).toBe(true)
	})
	test('case 2', () => {
		expect(isIsomorphic('foo', 'bar')).toBe(false)
	})
	test('case 3', () => {
		expect(isIsomorphic('paper', 'title')).toBe(true)
	})
})
import {mergeAlternately} from './merge-alternately.ts';

describe('Merge alternately tests', () => {
	test('case 1', () => {
		expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr')
	})
	test('case 2', () => {
		expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs')
	})
	test('case 3', () => {
		expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd')
	})
})
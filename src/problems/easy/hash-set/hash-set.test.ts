import {MyHashSet} from './hash-set.ts';

describe('My hash set tests', () => {
	test('case 1', () => {
		const hash = new MyHashSet({})
		hash.add(1)
		expect(hash.contains(1)).toBe(true)
		hash.remove(1)
		expect(hash.contains(1)).toBe(false)
	})
})
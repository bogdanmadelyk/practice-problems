import {findDisappearedNumbers} from './disappeared-numbers.ts';

describe('Disappeared numbers', () => {
	test('case 1', () => {
		expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toStrictEqual([5, 6])
	})
	test('case 2', () => {
		expect(findDisappearedNumbers([1,1])).toStrictEqual([2])
	})
})
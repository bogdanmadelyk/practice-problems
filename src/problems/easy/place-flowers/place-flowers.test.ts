import {canPlaceFlowers} from './place-flowers.ts';

describe('Can place flowers tests', () => {
	test('true case', () => {
		expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true)
	})
	test('false case', () => {
		expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false)
	})
})
import {pascalTriangle} from './pascal-triangle.ts';

describe('Pascal triangle tests', () => {
	test('case 1', () => {
		expect(pascalTriangle(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
	})
	test('case 2', () => {
		expect(pascalTriangle(1)).toStrictEqual([[1]])
	})
})
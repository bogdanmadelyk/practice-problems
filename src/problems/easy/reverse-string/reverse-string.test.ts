import {reverseString} from './reverse-string.ts';

describe('Reverse string tests', () => {
	test('case 1', () => {
		let s = ["h","e","l","l","o"]
		reverseString(s)
		expect(s).toStrictEqual(["o","l","l","e","h"])
	})
	test('case 2', () => {
		let s = ["H","a","n","n","a","h"]
		reverseString(s)
		expect(s).toStrictEqual(["h","a","n","n","a","H"])
	})
})
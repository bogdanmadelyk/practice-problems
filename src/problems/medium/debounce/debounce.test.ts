import {debounce} from './debounce.ts';

describe('debounce tests', () => {
	test('case 1', () => {
		const start = Date.now()
		let result:any
		const debounceFunc = debounce((...inputs) => {
			return [Date.now() - start, inputs ]
		}, 50)
		setTimeout(() => {
			result = debounceFunc(1)
			expect(result).toBe(undefined)
		}, 50);
		setTimeout(() => {
			result = debounceFunc(2)
			expect(result).toBe([{"t": 125, inputs: [2]}])
		}, 75);
	})
	test('case 2', () => {
		const start = Date.now()
		let result:any
		const debounceFunc = debounce((...inputs) => {
			return [Date.now() - start, inputs ]
		}, 20)
		setTimeout(() => {
			result = debounceFunc(1)
			expect(result).toBe([{"t": 70, inputs: [1]}])
		}, 50);
		setTimeout(() => {
			result = debounceFunc(2)
			expect(result).toBe([{"t": 120, inputs: [2]}])
		}, 100);
	})
	test('case 3', () => {
		const start = Date.now()
		let result:any
		const debounceFunc = debounce((...inputs) => {
			return [Date.now() - start, inputs ]
		}, 150)
		setTimeout(() => {
			result = debounceFunc(1, 2)
			expect(result).toBe([{"t": 200, inputs: [1,2]}])
		}, 50);
		setTimeout(() => {
			result = debounceFunc(3, 4)
			expect(result).toBe(undefined)
		}, 300);
		setTimeout(() => {
			result = debounceFunc(5, 6)
			expect(result).toBe([{"t": 450, inputs: [5, 6]}])
		}, 300);
	})
})
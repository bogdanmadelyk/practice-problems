import {createCounter} from './counter.ts';

describe('Counter tests', () => {
	test('case 1', () => {
		const counter = createCounter(10)
		counter.increment()
		counter.reset()
		counter.decrement()
		counter.decrement()
		expect(counter.getValue()).toBe(8)
	})
	test('case 2', () => {
		const counter = createCounter(0)
		expect(counter.decrement()).toBe(-1)
		expect(counter.increment()).toBe(0)
	})
})
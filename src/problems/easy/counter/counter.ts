// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

type counterReturn = {
	increment: () => number,
	decrement: () => number,
	reset: () => number,
	getValue: () => number
}

export const createCounter = (init: number): counterReturn =>{
	let value = init;
	return {
		increment: () => ++init,
		decrement: () => --init,
		reset: () => init = value,
		getValue: () => init
	}
};
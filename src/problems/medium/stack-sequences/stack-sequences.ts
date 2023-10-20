// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

export const stackSequences = (pushed: number[], popped: number[]): boolean => {
	let stack: number[] = [], p = 0
	for(let i = 0; i < pushed.length + 1; i++) {
		if(stack.length && stack[stack.length - 1] === popped[p]) {
			stack.pop()
			p++
			i--
		}
		else if(i < pushed.length) {
			stack.push(pushed[i])
		}
	}
	return !stack.length
};
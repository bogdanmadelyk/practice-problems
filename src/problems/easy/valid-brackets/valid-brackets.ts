export const validBrackets = (s: string): boolean => {
	const openBrackets = ['(', '[', '{']
	const brackets: {[key: string]: string} = {
		')': '(',
		'}': '{',
		']': '[',
	}
	let stack = []

	for(let i = 0; i < s.length; i++) {
		if(openBrackets.includes(s[i])) {
			stack.push(s[i])
		}
		else if(stack.pop() !== brackets[s[i]]){
			return false
		}
	}
	return !stack.length
}
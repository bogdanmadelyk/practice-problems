// You are given a string s, which contains stars *.
//
// In one operation, you can:
//
// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.
//
// Note:
//
// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

export const removeStars = (s: string): string => {
	let stack = []
	for(let i = 0; i < s.length; i++) {
		if(s[i] !== '*') {
			stack.push(s[i])
		} else {
			stack.pop()
		}
	}
	return stack.join('')
}
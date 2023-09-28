// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

export const isPalindrome = (s: string): boolean => {
	s = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
	let left = 0, right = s.length - 1
	while (left < right) {
		if(s[left] !== s[right]) {
			return false
		}
		left++
		right--
	}
	return true
}
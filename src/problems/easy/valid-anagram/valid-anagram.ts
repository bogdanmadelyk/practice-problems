// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

export const isAnagram = (s: string, t: string): boolean => {
	return s.split('').sort().join('') === t.split('').sort().join('')
};
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

export const groupAnagrams = (strs: string[]): string[][] => {
	let map = new Map()

	const getSortedStr = (s: string) => s.split('').sort().join('')

	for (let i = 0; i < strs.length; i++) {
		const str = getSortedStr(strs[i])
		map.set(str, [...(map.get(str) || []),  strs[i]])
	}

	return [...map.values()]
};
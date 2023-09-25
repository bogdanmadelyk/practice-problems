export const groupAnagrams = (strs: string[]): string[][] => {
	let map = new Map()

	const getSortedStr = (s: string) => s.split('').sort().join('')

	for (let i = 0; i < strs.length; i++) {
		const str = getSortedStr(strs[i])
		map.set(str, [...(map.get(str) || []),  strs[i]])
	}

	console.log(...map.values())
	return [...map.values()]
};
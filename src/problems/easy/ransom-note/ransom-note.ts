// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
	let map = new Map()

	for(let i = 0; i < ransomNote.length; i++) {
		if(map.has(ransomNote[i])) {
			map.set(ransomNote[i], map.get(ransomNote[i]) + 1)
		} else {
			map.set(ransomNote[i], 1)
		}
	}
	for(let i = 0; i < magazine.length; i++) {
		if(map.has(magazine[i])) {
			if(map.get(magazine[i]) === 1) {
				map.delete(magazine[i])
			} else {
				map.set(magazine[i], map.get(magazine[i]) - 1)
			}
		}
	}


	return map.size === 0
};
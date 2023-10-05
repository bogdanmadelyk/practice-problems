// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

export const wordPattern = (pattern: string, s: string): boolean => {
	let patternMap = new Map(), sMap = new Map(), splitS = s.split(' ')
	if(pattern.length !== splitS.length) {
		return false
	}
	for(let i = 0; i < pattern.length; i++) {
		patternMap.set(pattern[i], i)
		sMap.set(splitS[i], i)
	}
	for(let i = 0; i < pattern.length; i++) {
		if(patternMap.get(pattern[i]) !== sMap.get(splitS[i])) {
			return false
		}
	}

	return true
}
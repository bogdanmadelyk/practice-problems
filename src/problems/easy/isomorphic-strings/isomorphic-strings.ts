// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

export const isIsomorphic = (s: string, t: string): boolean => {
	if(s.length !== t.length) {
		return false;
	}

	let obj:Record<string, string> = {}
	for (let i = 0; i < s.length; i++) {
		if(obj[s[i]] && obj[s[i]] !== t[i] || !obj[s[i]] && Object.values(obj).includes(t[i])) {
			return false
		}
		obj[s[i]] = t[i]
	}

	return true
}
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

export const lengthOfLastWord = (s: string): number => {
	let count = 0,
		i = s.length;
	while (i--) {
		if(s[i] === ' ') {
			if(count === 0) {
				continue;
			}
			else {
				break;
			}
		}
		else {
			count++;
		}
	}

	return count;
}
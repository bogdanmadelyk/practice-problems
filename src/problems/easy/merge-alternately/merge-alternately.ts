// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

export const mergeAlternately = (word1: string, word2: string): string => {
	let result = '', counter = 0;
	while(word1[counter] || word2[counter]) {
		if(word1[counter]) {
			result += word1[counter]
		}
		if(word2[counter]) {
			result += word2[counter]
		}
		counter++;
	}
	return result;
};
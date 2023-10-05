// Given a string text, you want to use the characters of text to form as many instances of the word as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

export const numberOfText = (word: string, text: string): number => {
	let count = 0, state = false
	while(!state) {
		for(let i = 0; i < word.length; i++) {
			if(text.search(word[i]) === -1) {
				state = true
				return count
			}
			else {
				text = text.slice(0, text.search(word[i])) + text.slice(text.search(word[i]) + 1)
			}
		}
		count++
	}
	return count
}
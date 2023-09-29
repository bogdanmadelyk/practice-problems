export const reverseString = (s: string[]):void => {
	let start = 0, end = s.length - 1;
	while (start < end) {
		let temp = s[start]
		s[start] = s[end]
		s[end] = temp
		start++
		end--
	}
}

export const reverseString2 = (s: string[]):void => {
	const copyS = [...s];
	for(let i = s.length - 1, j = 0; i >= 0; i--, j++) {
		s[j] = copyS[i]
	}
}
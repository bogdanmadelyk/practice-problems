export const longestPrefix = (strs: string[]): string => {
	let str = ''
	for (let i = 0; i < strs[0].length; i++) {
		if(strs.every(word => word[i] === strs[0][i])) {
			str += strs[0][i]
		}
		else {
			break
		}
	}

	return str;
};
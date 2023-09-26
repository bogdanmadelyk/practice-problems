export const getConcatenation2 = (nums: number[]): number[] => {
	return [...nums, ...nums]
};

export const getConcatenation = (nums: number[]): number[] => {
	let result = []
	let shift = 0
	for (let i = 0; i < nums.length * 2; i++) {
		if(i === nums.length) {
			shift = nums.length
		}
		result.push(nums[i - shift])
	}
	return result
}
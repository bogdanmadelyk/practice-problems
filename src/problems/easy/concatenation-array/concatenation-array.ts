// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

export const getConcatenation = (nums: number[]): number[] => {
	return [...nums, ...nums]
};

export const getConcatenation2 = (nums: number[]): number[] => {
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
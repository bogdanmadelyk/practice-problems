// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

export const findDisappearedNumbers = (nums: number[]): number[] => {
	const set = new Set(nums)
	let result = []
	for (let i = 0; i < nums.length; i++) {
		if(!set.has(i+1)) {
			result.push(i+1)
		}
	}
	return result
}